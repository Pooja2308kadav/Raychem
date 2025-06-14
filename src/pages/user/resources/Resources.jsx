import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ChevronRight, Search } from 'lucide-react';
import Navbar from '../../../components/user/layouts/Navbar';
import Footer from '../../../components/user/Footer';
import axiosInstance from '../../../utils/axiosInstance';

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const BannerSection = styled.section`
  position: relative;
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: end;
  padding: 2rem 5vw;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2));
  }

  @media (max-width: 768px) {
    height: 300px;
    padding: 1.5rem 4vw;
  }

  @media (max-width: 480px) {
    height: 250px;
    padding: 1rem 3vw;
  }
`;

const BreadcrumbContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const BreadcrumbLink = styled.span`
  color: white;
  text-decoration: none;
  opacity: 0.9;
  cursor: pointer;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 0.5rem;
  opacity: 0.7;
`;

const MainContent = styled.div`
  background: white;
  min-height: calc(100vh - 400px);

  @media (max-width: 768px) {
    min-height: calc(100vh - 300px);
  }

  @media (max-width: 480px) {
    min-height: calc(100vh - 250px);
  }
`;

const Section = styled.section`
  padding: 4rem 5vw;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 4vw;
  }

  @media (max-width: 480px) {
    padding: 2rem 3vw;
  }
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  color: #6b7280;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto 4rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 1rem 3rem 1rem 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  color: #6b7280;
  background: white;
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3b82f6;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2.5rem 0.9rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 2rem 0.8rem 1rem;
    font-size: 0.9rem;
  }
`;

const DropdownArrow = styled(ChevronRight)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  color: #6b7280;
  width: 20px;
  height: 20px;
  pointer-events: none;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    right: 0.8rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  width: 100%;

    @media (max-width: 480px) {
    width: 70%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 3rem 1rem 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3b82f6;
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2.5rem 0.9rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 2rem 0.8rem 1rem;
    font-size: 0.9rem;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #ef4444;
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    right: 0.8rem;
  }
`;

const ResourceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ResourceItem = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ResourceTitle = styled.h3`
  font-size: 1.2rem;
  color: #1f2937;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ResourceDescription = styled.p`
  font-size: 0.9rem;
  color: #4b5563;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ResourceLink = styled.a`
  display: inline-block;
  font-size: 0.9rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Message = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-top: 2rem;
  text-align: center;
  grid-column: 1 / -1;
