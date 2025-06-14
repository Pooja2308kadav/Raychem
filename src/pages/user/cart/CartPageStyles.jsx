import styled from "styled-components"
import { Link } from "react-router-dom"

export const CartContainer = styled.div`
  max-width: 1280px;
  margin: 80px auto 40px;
  padding: 0 clamp(16px, 4vw, 24px);
  min-height: 60vh;
  width: 100%;
  box-sizing: border-box;
  padding-top: 10rem

  @media (max-width: 1024px) {
    margin: 64px auto 32px;
    padding: 0 clamp(12px, 3vw, 16px);
  }

  @media (max-width: 768px) {
    margin: 48px auto 24px;
    padding: 0 clamp(8px, 2vw, 12px);
  }

  @media (max-width: 480px) {
    margin: 32px auto 16px;
    padding: 0 8px;
  }
`

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: clamp(24px, 3vw, 32px);
  padding-bottom: clamp(12px, 2vw, 16px);
  border-bottom: 1px solid #e0e0e0;
  margin-top: 5rem;

  .header-actions {
    display: flex;
    gap: clamp(8px, 1.5vw, 12px);
    align-items: center;
    flex-wrap: wrap;
  }

  .refresh-button {
    display: flex;
    align-items: center;
    gap: clamp(6px, 1vw, 8px);
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: clamp(6px, 1.5vw, 8px) clamp(12px, 2vw, 16px);
    font-size: clamp(12px, 1.4vw, 14px);
    font-weight: 500;
    color: #00205b;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #f8f9fa;
      border-color: #00205b;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`

export const CartTitle = styled.h1`
  font-size: clamp(24px, 3vw, 28px);
  font-weight: 600;
  color: #00205b;
  margin: 0 0 4px 0;

  @media (max-width: 480px) {
    font-size: clamp(20px, 2.5vw, 24px);
  }
`

export const CartItemCount = styled.p`
  font-size: clamp(12px, 1.4vw, 14px);
  color: #666;
  margin: 0;

  @media (max-width: 480px) {
    font-size: clamp(11px, 1.2vw, 12px);
  }
`

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(24px, 3vw, 32px);
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }

  @media (max-width: 768px) {
    gap: clamp(16px, 2vw, 24px);
  }

  @media (max-width: 480px) {
    gap: clamp(12px, 1.5vw, 16px);
  }
`

export const CartItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.5vw, 16px);

  @media (max-width: 480px) {
    gap: clamp(8px, 1vw, 12px);
  }
`

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 30px clamp(80px, 15vw, 100px) 1fr;
  gap: clamp(12px, 2vw, 20px);
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: clamp(12px, 2vw, 20px);
  transition: all 0.2s ease;
  align-items: center;

  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    grid-template-columns: 24px clamp(60px, 12vw, 80px) 1fr;
    gap: clamp(8px, 1.5vw, 12px);
    padding: clamp(8px, 1.5vw, 12px);

    input[type="checkbox"] {
      width: 14px;
      height: 14px;
    }
  }
