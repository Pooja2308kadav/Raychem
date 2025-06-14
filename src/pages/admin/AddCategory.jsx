import { useState } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';

const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Show image preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      // Create FormData object to handle text and file
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      if (image) {
        data.append('image', image); // Backend expects 'image' field for the file
      }

      const response = await axiosInstance.post('/categories', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess('Category created successfully!');
      setFormData({ name: '', description: '' });
      setImage(null);
      setImagePreview(null);
      e.target.reset(); // Reset the form including the file input
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create category');
      console.error('Error creating category:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CategoryContainer>
      <h1>Add New Category</h1>
      <CategoryForm onSubmit={handleSubmit}>
        {success && <SuccessMessage>{success}</SuccessMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormGroup>
          <Label htmlFor="name">Category Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter category name"
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
            placeholder="Enter description"
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
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Category'}
        </SubmitButton>
      </CategoryForm>
    </CategoryContainer>
  );
};

// Styled Components
const CategoryContainer = styled.div`
  padding: 20px;
`;

const CategoryForm = styled.form`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin-top: 20px;
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

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.p`
  color: #38a169;
  margin-bottom: 20px;
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  margin-bottom: 20px;
  text-align: center;
`;

export default AddCategory;