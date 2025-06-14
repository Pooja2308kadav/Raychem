// import { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axiosInstance from '../../utils/axiosInstance';
// import { FaTimes, FaEdit, FaTrash } from 'react-icons/fa';

// const ViewProduct = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [isImageModalOpen, setIsImageModalOpen] = useState(false);
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [selectedProductName, setSelectedProductName] = useState('');
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editProduct, setEditProduct] = useState(null);
//   const [formData, setFormData] = useState({ name: '', description: '', categoryId: '', subcategoryId: '', brandId: '' });
//   const [newImages, setNewImages] = useState([]); // New images to upload
//   const [imagePreviews, setImagePreviews] = useState([]); // All previews (existing + new)
//   const [existingImages, setExistingImages] = useState([]); // Track existing image paths
//   const [categories, setCategories] = useState([]);
//   const [subcategories, setSubcategories] = useState([]);
//   const [brands, setBrands] = useState([]);

//   // Fetch products, categories, subcategories, and brands on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [productsRes, categoriesRes, subcategoriesRes, brandsRes] = await Promise.all([
//           axiosInstance.get('/products'),
//           axiosInstance.get('/categories'),
//           axiosInstance.get('/subcategories'),
//           axiosInstance.get('/brands'),
//         ]);
//         setProducts(productsRes.data);
//         setCategories(categoriesRes.data);
//         setSubcategories(subcategoriesRes.data);
//         setBrands(brandsRes.data);
//       } catch (err) {
//         setError('Failed to load data');
//         console.error('Error fetching data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle delete product
//   const handleDelete = async (productId) => {
//     if (!window.confirm('Are you sure you want to delete this product?')) return;

//     try {
//       await axiosInstance.delete(`/products/${productId}`);
//       setProducts(products.filter(product => product._id !== productId));
//       setSuccess('Product deleted successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to delete product');
//       console.error('Error deleting product:', err);
//       setTimeout(() => setError(''), 3000);
//     }
//   };

//   // Open edit modal with error handling for null references
//   const openEditModal = (product) => {
//     setEditProduct(product);
//     setFormData({
//       name: product.name,
//       description: product.description || '',
//       categoryId: product.categoryId?._id || '',
//       subcategoryId: product.subcategoryId?._id || '',
//       brandId: product.brandId?._id || '',
//     });
//     const existingImageUrls = product.imagePaths?.map(path => `http://localhost:3000/${path}`) || [];
//     setExistingImages(product.imagePaths || []);
//     setImagePreviews(existingImageUrls);
//     setNewImages([]);
//     setIsEditModalOpen(true);
//   };

//   // Handle form changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle new image uploads
//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     const totalImages = imagePreviews.length + files.length;

//     if (totalImages > 5) {
//       setError('You can upload a maximum of 5 images');
//       return;
//     }

//     setNewImages(prev => [...prev, ...files]);
//     const previews = files.map(file => URL.createObjectURL(file));
//     setImagePreviews(prev => [...prev, ...previews]);
//   };

//   // Remove an image from the preview
//   const removeImage = (index) => {
//     const removedImage = imagePreviews[index];
//     setImagePreviews(prev => prev.filter((_, i) => i !== index));

//     // If the removed image is an existing one, remove it from existingImages
//     const removedImagePath = removedImage.startsWith('http://localhost:3000/')
//       ? removedImage.replace('http://localhost:3000/', '')
//       : null;
//     if (removedImagePath) {
//       setExistingImages(prev => prev.filter(path => path !== removedImagePath));
//     } else {
//       // If the removed image is a new one, remove it from newImages
//       const newImageIndex = imagePreviews.length - newImages.length + index;
//       setNewImages(prev => prev.filter((_, i) => i !== newImageIndex));
//     }
//   };

//   // Handle edit product submission
//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       data.append('name', formData.name);
//       data.append('description', formData.description);
//       if (formData.categoryId) data.append('categoryId', formData.categoryId);
//       if (formData.subcategoryId) data.append('subcategoryId', formData.subcategoryId);
//       if (formData.brandId) data.append('brandId', formData.brandId);

//       // Send remaining existing image paths
//       data.append('existingImages', JSON.stringify(existingImages));

//       // Append new images
//       newImages.forEach(image => data.append('images', image));

