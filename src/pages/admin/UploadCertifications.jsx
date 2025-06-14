import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';
import { FaEdit, FaTrash, FaFilePdf, FaTimes } from 'react-icons/fa';

const AddCertifications = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [certifications, setCertifications] = useState([]);
  const [editCertification, setEditCertification] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch certifications on mount
  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await axiosInstance.get('/certifications');
        setCertifications(response.data);
      } catch (err) {
        setError('Failed to load certifications');
        console.error('Error fetching certifications:', err);
      }
    };

    fetchCertifications();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setError('Only PDF files are allowed');
        setFile(null);
        setFilePreview(null);
        return;
      }
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
    }
  };

  // Remove selected file
  const removeFile = () => {
    setFile(null);
    setFilePreview(null);
  };

  // Handle form submission for adding a certification
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!file) {
      setError('PDF file is required');
      setLoading(false);
      return;
    }

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('file', file);

      const response = await axiosInstance.post('/certifications', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setCertifications(prev => [response.data, ...prev]);
      setSuccess('Certification added successfully!');
      setFormData({ name: '', description: '' });
      setFile(null);
      setFilePreview(null);
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add certification');
      console.error('Error adding certification:', err);
    } finally {
      setLoading(false);
    }
  };

  // Open edit modal
  const openEditModal = (certification) => {
    setEditCertification(certification);
    setFormData({
      name: certification.name,
      description: certification.description || '',
    });
    setFile(null);
    setFilePreview(null);
    setIsEditModalOpen(true);
  };

  // Close edit modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditCertification(null);
    setFormData({ name: '', description: '' });
    setFile(null);
    setFilePreview(null);
  };

  // Handle edit submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      if (file) {
        data.append('file', file);
      }

      const response = await axiosInstance.put(`/certifications/${editCertification._id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setCertifications(prev =>
        prev.map(cert => (cert._id === editCertification._id ? response.data : cert))
      );
      setSuccess('Certification updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      closeEditModal();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update certification');
      console.error('Error updating certification:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete certification
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this certification?')) return;

    try {
      await axiosInstance.delete(`/certifications/${id}`);
      setCertifications(prev => prev.filter(cert => cert._id !== id));
      setSuccess('Certification deleted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete certification');
      console.error('Error deleting certification:', err);
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <Container>
      <Title>Add Certification</Title>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Certification Name</Label>
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
          <Label htmlFor="file">Upload PDF</Label>
          <Input
            type="file"
            id="file"
            name="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          {filePreview && (
            <FilePreviewContainer>
              <FilePreview>
                <FaFilePdf size={50} color="#e53e3e" />
                <FileName>{file.name}</FileName>
              </FilePreview>
              <RemoveButton onClick={removeFile}>
                <FaTimes /> Remove
              </RemoveButton>
            </FilePreviewContainer>
          )}
        </FormGroup>
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Adding Certification...' : 'Add Certification'}
        </SubmitButton>
      </Form>

      <CertificationsSection>
        <SectionTitle>Existing Certifications</SectionTitle>
        {certifications.length === 0 ? (
          <NoDataMessage>No certifications found.</NoDataMessage>
        ) : (
          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <Th>#</Th>
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>File</Th>
                  <Th>Created At</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {certifications.map((certification, index) => (
                  <Tr key={certification._id}>
                    <Td>{index + 1}</Td>
                    <Td>{certification.name}</Td>
                    <Td>{certification.description || 'N/A'}</Td>
                    <Td>
                      <FileLink
                        href={`http://localhost:3000/certifications/file/${certification._id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFilePdf /> View PDF
                      </FileLink>
                    </Td>
                    <Td>{new Date(certification.createdAt).toLocaleString()}</Td>
                    <Td>
                      <ActionButton onClick={() => openEditModal(certification)}>
                        <FaEdit /> Edit
                      </ActionButton>
                      <ActionButton delete onClick={() => handleDelete(certification._id)}>
                        <FaTrash /> Delete
                      </ActionButton>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </StyledTable>
          </TableWrapper>
        )}
      </CertificationsSection>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Certification</ModalTitle>
              <CloseButton onClick={closeEditModal}>
                <FaTimes />
              </CloseButton>
            </ModalHeader>
            <ModalForm onSubmit={handleEditSubmit}>
              <FormGroup>
                <Label htmlFor="name">Certification Name</Label>
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
                <Label htmlFor="file">Upload New PDF (Optional)</Label>
                <Input
                  type="file"
                  id="file"
                  name="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
                {filePreview ? (
                  <FilePreviewContainer>
                    <FilePreview>
                      <FaFilePdf size={50} color="#e53e3e" />
                      <FileName>{file.name}</FileName>
                    </FilePreview>
                    <RemoveButton onClick={removeFile}>
                      <FaTimes /> Remove
                    </RemoveButton>
                  </FilePreviewContainer>
                ) : (
                  <FilePreviewContainer>
                    <FilePreview>
                      <FaFilePdf size={50} color="#e53e3e" />
                      <FileName>Current PDF</FileName>
                    </FilePreview>
                    <FileLink
                      href={`http://localhost:3000/certifications/file/${editCertification._id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Current PDF
                    </FileLink>
                  </FilePreviewContainer>
                )}
              </FormGroup>
              <SubmitButton type="submit" disabled={loading}>
                {loading ? 'Updating...' : 'Update Certification'}
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

const FilePreviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const FilePreview = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FileName = styled.span`
  font-size: 0.9rem;
  color: #4a5568;
`;

const RemoveButton = styled.button`
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

const FileLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  background-color: #2d3748;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background 0.3s;

  &:hover {
    background-color: #4a5568;
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

const CertificationsSection = styled.div`
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

export default AddCertifications;