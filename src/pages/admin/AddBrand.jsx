import { useState } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';

const AddBrand = () => {
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
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    // Log the token and form data for debugging
    const token = localStorage.getItem('token');
    console.log('Token:', token ? 'Present' : 'Missing');
    console.log('Form Data:', {
      name: formData.name,
      description: formData.description,
      image: image ? image.name : 'No image',
    });

    // Validate required fields
    if (!formData.name) {
      setError('Name is required');
      setLoading(false);
      return;
    }

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      if (image) {
        data.append('image', image);
      }

      const response = await axiosInstance.post('/brands', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess('Brand created successfully!');
      setFormData({ name: '', description: '' });
      setImage(null);
      setImagePreview(null);
      e.target.reset();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create brand');
      console.error('Error creating brand:', err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BrandContainer>
      <h1>Add New Brand</h1>
      <BrandForm onSubmit={handleSubmit}>
        {success && <SuccessMessage>{success}</SuccessMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormGroup>
          <Label htmlFor="name">Brand Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter brand name"
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
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Brand'}
        </SubmitButton>
      </BrandForm>
    </BrandContainer>
  );
};

// Styled Components
const BrandContainer = styled.div`
  padding: 20px;
`;

const BrandForm = styled.form`
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

export default AddBrand;