//       const response = await axiosInstance.put(`/products/${editProduct._id}`, data, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       setProducts(products.map(product => (product._id === editProduct._id ? response.data : product)));
//       setSuccess('Product updated successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//       setIsEditModalOpen(false);
//       setEditProduct(null);
//       setNewImages([]);
//       setImagePreviews([]);
//       setExistingImages([]);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to update product');
//       console.error('Error updating product:', err);
//       setTimeout(() => setError(''), 3000);
//     }
//   };

//   // Close edit modal
//   const closeEditModal = () => {
//     setIsEditModalOpen(false);
//     setEditProduct(null);
//     setNewImages([]);
//     setImagePreviews([]);
//     setExistingImages([]);
//   };

//   // Open image popup
//   const openImageModal = (imagePaths, productName) => {
//     setSelectedImages(imagePaths?.map(path => `http://localhost:3000/${path}`) || []);
//     setSelectedProductName(productName);
//     setIsImageModalOpen(true);
//   };

//   // Close image popup
//   const closeImageModal = () => {
//     setIsImageModalOpen(false);
//     setSelectedImages([]);
//     setSelectedProductName('');
//   };

//   if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
//   if (error) return <ErrorMessage>{error}</ErrorMessage>;

//   return (
//     <Container>
//       <Title>View Products</Title>
//       {success && <SuccessMessage>{success}</SuccessMessage>}
//       {products.length === 0 ? (
//         <NoDataMessage>No products found.</NoDataMessage>
//       ) : (
//         <TableWrapper>
//           <StyledTable>
//             <thead>
//               <tr>
//                 <Th>#</Th>
//                 <Th>Name</Th>
//                 <Th>Category</Th>
//                 <Th>Subcategory</Th>
//                 <Th>Brand</Th>
//                 <Th>Images</Th>
//                 <Th>Actions</Th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product, index) => (
//                 <Tr key={product._id}>
//                   <Td>{index + 1}</Td>
//                   <Td>{product.name}</Td>
//                   <Td>{product.categoryId?.name || <WarningText>Invalid Category</WarningText>}</Td>
//                   <Td>{product.subcategoryId?.name || <WarningText>Invalid Subcategory</WarningText>}</Td>
//                   <Td>{product.brandId?.name || <WarningText>Invalid Brand</WarningText>}</Td>
//                   <Td>
//                     {product.imagePaths?.length > 0 ? (
//                       <ImageThumbnail
//                         src={`http://localhost:3000/${product.imagePaths[0]}`}
//                         alt={product.name}
//                         onClick={() => openImageModal(product.imagePaths, product.name)}
//                         onError={() => console.log(`Failed to load image for ${product.name}`)}
//                       />
//                     ) : (
//                       <NoImageText>No Images</NoImageText>
//                     )}
//                   </Td>
//                   <Td>
//                     <ActionButton onClick={() => openEditModal(product)}>
//                       <FaEdit /> Edit
//                     </ActionButton>
//                     <ActionButton delete onClick={() => handleDelete(product._id)}>
//                       <FaTrash /> Delete
//                     </ActionButton>
//                   </Td>
//                 </Tr>
//               ))}
//             </tbody>
//           </StyledTable>
//         </TableWrapper>
//       )}

