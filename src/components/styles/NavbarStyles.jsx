import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-40px);
    visibility: hidden;
  }
  50% {
    opacity: 0.7;
    transform: translateX(-50%) translateY(-15px);
    visibility: visible;
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    visibility: visible;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutToRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.375rem;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  background-color: ${(props) =>
    props.isHidden
      ? "transparent"
      : props.isScrolled
      ? "#ffffff"
      : "transparent"};

  color: ${(props) =>
    props.isHidden
      ? "transparent"
      : props.isScrolled
      ? "#333"
      : "#fff"};

  box-shadow: ${(props) =>
    props.isHidden
      ? "none"
      : props.isScrolled
      ? "0 2px 10px rgba(0, 0, 0, 0.1)"
      : "none"};

  opacity: ${(props) => (props.isHidden ? "0" : "1")};
  visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};
  pointer-events: ${(props) => (props.isHidden ? "none" : "auto")};

  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    background-color: ${(props) => (props.isHidden ? "transparent" : "white")};
    color: ${(props) => (props.isHidden ? "transparent" : "#333")};
    border-bottom: ${(props) =>
      props.isHidden ? "none" : "0.1px solid rgba(0, 0, 0, 0.1)"};
  }
`;


export const NavbarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.isScrolled ? "0.625rem 1.5rem" : "0.9375rem 1.5rem")};
  max-width: 1400px;
  margin: 0 auto;
  transition: padding 0.3s ease;
  

  @media (max-width: 1024px) {
    padding: ${(props) => (props.isScrolled ? "0.5rem 1rem" : "0.75rem 1rem")};
  }

  @media (max-width: 480px) {
    padding: ${(props) => (props.isScrolled ? "0.5rem 0.75rem" : "0.625rem 0.75rem")};
  }
`;

export const LogoContainer = styled.div`
  flex: 0 0 auto;
  min-width: clamp(100px, 20vw, 170px);
`;

export const Logo = styled.div`
  img {
    width: clamp(100px, 20vw, 170px);
    height: auto;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: clamp(1rem, 2.5vw, 1.5rem);
  position: relative;
  flex: 1;  // Add this line
  min-width: 400px;
  justify-content: center;  // Modify this line
  z-index: 10;

  @media (max-width: 1024px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  position: relative;
  padding: 0.9375rem clamp(0.75rem, 2vw, 1.25rem);
  cursor: pointer;
  white-space: nowrap;

  &:hover::after {
    content: '';
    position: absolute;
    bottom: -0.625rem;
    left: 0;
    width: 100%;
    height: 2px;
    background: #e74c3c;
  }
`;

export const NavLink = styled.span`
  font-size: clamp(0.875rem, 2vw, 1rem);
  font-weight: 600;
  color: ${(props) => (props.isScrolled ? "#333" : "#fff")};
  transition: color 0.3s ease;

  &:hover {
    color: #e74c3c;
  }

  @media (hover: none) {
    &:hover {
      color: inherit;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 0.5rem;
  font-size: clamp(1.25rem, 3.5vw, 1.5rem);

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: clamp(280px, 80vw, 340px);
  height: 100vh;
  background-color: #fff;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  animation: ${props => props.isOpen ? slideInFromRight : slideOutToRight} 0.3s ease;
  overflow-y: auto;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MobileSidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(1rem, 4vw, 1.5rem);
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;
`;

export const MobileSidebarCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.25rem, 3.5vw, 1.5rem);
  transition: color 0.3s ease;

  &:hover {
    color: #e74c3c;
  }
`;

export const MobileSidebarContent = styled.div`
  padding: clamp(0.5rem, 2vw, 1rem);
`;

export const MobileNavItem = styled.div`
  margin-bottom: 0.5rem;
`;

export const MobileNavLink = styled.div`
  font-size: clamp(1rem, 3vw, 1.125rem);
  font-weight: 600;
  color: #333;
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    color: #e74c3c;
    background-color: #f8f9fa;
  }
