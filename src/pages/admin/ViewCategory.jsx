import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';
import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

const ViewCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCategory, setEditCategory] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/categories');
        setCategories(response.data);
      } catch (err) {
        setError('Failed to load categories');
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Handle delete category
  const handleDelete = async (categoryId) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;

    try {
      await axiosInstance.delete(`/categories/${categoryId}`);
      setCategories(categories.filter(category => category._id !== categoryId));
      setSuccess('Category deleted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to delete category');
      console.error('Error deleting category:', err);
      setTimeout(() => setError(''), 3000);
    }
  };

  // Open edit modal
  const openEditModal = (category) => {
    setEditCategory(category);
    setFormData({ name: category.name, description: category.description || '' });
    setImagePreview(category.imagePath ? `http://localhost:3000${category.imagePath}` : null);
    setIsModalOpen(true);
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

  // Handle edit category submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      if (image) {
        data.append('image', image);
      }

      const response = await axiosInstance.put(`/categories/${editCategory._id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setCategories(categories.map(cat => (cat._id === editCategory._id ? response.data : cat)));
      setSuccess('Category updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      setIsModalOpen(false);
      setEditCategory(null);
      setImage(null);
      setImagePreview(null);
    } catch (err) {
      setError('Failed to update category');
      console.error('Error updating category:', err);
      setTimeout(() => setError(''), 3000);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditCategory(null);
    setImage(null);
    setImagePreview(null);
  };

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error && !success) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <Container>
      <h1>View Categories</h1>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {categories.length === 0 ? (
        <NoData>No categories found.</NoData>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Image</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <Tr key={category._id}>
                <Td>{category.name}</Td>
                <Td>{category.description || '-'}</Td>
                <Td>
                  {category.imagePath ? (
                    <CategoryImage
                      src={`http://localhost:3000${category.imagePath}`}
                      alt={category.name}
                    />
                  ) : (
                    'No Image'
                  )}
                </Td>
                <Td>
                  <ActionButton onClick={() => openEditModal(category)}>
                    <FaEdit /> Edit
                  </ActionButton>
                  <ActionButton delete onClick={() => handleDelete(category._id)}>
                    <FaTrash /> Delete
                  </ActionButton>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Edit Modal */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <h2>Edit Category</h2>
              <CloseButton onClick={closeModal}>
                <FaTimes />
              </CloseButton>
            </ModalHeader>
            <ModalForm onSubmit={handleEditSubmit}>
              <FormGroup>
                <Label htmlFor="name">Category Name</Label>
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
                <Label htmlFor="image">Category Image (Optional)</Label>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <ImagePreview>
                    <img src={imagePreview} alt="Category Preview" />
                  </ImagePreview>
                )}
              </FormGroup>
              <SubmitButton type="submit">Update Category</SubmitButton>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Th = styled.th`
  padding: 15px;
  text-align: left;
  background-color: #2d3748;
  color: #fff;
  font-size: 1rem;
  border-bottom: 1px solid #e2e8f0;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f7fafc;
  }
`;

const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.95rem;
  color: #4a5568;
`;

const CategoryImage = styled.img`
  max-width: 80px;
  max-height: 80px;
  border-radius: 4px;
`;

const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  margin-right: 10px;
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

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #4a5568;
  margin-top: 50px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #e53e3e;
  margin-top: 20px;
`;

const SuccessMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #38a169;
  margin-top: 20px;
`;

const NoData = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #4a5568;
  margin-top: 20px;
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
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #4a5568;
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

export default ViewCategories;