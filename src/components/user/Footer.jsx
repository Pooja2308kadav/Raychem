import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import {
  FooterContainer,
  FooterTop,
  FooterTitle,
  FooterContent,
  CertificationSection,
  CertificationRow,
  CertificationBox,
  NewsletterSection,
  InputGroup,
  Input,
  SubmitButton,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  SocialSection,
  SocialTitle,
  SocialIcons,
  SocialIcon,
  FooterLinks,
  LinksColumn,
  ColumnTitle,
  LinksList,
  LinkItem,
  CopyrightSection,
  FooterDecoration
} from '../styles/Footer';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const categoriesResponse = await axiosInstance.get('/categories');
        // Limit to 7 categories
        setCategories(categoriesResponse.data.slice(0, 7));
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleNavigation = (route) => {
    navigate(route);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (consent) {
      console.log('Newsletter signup with email:', email);
      setEmail('');
      setConsent(false);
    } else {
      alert('Please agree to receive updates.');
    }
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (consent) {
      console.log('RCS subscription with phone:', phone);
      setPhone('');
      setConsent(false);
    } else {
      alert('Please agree to receive updates.');
    }
  };

  const certifications = [
    { id: 1, text: 'ISO 14001 & ISO 45001' },
    { id: 2, text: 'ISO 17025' },
    { id: 3, text: 'ISO 9001' },
    { id: 4, text: 'ISO/IEC 27001' }
  ];

  const socialIcons = [
    { id: 1, name: 'Twitter', icon: '𝕏', url: 'https://twitter.com' },
    { id: 2, name: 'Facebook', icon: 'f', url: 'https://facebook.com' },
    { id: 3, name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com' },
    { id: 4, name: 'YouTube', icon: '▶', url: 'https://youtube.com' },
    { id: 5, name: 'Instagram', icon: '📷', url: 'https://instagram.com' }
  ];

  const footerLinks = [
    {
      title: 'Products',
      links: isLoading
        ? [{ name: 'Loading...', route: '#' }]
        : categories.map((category) => ({
            name: category.name,
            route: `/category/${category.slug}`,
          })),
    },
    {
      title: 'Industries & Applications',
      links: [
        { name: 'Defense & Aerospace', route: '/defense-aerospace' },
        { name: 'Electric Vehicle', route: '/electric-vehicle' },
        { name: 'Energy', route: '/energy' },
        { name: 'Industry', route: '/industry' },
        { name: 'Infrastructure', route: '/infrastructure' },
        { name: 'Oil & Gas', route: '/oil-and-gas' },
        { name: 'Transportation', route: '/tranportation' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Power Services', route: '/powerservice' },
        { name: 'Transformer Services', route: '/transformerServices' },
        { name: 'Digital Services', route: '/digital-services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', route: '/aboutus' },
        { name: 'Innovation', route: '/innovation' },
        { name: 'People', route: '/people' },
        { name: 'Commitments', route: '/commitments' }
      ]
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Contact', route: '/contact' },
        { name: 'Cart', route: '/cart' },
        { name: 'Services', route: '/services' },
        { name: 'Terms & Conditions', route: '/terms' },
        { name: 'Privacy Policy', route: '/privacy' }
      ]
    }
  ];

  return (
    <FooterContainer>
      <FooterDecoration />
      <FooterTop>
        <FooterTitle>Stay Connected for Latest Updates</FooterTitle>
      </FooterTop>
      <FooterContent>
        <CertificationSection>
          <ColumnTitle>Our Certifications</ColumnTitle>
          <CertificationRow>
            {certifications.map((cert) => (
              <CertificationBox key={cert.id}>
                <div className="cert-text">{cert.text}</div>
              </CertificationBox>
            ))}
          </CertificationRow>
        </CertificationSection>
        <NewsletterSection>
          <ColumnTitle>Subscribe to Our Newsletter</ColumnTitle>
          <form onSubmit={handleEmailSubmit}>
            <InputGroup>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SubmitButton type="submit">Subscribe</SubmitButton>
            </InputGroup>
          </form>
          <form onSubmit={handlePhoneSubmit}>
            <InputGroup>
              <span className="country-code">+91</span>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <SubmitButton type="submit">Get RCS</SubmitButton>
            </InputGroup>
          </form>
          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <CheckboxLabel htmlFor="consent">
              I agree to receive updates and promotional messages. I understand I can unsubscribe at any time.
            </CheckboxLabel>
          </CheckboxContainer>
        </NewsletterSection>
        <SocialSection>
          <SocialTitle>Follow Us On</SocialTitle>
          <SocialIcons>
            {socialIcons.map((social) => (
              <SocialIcon
                key={social.id}
                href={social.url}
                title={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </SocialIcon>
            ))}
          </SocialIcons>
        </SocialSection>
      </FooterContent>
      <FooterLinks>
        {footerLinks.map((column, index) => (
          <LinksColumn key={index} style={{ '--index': index }}>
            <ColumnTitle>{column.title}</ColumnTitle>
            <LinksList>
              {column.links.map((link, linkIndex) => (
                <LinkItem key={linkIndex}>
                  <Link to={link.route} style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => handleNavigation(link.route)}>
                    {link.name}
                  </Link>
                </LinkItem>
              ))}
            </LinksList>
          </LinksColumn>
        ))}
      </FooterLinks>
      <CopyrightSection>
        <div className="copyright-content">
          <div className="company-info">
            <strong>© 2025 Raychem RPG Private Limited.</strong> All Rights Reserved.
          </div>
        </div>
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;