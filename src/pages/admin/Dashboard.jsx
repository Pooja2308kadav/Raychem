import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';
import { FaList, FaPlus, FaCertificate, FaMapMarkerAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    categories: 0,
    subcategories: 0,
    brands: 0,
    products: 0,
    simpleEnquiries: 0,
    cartEnquiries: 0,
    certifications: 0,
    locations: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // Fetch Categories
        const categoriesResponse = await axiosInstance.get('/categories');
        const categoriesCount = categoriesResponse.data.length;

        // Fetch Subcategories
        const subcategoriesResponse = await axiosInstance.get('/subcategories');
        const subcategoriesCount = subcategoriesResponse.data.length;

        // Fetch Brands (assuming this endpoint exists)
        let brandsCount = 0;
        try {
          const brandsResponse = await axiosInstance.get('/brands');
          brandsCount = brandsResponse.data.length;
        } catch (err) {
          console.warn('Brands endpoint not implemented yet:', err.message);
        }

        let productCount = 0;
        try {
          const productsResponse = await axiosInstance.get('/products');
          productCount = productsResponse.data.length;
        } catch (err) {
          console.warn('Products endpoint not implemented yet:', err.message);
        } 
      
        // Fetch Enquiries
        const enquiriesResponse = await axiosInstance.get('/enquiries/all');
        const allEnquiries = enquiriesResponse.data;
        const simpleEnquiriesCount = allEnquiries.filter(
          enquiry => !enquiry.productId
        ).length;
        const cartEnquiriesCount = allEnquiries.filter(
          enquiry => enquiry.productId
        ).length;

        // Fetch Certifications (assuming this endpoint exists)
        let certificationsCount = 0;
        try {
          const certificationsResponse = await axiosInstance.get('/certifications');
          certificationsCount = certificationsResponse.data.length;
        } catch (err) {
          console.warn('Certifications endpoint not implemented yet:', err.message);
        }

        // Fetch Locations
        const locationsResponse = await axiosInstance.get('/locations');
        const locationsCount = locationsResponse.data.length;

        // Update state with fetched metrics
        setMetrics({
          categories: categoriesCount,
          subcategories: subcategoriesCount,
          brands: brandsCount,
          products: productCount,
          simpleEnquiries: simpleEnquiriesCount,
          cartEnquiries: cartEnquiriesCount,
          certifications: certificationsCount,
          locations: locationsCount,
        });
      } catch (err) {
        setError('Failed to load dashboard data');
        console.error('Error fetching metrics:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <DashboardContainer>
      <h1>Admin Dashboard</h1>
      <MetricsGrid>
        <MetricCard>
          <MetricTitle>Total Categories</MetricTitle>
          <MetricValue>{metrics.categories}</MetricValue>
          <QuickLink to="/admin/add-category">
            <FaPlus /> Add Category
          </QuickLink>
        </MetricCard>
        <MetricCard>
          <MetricTitle>Total Subcategories</MetricTitle>
          <MetricValue>{metrics.subcategories}</MetricValue>
          <QuickLink to="/admin/add-subcategory">
            <FaPlus /> Add Subcategory
          </QuickLink>
        </MetricCard>
        <MetricCard>
          <MetricTitle>Total Brands</MetricTitle>
          <MetricValue>{metrics.brands}</MetricValue>
          <QuickLink to="/admin/add-brand">
            <FaPlus /> Add Brand
          </QuickLink>
        </MetricCard>

        <MetricCard>
          <MetricTitle>Total Products</MetricTitle>
          <MetricValue>{metrics.products}</MetricValue>
          <QuickLink to="/admin/add-products">
            <FaPlus /> Add Products
          </QuickLink>
        </MetricCard>

        <MetricCard>
          <MetricTitle>Simple Enquiries</MetricTitle>
          <MetricValue>{metrics.simpleEnquiries}</MetricValue>
          <QuickLink to="/admin/simple-enquiries">
            <FaList /> View Enquiries
          </QuickLink>
        </MetricCard>
        <MetricCard>
          <MetricTitle>Enquiries from Cart</MetricTitle>
          <MetricValue>{metrics.cartEnquiries}</MetricValue>
          <QuickLink to="/admin/cart-enquiries">
            <FaList /> View Enquiries
          </QuickLink>
        </MetricCard>
        <MetricCard>
          <MetricTitle>Total Certifications</MetricTitle>
          <MetricValue>{metrics.certifications}</MetricValue>
          <QuickLink to="/admin/upload-certifications">
            <FaCertificate /> Upload Certification
          </QuickLink>
        </MetricCard>
        <MetricCard>
          <MetricTitle>Total Locations</MetricTitle>
          <MetricValue>{metrics.locations}</MetricValue>
          <QuickLink to="/admin/set-location">
            <FaMapMarkerAlt /> Set Location
          </QuickLink>
        </MetricCard>
      </MetricsGrid>
    </DashboardContainer>
  );
};

// Styled Components
const DashboardContainer = styled.div`
  padding: 20px;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const MetricCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MetricTitle = styled.h3`
  font-size: 1.2rem;
  color: #2d3748;
  margin-bottom: 10px;
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #4a5568;
  margin-bottom: 15px;
`;

const QuickLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  background-color: #2d3748;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: #4a5568;
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
  margin-top: 50px;
`;

export default Dashboard;