`;

export const MobileSubMenuSlide = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: clamp(280px, 80vw, 340px);
  height: 100vh;
  background-color: #fff;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.15);
  z-index: 1002;
  animation: ${slideInFromRight} 0.3s ease;
  overflow-y: auto;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MobileSubMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(1rem, 4vw, 1.5rem);
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;
  font-size: clamp(1rem, 3vw, 1.125rem);
  font-weight: 600;
  color: #333;
`;

export const MobileBackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.25rem, 3.5vw, 1.5rem);
  transition: color 0.3s ease;

  &:hover {
    color: #e74c3c;
  }
`;

export const MobileSubMenuItem = styled.div`
  padding: 0.5rem 1rem;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  color: #555;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s ease;

  &:hover {
    color: #0056b3;
    background-color: #e9ecef;
  }
`;

export const MobileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const DropdownContainer = styled.div`
  position: fixed;
  top: clamp(3.5rem, 8vw, 4.375rem);
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  z-index: 100;
  animation: ${slideDown} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  border-radius: 12px;
  overflow: hidden;
  min-height: clamp(150px, 40vw, 200px);
  width: clamp(90vw, 95vw, 98vw);
  max-width: 1600px;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 1440px) {
    width: 92vw;
    max-width: 1400px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const DropdownContent = styled.div`
  padding: clamp(1rem, 2vw, 1.25rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 1400px;

`;

export const ProductsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(0.75rem, 2vw, 1rem);
  align-items: start;
  width: 100%;
  padding: clamp(1rem, 2vw, 1.25rem);
`;

export const IndustriesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
  width: 100%;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #eee;
`;

export const ServicesContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: clamp(0.75rem, 2vw, 1rem);
  width: 100%;
  padding: clamp(1rem, 2vw, 1.25rem);
  min-height: clamp(120px, 30vw, 160px);
`;

export const ResourcesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
  width: 100%;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #eee;
`;

export const CompanyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
  width: 100%;
  padding: clamp(1rem, 2vw, 1.25rem);
  min-height: clamp(120px, 30vw, 160px);
`;

export const DropdownSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: clamp(200px, 25vw, 240px);
`;

export const DropdownTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  font-weight: 600;
  color: #00205b;
  margin: 0 0 0.75rem 0;
  line-height: 1.2;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    }
  }
`;

export const HeartIcon = styled.span`
  display: inline-block;
  width: clamp(0.875rem, 2vw, 1rem);
  height: clamp(0.875rem, 2vw, 1rem);
  background-color: #e74c3c;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const DropdownLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DropdownLink = styled.li`
  font-size: clamp(0.875rem, 2vw, 1rem);
  line-height: 1.4;

  a {
    color: #555;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 0.5rem 0;
    display: block;

    &:hover {
      color: #0056b3;
      padding-left: 0.75rem;
    }
  }
`;

export const BrandLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 0.75rem;
`;

export const BrandLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: clamp(60px, 15vw, 80px);
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: #666;
  transition: all 0.3s ease;
  background-color: #fafafa;

  &:hover {
    border-color: #00205b;
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 32, 91, 0.15);
    background-color: #fff;
  }
`;

export const BrandImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const DropdownHeader = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 700;
  color: #00205b;
  margin: 0 0 1rem 0;
  line-height: 1.2;
`;

export const DropdownDescription = styled.p`
  color: #666;
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`;

export const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
`;

export const IndustryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
  }
`;

export const IndustryImage = styled.img`
  width: clamp(100px, 20vw, 140px);
  height: clamp(60px, 15vw, 90px);
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${IndustryItem}:hover & {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 32, 91, 0.25);
  }
`;

export const IndustryName = styled.h4`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 600;
  color: #333;
  margin: 0;
  text-align: center;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
`;

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
  }
`;

export const ServiceName = styled.h4`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 500;
  color: #333;
  margin: 0;
  text-align: center;
`;

export const ServiceImage = styled.img`
  width: clamp(100px, 20vw, 140px);
  height: clamp(60px, 15vw, 90px);
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${ServiceItem}:hover & {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 32, 91, 0.25);
  }
`;

export const ServiceImageLarge = styled.img`
  width: 100%;
  height: clamp(120px, 25vw, 180px);
  border-radius: 10px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