`

export const ProductImageContainer = styled.div`
  width: clamp(80px, 15vw, 100px);
  height: clamp(80px, 15vw, 100px);
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  background: #fafafa;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .image-slider {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 32, 91, 0.7);
    color: white;
    border: none;
    border-radius: 50%;
    width: clamp(20px, 2vw, 24px);
    height: clamp(20px, 2vw, 24px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.prev {
      left: clamp(4px, 1vw, 8px);
    }

    &.next {
      right: clamp(4px, 1vw, 8px);
    }
  }

  .slider-counter {
    position: absolute;
    bottom: clamp(4px, 1vw, 8px);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 32, 91, 0.7);
    color: white;
    font-size: clamp(10px, 1vw, 11px);
    padding: clamp(2px, 0.5vw, 4px) clamp(6px, 1vw, 8px);
    border-radius: 12px;
  }

  .no-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    color: #666;
    font-size: clamp(10px, 1.2vw, 12px);
  }

  @media (max-width: 480px) {
    width: clamp(60px, 12vw, 80px);
    height: clamp(60px, 12vw, 80px);

    .slider-button {
      width: clamp(16px, 1.8vw, 20px);
      height: clamp(16px, 1.8vw, 20px);
    }

    .slider-counter {
      font-size: clamp(8px, 0.9vw, 10px);
      padding: clamp(1px, 0.4vw, 2px) clamp(4px, 0.8vw, 6px);
    }
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.5vw, 16px);

  .product-info {
    display: flex;
    flex-direction: column;
    gap: clamp(6px, 1vw, 8px);
  }

  .product-actions {
    display: flex;
    align-items: center;
    gap: clamp(8px, 1.5vw, 12px);
    flex-wrap: wrap;
  }

  .enquiry-section {
    margin-top: clamp(12px, 1.5vw, 16px);
    padding: clamp(12px, 1.5vw, 16px);
    background: #f8f9fa;
    border-radius: 6px;
    border: 1px solid #e0e0e0;

    .enquiry-toggle {
      display: inline-flex;
      align-items: center;
      gap: clamp(6px, 1vw, 8px);
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      padding: clamp(6px, 1vw, 8px) clamp(12px, 2vw, 16px);
      font-size: clamp(12px, 1.4vw, 14px);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: #0056b3;
      }
    }

    .enquiry-form {
      margin-top: clamp(12px, 1.5vw, 16px);
      animation: slideDown 0.3s ease;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(8px, 1.5vw, 12px);
      margin-bottom: clamp(8px, 1.5vw, 12px);

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: clamp(2px, 0.5vw, 4px);
    }

    .form-label {
      font-size: clamp(12px, 1.3vw, 13px);
      font-weight: 500;
      color: #333;
    }

    .form-input,
    .form-textarea {
      padding: clamp(6px, 1vw, 8px) clamp(8px, 1.5vw, 12px);
      border: 1px solid #e9ecef;
      border-radius: 4px;
      font-size: clamp(12px, 1.4vw, 14px);

      &:focus {
        outline: none;
        border-color: #007bff;
      }
    }

    .form-textarea {
      min-height: clamp(60px, 8vw, 80px);
      resize: vertical;
    }

    .submit-button {
      background: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      padding: clamp(8px, 1.2vw, 10px) clamp(12px, 2vw, 16px);
      font-size: clamp(12px, 1.4vw, 14px);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover:not(:disabled) {
        background: #218838;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        max-height: 0;
      }
      to {
        opacity: 1;
        max-height: 600px;
      }
    }

    @media (max-width: 480px) {
      padding: clamp(8px, 1vw, 12px);
    }
  }

  @media (max-width: 480px) {
    gap: clamp(8px, 1vw, 12px);
  }
`

export const ProductName = styled.h3`
  font-size: clamp(16px, 2vw, 18px);
  font-weight: 500;
  margin: 0;

  a {
    color: #00205b;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
    font-size: clamp(14px, 1.8vw, 16px);
  }
`

export const ProductDescription = styled.p`
  font-size: clamp(12px, 1.4vw, 14px);
  color: #666;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: clamp(11px, 1.2vw, 12px);
  }
`

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(6px, 1vw, 8px);
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: clamp(4px, 0.8vw, 6px);

  @media (max-width: 480px) {
    gap: clamp(4px, 0.8vw, 6px);
    padding: clamp(3px, 0.6vw, 5px);
  }
`

export const QuantityButton = styled.button`
  width: clamp(28px, 3vw, 32px);
  height: clamp(28px, 3vw, 32px);
  border: none;
  border-radius: 4px;
  background: white;
  color: #00205b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: clamp(24px, 2.5vw, 28px);
    height: clamp(24px, 2.5vw, 28px);
  }
`

