import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';
import { FaCheck, FaTimes } from 'react-icons/fa';

const AdminCartEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch cart enquiries using the dedicated endpoint
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await axiosInstance.get('/enquiries/from-cart');
        setEnquiries(response.data);
      } catch (err) {
        setError('Failed to load cart enquiries');
        console.error('Error fetching cart enquiries:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  // Handle status update
  const handleStatusUpdate = async (enquiryId, status) => {
    try {
      const response = await axiosInstance.put('/enquiries/status', {
        enquiryId,
        status,
      });
      setEnquiries(prev =>
        prev.map(enquiry =>
          enquiry._id === enquiryId ? response.data : enquiry
        )
      );
      setSuccess(`Enquiry marked as ${status}!`);
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update enquiry status');
      console.error('Error updating enquiry status:', err);
      setTimeout(() => setError(''), 3000);
    }
  };

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <Container>
      <Title>Manage Cart Enquiries</Title>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {enquiries.length === 0 ? (
        <NoDataMessage>No cart enquiries found.</NoDataMessage>
      ) : (
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>User Email</Th>
                <Th>Product</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Message</Th>
                <Th>Status</Th>
                <Th>Created At</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry, index) => (
                <Tr key={enquiry._id}>
                  <Td>{index + 1}</Td>
                  <Td>{enquiry.userId ? enquiry.userId.email : 'User Not Available'}</Td>
                  <Td>{enquiry.productId ? enquiry.productId.name : 'Product Not Available'}</Td>
                  <Td>{enquiry.name}</Td>
                  <Td>{enquiry.email}</Td>
                  <Td>{enquiry.phone}</Td>
                  <Td>{enquiry.message}</Td>
                  <Td>{enquiry.status}</Td>
                  <Td>{new Date(enquiry.createdAt).toLocaleString()}</Td>
                  <Td>
                    {enquiry.status === 'pending' && (
                      <>
                        <ActionButton
                          resolve
                          onClick={() => handleStatusUpdate(enquiry._id, 'resolved')}
                        >
                          <FaCheck /> Resolve
                        </ActionButton>
                        <ActionButton
                          close
                          onClick={() => handleStatusUpdate(enquiry._id, 'closed')}
                        >
                          <FaTimes /> Close
                        </ActionButton>
                      </>
                    )}
                  </Td>
                </Tr>
              ))}
            </tbody>
          </StyledTable>
        </TableWrapper>
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
  width: 200vh;
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

  &:last-child {
    text-align: center;
    width: 200px;
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

  background-color: ${props =>
    props.resolve ? '#38a169' : props.close ? '#e53e3e' : '#2d3748'};
  color: #fff;

  &:hover {
    background-color: ${props =>
      props.resolve ? '#2f855a' : props.close ? '#c53030' : '#4a5568'};
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
  margin-top: 20px;
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

export default AdminCartEnquiries;