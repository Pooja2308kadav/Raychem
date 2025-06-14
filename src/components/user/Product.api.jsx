import axiosInstance from "../../utils/axiosInstance"

// Fetch all categories with subcategories
export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/api/categories")
    return response.data
  } catch (error) {
    console.error("Error fetching categories:", error)
    return { categories: [] }
  }
}

// Fetch all brands
export const getBrands = async () => {
  try {
    const response = await axiosInstance.get("/api/brands")
    return response.data
  } catch (error) {
    console.error("Error fetching brands:", error)
    return { brands: [] }
  }
}

// Fetch products by category
export const getProductsByCategory = async (categoryId) => {
  try {
    const response = await axiosInstance.get(`/api/products?categoryId=${categoryId}`)
    return response.data
  } catch (error) {
    console.error("Error fetching products by category:", error)
    return { products: [] }
  }
}

// Fetch product by slug
export const getProductBySlug = async (slug) => {
  try {
    const response = await axiosInstance.get(`/api/products/slug/${slug}`)
    return response.data
  } catch (error) {
    console.error("Error fetching product by slug:", error)
    return null
  }
}