//       {/* Edit Modal */}
//       {isEditModalOpen && (
//         <ModalOverlay>
//           <ModalContent>
//             <ModalHeader>
//               <ModalTitle>Edit Product</ModalTitle>
//               <CloseButton onClick={closeEditModal}>
//                 <FaTimes />
//               </CloseButton>
//             </ModalHeader>
//             <ModalForm onSubmit={handleEditSubmit}>
//               <FormGroup>
//                 <Label htmlFor="name">Product Name</Label>
//                 <Input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label htmlFor="categoryId">Category</Label>
//                 <Select
//                   id="categoryId"
//                   name="categoryId"
//                   value={formData.categoryId}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Category</option>
//                   {categories.map(category => (
//                     <option key={category._id} value={category._id}>
//                       {category.name}
//                     </option>
//                   ))}
//                 </Select>
//               </FormGroup>
//               <FormGroup>
//                 <Label htmlFor="subcategoryId">Subcategory</Label>
//                 <Select
//                   id="subcategoryId"
//                   name="subcategoryId"
//                   value={formData.subcategoryId}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Subcategory</option>
//                   {subcategories.map(subcategory => (
//                     <option key={subcategory._id} value={subcategory._id}>
//                       {subcategory.name}
//                     </option>
//                   ))}
//                 </Select>
//               </FormGroup>
//               <FormGroup>
//                 <Label htmlFor="brandId">Brand</Label>
//                 <Select
//                   id="brandId"
//                   name="brandId"
//                   value={formData.brandId}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Brand</option>
//                   {brands.map(brand => (
//                     <option key={brand._id} value={brand._id}>
//                       {brand.name}
//                     </option>
//                   ))}
//                 </Select>
//               </FormGroup>
//               <FormGroup>
//                 <Label htmlFor="description">Description (Optional)</Label>
//                 <Textarea
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label htmlFor="images">Product Images (Up to 5)</Label>
//                 <Input
//                   type="file"
//                   id="images"
//                   name="images"
//                   accept="image/jpeg,image/jpg,image/png"
//                   multiple
//                   onChange={handleImageChange}
//                 />
//                 {imagePreviews.length > 0 && (
//                   <ImagePreviewContainer>
//                     {imagePreviews.map((preview, index) => (
//                       <ImagePreviewWrapper key={index}>
//                         <ImagePreview>
//                           <img src={preview} alt={`Preview ${index + 1}`} />
//                         </ImagePreview>
//                         <RemoveButton onClick={() => removeImage(index)}>
//                           <FaTimes /> Remove
//                         </RemoveButton>
//                       </ImagePreviewWrapper>
//                     ))}
//                   </ImagePreviewContainer>
//                 )}
//               </FormGroup>
//               <SubmitButton type="submit">Update Product</SubmitButton>
//             </ModalForm>
//           </ModalContent>
//         </ModalOverlay>
//       )}

//       {/* Image Popup Modal */}
//       {isImageModalOpen && (
//         <ImageModalOverlay onClick={closeImageModal}>
//           <ImageModalContent onClick={e => e.stopPropagation()}>
//             <ImageModalHeader>
//               <ImageModalTitle>{selectedProductName}</ImageModalTitle>
//               <CloseButton onClick={closeImageModal}>
//                 <FaTimes />
//               </CloseButton>
//             </ImageModalHeader>
//             <ImageGallery>
//               {selectedImages.map((image, index) => (
//                 <LargeImage
//                   key={index}
//                   src={image}
//                   alt={`${selectedProductName} ${index + 1}`}
//                 />
//               ))}
//             </ImageGallery>
//           </ImageModalContent>
//         </ImageModalOverlay>
//       )}
//     </Container>
//   );
// };

// // Styled Components
// const Container = styled.div`
//   padding: 30px;
//   background-color: #f9fafb;
//   min-height: 100vh;
// `;

// const Title = styled.h1`
//   font-size: 1.8rem;
//   color: #1a202c;
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const TableWrapper = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   border-radius: 10px;
//   overflow: hidden;
// `;

// const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   background-color: #ffffff;
// `;

// const Th = styled.th`
//   padding: 15px 20px;
//   text-align: left;
//   background-color: #2d3748;
//   color: #ffffff;
//   font-weight: 600;
//   font-size: 1rem;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   border-bottom: 2px solid #e2e8f0;

//   &:first-child {
//     width: 60px;
//     text-align: center;
//   }

//   &:nth-child(6) {
//     text-align: center;
//   }

//   &:last-child {
//     text-align: center;
//     width: 150px;
//   }
// `;

// const Tr = styled.tr`
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #f1f5f9;
//   }

//   &:nth-child(even) {
//     background-color: #f7fafc;
//   }
// `;

// const Td = styled.td`
//   padding: 15px 20px;
//   font-size: 0.95rem;
//   color: #4a5568;
//   border-bottom: 1px solid #edf2f7;

//   &:first-child {
//     text-align: center;
//     font-weight: 500;
//   }

//   &:nth-child(6) {
//     text-align: center;
//   }

//   &:last-child {
//     text-align: center;
//   }
// `;

// const ImageThumbnail = styled.img`
//   width: 80px;
//   height: 80px;
//   object-fit: contain;
//   border-radius: 6px;
//   border: 1px solid #e2e8f0;
//   cursor: pointer;
//   transition: transform 0.2s ease;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// const NoImageText = styled.span`
//   color: #a0aec0;
//   font-style: italic;
// `;

// const WarningText = styled.span`
//   color: #e53e3e;
//   font-style: italic;
// `;

