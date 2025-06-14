import styled from "styled-components"
import { Link } from "react-router-dom"

export const ProductContainer = styled.div`
  max-width: 1400px;
  margin: 80px auto 40px;
  padding: 0 4vw;
  margin-top: 100px;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 900px;
    margin: 70px auto 35px;
    padding: 0 3vw;
  }

  @media (max-width: 768px) {
    margin: 60px auto 30px;
    padding: 0 3vw;
  }

  @media (max-width: 425px) {
    margin: 50px auto 25px;
    padding: 0 2.5vw;
  }

  @media (max-width: 375px) {
    margin: 45px auto 20px;
    padding: 0 2vw;
  }

  @media (max-width: 320px) {
    margin: 40px auto 15px;
    padding: 0 2vw;
  }
`

export const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  margin-bottom: 24px;
  flex-wrap: wrap;
  color: #666;

  @media (max-width: 1024px) {
    font-size: 0.875rem;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    gap: 6px;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    margin-bottom: 16px;
    gap: 5px;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
    margin-bottom: 14px;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
    margin-bottom: 12px;
  }
`

export const BreadcrumbLink = styled(Link)`
  color: #00205b;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 425px) {
    gap: 15px;
    margin-bottom: 25px;
  }

  @media (max-width: 375px) {
    gap: 12px;
  }

  @media (max-width: 320px) {
    gap: 10px;
    margin-bottom: 20px;
  }
`

export const ProductGallery = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  @media (max-width: 425px) {
    gap: 10px;
  }

  @media (max-width: 320px) {
    gap: 8px;
  }
`

export const MainImageContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  background-color: #fafafa;
  padding: 16px;
  font-size: 1rem;
  color: #666;
  text-align: center;

  @media (max-width: 1440px) {
    height: 380px;
  }

  @media (max-width: 1024px) {
    height: 350px;
    padding: 14px;
  }

  @media (max-width: 768px) {
    height: 300px;
    padding: 12px;
  }

  @media (max-width: 425px) {
    height: 250px;
    padding: 10px;
  }

  @media (max-width: 375px) {
    height: 220px;
    padding: 8px;
  }

  @media (max-width: 320px) {
    height: 180px;
    padding: 6px;
  }
`

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  loading: lazy;
`

export const ThumbnailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80px;
  flex-shrink: 0;
  overflow-y: auto;
  max-height: 400px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  @media (max-width: 1440px) {
    max-height: 380px;
  }

  @media (max-width: 1024px) {
    max-height: 350px;
    width: 75px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    max-height: none;
    overflow-x: auto;
    justify-content: center;
    gap: 6px;
  }

  @media (max-width: 425px) {
    gap: 5px;
  }

  @media (max-width: 320px) {
    gap: 4px;
  }
`

export const ThumbnailContainer = styled.div`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 4px;

  @media (max-width: 1024px) {
    width: 65px;
    height: 65px;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 425px) {
    width: 55px;
    height: 55px;
  }

  @media (max-width: 375px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 320px) {
    width: 45px;
    height: 45px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid ${(props) => (props.$active ? "#007bff" : "#ddd")};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  loading: lazy;

  &:hover {
    border-color: #007bff;
    transform: scale(1.05);
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 425px) {
    gap: 14px;
  }

  @media (max-width: 320px) {
    gap: 12px;
  }
`

export const EnquiryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 48px;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.2);

  &:hover:not(:disabled) {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    padding: 10px 20px;
    min-height: 44px;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
    padding: 8px 16px;
    min-height: 40px;
  }
`

export const ProductTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #00205b;
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;

  @media (max-width: 1440px) {
    font-size: 2.1rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }

  @media (max-width: 375px) {
    font-size: 1.4rem;
  }

  @media (max-width: 320px) {
    font-size: 1.25rem;
  }
`

export const ProductBrand = styled.div`
  font-size: 1rem;
  color: #666;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`

export const ProductDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #444;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1.05rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`

export const ProductFeatures = styled.div`
`

export const FeatureTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  color: #00205b;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`

export const FeatureList = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style-type: none;

  @media (max-width: 425px) {
    padding-left: 15px;
  }

  @media (max-width: 320px) {
    padding-left: 12px;
  }
`

export const FeatureItem = styled.li`
  margin-bottom: 8px;
  line-height: 1.6;
  position: relative;
  padding-left: 20px;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #e74c3c;
    font-weight: bold;
  }

  @media (max-width: 425px) {
    padding-left: 18px;
    font-size: 0.95rem;
  }

  @media (max-width: 320px) {
    padding-left: 16px;
    font-size: 0.9rem;
  }
`

export const ProductSpecifications = styled.div`
`

export const SpecTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  color: #00205b;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`

