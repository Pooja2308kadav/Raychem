

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import Navbar from '../../components/user/layouts/Navbar';
import Image1 from "../../assets/TransformerServices.jpg"
import Image2 from "../../assets/powerServicesImg.jpg"
import DefenceImg from "../../assets/defence.jpg";
import ElectricVehicleImg from "../../assets/electricVehicle.jpg";
import EnergyImg from "../../assets/energy.jpg";
import InfrastructureImg from "../../assets/Infrastructure.jpg";
import OilAndGasImg from "../../assets/Oil.jpg";
import TransportationImg from "../../assets/Transportation.jpg";



import {
  PageContainer,
  MainContent,
  Title,
  Subtitle,
  NavigationTabs,
  Tab,
  OfferingsGrid,
  OfferingCard,
  OfferingImage,
  OfferingContent,
  OfferingTitle,
  OfferingDescription,
  LearnMoreLink,
  LoadingSpinner,
  ErrorMessage
} from './FeaturedOfferingsStyles';

// Placeholder image for fallback
const placeholderImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s';

const BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:3000").replace(/\/+$/, "");

const getImageUrl = (imagePath) => {
  if (!imagePath) return placeholderImage;
  const cleanPath = imagePath
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/\s/g, "%20");
  return `${BASE_URL}/${cleanPath}`;
};

const FeaturedOfferings = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('Products');

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const productsResponse = await axiosInstance.get("/products");
        setProducts(productsResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Static data for Industries & Applications and Services
  const industries = [
    {
      category: 'Industries & Applications',
      title: 'Energy',
      description: 'Power is among the most critical components of infrastructure, crucial for the economic growth and welfare of nations.',
      link: '/energy',
      image : DefenceImg
    },
    {
      category: 'Industries & Applications',
      title: 'Oil & Gas',
      description: 'Rapid economic growth in many developing countries has led to increased demand for oil products.',
      link: '/oil-and-gas',
      image: OilAndGasImg
    },
    {
      category: 'Industries & Applications',
      title: 'Industry',
      description: 'Industrial manufacturing is a major growth sector for the Indian economy with diverse companies engaged in manufacturing.',
      link: '/industry',
      image: ElectricVehicleImg
    },
    {
      category: 'Industries & Applications',
      title: 'Transportation',
      description: 'With many Green Field Airports given preference in our country and boost from the government to develop airports.',
      link: '/transportation',
      image: TransportationImg
    }
  ];

  const services = [
    {
      category: 'Services',
      title: 'Transformer Services',
      description: 'We believe in offering solutions rather than selling products and have an in-house Services Team providing end-to-end solutions to our customers...',
      link: '/transformerServices',
      image: Image1
    },
    {
      category: 'Services',
      title: 'Power Services',
      description: 'Backed by decades of experience in the industry, Raychem RPG provides end-to-end customized solutions for reliable connection...',
      link: '/powerServices',
      image: Image2
    }
  ];

  // Add category to products
  const productsWithCategory = products.map(product => ({
    ...product,
    category: 'Products',
    image: product.imagePaths && product.imagePaths.length > 0 ? getImageUrl(product.imagePaths[0]) : placeholderImage
  }));

  // Combine all offerings
  const allOfferings = [
    ...productsWithCategory,
    ...industries,
    ...services
  ];

  // Filter offerings based on active tab
  const displayedOfferings = allOfferings.filter(offering => offering.category === activeTab);

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingSpinner>Loading...</LoadingSpinner>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <ErrorMessage>Error loading offerings: {error}</ErrorMessage>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <PageContainer>
        <MainContent>
          <Title>Featured Offerings</Title>
          <Subtitle>
            Customization of products and services is the key factor in serving our customers successfully. It helps in delivering personalized experience and gaining our customers’ loyalty and satisfaction. Simply Made for You!
          </Subtitle>
          <NavigationTabs>
            <Tab
              active={activeTab === 'Products'}
              onClick={() => setActiveTab('Products')}
            >
              Products
            </Tab>
            <Tab
              active={activeTab === 'Industries & Applications'}
              onClick={() => setActiveTab('Industries & Applications')}
            >
              Industries & Applications
            </Tab>
            <Tab
              active={activeTab === 'Services'}
              onClick={() => setActiveTab('Services')}
            >
              Services
            </Tab>
          </NavigationTabs>
          <OfferingsGrid>
            {displayedOfferings.map((offering, index) => (
              <OfferingCard key={index}>
                <Link to={offering.link || `/product/${offering.slug}`}>
                  <OfferingImage
                    src={offering.image}
                    alt={offering.title}
                    onError={(e) => {
                      e.target.src = placeholderImage;
                    }}
                  />
                  <OfferingContent>
                    <OfferingTitle>{offering.title}</OfferingTitle>
                    <OfferingDescription>{offering.description}</OfferingDescription>
                    <LearnMoreLink>
                      {activeTab === 'Services' ? `Discover ${offering.title}` : 'Learn More →'}
                    </LearnMoreLink>
                  </OfferingContent>
                </Link>
              </OfferingCard>
            ))}
          </OfferingsGrid>
        </MainContent>
     
      </PageContainer>
    </>
  );
};

export default FeaturedOfferings;