// const ActionButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 5px;
//   padding: 8px 12px;
//   margin: 0 5px;
//   border: none;
//   border-radius: 4px;
//   font-size: 0.9rem;
//   cursor: pointer;
//   transition: background 0.3s;

//   background-color: ${props => (props.delete ? '#e53e3e' : '#2d3748')};
//   color: #fff;

//   &:hover {
//     background-color: ${props => (props.delete ? '#c53030' : '#4a5568')};
//   }
// `;

// const LoadingMessage = styled.p`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #4a5568;
//   margin-top: 50px;
// `;

// const ErrorMessage = styled.p`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #e53e3e;
//   margin-top: 50px;
// `;

// const SuccessMessage = styled.p`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #38a169;
//   margin-top: 20px;
// `;

// const NoDataMessage = styled.p`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #4a5568;
//   margin-top: 50px;
// `;

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   width: 100%;
//   max-width: 600px;
//   max-height: 80vh;
//   overflow-y: auto;
// `;

// const ModalHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ModalTitle = styled.h2`
//   font-size: 1.5rem;
//   color: #2d3748;
//   margin: 0;
// `;

// const CloseButton = styled.button`
//   background: none;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
//   color: #4a5568;

//   &:hover {
//     color: #e53e3e;
//   }
// `;

// const ModalForm = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   display: block;
//   font-size: 1rem;
//   color: #2d3748;
//   margin-bottom: 8px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #e2e8f0;
//   border-radius: 4px;
//   font-size: 1rem;
//   &:focus {
//     outline: none;
//     border-color: #4a5568;
//   }
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #e2e8f0;
//   border-radius: 4px;
//   font-size: 1rem;
//   &:focus {
//     outline: none;
//     border-color: #4a5568;
//   }
// `;

// const Textarea = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #e2e8f0;
//   border-radius: 4px;
//   font-size: 1rem;
//   min-height: 100px;
//   resize: vertical;
//   &:focus {
//     outline: none;
//     border-color: #4a5568;
//   }
// `;

// const ImagePreviewContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-top: 10px;
// `;

// const ImagePreviewWrapper = styled.div`
//   position: relative;
// `;

// const ImagePreview = styled.div`
//   img {
//     width: 100px;
//     height: 100px;
//     object-fit: contain;
//     border-radius: 4px;
//     border: 1px solid #e2e8f0;
//   }
// `;

// const RemoveButton = styled.button`
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   padding: 5px 8px;
//   background-color: #e53e3e;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   font-size: 0.8rem;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     background-color: #c53030;
//   }
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 12px;
//   background-color: #2d3748;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     background-color: #4a5568;
//   }
// `;

// const ImageModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.8);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ImageModalContent = styled.div`
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   max-width: 90%;
//   max-height: 90vh;
//   overflow-y: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const ImageModalHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 15px;
// `;

// const ImageModalTitle = styled.h3`
//   font-size: 1.2rem;
//   color: #2d3748;
//   margin: 0;
// `;

// const ImageGallery = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 15px;
//   justify-content: center;
// `;

// const LargeImage = styled.img`
//   width: 200px;
//   height: 200px;
//   object-fit: contain;
//   border-radius: 6px;
//   border: 1px solid #e2e8f0;
// `;

// export default ViewProduct;