export const SpecTable = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
`

export const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(odd) {
    background-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const SpecLabel = styled.div`
  padding: 12px 16px;
  font-weight: 600;
  border-right: 1px solid #e0e0e0;
  color: #333;

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
    padding: 10px 12px;
  }

  @media (max-width: 320px) {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
`

export const SpecValue = styled.div`
  padding: 12px 16px;
  color: #666;

  @media (max-width: 768px) {
    padding: 10px 12px;
  }

  @media (max-width: 320px) {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 425px) {
    gap: 8px;
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 48px;
  box-shadow: 0 2px 8px rgba(231, 76, 60, 0.2);

  &:hover:not(:disabled) {
    background-color: #c0392b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    padding: 10px 20px;
    min-height: 44px;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
    padding: 8px 16px;
    min-height: 40px;
  }
`

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: white;
  color: #00205b;
  border: 2px solid #00205b;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 48px;
  box-shadow: 0 2px 8px rgba(0, 32, 91, 0.2);

  &:hover:not(:disabled) {
    background-color: #00205b;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 32, 91, 0.3);
  }

  &:disabled {
    background-color: #f8f9fa;
    color: #95a5a6;
    border-color: #e0e0e0;
    cursor: not-allowed;
    box-shadow: none;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    padding: 10px 20px;
    min-height: 44px;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
    padding: 8px 16px;
    min-height: 40px;
  }
`

export const TabContainer = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (max-width: 425px) {
    margin-bottom: 25px;
  }

  @media (max-width: 320px) {
    margin-bottom: 20px;
  }
`

export const TabButtons = styled.div`
  display: flex;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }

  @media (max-width: 425px) {
    gap: 6px;
    margin-bottom: 16px;
  }

  @media (max-width: 320px) {
    gap: 5px;
    margin-bottom: 12px;
  }
`

export const TabButton = styled.button`
  background: none;
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#00205b" : "#666")};
  border-bottom: 3px solid ${(props) => (props.$active ? "#00205b" : "transparent")};
  transition: all 0.3s ease;
  min-width: 100px;

  &:hover {
    color: #00205b;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 10px 16px;
    min-width: 90px;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    padding: 8px 12px;
    min-width: 80px;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
    padding: 6px 10px;
    min-width: 70px;
  }
`

export const TabContent = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #00205b;
    margin: 0 0 16px 0;

    @media (max-width: 768px) {
      font-size: 1.35rem;
    }

    @media (max-width: 425px) {
      font-size: 1.25rem;
    }

    @media (max-width: 320px) {
      font-size: 1.15rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    margin: 0 0 16px 0;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }

    @media (max-width: 425px) {
      font-size: 0.9rem;
      line-height: 1.6;
    }

    @media (max-width: 320px) {
      font-size: 0.85rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 12px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #00205b;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }

      @media (max-width: 320px) {
        font-size: 0.9rem;
        gap: 6px;
      }
    }
  }
`

export const RelatedProducts = styled.div`
  margin-top: 60px;

  @media (max-width: 1024px) {
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }

  @media (max-width: 425px) {
    margin-top: 30px;
  }

  @media (max-width: 320px) {
    margin-top: 25px;
  }
`

export const RelatedTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #00205b;
  margin: 0 0 24px 0;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1.65rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1.35rem;
  }

  @media (max-width: 320px) {
    font-size: 1.25rem;
  }
`

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 14px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

export const RelatedCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 32, 91, 0.1);
    border-color: #00205b;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`

export const RelatedImageContainer = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  overflow: hidden;
  font-size: 0.9rem;
  color: #666;
  text-align: center;

  @media (max-width: 1024px) {
    height: 150px;
  }

  @media (max-width: 768px) {
    height: 140px;
  }

  @media (max-width: 425px) {
    height: 120px;
    font-size: 0.85rem;
  }

  @media (max-width: 320px) {
    height: 100px;
    font-size: 0.8rem;
  }
`

export const RelatedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  loading: lazy;

  ${RelatedCard}:hover & {
    transform: scale(1.05);
  }
`

export const RelatedName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  padding: 16px;
  margin: 0;
  color: #333;
  transition: color 0.3s ease;

  ${RelatedCard}:hover & {
    color: #00205b;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 14px;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    padding: 12px;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
    padding: 10px;
  }
`

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.25rem;
  color: #00205b;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }

  @media (max-width: 425px) {
    font-size: 1.1rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 16px;
  color: #dc3545;
  font-size: 1.125rem;
  text-align: center;

  button {
    background: #00205b;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    min-height: 48px;

    &:hover {
      background: #003d82;
      transform: translateY(-2px);
    }

    @media (max-width: 425px) {
      font-size: 0.95rem;
      padding: 8px 16px;
      min-height: 44px;
    }

    @media (max-width: 320px) {
      font-size: 0.9rem;
      padding: 6px 12px;
      min-height: 40px;
    }
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    gap: 12px;
  }

  @media (max-width: 320px) {
    font-size: 0.95rem;
    gap: 10px;
  }
`

export const Toast = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  background-color: ${(props) => (props.$success ? "#2ecc71" : "#e74c3c")};
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: slideIn 0.3s ease-out forwards, fadeOut 0.3s ease 2.7s forwards;

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    padding: 10px 20px;
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    top: 10px;
    right: 10px;
    padding: 8px 16px;
    font-size: 0.85rem;
  }

  @media (max-width: 320px) {
    top: 8px;
    right: 8px;
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`