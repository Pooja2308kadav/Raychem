// import { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axiosInstance from '../../utils/axiosInstance';
// import { FaTimes } from 'react-icons/fa';

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     categoryId: '',
//     subcategoryId: '',
//     brandId: '',
//   });
//   const [images, setImages] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [subcategories, setSubcategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // Fetch categories, subcategories, and brands on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [categoriesRes, subcategoriesRes, brandsRes] = await Promise.all([
//           axiosInstance.get('/categories'),
//           axiosInstance.get('/subcategories'),
//           axiosInstance.get('/brands'),
//         ]);
//         setCategories(categoriesRes.data);
//         setSubcategories(subcategoriesRes.data);
//         setBrands(brandsRes.data);
//       } catch (err) {
//         setError('Failed to load categories, subcategories, or brands');
//         console.error('Error fetching data:', err);
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle multiple image uploads
//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     const totalImages = images.length + files.length;

//     if (totalImages > 5) {
//       setError('You can upload a maximum of 5 images');
//       return;
//     }

//     setImages(prev => [...prev, ...files]);
//     const previews = files.map(file => URL.createObjectURL(file));
//     setImagePreviews(prev => [...prev, ...previews]);
//   };

//   // Remove an image from the preview
//   const removeImage = (index) => {
//     setImages(prev => prev.filter((_, i) => i !== index));
//     setImagePreviews(prev => prev.filter((_, i) => i !== index));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const data = new FormData();
//       data.append('name', formData.name);
//       data.append('description', formData.description);
//       data.append('categoryId', formData.categoryId);
//       data.append('subcategoryId', formData.subcategoryId);
//       data.append('brandId', formData.brandId);
//       images.forEach((image, index) => {
//         data.append('images', image);
//         console.log(`Appending image ${index + 1}:`, image.name); // Debug: Log each image
//       });

//       const response = await axiosInstance.post('/products', data, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       console.log('Product created:', response.data); // Debug: Log the response
//       setSuccess('Product added successfully!');
//       setFormData({ name: '', description: '', categoryId: '', subcategoryId: '', brandId: '' });
//       setImages([]);
//       setImagePreviews([]);
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to add product');
//       console.error('Error adding product:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container>
//       <Title>Add Product</Title>
//       {success && <SuccessMessage>{success}</SuccessMessage>}
//       {error && <ErrorMessage>{error}</ErrorMessage>}
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label htmlFor="name">Product Name</Label>
//           <Input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="categoryId">Category</Label>
//           <Select
//             id="categoryId"
//             name="categoryId"
//             value={formData.categoryId}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map(category => (
//               <option key={category._id} value={category._id}>
//                 {category.name}
//               </option>
//             ))}
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="subcategoryId">Subcategory</Label>
//           <Select
//             id="subcategoryId"
//             name="subcategoryId"
//             value={formData.subcategoryId}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Subcategory</option>
//             {subcategories.map(subcategory => (
//               <option key={subcategory._id} value={subcategory._id}>
//                 {subcategory.name}
//               </option>
//             ))}
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="brandId">Brand</Label>
//           <Select
//             id="brandId"
//             name="brandId"
//             value={formData.brandId}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Brand</option>
//             {brands.map(brand => (
//               <option key={brand._id} value={brand._id}>
//                 {brand.name}
//               </option>
//             ))}
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="description">Description (Optional)</Label>
//           <Textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="images">Product Images (Up to 5)</Label>
//           <Input
//             type="file"
//             id="images"
//             name="images"
//             accept="image/jpeg,image/jpg,image/png"
//             multiple
//             onChange={handleImageChange}
//           />
//           {imagePreviews.length > 0 && (
//             <ImagePreviewContainer>
//               {imagePreviews.map((preview, index) => (
//                 <ImagePreviewWrapper key={index}>
//                   <ImagePreview>
//                     <img src={preview} alt={`Preview ${index + 1}`} />
//                   </ImagePreview>
//                   <RemoveButton onClick={() => removeImage(index)}>
//                     <FaTimes /> Remove
//                   </RemoveButton>
//                 </ImagePreviewWrapper>
//               ))}
//             </ImagePreviewContainer>
//           )}
//         </FormGroup>
//         <SubmitButton type="submit" disabled={loading}>
//           {loading ? 'Adding Product...' : 'Add Product'}
//         </SubmitButton>
//       </Form>
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

// const Form = styled.form`
//   max-width: 600px;
//   margin: 0 auto;
//   background-color: #ffffff;
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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

//   &:disabled {
//     background-color: #a0aec0;
//     cursor: not-allowed;
//   }
// `;

// const ErrorMessage = styled.p`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #e53e3e;
//   margin-bottom: 20px;
// `;

// const SuccessMessage = styled.p`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #38a169;
//   margin-bottom: 20px;
// `;

// export default AddProduct;




import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';
import { FaTimes } from 'react-icons/fa';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    shortDescription: '',
    categoryId: '',
    subcategoryId: '',
    brandId: '',
    keyFeatures: '',
  });
  const [specifications, setSpecifications] = useState([{ key: '', value: '' }]);
  const [images, setImages] = useState([]);
  const [datasheet, setDatasheet] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch categories, subcategories, and brands on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, subcategoriesRes, brandsRes] = await Promise.all([
          axiosInstance.get('/categories'),
          axiosInstance.get('/subcategories'),
          axiosInstance.get('/brands'),
        ]);
        setCategories(categoriesRes.data);
        setSubcategories(subcategoriesRes.data);
        setBrands(brandsRes.data);
      } catch (err) {
        setError('Failed to load categories, subcategories, or brands');
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  // Handle form input changes
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

  // Handle multiple image uploads
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const totalImages = images.length + files.length;

    if (totalImages > 5) {
      setError('You can upload a maximum of 5 images');
      return;
    }

    setImages(prev => [...prev, ...files]);
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
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('shortDescription', formData.shortDescription);
      data.append('categoryId', formData.categoryId);
      data.append('subcategoryId', formData.subcategoryId);
      data.append('brandId', formData.brandId);
      data.append('keyFeatures', JSON.stringify(formData.keyFeatures.split(',').map(f => f.trim()).filter(f => f)));
      data.append('specifications', JSON.stringify(Object.fromEntries(specifications.filter(spec => spec.key && spec.value).map(spec => [spec.key, spec.value]))));
      images.forEach((image) => {
        data.append('images', image);
      });
      if (datasheet) {
        data.append('datasheet', datasheet);
      }

      const response = await axiosInstance.post('/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('Product created:', response.data);
      setSuccess('Product added successfully!');
      setFormData({ name: '', description: '', shortDescription: '', categoryId: '', subcategoryId: '', brandId: '', keyFeatures: '' });
      setSpecifications([{ key: '', value: '' }]);
      setImages([]);
      setImagePreviews([]);
      setDatasheet(null);
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add product');
      console.error('Error adding product:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Add Product</Title>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
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
        </FormGroup>
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Adding Product...' : 'Add Product'}
        </SubmitButton>
      </Form>
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

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #e53e3e;
  margin-bottom: 20px;
`;

const SuccessMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #38a169;
  margin-bottom: 20px;
`;

export default AddProduct;