export const QuantityDisplay = styled.span`
  font-size: clamp(14px, 1.6vw, 16px);
  font-weight: 500;
  color: #00205b;
  min-width: clamp(20px, 2vw, 24px);
  text-align: center;

  @media (max-width: 480px) {
    font-size: clamp(12px, 1.4vw, 14px);
    min-width: clamp(16px, 1.8vw, 20px);
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: clamp(6px, 1vw, 8px);
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 6px;
  padding: clamp(6px, 1vw, 8px) clamp(12px, 1.5vw, 16px);
  font-size: clamp(12px, 1.4vw, 14px);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: clamp(4px, 0.8vw, 6px) clamp(8px, 1.2vw, 12px);
    font-size: clamp(11px, 1.2vw, 12px);
  }
`

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: clamp(40px, 5vw, 60px) clamp(12px, 2vw, 20px);
  background: #f8f9fa;
  border-radius: 8px;
  margin-top: clamp(16px, 2vw, 20px);

  @media (max-width: 480px) {
    padding: clamp(24px, 4vw, 40px) clamp(8px, 1.5vw, 12px);
    margin-top: clamp(12px, 1.5vw, 16px);
  }
`

export const EmptyCartIcon = styled.div`
  color: #ced4da;
  margin-bottom: clamp(16px, 2vw, 24px);

  svg {
    width: clamp(48px, 6vw, 60px);
    height: clamp(48px, 6vw, 60px);
  }

  @media (max-width: 480px) {
    margin-bottom: clamp(12px, 1.5vw, 16px);

    svg {
      width: clamp(36px, 5vw, 48px);
      height: clamp(36px, 5vw, 48px);
    }
  }
`

export const EmptyCartTitle = styled.h2`
  font-size: clamp(20px, 2.5vw, 24px);
  font-weight: 600;
  color: #495057;
  margin: 0 0 clamp(12px, 1.5vw, 16px) 0;

  @media (max-width: 480px) {
    font-size: clamp(18px, 2.2vw, 20px);
  }
`

export const EmptyCartDescription = styled.p`
  font-size: clamp(14px, 1.6vw, 16px);
  color: #6c757d;
  margin: 0 0 clamp(16px, 2vw, 24px) 0;
  max-width: clamp(400px, 50vw, 500px);
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: clamp(12px, 1.4vw, 14px);
    max-width: clamp(300px, 80vw, 400px);
    margin-bottom: clamp(12px, 1.5vw, 16px);
  }
`

export const ContinueShoppingButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: clamp(6px, 1vw, 8px);
  background: #00205b;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  padding: clamp(8px, 1.5vw, 12px) clamp(16px, 2.5vw, 24px);
  font-size: clamp(14px, 1.6vw, 16px);
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #003d82;
  }

  @media (max-width: 480px) {
    padding: clamp(6px, 1.2vw, 8px) clamp(12px, 2vw, 16px);
    font-size: clamp(12px, 1.4vw, 14px);
  }
`

export const ClearCartButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 6px;
  padding: clamp(8px, 1.2vw, 10px) clamp(16px, 2vw, 20px);
  font-size: clamp(12px, 1.4vw, 14px);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: clamp(6px, 1vw, 8px) clamp(12px, 1.8vw, 16px);
    font-size: clamp(11px, 1.2vw, 12px);
  }
`

export const CartSummary = styled.div`
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: clamp(16px, 2vw, 24px);
  height: fit-content;

  @media (min-width: 1024px) {
    position: sticky;
    top: clamp(80px, 10vw, 100px);
  }

  @media (max-width: 480px) {
    padding: clamp(12px, 1.5vw, 16px);
  }

  .bulk-enquiry-section {
    margin-top: clamp(12px, 1.5vw, 16px);
    padding: clamp(12px, 1.5vw, 16px);
    background: #f8f9fa;
    border-radius: 6px;
    border: 1px solid #e0e0e0;

    .enquiry-form {
      animation: slideDown 0.3s ease;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(8px, 1.5vw, 12px);
      margin-bottom: clamp(8px, 1.5vw, 12px);

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: clamp(2px, 0.5vw, 4px);
    }

    .form-label {
      font-size: clamp(12px, 1.3vw, 13px);
      font-weight: 500;
      color: #333;
    }

    .form-input,
    .form-textarea {
      padding: clamp(6px, 1vw, 8px) clamp(8px, 1.5vw, 12px);
      border: 1px solid #e9ecef;
      border-radius: 4px;
      font-size: clamp(12px, 1.4vw, 14px);

      &:focus {
        outline: none;
        border-color: #007bff;
      }
    }

    .form-textarea {
      min-height: clamp(60px, 8vw, 80px);
      resize: vertical;
    }

    .submit-button {
      background: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      padding: clamp(8px, 1.2vw, 10px) clamp(12px, 2vw, 16px);
      font-size: clamp(12px, 1.4vw, 14px);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover:not(:disabled) {
        background: #218838;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        max-height: 0;
      }
      to {
        opacity: 1;
        max-height: 600px;
      }
    }

    @media (max-width: 480px) {
      padding: clamp(8px, 1vw, 12px);
    }
  }
