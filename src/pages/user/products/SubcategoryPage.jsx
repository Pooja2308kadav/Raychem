"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axiosInstance from "../../../utils/axiosInstance"
import Navbar from "../../../components/user/layouts/Navbar"
import Footer from "../../../components/user/Footer"

import {
  SubcategoryContainer,
  HeroBanner,
  HeroContent,
  BreadcrumbNav,
  BreadcrumbLink,
  SubcategoryTitle,
  ContentSection,
  SubcategoryDescription,
  ProductsGrid,
  ProductCard,
  ProductImageContainer,
  ProductImage,
  ProductContent,
  ProductTitle,
  ProductDescription,
  LearnMoreButton,
  LoadingSpinner,
  ErrorMessage,
  GeometricBackground,
  GeometricShape,
  ProductImagePlaceholder,
} from "./SubcategoryPageStyles"

const BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:3000").replace(/\/+$/, "")

const getImageUrl = (imagePath) => {
  if (!imagePath) return null
  const cleanPath = imagePath
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/\s/g, "%20")
  return `${BASE_URL}/${cleanPath}`
}

const SubcategoryPage = () => {
  const { subcategorySlug } = useParams()
  const [subcategory, setSubcategory] = useState(null)
  const [category, setCategory] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const subcategoryResponse = await axiosInstance.get(`/subcategories/slug/${subcategorySlug}`)
        setSubcategory(subcategoryResponse.data)

        if (subcategoryResponse.data.categoryId) {
          const categoryId =
            typeof subcategoryResponse.data.categoryId === "object"
              ? subcategoryResponse.data.categoryId._id
              : subcategoryResponse.data.categoryId

          const categoryResponse = await axiosInstance.get(`/categories`)
          const foundCategory = categoryResponse.data.find((cat) => cat._id === categoryId)
          setCategory(foundCategory)
        }

        const productsResponse = await axiosInstance.get("/products")
        const subcategoryProducts = productsResponse.data.filter(
          (product) =>
            product.subcategoryId === subcategoryResponse.data._id ||
            (product.subcategoryId && product.subcategoryId._id === subcategoryResponse.data._id),
        )
        setProducts(subcategoryProducts)
      } catch (err) {
        setError("Failed to load subcategory data")
        console.error("Error fetching subcategory data:", err)
      } finally {
        setLoading(false)
      }
    }

    if (subcategorySlug) {
      fetchData()
    }
  }, [subcategorySlug])

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingSpinner>Loading...</LoadingSpinner>
      </>
    )
  }

  if (error || !subcategory) {
    return (
      <>
        <Navbar />
        <ErrorMessage>Error loading subcategory: {error || "Subcategory not found"}</ErrorMessage>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <SubcategoryContainer>
        <HeroBanner>
          {subcategory.imagePath ? (
            <img
              src={getImageUrl(subcategory.imagePath)}
              alt={subcategory.name}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
              onError={(e) => {
                console.log(`Failed to load subcategory background image for ${subcategory.name}`)
                e.target.style.display = "none"
              }}
            />
          ) : null}
          <GeometricBackground hasImage={!!subcategory.imagePath}>
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
              {category && (
                <>
                  <BreadcrumbLink to={`/category/${category.slug}`}>{category.name}</BreadcrumbLink>
                  <span> / </span>
                </>
              )}
              <span>{subcategory.name}</span>
            </BreadcrumbNav>
            <SubcategoryTitle>{subcategory.name}</SubcategoryTitle>
          </HeroContent>
        </HeroBanner>

        <ContentSection>
          <h2>Advanced Solutions in {subcategory.name}</h2>
          <SubcategoryDescription>
            {subcategory.description ||
              `${subcategory.name} solutions provide high performance standards in electrical distribution networks, power sub-stations, railways, and OEM applications. Our innovative products are designed to meet the most demanding requirements in the industry, ensuring reliability, safety, and efficiency in all applications.`}
          </SubcategoryDescription>

          <SubcategoryDescription>
            Raychem RPG, a pioneer in innovative energy solutions for various sectors, has a dedicated R&D team working
            on products that can meet the challenging requirements of the evolving infrastructure network. The team of
            researchers has improved the designs to provide cutting-edge solutions that exceed industry standards.
          </SubcategoryDescription>

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
              <p style={{ color: "#999" }}>Products for this subcategory will be available soon.</p>
            </div>
          )}
        </ContentSection>
        <Footer />
      </SubcategoryContainer>
    </>
  )
}

export default SubcategoryPage