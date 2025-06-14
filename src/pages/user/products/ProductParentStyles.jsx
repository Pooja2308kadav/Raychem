import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 24px;
  background-color: #f9fafb;
  min-height: 100vh;

  @media (max-width: 480px) {
    padding: 16px;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const HeroBanner = styled.div`
  position: relative;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  background-color: #2d3748;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const BreadcrumbNav = styled.div`
  font-size: 0.9rem;
  margin-bottom: 12px;

  span {
    margin: 0 5px;
    color: #fff;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

export const BreadcrumbLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const CategoryTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const ContentSection = styled.section`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  width: 100%;

  h3 {
    font-size: 1.5rem;
    color: #1a202c;
    margin-bottom: 24px;
    text-align: center;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

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
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fafc;

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
  object-fit: contain;
  padding: 8px;
  loading: lazy;
`

export const ProductContent = styled.div`
  padding: 16px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const ProductTitle = styled.h3`
  font-size: 1.125rem;
  color: #2d3748;
  margin-bottom: 8px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 12px;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

export const LearnMoreButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #3182ce;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-height: 48px;

  &:hover {
    background-color: #2b6cb0;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 8px 16px;
  }
`

export const LoadingSpinner = styled.div`
  text-align: center;
  font-size: 1.125rem;
  color: #4a5568;
  margin-top: 40px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.125rem;
  color: #e53e3e;
  margin-top: 40px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 32px 0;
  flex-wrap: wrap;
  padding: 24px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 200px;
    
    @media (max-width: 768px) {
      min-width: 100%;
    }
  }
`

export const FilterLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #4a5568;
  margin-bottom: 6px;
  text-align: center;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`

export const FilterSelect = styled.select`
  padding: 10px 14px;
  font-size: 0.9rem;
  color: #4a5568;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  width: 100%;
  max-width: 200px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 14px;
  padding-right: 36px;

  &:hover {
    border-color: #cbd5e0;
  }

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
  }

  &:disabled {
    background-color: #f7fafc;
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${({ as }) =>
    as === "input" &&
    `
    cursor: text;
    background-image: none;
    padding-right: 14px;
    
    &::placeholder {
      color: #9ca3af;
    }
  `}

  @media (max-width: 480px) {
    font-size: 0.85rem;
    max-width: 100%;
    padding: 8px 12px;
  }
`

export const ProductCount = styled.p`
  text-align: center;
  font-size: 1.125rem;
  color: #2b6cb0;
  margin: 16px 0 32px 0;
  font-weight: 500;
  padding: 12px;
  background-color: #ebf8ff;
  border-radius: 6px;
  border-left: 4px solid #3182ce;

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 10px;
  }
`