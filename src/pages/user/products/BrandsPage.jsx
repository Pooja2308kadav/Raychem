import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import styled from "styled-components";
import { Link } from "react-router-dom";
const BrandPage = () => {
  const { brandId } = useParams();
  const [brand, setBrand] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        const [brandResponse, productsResponse] = await Promise.all([
          axiosInstance.get(`/brands/${brandId}`),
          axiosInstance.get(`/products?brand=${brandId}`),
        ]);
        
        setBrand(brandResponse.data);
        setProducts(productsResponse.data);
      } catch (err) {
        setError("Failed to load brand data");
        console.error("Error fetching brand data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();
  }, [brandId]);

  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>{error}</Error>;
  if (!brand) return <NotFound>Brand not found</NotFound>;

  return (
    <BrandPageContainer>
      <BrandHeader>
        {brand.imagePath && (
          <BrandLogoImage
            src={`http://localhost:3000/${brand.imagePath}`}
            alt={brand.name}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}
        <BrandTitle>{brand.name}</BrandTitle>
        {brand.description && <BrandDescription>{brand.description}</BrandDescription>}
      </BrandHeader>

      <ProductsSection>
        <SectionTitle>Products by {brand.name}</SectionTitle>
        {products.length === 0 ? (
          <NoProducts>No products found for this brand</NoProducts>
        ) : (
          <ProductGrid>
            {products.map((product) => (
              <ProductCard key={product._id}>
                <ProductImage 
                  src={product.imagePath ? `http://localhost:3000/${product.imagePath}` : "/placeholder-product.jpg"} 
                  alt={product.name}
                />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>${product.price?.toFixed(2) || "N/A"}</ProductPrice>
                <ViewButton to={`/product/${product._id}`}>View Product</ViewButton>
              </ProductCard>
            ))}
          </ProductGrid>
        )}
      </ProductsSection>
    </BrandPageContainer>
  );
};

// Styled Components
const BrandPageContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const BrandHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;
`;

const BrandLogoImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const BrandTitle = styled.h1`
  font-size: 2.5rem;
  color: #00205b;
  margin-bottom: 1rem;
`;

const BrandDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  line-height: 1.6;
`;

const ProductsSection = styled.section`
  margin-top: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const NoProducts = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-top: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  border-radius: 6px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #e74c3c;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const ViewButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #00205b;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #001845;
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-top: 3rem;
`;

const Error = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #e74c3c;
  margin-top: 3rem;
`;

const NotFound = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-top: 3rem;
`;

export default BrandPage;