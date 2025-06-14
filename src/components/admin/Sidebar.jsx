import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaTachometerAlt,
  FaList,
  FaPlus,
  FaCertificate,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaEye
} from 'react-icons/fa';
import { AuthContext } from '../../App';

const SidebarContainer = styled.div`
  width: 260px;
  height: 100vh;
  background-color: #2d3748;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 0;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  padding: 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4a5568;
    border-radius: 4px;
  }
`;

const SidebarHeader = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #4a5568;
  margin-bottom: 20px;
  color: #e2e8f0;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const SidebarMenuItem = styled.li`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  border-radius: 5px;

  &:hover {
    background-color: #4a5568;
    transform: translateX(5px);
  }

  &.active {
    background-color: #718096;
    transform: translateX(5px);
  }

  span {
    font-size: 1rem;
    color: #e2e8f0;
  }
`;

const SubMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #2d3748;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const SubMenuItem = styled.li`
  padding: 10px 40px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  font-size: 0.95rem;
  background-color: #2d3748;

  &:hover {
    background-color: #4a5568;
  }

  &.active {
    background-color: #718096;
  }

  color: #e2e8f0;
`;

const LogoutButton = styled.button`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  font-size: 1rem;
  margin-bottom: 20px;
  border-radius: 5px;

  &:hover {
    background-color: #e53e3e;
    transform: scale(1.05);
  }
`;

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setAuthState } = useContext(AuthContext);
  const [isEnquiriesOpen, setIsEnquiriesOpen] = useState(false);

  const toggleEnquiries = () => {
    setIsEnquiriesOpen(!isEnquiriesOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setAuthState({
      isAuthenticated: false,
      userRole: null,
      token: null,
    });
    navigate('/admin/login');
  };

  return (
    <SidebarContainer>
      <div>
        <SidebarHeader>Admin Panel</SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem
            className={location.pathname === '/admin/dashboard' ? 'active' : ''}
            onClick={() => navigate('/admin/dashboard')}
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </SidebarMenuItem>

          <SidebarMenuItem
            className={location.pathname === '/admin/add-category' ? 'active' : ''}
            onClick={() => navigate('/admin/add-category')}
          >
            <FaPlus />
            <span>Add Category</span>
          </SidebarMenuItem>

          <SidebarMenuItem
            className={location.pathname === '/admin/view-categories' ? 'active' : ''}
            onClick={() => navigate('/admin/view-categories')}
          >
            <FaEye />
            <span>View Categories</span>
          </SidebarMenuItem>

          <SidebarMenuItem
            className={location.pathname === '/admin/add-subcategory' ? 'active' : ''}
            onClick={() => navigate('/admin/add-subcategory')}
          >
            <FaPlus />
            <span>Add Subcategory</span>
          </SidebarMenuItem>

          <SidebarMenuItem
            className={location.pathname === '/admin/view-subcategories' ? 'active' : ''}
            onClick={() => navigate('/admin/view-subcategories')}
          >
            <FaEye />
            <span>View Subcategories</span>
          </SidebarMenuItem>

          <SidebarMenuItem
            className={location.pathname === '/admin/add-brand' ? 'active' : ''}
            onClick={() => navigate('/admin/add-brand')}
          >
            <FaPlus />
            <span>Add Brands</span>
          </SidebarMenuItem>

          <SidebarMenuItem
            className={location.pathname === '/admin/view-brands' ? 'active' : ''}
            onClick={() => navigate('/admin/view-brands')}
          >
            <FaEye />
            <span>View Brands</span>
          </SidebarMenuItem>

          <SidebarMenuItem
            className={location.pathname === '/admin/add-products' ? 'active' : ''}
            onClick={() => navigate('/admin/add-products')}
          >
            <FaPlus />
            <span>Add Products</span>
          </SidebarMenuItem>

          <SidebarMenuItem
            className={location.pathname === '/admin/view-products' ? 'active' : ''}
            onClick={() => navigate('/admin/view-products')}
          >
            <FaEye />
            <span>View Products</span>
          </SidebarMenuItem>

          <SidebarMenuItem onClick={toggleEnquiries}>
            <FaList />
            <span>See Enquiries</span>
          </SidebarMenuItem>

          <SubMenu isOpen={isEnquiriesOpen}>
            <SubMenuItem
              className={location.pathname === '/admin/simple-enquiries' ? 'active' : ''}
              onClick={() => navigate('/admin/simple-enquiries')}
            >
              Simple Enquiries
            </SubMenuItem>
            <SubMenuItem
              className={location.pathname === '/admin/cart-enquiries' ? 'active' : ''}
              onClick={() => navigate('/admin/cart-enquiries')}
            >
              Enquiries from Cart
            </SubMenuItem>
          </SubMenu>

          <SidebarMenuItem
            className={location.pathname === '/admin/upload-certifications' ? 'active' : ''}
            onClick={() => navigate('/admin/upload-certifications')}
          >
            <FaCertificate />
            <span>Upload Certifications</span>
          </SidebarMenuItem>

          <SidebarMenuItem
            className={location.pathname === '/admin/set-location' ? 'active' : ''}
            onClick={() => navigate('/admin/set-location')}
          >
            <FaMapMarkerAlt />
            <span>Set Location</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>

      <LogoutButton onClick={handleLogout}>
        <FaSignOutAlt />
        <span>Logout</span>
      </LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
