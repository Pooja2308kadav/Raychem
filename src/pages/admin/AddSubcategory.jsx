import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';

const AddSubcategory = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    parentCategory: '',
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [categories, setCategories] = useState([]);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch categories for the dropdown
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/categories');
        setCategories(response.data);
        if (response.data.length > 0) {
          setFormData(prev => ({ ...prev, parentCategory: response.data[0]._id }));
        }
      } catch (err) {
        setError('Failed to load categories');
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

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
      categoryId: formData.parentCategory, // Log as categoryId for clarity
      image: image ? image.name : 'No image',
    });

    // Validate required fields
    if (!formData.name || !formData.parentCategory) {
      setError('Name and parent category are required');
      setLoading(false);
      return;
    }

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('categoryId', formData.parentCategory); // Changed from parentCategory to categoryId
      if (image) {
        data.append('image', image);
      }

      const response = await axiosInstance.post('/subcategories', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess('Subcategory created successfully!');
      setFormData({ name: '', description: '', parentCategory: categories[0]?._id || '' });
      setImage(null);
      setImagePreview(null);
      e.target.reset();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create subcategory');
      console.error('Error creating subcategory:', err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SubcategoryContainer>
      <h1>Add New Subcategory</h1>
      <SubcategoryForm onSubmit={handleSubmit}>
        {success && <SuccessMessage>{success}</SuccessMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormGroup>
          <Label htmlFor="parentCategory">Parent Category</Label>
          <Select
            id="parentCategory"
            name="parentCategory"
            value={formData.parentCategory}
            onChange={handleChange}
            required
            disabled={categories.length === 0}
          >
            {categories.length === 0 ? (
              <option value="">No categories available</option>
            ) : (
              categories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))
            )}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="name">Subcategory Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter subcategory name"
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
          <Label htmlFor="image">Subcategory Image (Optional)</Label>
          <Input
            type="file"
            id="image"
            name="image"
            accept="image/jpeg,image/jpg,image/png"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <ImagePreview>
              <img src={imagePreview} alt="Subcategory Preview" />
            </ImagePreview>
          )}
        </FormGroup>
        <SubmitButton type="submit" disabled={loading || categories.length === 0}>
          {loading ? 'Creating...' : 'Create Subcategory'}
        </SubmitButton>
      </SubcategoryForm>
    </SubcategoryContainer>
  );
};

// Styled Components
const SubcategoryContainer = styled.div`
  padding: 20px;
`;

const SubcategoryForm = styled.form`
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

export default AddSubcategory;