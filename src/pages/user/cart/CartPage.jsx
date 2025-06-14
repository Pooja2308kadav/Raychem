"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Package, RefreshCw, ChevronLeft, ChevronRight, Download } from "lucide-react"
import * as XLSX from 'xlsx'
import Navbar from "../../../components/user/layouts/Navbar2"
import { getCartItems, updateCartItem, removeFromCart, clearCart } from "../../../utils/cartUtils"
import axiosInstance from "../../../utils/axiosInstance"
import Footer from "../../../components/user/Footer"
import {
  CartContainer,
  CartHeader,
  CartTitle,
  CartItemCount,
  CartContent,
  CartItemsSection,
  CartItem,
  ProductImageContainer,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductDescription,
  QuantityControls,
  QuantityButton,
  QuantityDisplay,
  RemoveButton,
  EmptyCartContainer,
  EmptyCartIcon,
  EmptyCartTitle,
  EmptyCartDescription,
  ContinueShoppingButton,
  ClearCartButton,
  CheckoutButton,
  LoadingSpinner,
  CartSummary,
  SummaryTitle,
  ItemsList,
  ActionButtonsContainer,
  Toast,
} from "./CartPageStyles"

const EnquiryForm = ({ productId, productName, onSubmit, isSubmitting, isBulk = false, selectedProducts = [] }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: isBulk 
      ? `Bulk enquiry for: ${selectedProducts.map(p => p.name).join(', ')}`
      : `Enquiry about ${productName}`
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      onSubmit({ success: false, error: "Please fill in all required fields" })
      return
    }
    onSubmit({ 
      success: true, 
      data: { ...formData, productId, isBulk, selectedProductIds: isBulk ? selectedProducts.map(p => p._id) : [productId] }
    })
  }

  return (
    <div className="enquiry-form">
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Your full name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="your.email@example.com"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="Your phone number"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Company</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            placeholder="Company name (optional)"
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          placeholder={isBulk 
            ? `I would like to know more about ${selectedProducts.map(p => p.name).join(', ')}...`
            : `I would like to know more about ${productName}...`}
          className="form-textarea"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="submit-button"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
      </button>
    </div>
  )
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState(null)
  const [toast, setToast] = useState(null)
  const [enquiryForms, setEnquiryForms] = useState({})
  const [submittingEnquiry, setSubmittingEnquiry] = useState({})
  const [imageIndices, setImageIndices] = useState({})
  const [selectedItems, setSelectedItems] = useState({})
  const [isBulkEnquiryOpen, setIsBulkEnquiryOpen] = useState(false)
  const navigate = useNavigate()

  const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null
    const cleanPath = imagePath.replace(/\\/g, "/").replace(/\s/g, "%20")
    return `${BASE_URL.replace(/\/+$/, "")}/${cleanPath.replace(/^\/+/, "")}`
  }

  const showToast = (message, success = true) => {
    setToast({ message, success })
    setTimeout(() => setToast(null), 3000)
  }

  const toggleEnquiryForm = (productId) => {
    setEnquiryForms(prev => ({ ...prev, [productId]: !prev[productId] }))
  }

  const toggleBulkEnquiryForm = () => {
    setIsBulkEnquiryOpen(prev => !prev)
  }

  const handlePrevImage = (productId, imageCount) => {
    setImageIndices(prev => {
      const currentIndex = prev[productId] || 0
      const newIndex = (currentIndex - 1 + imageCount) % imageCount
      return { ...prev, [productId]: newIndex }
    })
  }

  const handleNextImage = (productId, imageCount) => {
    setImageIndices(prev => {
      const currentIndex = prev[productId] || 0
      const newIndex = (currentIndex + 1) % imageCount
      return { ...prev, [productId]: newIndex }
    })
  }

  const submitEnquiry = async (submission) => {
    const { success, data, error } = submission
    if (!success) {
      showToast(error, false)
      return
    }

    const { productId, isBulk, selectedProductIds, name, email, phone, company, message } = data
    try {
      if (isBulk) {
        setUpdating(true)
        const enquiries = selectedProductIds.map(id => {
          const product = cartItems.find(item => (item.productId || item.product)._id === id).productId || 
                         cartItems.find(item => (item.productId || item.product)._id === id).product
          return {
            productId: id,
            name,
            email,
            phone,
            company,
            message: message.includes(product.name) ? message : `${message} - ${product.name}`
          }
        })

        const response = await axiosInstance.post('/enquiries/from-cart', { enquiries })
        if (response.data) {
          showToast("Bulk enquiry submitted successfully!")
          setIsBulkEnquiryOpen(false)
          setSelectedItems(prev => {
            const newSelected = { ...prev }
            selectedProductIds.forEach(id => newSelected[id] = false)
            return newSelected
          })
        }
      } else {
        setSubmittingEnquiry(prev => ({ ...prev, [productId]: true }))
        const response = await axiosInstance.post('/enquiries/from-cart', {
          productId,
          name,
          email,
          phone,
          company,
          message
        })

        if (response.data) {
          showToast("Enquiry submitted successfully!")
          setEnquiryForms(prev => ({ ...prev, [productId]: false }))
        }
      }
    } catch (err) {
      showToast(err.response?.data?.message || "Failed to submit enquiry", false)
    } finally {
      if (isBulk) {
        setUpdating(false)
      } else {
        setSubmittingEnquiry(prev => ({ ...prev, [productId]: false }))
      }
    }
  }

  const handleDownloadExcel = () => {
    const data = cartItems.map(item => {
      const product = item.productId || item.product
      return {
        'Product ID': product._id,
        'Name': product.name,
        'Description': product.shortDescription || "High-quality industrial product for professional applications",
        'Quantity': item.quantity
      }
    })

    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Cart Items")

    worksheet['!cols'] = [
      { wch: 30 },
      { wch: 40 },
      { wch: 60 },
      { wch: 10 }
    ]

    XLSX.writeFile(workbook, `Cart_Items_${new Date().toISOString().split('T')[0]}.xlsx`)
    showToast("Excel file downloaded successfully!")
  }

  const fetchCartItems = async () => {
    try {
      setLoading(true)
      setError(null)
      const items = await getCartItems()
      setCartItems(items)
      const initialIndices = items.reduce((acc, item) => {
        const product = item.productId || item.product
        acc[product._id] = 0
        return acc
      }, {})
      setImageIndices(initialIndices)
      const initialSelected = items.reduce((acc, item) => {
        const product = item.productId || item.product
        acc[product._id] = false
        return acc
      }, {})
      setSelectedItems(initialSelected)
    } catch (err) {
      console.error("Error fetching cart:", err)
      setError("Failed to load cart items")
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return
    try {
      setUpdating(true)
      const result = await updateCartItem(productId, newQuantity)
      if (result.success) {
        await fetchCartItems()
        showToast("Cart updated successfully")
      } else {
        showToast(result.error || "Failed to update quantity", false)
      }
    } catch (err) {
      console.error("Error updating quantity:", err)
      showToast("Failed to update quantity", false)
    } finally {
      setUpdating(false)
    }
  }

  const handleRemoveFromCart = async (productId) => {
    if (!window.confirm("Are you sure you want to remove this item?")) return
    try {
      setUpdating(true)
      const result = await removeFromCart(productId)
      if (result.success) {
        await fetchCartItems()
        showToast("Item removed from cart")
      } else {
        showToast(result.error || "Failed to remove item", false)
      }
    } catch (err) {
      console.error("Error removing item:", err)
      showToast("Failed to remove item", false)
    } finally {
      setUpdating(false)
    }
  }

  const handleClearCart = async () => {
    if (!window.confirm("Are you sure you want to clear your entire cart?")) return
    try {
      setUpdating(true)
      const result = await clearCart()
      if (result.success) {
        setCartItems([])
        setSelectedItems({})
        showToast("Cart cleared successfully")
      } else {
        showToast(result.error || "Failed to clear cart", false)
      }
    } catch (err) {
      console.error("Error clearing cart:", err)
      showToast("Failed to clear cart", false)
    } finally {
      setUpdating(false)
    }
  }

  const handleSelectItem = (productId) => {
    setSelectedItems(prev => ({ ...prev, [productId]: !prev[productId] }))
  }

  useEffect(() => {
    fetchCartItems()
  }, [])

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingSpinner>
          <Package size={48} />
          <div>Loading your cart...</div>
        </LoadingSpinner>
      </>
    )
  }

  const selectedProducts = cartItems.filter(item => {
    const product = item.productId || item.product
    return selectedItems[product._id]
  }).map(item => item.productId || item.product)

  return (
    <>
      <Navbar />
      {toast && <Toast $success={toast.success}>{toast.message}</Toast>}
      <CartContainer>
        <CartHeader>
          <div>
            <CartTitle>Shopping Cart</CartTitle>
            <CartItemCount>
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
            </CartItemCount>
          </div>
          {cartItems.length > 0 && (
            <div className="header-actions">
              <button onClick={fetchCartItems} className="refresh-button">
                <RefreshCw size={16} />
                Refresh
              </button>
              <ClearCartButton onClick={handleClearCart} disabled={updating}>
                Clear Cart
              </ClearCartButton>
            </div>
          )}
        </CartHeader>

        {cartItems.length === 0 ? (
          <EmptyCartContainer>
            <EmptyCartIcon>
              <ShoppingBag size={80} />
            </EmptyCartIcon>
            <EmptyCartTitle>Your cart is empty</EmptyCartTitle>
            <EmptyCartDescription>
              Discover our wide range of industrial products and add them to your cart
            </EmptyCartDescription>
            <ContinueShoppingButton to="/products">
              <ArrowLeft size={20} />
              Continue Shopping
            </ContinueShoppingButton>
          </EmptyCartContainer>
        ) : (
          <CartContent>
            <CartItemsSection>
              {cartItems.map((item) => {
                const product = item.productId || item.product
                const productId = product._id
                const isEnquiryFormOpen = enquiryForms[productId]
                const isSubmitting = submittingEnquiry[productId]
                const currentImageIndex = imageIndices[productId] || 0
                const imageCount = product.imagePaths?.length || 0

                return (
                  <CartItem key={item._id || product._id}>
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={selectedItems[productId] || false}
                        onChange={() => handleSelectItem(productId)}
                      />
                    </div>
                    <ProductImageContainer>
                      {product.imagePaths?.length > 0 ? (
                        <div className="image-slider">
                          <button
                            className="slider-button prev"
                            onClick={() => handlePrevImage(productId, imageCount)}
                            disabled={imageCount <= 1}
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <div className="image-wrapper">
                            <ProductImage
                              src={getImageUrl(product.imagePaths[currentImageIndex])}
                              alt={`${product.name} image ${currentImageIndex + 1}`}
                              onError={(e) => {
                                e.target.style.display = "none"
                                e.target.parentNode.innerHTML =
                                  '<div className="no-image-placeholder">No Image</div>'
                              }}
                            />
                          </div>
                          <button
                            className="slider-button next"
                            onClick={() => handleNextImage(productId, imageCount)}
                            disabled={imageCount <= 1}
                          >
                            <ChevronRight size={20} />
                          </button>
                          {imageCount > 1 && (
                            <div className="slider-counter">
                              {currentImageIndex + 1} / {imageCount}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="no-image-placeholder">
                          No Image
                        </div>
                      )}
                    </ProductImageContainer>

                    <ProductDetails>
                      <div className="product-info">
                        <ProductName>
                          <Link to={`/product/${product.slug}`}>{product.name}</Link>
                        </ProductName>
                        <ProductDescription>
                          {product.shortDescription || "High-quality industrial product for professional applications"}
                        </ProductDescription>
                      </div>

                      <div className="product-actions">
                        <QuantityControls>
                          <QuantityButton
                            onClick={() => handleUpdateQuantity(productId, item.quantity - 1)}
                            disabled={updating || item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </QuantityButton>
                          <QuantityDisplay>{item.quantity}</QuantityDisplay>
                          <QuantityButton
                            onClick={() => handleUpdateQuantity(productId, item.quantity + 1)}
                            disabled={updating}
                          >
                            <Plus size={16} />
                          </QuantityButton>
                        </QuantityControls>
                        <RemoveButton onClick={() => handleRemoveFromCart(productId)} disabled={updating}>
                          <Trash2 size={18} />
                          Remove
                        </RemoveButton>
                      </div>

                      <div className="enquiry-section">
                        <button
                          onClick={() => toggleEnquiryForm(productId)}
                          className="enquiry-toggle"
                        >
                          {isEnquiryFormOpen ? 'Hide Enquiry Form' : 'Make Enquiry'}
                        </button>

                        {isEnquiryFormOpen && (
                          <EnquiryForm
                            productId={productId}
                            productName={product.name}
                            onSubmit={submitEnquiry}
                            isSubmitting={isSubmitting}
                          />
                        )}
                      </div>
                    </ProductDetails>
                  </CartItem>
                )
              })}
            </CartItemsSection>

            <CartSummary>
              <SummaryTitle>Cart Summary</SummaryTitle>
              <ItemsList>
                {cartItems.map((item) => {
                  const product = item.productId || item.product
                  return (
                    <div key={item._id || product._id} className="summary-item">
                      <span>{product.name}</span>
                      <span>Qty: {item.quantity}</span>
                    </div>
                  )
                })}
              </ItemsList>
              <ActionButtonsContainer>
                <ContinueShoppingButton to="/products">
                  Continue Shopping
                </ContinueShoppingButton>
                <CheckoutButton onClick={handleDownloadExcel}>
                  <Download size={20} />
                  Download Cart
                </CheckoutButton>
                <CheckoutButton onClick={toggleBulkEnquiryForm} disabled={updating || selectedProducts.length === 0}>
                  {isBulkEnquiryOpen ? 'Hide Enquiry Form' : 'Enquire Now'}
                </CheckoutButton>
                {isBulkEnquiryOpen && (
                  <div className="bulk-enquiry-section">
                    <EnquiryForm
                      isBulk={true}
                      selectedProducts={selectedProducts}
                      onSubmit={submitEnquiry}
                      isSubmitting={updating}
                    />
                  </div>
                )}
              </ActionButtonsContainer>
            </CartSummary>
          </CartContent>
        )}
      </CartContainer>
      <Footer/>
    </>
  )
}

export default CartPage