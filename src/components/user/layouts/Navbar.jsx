import styled, { keyframes } from 'styled-components';
import { useState, useEffect, useRef } from "react";
import { Search, MessageSquare, ClipboardList, X, Menu, ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import Logo1 from "../../../assets/logo.png";
import defenceimg from "../../../assets/defence.jpg";
import electricVehicleImg from "../../../assets/electricVehicle.jpg";
import energyimg from "../../../assets/energy.jpg";
import infrastructureimg from "../../../assets/Infrastructure.jpg";
import oilimg from "../../../assets/Oil.jpg";
import transportationimg from "../../../assets/Transportation.jpg";
import powerservice from "../../../assets/powerServices.jpg";
import transformerService from "../../../assets/TransformerServices.jpg";
import digitalService from "../../../assets/ser1.jpeg";
import companyimg from "../../../assets/company.jpg";
import {
  NavbarContainer,
  NavbarInner,
  LogoContainer,
  Logo,
  NavItems,
  NavItem,
  NavLink,
  DropdownContainer,
  DropdownContent,
  ProductsContent,
  IndustriesContent,
  ServicesContent,
  ResourcesContent,
  CompanyContent,
  DropdownSection,
  DropdownTitle,
  HeartIcon,
  DropdownLinks,
  DropdownLink,
  DropdownHeader,
  DropdownDescription,
  IndustryGrid,
  IndustryItem,
  IndustryImage,
  IndustryName,
  ServiceGrid,
  ServiceItem,
  ServiceImage,
  ServiceName,
  ServiceImageLarge,
  ServiceCaption,
  ResourceLinks,
  ResourceColumn,
  ResourceLinkItem,
  ResourceLink,
  ResourceLinkArrow,
  CompanyLinks,
  CompanyImageColumn,
  CompanyImage,
  CompanyImageCaption,
  NavActions,
  SearchButton,
  ContactButton,
  Cart,
  SearchInput,
  SearchBarCloseButton,
  MobileMenuButton,
  MobileSidebar,
  MobileSidebarHeader,
  MobileSidebarCloseButton,
  MobileSidebarContent,
  MobileNavItem,
  MobileNavLink,
  MobileSubMenuItem,
  MobileOverlay,
  SearchWrapper,
  MobileSubMenuSlide,
  MobileSubMenuHeader,
  MobileBackButton,
  SearchSuggestions,
  SuggestionItem
} from "../../styles/NavbarStyles";

const BASE_URL = "http://localhost:3000";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSlide, setActiveMobileSlide] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const hoverTimeoutRef = useRef(null);

  // Handle scroll and resize events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
        setActiveMobileSlide(null);
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fetch categories, subcategories
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [categoriesResponse, subcategoriesResponse] = await Promise.all([
          axiosInstance.get("/categories"),
          axiosInstance.get("/subcategories"),
        ]);

        setCategories(categoriesResponse.data);
        setSubcategories(subcategoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Focus search input when search bar opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Search suggestions logic
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchSuggestions([]);
      return;
    }

    const suggestions = [
      ...categories.map(cat => ({ type: 'category', name: cat.name, slug: cat.slug })),
      ...subcategories.map(subcat => ({ type: 'subcategory', name: subcat.name, slug: subcat.slug })),
      ...[
        { type: 'industry', name: 'Defense & Aerospace', slug: 'defense-aerospace' },
        { type: 'industry', name: 'Infrastructure', slug: 'infrastructure' },
        { type: 'industry', name: 'Electric Vehicle', slug: 'electric-vehicle' },
        { type: 'industry', name: 'Oil & Gas', slug: 'oil-and-gas' },
        { type: 'industry', name: 'Energy', slug: 'energy' },
        { type: 'industry', name: 'Transportation', slug: 'transportation' },
        { type: 'service', name: 'Power Services', slug: 'powerservice' },
        { type: 'service', name: 'Transformer Services', slug: 'transformerServices' },
        { type: 'service', name: 'Digital Services', slug: 'digital-services' },
        { type: 'resource', name: 'Product Catalogs', slug: 'resources#product-catalog' },
        { type: 'resource', name: 'Product Certificates', slug: 'resources#certificates' },
        { type: 'company', name: 'About Us', slug: 'aboutus' },
      ]
    ].filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);

    setSearchSuggestions(suggestions);
  }, [searchQuery, categories, subcategories]);

  const handleMouseEnter = (menu) => {
    if (windowWidth > 1024) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = (e) => {
    if (windowWidth > 1024) {
      const dropdown = dropdownRef.current;
      if (dropdown && dropdown.contains(e.relatedTarget)) return;
      hoverTimeoutRef.current = setTimeout(() => {
        setActiveMenu(null);
      }, 200);
    }
  };

  const handleNavItemsMouseLeave = (e) => {
    if (windowWidth > 1024) {
      const dropdown = dropdownRef.current;
      if (!dropdown || !dropdown.contains(e.relatedTarget)) {
        hoverTimeoutRef.current = setTimeout(() => {
          setActiveMenu(null);
        }, 200);
      }
    }
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = (e) => {
    if (windowWidth > 1024) {
      const navItems = navRef.current;
      if (!navItems || !navItems.contains(e.relatedTarget)) {
        hoverTimeoutRef.current = setTimeout(() => {
          setActiveMenu(null);
        }, 200);
      }
    }
  };

  const getSubcategoriesForCategory = (categoryId) => {
    return subcategories.filter((subcat) => {
      const subcatCategoryId = typeof subcat.categoryId === "object" ? subcat.categoryId?._id : subcat.categoryId;
      return subcatCategoryId === categoryId;
    });
  };

  const organizedCategories = categories.map((category) => ({
    ...category,
    subcats: getSubcategoriesForCategory(category._id),
  }));

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) {
      setSearchQuery("");
      setSearchSuggestions([]);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveMobileSlide(null);
    setIsSearchOpen(false);
  };

  const handleMobileSlideOpen = (slide) => {
    setActiveMobileSlide(slide);
  };

  const handleMobileSlideClose = () => {
    setActiveMobileSlide(null);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    let redirectPath = "/search";

    const searchRoutes = {
      product: "/products",
      allproducts: "/allproducts",
      industry: "/industries",
      application: "/industries",
      service: "/services",
      resource: "/resources",
      industriesandapplications: "/IndustriesAndApplications",
      company: "/aboutus",
      about: "/aboutus",
      defense: "/defense-aerospace",
      aerospace: "/defense-aerospace",
      infrastructure: "/infrastructure",
      "electric vehicle": "/electric-vehicle",
      ev: "/electric-vehicle",
      oil: "/oil-and-gas",
      gas: "/oil-and-gas",
      energy: "/energy",
      transportation: "/transportation",
      "power service": "/powerservice",
      "transformer service": "/transformerServices",
      "digital service": "/digital-services",
      contact: "/contact",
      cart: "/cart",
    };

    for (const [key, path] of Object.entries(searchRoutes)) {
      if (query.includes(key)) {
        redirectPath = path;
        break;
      }
    }

    navigate(redirectPath);
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchSuggestions([]);
    setIsMobileMenuOpen(false);
  };

  const handleSuggestionClick = (suggestion) => {
    let path = '';
    switch (suggestion.type) {
      case 'category':
        path = `/category/${suggestion.slug}`;
        break;
      case 'subcategory':
        path = `/subcategory/${suggestion.slug}`;
        break;
      default:
        path = `/${suggestion.slug}`;
    }
    navigate(path);
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchSuggestions([]);
  };

  const renderDropdownContent = () => {
    switch (activeMenu) {
      case "products":
        return (
          <ProductsContent>
            {isLoading ? (
              <DropdownSection>
                <DropdownTitle>Loading...</DropdownTitle>
              </DropdownSection>
            ) : (
              organizedCategories.map((category) => (
                <DropdownSection key={category._id}>
                  <DropdownTitle>
                    <HeartIcon />
                    <Link to={`/category/${category.slug}`} aria-label={`View ${category.name} category`}>
                      {category.name}
                    </Link>
                  </DropdownTitle>
                  {category.subcats && category.subcats.length > 0 ? (
                    <DropdownLinks>
                      {category.subcats.map((subcat) => (
                        <DropdownLink key={subcat._id}>
                          <Link to={`/subcategory/${subcat.slug}`} aria-label={`View ${subcat.name} subcategory`}>
                            {subcat.name}
                          </Link>
                        </DropdownLink>
                      ))}
                    </DropdownLinks>
                  ) : (
                    <DropdownLinks>
                      <DropdownLink>No subcategories available</DropdownLink>
                    </DropdownLinks>
                  )}
                </DropdownSection>
              ))
            )}
          </ProductsContent>
        );
      case "industries":
        return (
          <IndustriesContent>
            <div>
              <DropdownHeader>Industry Solutions</DropdownHeader>
              <DropdownDescription>
                Raychem RPG provides tailored solutions for various industries with innovative and practical approaches.
              </DropdownDescription>
            </div>
            <IndustryGrid>
              {[
                { to: "/defense-aerospace", img: defenceimg, name: "Defense & Aerospace" },
                { to: "/infrastructure", img: infrastructureimg, name: "Infrastructure" },
                { to: "/electric-vehicle", img: electricVehicleImg, name: "Electric Vehicle" },
                { to: "/oil-and-gas", img: oilimg, name: "Oil & Gas" },
                { to: "/energy", img: energyimg, name: "Energy" },
                { to: "/transportation", img: transportationimg, name: "Transportation" },
              ].map((industry) => (
                <IndustryItem key={industry.to}>
                  <Link to={industry.to} aria-label={`View ${industry.name} industry`}>
                    <IndustryImage
                      src={industry.img || "/placeholder.svg"}
                      alt={industry.name}
                      onError={(e) => {
                        console.log(`Failed to load image for ${industry.name}`);
                        e.target.src = "/placeholder.svg";
                      }}
                    />
                    <IndustryName>{industry.name}</IndustryName>
                  </Link>
                </IndustryItem>
              ))}
            </IndustryGrid>
          </IndustriesContent>
        );
      case "services":
        return (
          <ServicesContent>
            <div>
              <DropdownHeader>Our Services</DropdownHeader>
              <DropdownDescription>
                Comprehensive consultancy and service solutions for your business needs.
              </DropdownDescription>
            </div>
            <ServiceGrid>
              {[
                { to: "/powerservice", img: powerservice, name: "Power Services" },
                { to: "/transformerServices", img: transformerService, name: "Transformer Services" },
                { to: "/digital-services", img: digitalService, name: "Digital Services" },
              ].map((service) => (
                <ServiceItem key={service.to}>
                  <Link to={service.to} aria-label={`View ${service.name} service`}>
                    <ServiceImage
                      src={service.img || "/placeholder.svg"}
                      alt={service.name}
                      onError={(e) => {
                        console.log(`Failed to load image for ${service.name}`);
                        e.target.src = "/placeholder.svg";
                      }}
                    />
                    <ServiceName>{service.name}</ServiceName>
                  </Link>
                </ServiceItem>
              ))}
            </ServiceGrid>
            <div>
              <ServiceImageLarge
                src={powerservice || "/placeholder.svg"}
                alt="Electrical Solutions"
                onError={(e) => {
                  console.log("Failed to load large service image");
                  e.target.src = "/placeholder.svg";
                }}
              />
              <ServiceCaption>End-to-end reliable solutions for electrical equipment and networks.</ServiceCaption>
            </div>
          </ServicesContent>
        );
      case "resources":
        return (
          <ResourcesContent>
            <div>
              <DropdownHeader>Resources</DropdownHeader>
              <DropdownDescription>
                Access a wealth of information and references at your fingertips. Provides references and links to multiple sources of information, be it Brochures, 3-D images, O&M Manuals, Certificates, etc. Learn more of our facilities in Vasai, Chakan, and Halol.
              </DropdownDescription>
            </div>
            <ResourceLinks>
              <ResourceColumn>
                {[
                  { name: "Product Catalogs", to: "/resources#product-catalog" },
                  { name: "Product Certificates", to: "/resources#certificates" },
                ].map((item) => (
                  <ResourceLinkItem key={item.name}>
                    <ResourceLink>
                      <Link to={item.to} style={{ color: "inherit", textDecoration: "none" }} aria-label={`View ${item.name}`}>
                        {item.name}
                      </Link>
                    </ResourceLink>
                    <ResourceLinkArrow>›</ResourceLinkArrow>
                  </ResourceLinkItem>
                ))}
              </ResourceColumn>
            </ResourceLinks>
          </ResourcesContent>
        );
      case "company":
        return (
          <CompanyContent>
            <div>
              <DropdownHeader>About Raychem RPG</DropdownHeader>
              <DropdownDescription>
                Learn more about our mission, values, and innovative journey since 1989.
              </DropdownDescription>
            </div>
            <CompanyLinks>
              <CompanyImageColumn>
                <CompanyImage
                  src={companyimg || "/placeholder.svg"}
                  alt="Raychem RPG"
                  onError={(e) => {
                    console.log("Failed to load company image");
                    e.target.src = "/placeholder.svg";
                  }}
                />
                <CompanyImageCaption>Raychem RPG - Innovating since 1989</CompanyImageCaption>
              </CompanyImageColumn>
            </CompanyLinks>
          </CompanyContent>
        );
      default:
        return null;
    }
  };

  const renderMobileSubMenuSlide = () => {
    switch (activeMobileSlide) {
      case "products":
        return (
          <>
            <MobileSubMenuHeader>
              <MobileBackButton onClick={handleMobileSlideClose} aria-label="Back to main menu">
                <ChevronLeft size={windowWidth <= 480 ? 18 : windowWidth <= 768 ? 20 : 24} />
              </MobileBackButton>
              Products
              <MobileSidebarCloseButton onClick={handleMobileMenuToggle} aria-label="Close mobile menu">
                <X size={windowWidth <= 480 ? 18 : windowWidth <= 768 ? 20 : 24} />
              </MobileSidebarCloseButton>
            </MobileSubMenuHeader>
            <MobileSidebarContent>
              {isLoading ? (
                <MobileNavItem>Loading...</MobileNavItem>
              ) : (
                organizedCategories.map((category) => (
                  <MobileNavItem key={category._id}>
                    <MobileNavLink>
                      <Link to={`/category/${category.slug}`} style={{ color: "inherit", textDecoration: "none" }} aria-label={`View ${category.name} category`}>
                        {category.name}
                      </Link>
                    </MobileNavLink>
                    {category.subcats && category.subcats.length > 0 ? (
                      category.subcats.map((subcat) => (
                        <MobileSubMenuItem key={subcat._id}>
                          <Link to={`/subcategory/${subcat.slug}`} style={{ color: "inherit", textDecoration: "none" }} aria-label={`View ${subcat.name} subcategory`}>
                            {subcat.name}
                          </Link>
                        </MobileSubMenuItem>
                      ))
                    ) : (
                      <MobileSubMenuItem>No subcategories available</MobileSubMenuItem>
                    )}
                  </MobileNavItem>
                ))
              )}
            </MobileSidebarContent>
          </>
        );
      case "industries":
        return (
          <>
            <MobileSubMenuHeader>
              <MobileBackButton onClick={handleMobileSlideClose} aria-label="Back to main menu">
                <ChevronLeft size={windowWidth <= 480 ? 18 : windowWidth <= 768 ? 20 : 24} />
              </MobileBackButton>
              Industries & Applications
              <MobileSidebarCloseButton onClick={handleMobileMenuToggle} aria-label="Close mobile menu">
                <X size={windowWidth <= 480 ? 18 : windowWidth <= 768 ? 20 : 24} />
              </MobileSidebarCloseButton>
            </MobileSubMenuHeader>
            <MobileSidebarContent>
              {[
                { to: "/defense-aerospace", name: "Defense & Aerospace" },
                { to: "/infrastructure", name: "Infrastructure" },
                { to: "/electric-vehicle", name: "Electric Vehicle" },
                { to: "/oil-and-gas", name: "Oil & Gas" },
                { to: "/energy", name: "Energy" },
                { to: "/transportation", name: "Transportation" },
              ].map((industry) => (
                <MobileNavItem key={industry.to}>
                  <MobileNavLink>
                    <Link to={industry.to} style={{ color: "inherit", textDecoration: "none" }} aria-label={`View ${industry.name} industry`}>
                      {industry.name}
                    </Link>
                  </MobileNavLink>
                </MobileNavItem>
              ))}
            </MobileSidebarContent>
          </>
        );
      case "services":
        return (
          <>
            <MobileSubMenuHeader>
              <MobileBackButton onClick={handleMobileSlideClose} aria-label="Back to main menu">
                <ChevronLeft size={windowWidth <= 480 ? 18 : windowWidth <= 768 ? 20 : 24} />
              </MobileBackButton>
              Services
              <MobileSidebarCloseButton onClick={handleMobileMenuToggle} aria-label="Close mobile menu">
                <X size={windowWidth <= 480 ? 18 : windowWidth <= 768 ? 20 : 24} />
              </MobileSidebarCloseButton>
            </MobileSubMenuHeader>
            <MobileSidebarContent>
              {[
                { to: "/powerservice", name: "Power Services" },
                { to: "/transformerServices", name: "Transformer Services" },
                { to: "/digital-services", name: "Digital Services" },
              ].map((service) => (
                <MobileNavItem key={service.to}>
                  <MobileNavLink>
                    <Link to={service.to} style={{ color: "inherit", textDecoration: "none" }} aria-label={`View ${service.name} service`}>
                      {service.name}
                    </Link>
                  </MobileNavLink>
                </MobileNavItem>
              ))}
            </MobileSidebarContent>
          </>
        );
      case "resources":
        return (
          <>
            <MobileSubMenuHeader>
              <MobileBackButton onClick={handleMobileSlideClose} aria-label="Back to main menu">
                <ChevronLeft size={windowWidth <= 480 ? 18 : windowWidth <= 768 ? 20 : 24} />
              </MobileBackButton>
              Resources
              <MobileSidebarCloseButton onClick={handleMobileMenuToggle} aria-label="Close mobile menu">
                <X size={windowWidth <= 480 ? 18 : windowWidth <= 768 ? 20 : 24} />
              </MobileSidebarCloseButton>
            </MobileSubMenuHeader>
            <MobileSidebarContent>
              {[
                { name: "Product Catalogs", to: "/resources#product-catalog" },
                { name: "Product Certificates", to: "/resources#certificates" },
              ].map((item) => (
                <MobileNavItem key={item.name}>
                  <MobileNavLink>
                    <Link to={item.to} style={{ color: "inherit", textDecoration: "none" }} aria-label={`View ${item.name}`}>
                      {item.name}
                    </Link>
                  </MobileNavLink>
                </MobileNavItem>
              ))}
            </MobileSidebarContent>
          </>
        );
      default:
        return null;
    }
  };

  const logoWidth = windowWidth <= 480 ? 100 : windowWidth <= 768 ? 120 : windowWidth <= 1024 ? 140 : 170;

  return (
    <NavbarContainer isScrolled={isScrolled} role="navigation" aria-label="Main navigation">
      <NavbarInner isScrolled={isScrolled}>
        <LogoContainer>
          <Logo>
            <Link to="/" aria-label="Home">
              <img
                src={Logo1 || "/placeholder.svg"}
                alt="Raychem RPG Logo"
                style={{ width: `${logoWidth}px`, height: "auto" }}
                onError={(e) => {
                  console.log("Failed to load logo");
                  e.target.src = "/placeholder.svg";
                }}
              />
            </Link>
          </Logo>
        </LogoContainer>

        <NavItems ref={navRef} onMouseLeave={handleNavItemsMouseLeave}>
          <NavItem onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={handleMouseLeave}>
            <Link to="/allproducts" style={{ color: "inherit", textDecoration: "none" }} aria-label="View all products">
              <NavLink isScrolled={isScrolled}>Products</NavLink>
            </Link>
          </NavItem>
          <NavItem onMouseEnter={() => handleMouseEnter("industries")} onMouseLeave={handleMouseLeave}>
            <Link to="/industries-and-applications" style={{ color: "inherit", textDecoration: "none" }} aria-label="View industries and applications">
              <NavLink isScrolled={isScrolled}>Industries</NavLink>
            </Link>
          </NavItem>
          <NavItem onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
            <Link to="/services" style={{ color: "inherit", textDecoration: "none" }} aria-label="View services">
              <NavLink isScrolled={isScrolled}>Services</NavLink>
            </Link>
          </NavItem>
          <NavItem onMouseEnter={() => handleMouseEnter("resources")} onMouseLeave={handleMouseLeave}>
            <Link to="/resources" style={{ color: "inherit", textDecoration: "none" }} aria-label="View resources">
              <NavLink isScrolled={isScrolled}>Resources</NavLink>
            </Link>
          </NavItem>
          <NavItem onMouseEnter={() => handleMouseEnter("company")} onMouseLeave={handleMouseLeave}>
            <Link to="/aboutus" style={{ color: "inherit", textDecoration: "none" }} aria-label="View company information">
              <NavLink isScrolled={isScrolled}>Company</NavLink>
            </Link>
          </NavItem>
          {activeMenu && (
            <DropdownContainer ref={dropdownRef} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
              <DropdownContent>{renderDropdownContent()}</DropdownContent>
            </DropdownContainer>
          )}
        </NavItems>

        <NavActions>
          <SearchWrapper isSearchOpen={isSearchOpen}>
            <SearchButton isScrolled={isScrolled} onClick={handleSearchToggle} aria-label={isSearchOpen ? "Close search" : "Open search"}>
              <Search size={windowWidth <= 480 ? 16 : windowWidth <= 768 ? 18 : 20} />
            </SearchButton>
            <form onSubmit={handleSearchSubmit} style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <SearchInput
                ref={searchInputRef}
                type="text"
                placeholder={windowWidth <= 480 ? "Search..." : windowWidth <= 768 ? "Search products..." : "Search for products, industries, services..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                isSearchOpen={isSearchOpen}
                autoFocus={isSearchOpen}
                aria-label="Search input"
              />
              {isSearchOpen && (
                <SearchBarCloseButton type="button" onClick={handleSearchToggle} aria-label="Close search bar">
                  <X size={windowWidth <= 480 ? 18 : windowWidth <= 768 ? 20 : 24} />
                </SearchBarCloseButton>
              )}
              {isSearchOpen && searchSuggestions.length > 0 && (
                <SearchSuggestions>
                  {searchSuggestions.map((suggestion, index) => (
                    <SuggestionItem 
                      key={index} 
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.name}
                      <span>{suggestion.type}</span>
                    </SuggestionItem>
                  ))}
                </SearchSuggestions>
              )}
            </form>
          </SearchWrapper>
          <ContactButton>
            <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }} aria-label="Contact us">
              <span>Contact Us</span>
            </Link>
          </ContactButton>
          <Cart>
            <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }} aria-label="View cart">
              <ClipboardList size={windowWidth <= 480 ? 20 : windowWidth <= 768 ? 24 : 30} color="white" />
            </Link>
          </Cart>
          <MobileMenuButton isScrolled={isScrolled} onClick={handleMobileMenuToggle} aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}>
            <Menu size={windowWidth <= 480 ? 18 : windowWidth <= 768 ? 20 : 24} />
          </MobileMenuButton>
        </NavActions>
      </NavbarInner>

      <MobileOverlay isOpen={isMobileMenuOpen} onClick={handleMobileMenuToggle} aria-hidden="true" />

      <MobileSidebar isOpen={isMobileMenuOpen} aria-hidden={!isMobileMenuOpen}>
        {activeMobileSlide ? (
          <MobileSubMenuSlide>
            {renderMobileSubMenuSlide()}
          </MobileSubMenuSlide>
        ) : (
          <>
            <MobileSidebarHeader>
              <Logo>
                <Link to="/" aria-label="Home">
                  <img
                    src={Logo1 || "/placeholder.svg"}
                    alt="Raychem RPG Logo"
                    style={{ width: `${logoWidth}px`, height: "auto" }}
                    onError={(e) => {
                      console.log("Failed to load logo");
                      e.target.src = "/placeholder.svg";
                    }}
                  />
                </Link>
              </Logo>
              <MobileSidebarCloseButton onClick={handleMobileMenuToggle} aria-label="Close mobile menu">
                <X size={windowWidth <= 480 ? 18 : windowWidth <= 768 ? 20 : 24} />
              </MobileSidebarCloseButton>
            </MobileSidebarHeader>

            <MobileSidebarContent>
              <MobileNavItem>
                <MobileNavLink onClick={() => handleMobileSlideOpen("products")} aria-label="View products">
                  Products
                </MobileNavLink>
              </MobileNavItem>
              <MobileNavItem>
                <MobileNavLink onClick={() => handleMobileSlideOpen("industries")} aria-label="View industries and applications">
                  Industries & Applications
                </MobileNavLink>
              </MobileNavItem>
              <MobileNavItem>
                <MobileNavLink onClick={() => handleMobileSlideOpen("services")} aria-label="View services">
                  Services
                </MobileNavLink>
              </MobileNavItem>
              <MobileNavItem>
                <MobileNavLink onClick={() => handleMobileSlideOpen("resources")} aria-label="View resources">
                  Resources
                </MobileNavLink>
              </MobileNavItem>
              <MobileNavItem>
                <MobileNavLink>
                  <Link to="/aboutus" style={{ color: "inherit", textDecoration: "none" }} aria-label="View About Us">
                    Company
                  </Link>
                </MobileNavLink>
              </MobileNavItem>
              <MobileNavItem>
                <MobileNavLink>
                  <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }} aria-label="Contact us">
                    Contact Us
                  </Link>
                </MobileNavLink>
              </MobileNavItem>
              <MobileNavItem>
                <MobileNavLink>
                  <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }} aria-label="View cart">
                    Cart
                  </Link>
                </MobileNavLink>
              </MobileNavItem>
            </MobileSidebarContent>
          </>
        )}
      </MobileSidebar>
    </NavbarContainer>
  );
};

export default Navbar;