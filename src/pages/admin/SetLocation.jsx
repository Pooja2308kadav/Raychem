import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';
import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

const AddLocations = () => {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
  });
  const [locations, setLocations] = useState([]);
  const [editLocation, setEditLocation] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch locations on mount
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axiosInstance.get('/locations');
        setLocations(response.data);
      } catch (err) {
        setError('Failed to load locations');
        console.error('Error fetching locations:', err);
      }
    };

    fetchLocations();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission for adding a location
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axiosInstance.post('/locations', formData);
      setLocations(prev => [response.data, ...prev]);
      setSuccess('Location added successfully!');
      setFormData({
        name: '',
        street: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
      });
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add location');
      console.error('Error adding location:', err);
    } finally {
      setLoading(false);
    }
  };

  // Open edit modal
  const openEditModal = (location) => {
    setEditLocation(location);
    setFormData({
      name: location.name,
      street: location.street,
      city: location.city,
      state: location.state,
      country: location.country,
      postalCode: location.postalCode,
    });
    setIsEditModalOpen(true);
  };

  // Close edit modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditLocation(null);
    setFormData({
      name: '',
      street: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
    });
  };

  // Handle edit submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axiosInstance.put(`/locations/${editLocation._id}`, formData);
      setLocations(prev =>
        prev.map(loc => (loc._id === editLocation._id ? response.data : loc))
      );
      setSuccess('Location updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      closeEditModal();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update location');
      console.error('Error updating location:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete location
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this location?')) return;

    try {
      await axiosInstance.delete(`/locations/${id}`);
      setLocations(prev => prev.filter(loc => loc._id !== id));
      setSuccess('Location deleted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete location');
      console.error('Error deleting location:', err);
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <Container>
      <Title>Add Location</Title>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Location Name</Label>
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
          <Label htmlFor="street">Street</Label>
          <Input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="city">City</Label>
          <Input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="state">State</Label>
          <Input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="country">Country</Label>
          <Input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Adding Location...' : 'Add Location'}
        </SubmitButton>
      </Form>

      <LocationsSection>
        <SectionTitle>Existing Locations</SectionTitle>
        {locations.length === 0 ? (
          <NoDataMessage>No locations found.</NoDataMessage>
        ) : (
          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <Th>#</Th>
                  <Th>Name</Th>
                  <Th>Address</Th>
                  <Th>Created At</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {locations.map((location, index) => (
                  <Tr key={location._id}>
                    <Td>{index + 1}</Td>
                    <Td>{location.name}</Td>
                    <Td>
                      {location.street}, {location.city}, {location.state}, {location.country}, {location.postalCode}
                    </Td>
                    <Td>{new Date(location.createdAt).toLocaleString()}</Td>
                    <Td>
                      <ActionButton onClick={() => openEditModal(location)}>
                        <FaEdit /> Edit
                      </ActionButton>
                      <ActionButton delete onClick={() => handleDelete(location._id)}>
                        <FaTrash /> Delete
                      </ActionButton>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </StyledTable>
          </TableWrapper>
        )}
      </LocationsSection>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Location</ModalTitle>
              <CloseButton onClick={closeEditModal}>
                <FaTimes />
              </CloseButton>
            </ModalHeader>
            <ModalForm onSubmit={handleEditSubmit}>
              <FormGroup>
                <Label htmlFor="name">Location Name</Label>
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
                <Label htmlFor="street">Street</Label>
                <Input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="city">City</Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="state">State</Label>
                <Input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="country">Country</Label>
                <Input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <SubmitButton type="submit" disabled={loading}>
                {loading ? 'Updating...' : 'Update Location'}
              </SubmitButton>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
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

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto 40px;
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

const LocationsSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #1a202c;
  margin-bottom: 20px;
  text-align: center;
`;

const TableWrapper = styled.div`
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

  &:last-child {
    text-align: center;
  }
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

const NoDataMessage = styled.p`
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

export default AddLocations;