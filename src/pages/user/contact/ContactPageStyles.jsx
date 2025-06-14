import styled from "styled-components"

export const ContactContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  background-color: #f8f9fa;
`

export const HeroSection = styled.div`
  background-color: white;
  padding: 60px 40px;
  text-align: center;
`

export const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: #2c5282;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.4;
`

export const OptionsSection = styled.div`
  background-color: white;
  padding: 40px;
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 40px;
    padding: 40px 20px;
  }
`

export const OptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

export const OptionIcon = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: all 0.3s ease;
  
  ${OptionCard}:hover & {
    background-color: #2c5282;
    color: white;
  }
`

export const OptionTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
`

export const InfoSection = styled.div`
  background-color: white;
  padding: 60px 40px;
  text-align: center;
  border-top: 1px solid #eee;
`

export const InfoTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: #333;
  margin: 0 0 30px 0;
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #555;
  
  svg {
    color: #2c5282;
  }
`

export const GrievanceSection = styled.div`
  background-color: white;
  padding: 60px 40px;
  text-align: center;
  border-top: 1px solid #eee;
`

export const GrievanceTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: #333;
  margin: 0 0 30px 0;
`

export const GrievanceContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  
  p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin: 0 0 20px 0;
    text-align: justify;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const MainContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const FindUsSection = styled.div`
  background-color: white;
  padding: 60px 40px;
  border-right: 1px solid #eee;
  
  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid #eee;
  }
`

export const WriteUsSection = styled.div`
  background-color: white;
  padding: 60px 40px;
`

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: #2c5282;
  margin: 0 0 40px 0;
`

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid #ddd;
`

export const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
`

export const LocationCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  border-left: 4px solid #2c5282;
`

export const LocationName = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #2c5282;
  margin: 0 0 10px 0;
`

export const LocationAddress = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #555;
  font-size: 14px;
  line-height: 1.4;
  
  svg {
    color: #2c5282;
    margin-top: 2px;
    flex-shrink: 0;
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

`

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2c5282;
  }
`

export const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2c5282;
  }
`

export const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2c5282;
  }
`

export const SubmitButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-end;
  text-align: center;
  
  &:hover:not(:disabled) {
    background-color: #c0392b;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  color: #2c5282;
`

export const ErrorMessage = styled.div`
  background-color: #fee;
  color: #c53030;
  padding: 12px 16px;
  border-radius: 4px;
  border-left: 4px solid #c53030;
  margin-bottom: 20px;
  font-size: 14px;
`

export const SuccessMessage = styled.div`
  background-color: #f0fff4;
  color: #38a169;
  padding: 12px 16px;
  border-radius: 4px;
  border-left: 4px solid #38a169;
  margin-bottom: 20px;
  font-size: 14px;
`