import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';
import { FaTimes, FaEdit, FaTrash } from 'react-icons/fa';

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedProductName, setSelectedProductName] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '', shortDescription: '', categoryId: '', subcategoryId: '', brandId: '', keyFeatures: '' });
  const [specifications, setSpecifications] = useState([{ key: '', value: '' }]);
  const [newImages, setNewImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [datasheet, setDatasheet] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [brands, setBrands] = useState([]);

  // Fetch products, categories, subcategories, and brands on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes, subcategoriesRes, brandsRes] = await Promise.all([
          axiosInstance.get('/products'),
          axiosInstance.get('/categories'),
          axiosInstance.get('/subcategories'),
          axiosInstance.get('/brands'),
        ]);
        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
        setSubcategories(subcategoriesRes.data);
        setBrands(brandsRes.data);
      } catch (err) {
        setError('Failed to load data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle delete product
  const handleDelete = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axiosInstance.delete(`/products/${productId}`);
      setProducts(products.filter(product => product._id !== productId));
      setSuccess('Product deleted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete product');
      console.error('Error deleting product:', err);
      setTimeout(() => setError(''), 3000);
    }
  };

  // Open edit modal
  const openEditModal = (product) => {
    setEditProduct(product);
    setFormData({
      name: product.name,
      description: product.description || '',
      shortDescription: product.shortDescription || '',
      categoryId: product.categoryId?._id || '',
      subcategoryId: product.subcategoryId?._id || '',
      brandId: product.brandId?._id || '',
      keyFeatures: product.keyFeatures?.join(', ') || '',
    });
    const existingImageUrls = product.imagePaths?.map(path => `http://localhost:3000/${path}`) || [];
    setExistingImages(product.imagePaths || []);
    setImagePreviews(existingImageUrls);
    setNewImages([]);
    setDatasheet(null);
    setSpecifications(
      product.specifications
        ? Object.entries(product.specifications).map(([key, value]) => ({ key, value }))
        : [{ key: '', value: '' }]
    );
    setIsEditModalOpen(true);
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle specifications change
  const handleSpecChange = (index, field, value) => {
    const newSpecs = [...specifications];
    newSpecs[index][field] = value;
    setSpecifications(newSpecs);
  };

  // Add new specification field
  const addSpecField = () => {
    setSpecifications([...specifications, { key: '', value: '' }]);
  };

  // Remove specification field
  const removeSpecField = (index) => {
    setSpecifications(specifications.filter((_, i) => i !== index));
  };

  // Handle new image uploads
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const totalImages = imagePreviews.length + files.length;

    if (totalImages > 5) {
      setError('You can upload a maximum of 5 images');
      return;
    }

    setNewImages(prev => [...prev, ...files]);
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(prev => [...prev, ...previews]);
  };

  // Handle datasheet upload
  const handleDatasheetChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDatasheet(file);
    }
  };

  // Remove an image from the preview
  const removeImage = (index) => {
    const removedImage = imagePreviews[index];
    setImagePreviews(prev => prev.filter((_, i) => i !== index));

    const removedImagePath = removedImage.startsWith('http://localhost:3000/')
      ? removedImage.replace('http://localhost:3000/', '')
      : null;
    if (removedImagePath) {
      setExistingImages(prev => prev.filter(path => path !== removedImagePath));
    } else {
      const newImageIndex = imagePreviews.length - newImages.length + index;
      setNewImages(prev => prev.filter((_, i) => i !== newImageIndex));
    }
  };

  // Handle edit product submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('shortDescription', formData.shortDescription);
      if (formData.categoryId) data.append('categoryId', formData.categoryId);
      if (formData.subcategoryId) data.append('subcategoryId', formData.subcategoryId);
      if (formData.brandId) data.append('brandId', formData.brandId);
      data.append('keyFeatures', JSON.stringify(formData.keyFeatures.split(',').map(f => f.trim()).filter(f => f)));
      data.append('specifications', JSON.stringify(Object.fromEntries(specifications.filter(spec => spec.key && spec.value).map(spec => [spec.key, spec.value]))));
      data.append('imagesToKeep', JSON.stringify(existingImages));
      newImages.forEach(image => data.append('images', image));
      if (datasheet) {
        data.append('datasheet', datasheet);
      }

      const response = await axiosInstance.put(`/products/${editProduct._id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setProducts(products.map(product => (product._id === editProduct._id ? response.data : product)));
      setSuccess('Product updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      setIsEditModalOpen(false);
      setEditProduct(null);
      setNewImages([]);
      setImagePreviews([]);
      setExistingImages([]);
      setDatasheet(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update product');
      console.error('Error updating product:', err);
      setTimeout(() => setError(''), 3000);
    }
  };

  // Close edit modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditProduct(null);
    setNewImages([]);
    setImagePreviews([]);
    setExistingImages([]);
    setDatasheet(null);
  };

  // Open image popup
  const openImageModal = (imagePaths, productName) => {
    setSelectedImages(imagePaths?.map(path => `http://localhost:3000/${path}`) || []);
    setSelectedProductName(productName);
    setIsImageModalOpen(true);
  };

  // Close image popup
  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImages([]);
    setSelectedProductName('');
  };

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <Container>
      <Title>View Products</Title>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {products.length === 0 ? (
        <NoDataMessage>No products found.</NoDataMessage>
      ) : (
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>Subcategory</Th>
                <Th>Brand</Th>
                <Th>Images</Th>
                <Th>Key Features</Th>
                <Th>Datasheet</Th>
                <Th>Specifications</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <Tr key={product._id}>
                  <Td>{index + 1}</Td>
                  <Td>{product.name}</Td>
                  <Td>{product.categoryId?.name || <WarningText>Invalid Category</WarningText>}</Td>
                  <Td>{product.subcategoryId?.name || <WarningText>Invalid Subcategory</WarningText>}</Td>
                  <Td>{product.brandId?.name || <WarningText>Invalid Brand</WarningText>}</Td>
                  <Td>
                    {product.imagePaths?.length > 0 ? (
                      <ImageThumbnail
                        src={`http://localhost:3000/${product.imagePaths[0]}`}
                        alt={product.name}
                        onClick={() => openImageModal(product.imagePaths, product.name)}
                        onError={() => console.log(`Failed to load image for ${product.name}`)}
                      />
                    ) : (
                      <NoImageText>No Images</NoImageText>
                    )}
                  </Td>
                  <Td>{product.keyFeatures?.join(', ') || <NoImageText>No Features</NoImageText>}</Td>
                  <Td>
                    {product.datasheet ? (
                      <a href={`http://localhost:3000/${product.datasheet}`} target="_blank" rel="noopener noreferrer">
                        View Datasheet
                      </a>
                    ) : (
                      <NoImageText>No Datasheet</NoImageText>
                    )}
                  </Td>
                  <Td>
                    {product.specifications && Object.keys(product.specifications).length > 0 ? (
                      <SpecList>
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <li key={key}>{`${key}: ${value}`}</li>
                        ))}
                      </SpecList>
                    ) : (
                      <NoImageText>No Specifications</NoImageText>
                    )}
                  </Td>
                  <Td>
                    <ActionButton onClick={() => openEditModal(product)}>
                      <FaEdit /> Edit
                    </ActionButton>
                    <ActionButton delete onClick={() => handleDelete(product._id)}>
                      <FaTrash /> Delete
                    </ActionButton>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </StyledTable>
        </TableWrapper>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Product</ModalTitle>
              <CloseButton onClick={closeEditModal}>
                <FaTimes />
              </CloseButton>
            </ModalHeader>
            <ModalForm onSubmit={handleEditSubmit}>
              <FormGroup>
                <Label htmlFor="name">Product Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="shortDescription">Short Description</Label>
                <Textarea
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="categoryId">Category</Label>
                <Select
                  id="categoryId"
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="subcategoryId">Subcategory</Label>
                <Select
                  id="subcategoryId"
                  name="subcategoryId"
                  value={formData.subcategoryId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Subcategory</option>
                  {subcategories.map(subcategory => (
                    <option key={subcategory._id} value={subcategory._id}>
                      {subcategory.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="brandId">Brand</Label>
                <Select
                  id="brandId"
                  name="brandId"
                  value={formData.brandId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Brand</option>
                  {brands.map(brand => (
                    <option key={brand._id} value={brand._id}>
                      {brand.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="keyFeatures">Key Features (Comma-separated)</Label>
                <Textarea
                  id="keyFeatures"
                  name="keyFeatures"
                  value={formData.keyFeatures}
                  onChange={handleChange}
                  placeholder="e.g., Durable material, High performance, Easy to install"
                />
              </FormGroup>
              <FormGroup>
                <Label>Specifications</Label>
                {specifications.map((spec, index) => (
                  <SpecRow key={index}>
                    <Input
                      type="text"
                      placeholder="Key (e.g., Material)"
                      value={spec.key}
                      onChange={(e) => handleSpecChange(index, 'key', e.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Value (e.g., High-grade polymer)"
                      value={spec.value}
                      onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
                    />
                    {specifications.length > 1 && (
                      <RemoveSpecButton type="button" onClick={() => removeSpecField(index)}>
                        <FaTimes />
                      </RemoveSpecButton>
                    )}
                  </SpecRow>
                ))}
                <AddSpecButton type="button" onClick={addSpecField}>
                  Add Specification
                </AddSpecButton>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="images">Product Images (Up to 5)</Label>
                <Input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/jpeg,image/jpg,image/png"
                  multiple
                  onChange={handleImageChange}
                />
                {imagePreviews.length > 0 && (
                  <ImagePreviewContainer>
                    {imagePreviews.map((preview, index) => (
                      <ImagePreviewWrapper key={index}>
                        <ImagePreview>
                          <img src={preview} alt={`Preview ${index + 1}`} />
                        </ImagePreview>
                        <RemoveButton onClick={() => removeImage(index)}>
                          <FaTimes /> Remove
                        </RemoveButton>
                      </ImagePreviewWrapper>
                    ))}
                  </ImagePreviewContainer>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="datasheet">Datasheet (PDF)</Label>
                <Input
                  type="file"
                  id="datasheet"
                  name="datasheet"
                  accept="application/pdf"
                  onChange={handleDatasheetChange}
                />
                {editProduct?.datasheet && (
                  <p>Current Datasheet: <a href={`http://localhost:3000/${editProduct.datasheet}`} target="_blank" rel="noopener noreferrer">View</a></p>
                )}
              </FormGroup>
              <SubmitButton type="submit">Update Product</SubmitButton>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Image Popup Modal */}
      {isImageModalOpen && (
        <ImageModalOverlay onClick={closeImageModal}>
          <ImageModalContent onClick={e => e.stopPropagation()}>
            <ImageModalHeader>
              <ImageModalTitle>{selectedProductName}</ImageModalTitle>
              <CloseButton onClick={closeImageModal}>
                <FaTimes />
              </CloseButton>
            </ImageModalHeader>
            <ImageGallery>
              {selectedImages.map((image, index) => (
                <LargeImage
                  key={index}
                  src={image}
                  alt={`${selectedProductName} ${index + 1}`}
                />
              ))}
            </ImageGallery>
          </ImageModalContent>
        </ImageModalOverlay>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 30px;
  background-color: #f9fafb;
  min-height: 100vh;

`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #1a202c;
  margin-bottom: 20px;
  text-align: center;
`;

const TableWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: scroll;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse knuckles;
  background-color: #ffffff;
`;

const Th = styled.th`
  padding: 15px 20px;
  text-align: left;
  background-color: #2d3748;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #e2e8f0;

  &:first-child {
    width: 60px;
    text-align: center;
  }

  &:nth-child(6) {
    text-align: center;
  }

  &:last-child {
    text-align: center;
    width: 150px;
  }
`;

const Tr = styled.tr`
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f5f9;
  }

  &:nth-child(even) {
    background-color: #f7fafc;
  }
`;

const Td = styled.td`
  padding: 15px 20px;
  font-size: 0.95rem;
  color: #4a5568;
  border-bottom: 1px solid #edf2f7;

  &:first-child {
    text-align: center;
    font-weight: 500;
  }

  &:nth-child(6) {
    text-align: center;
  }

  &:last-child {
    text-align: center;
  }
`;

const ImageThumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const NoImageText = styled.span`
  color: #a0aec0;
  font-style: italic;
`;

const WarningText = styled.span`
  color: #e53e3e;
  font-style: italic;
`;

const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s;

  background-color: ${props => (props.delete ? '#e53e3e' : '#2d3748')};
  color: #fff;

  &:hover {
    background-color: ${props => (props.delete ? '#c53030' : '#4a5568')};
  }
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #4a5568;
  margin-top: 50px;
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #e53e3e;
  margin-top: 50px;
`;

const SuccessMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #38a169;
  margin-top: 20px;
`;

const NoDataMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #4a5568;
  margin-top: 50px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #2d3748;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4a5568;

  &:hover {
    color: #e53e3e;
  }
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #2d3748;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #4a5568;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #4a5568;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #4a5568;
  }
`;

const SpecRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const RemoveSpecButton = styled.button`
  padding: 10px;
  background-color: #e53e3e;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #c53030;
  }
`;

const AddSpecButton = styled.button`
  padding: 10px;
  background-color: #2d3748;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #4a5568;
  }
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const ImagePreviewWrapper = styled.div`
  position: relative;
`;

const ImagePreview = styled.div`
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 4px;
    border: 1px solid #e2e8f0;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  background-color: #e53e3e;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #c53030;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #2d3748;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #4a5568;
  }
`;

const ImageModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const ImageModalTitle = styled.h3`
  font-size: 1.2rem;
  color: #2d3748;
  margin: 0;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const LargeImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
`;

const SpecList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 100px;
  overflow-y: auto;
`;

export default ViewProduct;