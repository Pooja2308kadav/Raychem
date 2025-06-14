import { useState, useEffect, createContext } from 'react';
import { Router,Routes, Route, Outlet, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/admin/Sidebar';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import AddCategory from './pages/admin/AddCategory';
import AddSubcategory from './pages/admin/AddSubcategory';
import AddBrand from './pages/admin/AddBrand';
import AddProducts from './pages/admin/AddProducts';
import ViewProducts from './pages/admin/ViewProducts';
import SimpleEnquiries from './pages/admin/SimpleEnquiries';
import CartEnquiries from './pages/admin/CartEnquiries';
import UploadCertifications from './pages/admin/UploadCertifications';
import SetLocation from './pages/admin/SetLocation';
import ViewCategories from './pages/admin/ViewCategory';
import ViewSubcategory from './pages/admin/ViewSubcategory';
import ViewBrand from './pages/admin/ViewBrand';
import HomePage from './pages/user/Home';
import DefenseAerospacePage from "./components/user/industriesAndApplication/DefencePage"
import ElectricVehiclePage from "./components/user/industriesAndApplication/ElectricVehicle"
import EnergyPage from './components/user/industriesAndApplication/Energy';
import InfrastructurePage from './components/user/industriesAndApplication/InfrastructurePage';
import OilAndGasPage from './components/user/industriesAndApplication/OilAndGasPage';
import AutomotivePage from './components/user/industriesAndApplication/TransportationPage';
import ServicesPage from './components/user/ServicesPage';
import PowerServicesPage from './components/user/service/PowerService';
import CategoryPage from "./pages/user/products/CategoryPage"
import SubcategoryPage from './pages/user/products/SubcategoryPage';
import ProductPage from './pages/user/products/ProductPage';
import ContactPage from './pages/user/contact/ContactPage';
import TransformerServicesPage from './components/user/service/TransformerService';
import DigitalServices from "./components/user/service/DigitalServices"
import CartPage from "./pages/user/cart/CartPage"
import AboutUS from "./pages/user/company/AboutUs"
import Innovation from "./pages/user/company/Innovation"
import People from "./pages/user/company/People"
import Commitments from './pages/user/company/Commitments';
import Resources from "./pages/user/resources/Resources";
import BrandPage from './pages/user/products/BrandsPage';
import IndustriesAndApplications from './components/user/industriesAndApplication/IndustriesAndApplications';
import ProductMainPage from "./pages/user/products/ProductParentPage"
import ScrollToTop from './components/Scroll'; // Import ScrollToTop component 

// Auth Context to manage admin authentication
export const AuthContext = createContext();

// use imports




const App = () => {
  // Simple auth state (for demo purposes; expand later with API calls)
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    userRole: null,
    token: null,
  });

  // Check for token on app load (e.g., from localStorage)
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // Assuming role is stored after login
    if (token && role === 'admin') {
      setAuthState({
        isAuthenticated: true,
        userRole: role,
        token,
      });
    }
  }, []);

  // Admin Layout with Sidebar
  const AdminLayout = () => (
    <AdminContainer>
      <Sidebar />
      <MainContent>
        <Outlet /> {/* Renders the child route (e.g., Dashboard, AddCategory) */}
      </MainContent>
    </AdminContainer>
  );

  // Protected Route for Admin
  const ProtectedAdminRoute = () => {
    return authState.isAuthenticated && authState.userRole === 'admin' ? (
      <AdminLayout />
    ) : (
      <Navigate to="/login" replace />
    );
  };

  return (
    <>

    <AuthContext.Provider value={{ authState, setAuthState }}>
   
     
         <ScrollToTop /> 
        <Routes>
          {/* Admin Routes */}
          <Route path="/login" element={<AdminLogin />} />
          <Route element={<ProtectedAdminRoute />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/add-category" element={<AddCategory />} />
            <Route path="/admin/view-categories" element={<ViewCategories />} /> {/* New route */}
            <Route path="/admin/view-subcategories" element={<ViewSubcategory />} /> {/* New route */}
            <Route path="/admin/add-subcategory" element={<AddSubcategory />} />
            <Route path="/admin/add-brand" element={<AddBrand />} />
            <Route path="/admin/view-brands" element={<ViewBrand />} /> {/* New route */}
            <Route path="/admin/add-products" element={<AddProducts />} />
            <Route path="/admin/view-products" element={<ViewProducts />} />
            <Route path="/admin/simple-enquiries" element={<SimpleEnquiries />} />
            <Route path="/admin/cart-enquiries" element={<CartEnquiries />} />
            <Route path="/admin/upload-certifications" element={<UploadCertifications />} />
            <Route path="/admin/set-location" element={<SetLocation />} />
          </Route>

          {/* Placeholder for Public Routes (to be built later) */}
          <Route path="/home" element={<HomePage/>} />
          <Route path="/industries-and-applications" element={<IndustriesAndApplications />} />
          <Route path="/defense-aerospace" element={<DefenseAerospacePage />} />
          <Route path="/electric-vehicle" element={<ElectricVehiclePage />} />
          <Route path="/energy" element={<EnergyPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/oil-and-gas" element={<OilAndGasPage />} />
          <Route path="/tranportation" element={<AutomotivePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path ="/powerservice"  element={<PowerServicesPage/>}/>
          <Route path="/allproducts" element={<ProductMainPage />} />
          {/* <Route path="/products" element={<div>Products Page (TBD)</div>} />
          <Route path="/cart" element={<div>Cart Page (TBD)</div>} />
          <Route path="/contact" element={<div>Contact Page (TBD)</div>} /> */}

          {/* Redirect unknown routes to home */}


          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/subcategory/:subcategorySlug" element={<SubcategoryPage />} />
          <Route path="/product/:productSlug" element={<ProductPage />} />
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/transformerServices'element={<TransformerServicesPage/>}/>
          <Route path='/digital-services'element={<DigitalServices/>}/>


          <Route path= "/cart" element = {<CartPage/>}/>
          <Route path= "/aboutus" element = {<AboutUS/>}/>
          {/* <Route path= "/aboutus" element = {<AboutUS/>}/> */}
          <Route path= "/innovation" element = {<Innovation/>}/>
          <Route path= "/people" element = {<People/>}/>
          <Route path= "/commitments" element = {<Commitments/>}/>
          <Route path= "/resources" element = {<Resources/>}/>
          <Route path="/brand/:brandSlug" element={<BrandPage />} />


          {/* Catch-all route to redirect to home */}




      


          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
     
    </AuthContext.Provider>
  </>
  );
};

// Styled Components for Admin Layout
const AdminContainer = styled.div`
  display: flex;
  hight: 90vh;
`;

const MainContent = styled.div`
  margin-left: 250px; /* Match sidebar width */
  padding: 20px;
  width: calc(100% - 250px);
  min-height: 100vh;
  background-color: #f7fafc;
`;

export default App;