`

export const SummaryTitle = styled.h3`
  font-size: clamp(18px, 2vw, 20px);
  font-weight: 600;
  color: #00205b;
  margin: 0 0 clamp(16px, 2vw, 20px) 0;

  @media (max-width: 480px) {
    font-size: clamp(16px, 1.8vw, 18px);
    margin-bottom: clamp(12px, 1.5vw, 16px);
  }
`

export const ItemsList = styled.div`
  margin-bottom: clamp(16px, 2vw, 24px);
  padding-bottom: clamp(12px, 1.5vw, 16px);
  border-bottom: 1px solid #f0f0f0;

  .summary-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: clamp(8px, 1vw, 12px);
    font-size: clamp(12px, 1.4vw, 14px);
    color: #666;

    span:first-child {
      font-weight: 500;
      color: #333;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: clamp(12px, 1.5vw, 16px);
    padding-bottom: clamp(8px, 1vw, 12px);

    .summary-item {
      font-size: clamp(11px, 1.2vw, 12px);
      margin-bottom: clamp(6px, 0.8vw, 8px);
    }
  }
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.5vw, 12px);

  @media (max-width: 480px) {
    gap: clamp(6px, 1vw, 8px);
  }
`

export const CheckoutButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  padding: clamp(8px, 1.5vw, 12px) clamp(16px, 2.5vw, 24px);
  font-size: clamp(14px, 1.6vw, 16px);
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(6px, 1vw, 8px);
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #c0392b;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: clamp(6px, 1.2vw, 8px) clamp(12px, 2vw, 16px);
    font-size: clamp(12px, 1.4vw, 14px);
  }
`

export const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: clamp(12px, 1.5vw, 16px);
  color: #00205b;
  font-size: clamp(16px, 1.8vw, 18px);
  font-weight: 500;

  svg {
    width: clamp(36px, 4vw, 48px);
    height: clamp(36px, 4vw, 48px);
  }

  @media (max-width: 480px) {
    gap: clamp(8px, 1vw, 12px);
    font-size: clamp(14px, 1.6vw, 16px);

    svg {
      width: clamp(28px, 3.5vw, 36px);
      height: clamp(28px, 3.5vw, 36px);
    }
  }
`

export const Toast = styled.div`
  position: fixed;
  top: clamp(16px, 2vw, 24px);
  right: clamp(16px, 2vw, 24px);
  background-color: ${props => props.$success ? "#2ecc71" : "#e74c3c"};
  color: white;
  padding: clamp(8px, 1.5vw, 12px) clamp(16px, 2vw, 24px);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  font-size: clamp(12px, 1.4vw, 14px);
  max-width: clamp(280px, 80vw, 400px);
  word-break: break-word;

  @media (max-width: 480px) {
    top: clamp(12px, 1.5vw, 16px);
    right: clamp(12px, 1.5vw, 16px);
    padding: clamp(6px, 1vw, 8px) clamp(12px, 1.5vw, 16px);
    font-size: clamp(11px, 1.2vw, 12px);
    max-width: clamp(240px, 90vw, 320px);
  }
`