export const ServiceCaption = styled.p`
  color: #666;
  font-size: clamp(0.875rem, 2vw, 1rem);
  margin: 0;
  line-height: 1.4;
`;

export const ResourceLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
`;

export const ResourceColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ResourceLinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    padding-left: 0.75rem;
    background-color: #f8f9fa;
    border-radius: 6px;
  }
`;

export const ResourceLink = styled.span`
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: clamp(0.875rem, 2vw, 1rem);
  line-height: 1.4;

  &:hover {
    color: #0056b3;
  }
`;

export const ResourceLinkArrow = styled.span`
  color: #e74c3c;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  transition: transform 0.3s ease;

  ${ResourceLinkItem}:hover & {
    transform: translateX(6px);
  }
`;

export const CompanyLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CompanyImageColumn = styled.div`
  max-width: 300px;
  top: 0;
`;

export const CompanyImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  top: 0;
`;

export const CompanyImageCaption = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  text-align: center;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 2.5vw, 1rem);
  flex: 0 0 auto;  // Ensure this is set
  z-index: 20;
`;
export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.isScrolled ? "#333" : "#fff")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: clamp(1rem, 3vw, 1.25rem);
  z-index: 20;

  &:hover {
    background-color: ${(props) => (props.isScrolled ? "#f5f5f5" : "rgba(255, 255, 255, 0.1)")};
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: ${(props) => (props.isSearchOpen ? "clamp(200px, 40vw, 250px)" : "clamp(36px, 10vw, 40px)")};
  transition: width 0.4s ease;
  z-index: 20;

  @media (max-width: 1024px) {
    width: ${(props) => (props.isSearchOpen ? "clamp(160px, 40vw, 200px)" : "clamp(32px, 8vw, 36px)")};
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  width: ${(props) => (props.isSearchOpen ? "100%" : "0")};
  padding: ${(props) => (props.isSearchOpen ? "0.625rem clamp(0.75rem, 2.5vw, 2.5rem) 0.625rem 0.875rem" : "0.625rem 0")};
  border: ${(props) => (props.isSearchOpen ? "2px solid #e0e0e0" : "none")};
  border-radius: 8px;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  outline: none;
  transition: all 0.4s ease;
  opacity: ${(props) => (props.isSearchOpen ? 1 : 0)};
  visibility: ${(props) => (props.isSearchOpen ? "visible" : "hidden")};
  background-color: #fff;
  z-index: 20;

  &:focus {
    border-color: #00205b;
    box-shadow: 0 0 0 3px rgba(0, 32, 91, 0.1);
  }
`;

export const SearchBarCloseButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  transition: all 0.3s ease;
  z-index: 20;

  &:hover {
    color: #e74c3c;
    background-color: #f5f5f5;
    border-radius: 50%;
  }
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  padding: clamp(0.625rem, 2.5vw, 0.75rem);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  justify-content: center;
  width: clamp(100px, 25vw, 120px);
  height: clamp(36px, 10vw, 44px);
  gap: 0.75rem;
  z-index: 20;

  &:hover {
    background-color: #c0392b;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Cart = styled.button`
  background-color: #00205b;
  border: none;
  border-radius: 6px;
  width: clamp(40px, 10vw, 48px);
  height: clamp(40px, 10vw, 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 20;

  &:hover {
    background-color: #001845;
  }
`;

export const SearchSuggestions = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  list-style: none;
  margin: 0.5rem 0 0 0;
  padding: 0.5rem 0;
  z-index: 30;
  max-height: 300px;
  overflow-y: auto;
`;

export const SuggestionItem = styled.li`
  padding: 0.75rem 1rem;
  font-size: clamp(0.875rem, 2vw, 1rem);
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.75rem;
    color: #666;
    text-transform: capitalize;
  }

  &:hover {
    background-color: #f8f9fa;
    color: #e74c3c;
  }
`;

export const NavbarContainer2 = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.375rem;
  z-index: 1000;
  background-color: ${(props) => (props.isScrolled ? "#ffffff" : "rgb(56, 55, 114)")};
  color: ${(props) => (props.isScrolled ? "#333" : "#fff")};
  box-shadow: ${(props) => (props.isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none")};
  transition: all 0.3s ease;
`;