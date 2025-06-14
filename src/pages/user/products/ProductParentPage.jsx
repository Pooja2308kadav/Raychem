"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axiosInstance from "../../../utils/axiosInstance"
import Navbar from "../../../components/user/layouts/Navbar"
import Footer from "../../../components/user/Footer"
import Allproductimg from "../../../assets/AllProducts.jpg"

import {
  CategoryContainer,  
  HeroBanner,
  HeroContent,
  BreadcrumbNav,
  BreadcrumbLink,
  CategoryTitle,
  ContentSection,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductImageContainer,
  ProductContent,
  ProductTitle,
  ProductDescription,
  LearnMoreButton,
  LoadingSpinner,
  ErrorMessage,
  FilterContainer,
  FilterLabel,
  FilterSelect,
  ProductCount,
} from "./ProductParentStyles"

const BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:3000").replace(/\/+$/, "")

const getImageUrl = (imagePath) => {
  if (!imagePath) return null
  const cleanPath = imagePath
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/\s/g, "%20")
  return `${BASE_URL}/${cleanPath}`
}

const AllProductsPage = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  // Filter states
  const [selectedFamily, setSelectedFamily] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  // Fetch products and categories
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          axiosInstance.get("/products"),
          axiosInstance.get("/categories")
        ])
        
        setProducts(productsResponse.data)
        setCategories(categoriesResponse.data)
        setFilteredProducts(productsResponse.data)
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Failed to load data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Filter products based on selected filters
  useEffect(() => {
    let filtered = [...products]

    // Filter by product family (category)
    if (selectedFamily && selectedFamily !== '') {
      filtered = filtered.filter(product => 
        product.categoryId === selectedFamily || 
        (product.category && product.category._id === selectedFamily)
      )
    }

    // Filter by product type (subcategory)
    if (selectedType && selectedType !== '') {
      filtered = filtered.filter(product => 
        product.subcategoryId === selectedType ||
        (product.subcategory && product.subcategory._id === selectedType)
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        (product.shortDescription && product.shortDescription.toLowerCase().includes(query)) ||
        (product.description && product.description.toLowerCase().includes(query))
      )
    }

    setFilteredProducts(filtered)
  }, [products, selectedFamily, selectedType, searchQuery])

  // Get unique product types based on selected family
  const getProductTypes = () => {
    if (!selectedFamily) return []
    
    const familyProducts = products.filter(product => 
      product.categoryId === selectedFamily || 
      (product.category && product.category._id === selectedFamily)
    )
    
    const uniqueTypes = []
    const seenTypes = new Set()
    
    familyProducts.forEach(product => {
      if (product.subcategory && !seenTypes.has(product.subcategory._id)) {
        seenTypes.add(product.subcategory._id)
        uniqueTypes.push(product.subcategory)
      }
    })
    
    return uniqueTypes
  }

  const handleFamilyChange = (e) => {
    setSelectedFamily(e.target.value)
    setSelectedType('') // Reset type when family changes
  }

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingSpinner>Loading...</LoadingSpinner>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Navbar />
        <ErrorMessage>Error loading products: {error}</ErrorMessage>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <CategoryContainer>
        <HeroBanner
          style={{
            backgroundImage: `url(${Allproductimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <HeroContent>
            <BreadcrumbNav>
              <BreadcrumbLink to="/">Home</BreadcrumbLink>
              <span> / </span>
              <span>Products</span>
            </BreadcrumbNav>
            <CategoryTitle>All Products</CategoryTitle>
          </HeroContent>
        </HeroBanner>

        <ContentSection>
          <h3>Explore from a range of <span style={{color: '#e53e3e'}}>{products.length}</span> Products</h3>
          
          {/* Filter Section */}
          <FilterContainer>
           
            <div>
              <FilterLabel>Search Products</FilterLabel>
              <FilterSelect 
                as="input"
                type="text"
                placeholder="Enter Search Here"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </FilterContainer>

          {/* Product Count */}
        

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <ProductsGrid>
              {filteredProducts.map((product) => {
                const productImagePath =
                  product.imagePaths && product.imagePaths.length > 0
                    ? getImageUrl(product.imagePaths[0])
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"

                return (
                  <ProductCard key={product._id}>
                    <Link to={`/product/${product.slug}`}>
                      <ProductImageContainer>
                        <ProductImage
                          src={productImagePath}
                          alt={product.name}
                          onError={(e) => {
                            console.log(`❌ Failed to load image for ${product.name}`)
                            e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
                          }}
                          onLoad={(e) => {
                            console.log("✅ Product image loaded:", e.target.src)
                          }}
                        />
                      </ProductImageContainer>
                      <ProductContent>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductDescription>
                          {product.shortDescription || "High-quality product for industrial applications"}
                        </ProductDescription>
                        <LearnMoreButton>Learn More</LearnMoreButton>
                      </ProductContent>
                    </Link>
                  </ProductCard>
                )
              })}
            </ProductsGrid>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <h3 style={{ color: "#666", marginBottom: "10px" }}>
                {searchQuery || selectedFamily || selectedType 
                  ? "No products match your filters" 
                  : "No Products Available"
                }
              </h3>
              <p style={{ color: "#999" }}>
                {searchQuery || selectedFamily || selectedType 
                  ? "Try adjusting your filters or search terms." 
                  : "Products will be available soon."
                }
              </p>
            </div>
          )}
        </ContentSection>
        <Footer />
      </CategoryContainer>
    </>
  )
}

export default AllProductsPage