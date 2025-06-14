import axiosInstance from "./axiosInstance"

// Local storage key for cart
const CART_STORAGE_KEY = "raychem_cart_items"

// Get cart items from local storage
const getLocalCartItems = () => {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY)
    return storedCart ? JSON.parse(storedCart) : []
  } catch (error) {
    console.error("Error reading cart from local storage:", error)
    return []
  }
}

// Save cart items to local storage
const saveLocalCartItems = (items) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch (error) {
    console.error("Error saving cart to local storage:", error)
  }
}

// Get cart items (works for both authenticated and non-authenticated users)
export const getCartItems = async () => {
  try {
    // Try to get cart from server first
    const response = await axiosInstance.get("/cart")
    const serverItems = response.data.items || []

    // If server returned items, update local storage and return server items
    if (serverItems.length > 0) {
      saveLocalCartItems(serverItems)
      return serverItems
    }

    // If server returned empty cart, check local storage
    const localItems = getLocalCartItems()
    return localItems
  } catch (error) {
    console.error("Error fetching cart items from server:", error)

    // If API call fails, fall back to local storage
    return getLocalCartItems()
  }
}

// Add item to cart
export const addToCart = async (product, quantity = 1) => {
  try {
    // Try to add to server cart first
    const response = await axiosInstance.post("/cart", {
      productId: product._id,
      quantity,
    })

    // If successful, update local storage with server response
    if (response.data) {
      const updatedCart = response.data.items || []
      saveLocalCartItems(updatedCart)
      return { success: true, data: response.data }
    }
  } catch (error) {
    console.error("Error adding to server cart:", error)

    // If API call fails, add to local cart
    try {
      const currentCart = getLocalCartItems()
      const existingItemIndex = currentCart.findIndex(
        (item) => item.productId === product._id || item.productId?._id === product._id,
      )

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        currentCart[existingItemIndex].quantity += quantity
      } else {
        // Add new item
        currentCart.push({
          productId: product._id ? product._id : product,
          product: product,
          quantity: quantity,
        })
      }

      saveLocalCartItems(currentCart)
      return {
        success: true,
        data: { items: currentCart },
        message: "Added to cart (offline mode)",
      }
    } catch (localError) {
      console.error("Error adding to local cart:", localError)
      return {
        success: false,
        error: "Failed to add item to cart",
      }
    }
  }
}

// Update cart item quantity
export const updateCartItem = async (productId, quantity) => {
  try {
    // Try to update server cart first
    const response = await axiosInstance.put("/cart", {
      productId,
      quantity,
    })

    if (response.data) {
      const updatedCart = response.data.items || []
      saveLocalCartItems(updatedCart)
      return { success: true, data: response.data }
    }
  } catch (error) {
    console.error("Error updating server cart:", error)

    // If API call fails, update local cart
    try {
      const currentCart = getLocalCartItems()
      const existingItemIndex = currentCart.findIndex(
        (item) => item.productId === productId || item.productId?._id === productId,
      )

      if (existingItemIndex >= 0) {
        currentCart[existingItemIndex].quantity = quantity
        saveLocalCartItems(currentCart)
        return {
          success: true,
          data: { items: currentCart },
          message: "Updated cart (offline mode)",
        }
      } else {
        return {
          success: false,
          error: "Item not found in cart",
        }
      }
    } catch (localError) {
      console.error("Error updating local cart:", localError)
      return {
        success: false,
        error: "Failed to update cart item",
      }
    }
  }
}

// Remove item from cart
export const removeFromCart = async (productId) => {
  try {
    // Try to remove from server cart first
    const response = await axiosInstance.delete(`/cart/${productId}`)

    if (response.data) {
      const updatedCart = response.data.items || []
      saveLocalCartItems(updatedCart)
      return { success: true, data: response.data }
    }
  } catch (error) {
    console.error("Error removing from server cart:", error)

    // If API call fails, remove from local cart
    try {
      const currentCart = getLocalCartItems()
      const updatedCart = currentCart.filter(
        (item) => item.productId !== productId && item.productId?._id !== productId,
      )

      saveLocalCartItems(updatedCart)
      return {
        success: true,
        data: { items: updatedCart },
        message: "Removed from cart (offline mode)",
      }
    } catch (localError) {
      console.error("Error removing from local cart:", localError)
      return {
        success: false,
        error: "Failed to remove item from cart",
      }
    }
  }
}

// Clear entire cart
export const clearCart = async () => {
  try {
    // Try to clear server cart first
    const response = await axiosInstance.delete("/cart")

    // Clear local storage regardless of server response
    saveLocalCartItems([])

    return { success: true, data: { items: [] } }
  } catch (error) {
    console.error("Error clearing server cart:", error)

    // If API call fails, still clear local cart
    saveLocalCartItems([])
    return {
      success: true,
      data: { items: [] },
      message: "Cleared cart (offline mode)",
    }
  }
}

// Check if product is in cart
export const isProductInCart = (productId) => {
  const cartItems = getLocalCartItems()
  return cartItems.some((item) => {
    const itemProductId = item.productId?._id || item.productId
    return itemProductId === productId
  })
}

// Get cart item count
export const getCartItemCount = () => {
  const cartItems = getLocalCartItems()
  return cartItems.reduce((total, item) => total + item.quantity, 0)
}
