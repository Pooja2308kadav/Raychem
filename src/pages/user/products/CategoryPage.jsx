"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axiosInstance from "../../../utils/axiosInstance"
import Navbar from "../../../components/user/layouts/Navbar"
import Footer from "../../../components/user/Footer"

import {
  CategoryContainer,
  HeroBanner,
  HeroContent,
  BreadcrumbNav,
  BreadcrumbLink,
  CategoryTitle,
  ContentSection,
  CategoryDescription,
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
  GeometricBackground,
  GeometricShape,
  ProductImagePlaceholder,
} from "./CategoryPagestyles"

const BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:3000").replace(/\/+$/, "")

const getImageUrl = (imagePath) => {
  if (!imagePath) return null
  const cleanPath = imagePath
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/\s/g, "%20")
  return `${BASE_URL}/${cleanPath}`
}

const CategoryPage = () => {
  const { categorySlug } = useParams()
  const [category, setCategory] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      setLoading(true)
      try {
        const categoryResponse = await axiosInstance.get(`/categories/slug/${categorySlug}`)
        setCategory(categoryResponse.data)

        const productsResponse = await axiosInstance.get("/products")
        const filteredProducts = productsResponse.data.filter((product) => {
          const productCategoryId =
            typeof product.categoryId === "object" ? product.categoryId?._id : product.categoryId
          return productCategoryId === categoryResponse.data._id
        })

        setProducts(filteredProducts)
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Failed to load category data")
      } finally {
        setLoading(false)
      }
    }

    if (categorySlug) {
      fetchCategoryAndProducts()
    }
  }, [categorySlug])

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingSpinner>Loading...</LoadingSpinner>
      </>
    )
  }

  if (error || !category) {
    return (
      <>
        <Navbar />
        <ErrorMessage>Error loading category: {error || "Category not found"}</ErrorMessage>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <CategoryContainer>
        <HeroBanner>
          {category.imagePath ? (
            <img
              src={getImageUrl(category.imagePath)}
              alt={category.name}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
              onError={(e) => {
                console.log(`❌ Failed to load category image for ${category.name}`)
                e.target.style.display = "none"
              }}
              onLoad={(e) => {
                console.log("✅ Category image loaded:", e.target.src)
              }}
            />
          ) : null}

          <GeometricBackground hasImage={!!category.imagePath}>
            <GeometricShape color="#e74c3c" size="128px" top="80px" right="80px" rotation="45deg" />
            <GeometricShape color="#c0392b" size="96px" top="160px" right="160px" rotation="12deg" />
            <GeometricShape color="#e74c3c" size="160px" bottom="80px" right="40px" rotation="-12deg" />
            <GeometricShape color="#2980b9" size="112px" top="40px" right="240px" rotation="45deg" />
            <GeometricShape color="#1a365d" size="144px" bottom="160px" right="128px" rotation="12deg" />
            <ProductImagePlaceholder top="128px" right="64px" rotation="12deg" />
            <ProductImagePlaceholder bottom="128px" right="96px" rotation="-6deg" />
          </GeometricBackground>

          <HeroContent>
            <BreadcrumbNav>
              <BreadcrumbLink to="/">Home</BreadcrumbLink>
              <span> / </span>
              <BreadcrumbLink to="/products">Products</BreadcrumbLink>
              <span> / </span>
              <span>{category.name}</span>
            </BreadcrumbNav>
            <CategoryTitle>{category.name}</CategoryTitle>
          </HeroContent>
        </HeroBanner>

        <ContentSection>
          <h2>Advanced Solutions in {category.name}</h2>
          <CategoryDescription>
            {category.description ||
              `${category.name} solutions provide high performance standards in electrical distribution networks, power sub-stations, railways, and OEM applications. Our innovative products are designed to meet the most demanding requirements in the industry, ensuring reliability, safety, and efficiency in all applications.`}
          </CategoryDescription>

          <CategoryDescription>
            Raychem RPG, a pioneer in innovative energy solutions for various sectors, has a dedicated R&D team working
            on products that can meet the challenging requirements of the evolving infrastructure network. The team of
            researchers has improved the designs to provide cutting-edge solutions that exceed industry standards.
          </CategoryDescription>

          {products.length > 0 && (
            <>
              <h3>Products</h3>
              <ProductsGrid>
                {products.map((product) => {
                  // Fixed: Use imagePaths instead of images (matching ProductParentPage)
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
            </>
          )}

          {products.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <h3 style={{ color: "#666", marginBottom: "10px" }}>No Products Available</h3>
              <p style={{ color: "#999" }}>Products for this category will be available soon.</p>
            </div>
          )}
        </ContentSection>
        <Footer />
      </CategoryContainer>
    </>
  )
}

export default CategoryPage