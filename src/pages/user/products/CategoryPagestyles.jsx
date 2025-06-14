import styled from "styled-components"
import { Link } from "react-router-dom"

export const CategoryContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const HeroBanner = styled.div`
  width: 100%;
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    z-index: 1;
  }

  @media (max-width: 1024px) {
    min-height: 350px;
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }

  @media (max-width: 480px) {
    min-height: 200px;
  }
`

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  loading: lazy;
`

export const GeometricBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  display: ${(props) => (props.hasImage ? "none" : "block")};
  z-index: 0;

  @media (max-width: 768px) {
    width: 100%;
    opacity: 0.6;
  }
`

export const GeometricShape = styled.div`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.color};
  transform: rotate(${(props) => props.rotation});
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  opacity: 0.8;

  @media (max-width: 480px) {
    width: calc(${(props) => props.size} * 0.7);
    height: calc(${(props) => props.size} * 0.7);
  }
`

export const ProductImagePlaceholder = styled.div`
  position: absolute;
  width: 96px;
  height: 64px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: rotate(${(props) => props.rotation});
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};

  @media (max-width: 480px) {
    width: 64px;
    height: 48px;
  }
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  color: white;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 4vw;

  @media (max-width: 480px) {
    padding: 0 3vw;
  }
`

export const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);

  span {
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    gap: 6px;
    margin-bottom: 16px;
  }
`

export const BreadcrumbLink = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #e74c3c;
    text-decoration: underline;
  }
`

export const CategoryTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const ContentSection = styled.div`
  background-color: white;
  padding: 4vw 4vw;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2d3748;
    margin: 0 auto 20px auto;
    max-width: 1200px;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d3748;
    margin: 32px auto 20px auto;
    max-width: 1200px;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }

    @media (max-width: 480px) {
      font-size: 1.125rem;
    }
  }
`

export const CategoryDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0 auto 20px auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`

export const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(26, 54, 93, 0.15);
    border-color: #2c5282;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  overflow: hidden;
  font-size: 0.9rem;
  color: #666;
  text-align: center;

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  loading: lazy;

  ${ProductCard}:hover & {
    transform: scale(1.1);
  }
`

export const ProductContent = styled.div`
  padding: 16px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const ProductTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #2c5282;
  transition: color 0.3s ease;

  ${ProductCard}:hover & {
    color: #e74c3c;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin: 0 0 16px 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

export const LearnMoreButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2c5282;
  font-weight: 600;
  font-size: 0.9rem;
  min-height: 48px;

  &::after {
    content: '→';
    font-size: 1.125rem;
    color: #e74c3c;
    transition: transform 0.3s ease;
  }

  ${ProductCard}:hover &::after {
    transform: translateX(8px);
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.25rem;
  color: #2c5282;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.125rem;
  color: #e74c3c;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`