import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';
import { FaTimes, FaEdit, FaTrash } from 'react-icons/fa';

const ViewBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBrandName, setSelectedBrandName] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editBrand, setEditBrand] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Fetch brands on mount
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axiosInstance.get('/brands');
        console.log('Fetched brands:', response.data); // Debug: Log the fetched brands
        setBrands(response.data);
      } catch (err) {
        setError('Failed to load brands');
        console.error('Error fetching brands:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  // Handle delete brand
  const handleDelete = async (brandId) => {
    if (!window.confirm('Are you sure you want to delete this brand?')) return;

    try {
      await axiosInstance.delete(`/brands/${brandId}`);
      setBrands(brands.filter(brand => brand._id !== brandId));
      setSuccess('Brand deleted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete brand');
      console.error('Error deleting brand:', err);
      setTimeout(() => setError(''), 3000);
    }
  };

  // Open edit modal
  const openEditModal = (brand) => {
    setEditBrand(brand);
    setFormData({
      name: brand.name,
      description: brand.description || '',
    });
    setImagePreview(brand.imagePath ? `http://localhost:3000/${brand.imagePath}` : null);
    setIsEditModalOpen(true);
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle edit brand submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      if (image) {
        data.append('image', image);
      }

      const response = await axiosInstance.put(`/brands/${editBrand._id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setBrands(brands.map(brand => (brand._id === editBrand._id ? response.data : brand)));
      setSuccess('Brand updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      setIsEditModalOpen(false);
      setEditBrand(null);
      setImage(null);
      setImagePreview(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update brand');
      console.error('Error updating brand:', err);
      setTimeout(() => setError(''), 3000);
    }
  };

  // Close edit modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditBrand(null);
    setImage(null);
    setImagePreview(null);
  };

  // Open image popup
  const openImageModal = (imagePath, brandName) => {
    setSelectedImage(`http://localhost:3000/${imagePath}`);
    setSelectedBrandName(brandName);
    setIsImageModalOpen(true);
  };

  // Close image popup
  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
    setSelectedBrandName('');
  };

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <Container>
      <Title>View Brands</Title>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {brands.length === 0 ? (
        <NoDataMessage>No brands found.</NoDataMessage>
      ) : (
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Name</Th>
                <Th>Image</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand, index) => (
                <Tr key={brand._id}>
                  <Td>{index + 1}</Td>
                  <Td>{brand.name}</Td>
                  <Td>
                    {brand.imagePath ? (
                      <BrandImage
                        src={`http://localhost:3000/${brand.imagePath}`}
                        alt={brand.name}
                        onClick={() => openImageModal(brand.imagePath, brand.name)}
                        onError={() => console.log(`Failed to load image for ${brand.name}`)}
                      />
                    ) : (
                      <NoImageText>No Image</NoImageText>
                    )}
                  </Td>
                  <Td>
                    <ActionButton onClick={() => openEditModal(brand)}>
                      <FaEdit /> Edit
                    </ActionButton>
                    <ActionButton delete onClick={() => handleDelete(brand._id)}>
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
              <ModalTitle>Edit Brand</ModalTitle>
              <CloseButton onClick={closeEditModal}>
                <FaTimes />
              </CloseButton>
            </ModalHeader>
            <ModalForm onSubmit={handleEditSubmit}>
              <FormGroup>
                <Label htmlFor="name">Brand Name</Label>
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
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="image">Brand Image (Optional)</Label>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <ImagePreview>
                    <img src={imagePreview} alt="Brand Preview" />
                  </ImagePreview>
                )}
              </FormGroup>
              <SubmitButton type="submit">Update Brand</SubmitButton>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Image Popup Modal */}
      {isImageModalOpen && (
        <ImageModalOverlay onClick={closeImageModal}>
          <ImageModalContent onClick={e => e.stopPropagation()}>
            <ImageModalHeader>
              <ImageModalTitle>{selectedBrandName}</ImageModalTitle>
              <CloseButton onClick={closeImageModal}>
                <FaTimes />
              </CloseButton>
            </ImageModalHeader>
            <img
              src={selectedImage}
              alt={selectedBrandName}
              style={{ maxWidth: '100%', maxHeight: '70vh' }}
            />
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
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
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

  &:nth-child(3) {
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

  &:nth-child(3) {
    text-align: center;
  }

  &:last-child {
    text-align: center;
  }
`;

const BrandImage = styled.img`
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
  max-width: 500px;
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

const ImagePreview = styled.div`
  margin-top: 10px;
  img {
    max-width: 100%;
    max-height: 150px;
    border-radius: 4px;
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

export default ViewBrands;