`;

const CompleteResourcesPage = () => {
  const [categories, setCategories] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [productFamily, setProductFamily] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSection, setCurrentSection] = useState('product-catalog');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const sectionRefs = useRef({});

  const sections = [
    {
      id: 'product-catalog',
      title: 'Product Catalog',
      description: 'Select and download product catalogue(s) of interest.',
      dropdownLabel: 'Choose Product Family',
      searchPlaceholder: 'Search Products',
    },
    {
      id: 'certificates',
      title: 'Certificates',
      description: 'Select a certificate to view and download.',
      dropdownLabel: 'Choose Certificate',
      searchPlaceholder: 'Search Certificates',
    },
  ];

  const BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:3000").replace(/\/+$/, "");

  // Fetch product categories and certificates
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        // Fetch product categories
        const categoriesResponse = await axiosInstance.get('/categories');
        console.log('Categories Response:', categoriesResponse.data);
        setCategories(categoriesResponse.data);

        // Fetch certifications
        const certificationsResponse = await axiosInstance.get('/certifications');
        console.log('Certifications Response:', certificationsResponse.data);
        setCertificates(certificationsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch products when productFamily changes (for product-catalog section)
  useEffect(() => {
    if (!productFamily || currentSection !== 'product-catalog') {
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/products', {
          params: { categoryId: productFamily },
        });
        console.log('Products Response:', response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productFamily, currentSection]);

  // Initialize section refs
  useEffect(() => {
    sections.forEach((section) => {
      sectionRefs.current[section.id] = React.createRef();
    });
  }, []);

  // Dynamic scroll-based section switching
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const ref = sectionRefs.current[section.id];
        if (ref && ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (currentSection !== section.id) {
              setCurrentSection(section.id);
              setProductFamily(''); // Reset dropdown when switching sections
              setSearchQuery(''); // Reset search when switching sections
              setProducts([]); // Clear products
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  // Filter products based on search query and datasheet availability
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) && product.datasheet
  );

  // Filter certificates based on selected certificate ID
  const selectedCertificate = certificates.find((cert) => cert._id === productFamily);

  const handleDropdownChange = (e) => {
    setProductFamily(e.target.value);
    setSearchQuery(''); // Reset search when changing dropdown
  };

  return (
    <PageContainer>
      <Navbar />
      <BannerSection>
        <img
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Resources Banner"
          style={{ display: 'none' }}
          onError={(e) => {
            console.log('Failed to load banner image');
            e.target.parentElement.style.backgroundImage = 'url(https://via.placeholder.com/1200x400?text=Banner+Image)';
          }}
        />
        <BreadcrumbContainer>
          <Breadcrumb>
            <BreadcrumbLink as="a" href="/">Home</BreadcrumbLink>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbLink>Resources</BreadcrumbLink>
          </Breadcrumb>
        </BreadcrumbContainer>
      </BannerSection>

      <MainContent>
        {error && (
          <Section>
            <Message style={{ color: '#ef4444' }}>{error}</Message>
          </Section>
        )}
        
        {sections.map((section) => (
          <Section key={section.id} ref={sectionRefs.current[section.id]}>
            <SectionTitle>{section.title}</SectionTitle>
            {section.description && (
              <SectionDescription>{section.description}</SectionDescription>
            )}
            <FilterContainer>
              <DropdownContainer>
                <Dropdown
                  value={productFamily}
                  onChange={handleDropdownChange}
                >
                  <option value="">{section.dropdownLabel}</option>
                  {(section.id === 'certificates' ? certificates : categories).map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </Dropdown>
                <DropdownArrow />
              </DropdownContainer>
              {section.id === 'product-catalog' && (
                <SearchContainer>
                  <SearchInput
                    type="text"
                    placeholder={section.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <SearchIcon />
                </SearchContainer>
              )}
            </FilterContainer>
            
            {loading && (
              <Message>Loading...</Message>
            )}
            
            {!loading && section.id === 'product-catalog' && (
              <ResourceList>
                {productFamily ? (
                  filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <ResourceItem key={product._id}>
                        <ResourceTitle>{product.name}</ResourceTitle>
                        <ResourceDescription>
                          {product.shortDescription || 'No description available'}
                        </ResourceDescription>
                        {product.datasheet && (
                          <ResourceLink
                            href={`${BASE_URL}/${product.datasheet}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Download Datasheet
                          </ResourceLink>
                        )}
                      </ResourceItem>
                    ))
                  ) : (
                    <Message>No products found for the selected category.</Message>
                  )
                ) : (
                  <Message>Please select a product family to view catalogs.</Message>
                )}
              </ResourceList>
            )}
            
            {!loading && section.id === 'certificates' && (
              <ResourceList>
                {productFamily && selectedCertificate ? (
                  <ResourceItem key={selectedCertificate._id}>
                    <ResourceTitle>{selectedCertificate.name}</ResourceTitle>
                    <ResourceDescription>
                      {selectedCertificate.description || 'No description available'}
                    </ResourceDescription>
                    <ResourceLink
                      href={`${BASE_URL}/certifications/file/${selectedCertificate._id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Certificate
                    </ResourceLink>
                  </ResourceItem>
                ) : (
                  <Message>Please select a certificate to view details.</Message>
                )}
              </ResourceList>
            )}
          </Section>
        ))}
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default CompleteResourcesPage;