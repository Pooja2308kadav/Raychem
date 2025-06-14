import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ChevronRight, Download, ShoppingCart } from "lucide-react"
import axiosInstance from "../../../utils/axiosInstance"
import Navbar from "../../../components/user/layouts/Navbar2"
import Footer from "../../../components/user/Footer"
import {
  ProductContainer,
  BreadcrumbNav,
  BreadcrumbLink,
  ProductContent,
  ProductGallery,
  MainImage,
  MainImageContainer,
  ThumbnailsContainer,
  ThumbnailContainer,
  Thumbnail,
  ProductDetails,
  ProductTitle,
  ProductBrand,
  ProductDescription,
  ProductFeatures,
  FeatureTitle,
  FeatureList,
  FeatureItem,
  ProductSpecifications,
  SpecTitle,
  SpecTable,
  SpecRow,
  SpecLabel,
  SpecValue,
  ActionButtons,
  AddToCartButton,
  DownloadButton,
  EnquiryButton,
  TabContainer,
  TabButtons,
  TabButton,
  TabContent,
  RelatedProducts,
  RelatedTitle,
  RelatedGrid,
  RelatedCard,
  RelatedImageContainer,
  RelatedImage,
  RelatedName,
  LoadingSpinner,
  ErrorMessage,
  Toast,
} from "./ProductPageStyles"
import { addToCart, isProductInCart } from "../../../utils/cartUtils"

const BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:3000").replace(/\/+$/, "")

const getImageUrl = (imagePath) => {
  if (!imagePath) return null
  const cleanPath = imagePath
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/\s/g, "%20")
  return `${BASE_URL}/${cleanPath}`
}

const ProductPage = () => {
  const { productSlug } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [category, setCategory] = useState(null)
  const [subcategory, setSubcategory] = useState(null)
  const [brand, setBrand] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")
  const [inCart, setInCart] = useState(false)
  const [addingToCart, setAddingToCart] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (message, success = true) => {
    setToast({ message, success })
    setTimeout(() => {
      setToast(null)
    }, 3000)
  }

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true)
      try {
        let foundProduct = null

        try {
          const productResponse = await axiosInstance.get(`/products/slug/${productSlug}`)
          foundProduct = productResponse.data
        } catch (slugError) {
          console.log("Slug endpoint failed, trying to find in all products...")
          const productsResponse = await axiosInstance.get("/products")
          foundProduct = productsResponse.data.find((p) => p.slug === productSlug)
          if (!foundProduct) throw new Error("Product not found")
        }

        setProduct(foundProduct)

        if (foundProduct._id) {
          const productInCart = isProductInCart(foundProduct._id)
          setInCart(productInCart)
        }

        if (foundProduct.categoryId) {
          const categoryId =
            typeof foundProduct.categoryId === "object" ? foundProduct.categoryId._id : foundProduct.categoryId
          const categoriesResponse = await axiosInstance.get("/categories")
          const foundCategory = categoriesResponse.data.find((cat) => cat._id === categoryId)
          setCategory(foundCategory)

          const productsResponse = await axiosInstance.get("/products")
          const related = productsResponse.data
            .filter(
              (p) =>
                (p.categoryId === categoryId || (p.categoryId && p.categoryId._id === categoryId)) &&
                p._id !== foundProduct._id
            )
            .slice(0, 4)
          setRelatedProducts(related)
        }

        if (foundProduct.subcategoryId) {
          const subcategoryId =
            typeof foundProduct.subcategoryId === "object" ? foundProduct.subcategoryId._id : foundProduct.subcategoryId
          const subcategoriesResponse = await axiosInstance.get("/subcategories")
          const foundSubcategory = subcategoriesResponse.data.find((subcat) => subcat._id === subcategoryId)
          setSubcategory(foundSubcategory)
        }

        if (foundProduct.brandId) {
          const brandId = typeof foundProduct.brandId === "object" ? foundProduct.brandId._id : foundProduct.brandId
          const brandsResponse = await axiosInstance.get("/brands")
          const foundBrand = brandsResponse.data.find((b) => b._id === brandId)
          setBrand(foundBrand)
        }
      } catch (err) {
        console.error("Error fetching product:", err)
        setError("Failed to load product data")
      } finally {
        setLoading(false)
      }
    }

    if (productSlug) {
      fetchProductData()
    }
  }, [productSlug])

  const handleAddToCart = async () => {
    if (!product) return

    setAddingToCart(true)
    try {
      const result = await addToCart(product, 1)

      if (result.success) {
        setInCart(true)
        showToast("Product added to cart successfully!")
      } else {
        showToast(result.error || "Failed to add product to cart", false)
      }
    } catch (error) {
      console.error("Error adding to cart:", error)
      showToast("Failed to add product to cart", false)
    } finally {
      setAddingToCart(false)
    }
  }

  const handleViewCart = () => {
    navigate("/cart")
  }

  const handleMakeEnquiry = async () => {
    if (!product) return

    try {
      const result = await addToCart(product, 1)
      if (result.success) {
        setInCart(true)
        showToast("Product added to cart successfully!")
        navigate("/cart")
      } else {
        showToast(result.error || "Failed to add product to cart", false)
      }
    } catch (error) {
      console.error("Error adding to cart:", error)
      showToast("Failed to add product to cart", false)
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingSpinner>Loading product...</LoadingSpinner>
      </>
    )
  }

  if (error || !product) {
    return (
      <>
        <Navbar />
        <ErrorMessage>
          <div>Error loading product: {error || "Product not found"}</div>
          <button onClick={() => navigate("/products")}>Back to Products</button>
        </ErrorMessage>
      </>
    )
  }

  return (
    <>
      <Navbar />
      {toast && <Toast $success={toast.success}>{toast.message}</Toast>}

      <ProductContainer>
        <BreadcrumbNav>
          <BreadcrumbLink to="/">Home</BreadcrumbLink>
          <ChevronRight size={16} />
          <BreadcrumbLink to="/products">Products</BreadcrumbLink>
          <ChevronRight size={16} />
          {category && (
            <>
              <BreadcrumbLink to={`/category/${category.slug}`}>{category.name}</BreadcrumbLink>
              <ChevronRight size={16} />
            </>
          )}
          {subcategory && (
            <>
              <BreadcrumbLink to={`/subcategory/${subcategory.slug}`}>{subcategory.name}</BreadcrumbLink>
              <ChevronRight size={16} />
            </>
          )}
          <span>{product.name}</span>
        </BreadcrumbNav>

        <ProductContent>
          <ProductGallery style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            {product.imagePaths && product.imagePaths.length > 1 && (
              <ThumbnailsContainer style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '8px',
                width: '80px',
                flexShrink: 0
              }}>
                {product.imagePaths.map((image, index) => (
                  <ThumbnailContainer key={index}>
                    <Thumbnail
                      src={getImageUrl(image)}
                      alt={`${product.name} - view ${index + 1}`}
                      $active={selectedImage === index}
                      onClick={() => setSelectedImage(index)}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/100?text=No+Img"
                      }}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                        border: selectedImage === index ? '2px solid #007bff' : '1px solid #ddd',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    />
                  </ThumbnailContainer>
                ))}
              </ThumbnailsContainer>
            )}
            <MainImageContainer style={{ flex: 1 }}>
              {product.imagePaths && product.imagePaths.length > 0 ? (
                <MainImage
                  src={getImageUrl(product.imagePaths[selectedImage])}
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300?text=No+Image"
                  }}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "400px",
                    background: "#f5f5f5",
                    color: "#666",
                    borderRadius: '8px'
                  }}
                >
                  No images available
                </div>
              )}
            </MainImageContainer>
          </ProductGallery>

          <ProductDetails>
            <ProductTitle>{product.name}</ProductTitle>
            {brand && brand.name && <ProductBrand>Brand: {brand.name}</ProductBrand>}
            <ProductDescription>
              {product.shortDescription || "No description available"}
            </ProductDescription>

            <ProductFeatures>
              <FeatureTitle>Key Features</FeatureTitle>
              <FeatureList>
                {product.keyFeatures && product.keyFeatures.length > 0 ? (
                  product.keyFeatures.map((feature, index) => <FeatureItem key={index}>{feature}</FeatureItem>)
                ) : (
                  <FeatureItem>No features available</FeatureItem>
                )}
              </FeatureList>
            </ProductFeatures>

            <ActionButtons>
              {inCart ? (
                <AddToCartButton onClick={handleViewCart}>
                  <ShoppingCart size={18} />
                  View Cart
                </AddToCartButton>
              ) : (
                <AddToCartButton onClick={handleAddToCart} disabled={addingToCart}>
                  <ShoppingCart size={18} />
                  {addingToCart ? "Adding..." : "Add to Cart"}
                </AddToCartButton>
              )}

              <DownloadButton
                as="a"
                href={product.datasheet ? getImageUrl(product.datasheet) : "#"}
                download={product.datasheet}
                disabled={!product.datasheet}
              >
                <Download size={18} />
                {product.datasheet ? "Download Catalog" : "No Catalog Available"}
              </DownloadButton>

              <EnquiryButton onClick={handleMakeEnquiry}>
                Make Enquiry
              </EnquiryButton>
            </ActionButtons>
          </ProductDetails>
        </ProductContent>

        <TabContainer>
          <TabButtons>
            <TabButton $active={activeTab === "overview"} onClick={() => setActiveTab("overview")}>
              Overview
            </TabButton>
            <TabButton $active={activeTab === "specifications"} onClick={() => setActiveTab("specifications")}>
              Specifications
            </TabButton>
            <TabButton $active={activeTab === "documents"} onClick={() => setActiveTab("documents")}>
              Documents
            </TabButton>
          </TabButtons>
          <TabContent>
            {activeTab === "overview" && (
              <div>
                <h3>Product Overview</h3>
                <p>{product.description || "No detailed description available"}</p>
              </div>
            )}
            {activeTab === "specifications" && (
              <ProductSpecifications>
                <SpecTitle>Technical Specifications</SpecTitle>
                <SpecTable>
                  {product.specifications && Object.keys(product.specifications).length > 0 ? (
                    Object.entries(product.specifications).map(([key, value], index) => (
                      <SpecRow key={index}>
                        <SpecLabel>{key}</SpecLabel>
                        <SpecValue>{value}</SpecValue>
                      </SpecRow>
                    ))
                  ) : (
                    <SpecRow>
                      <SpecLabel>No specifications available</SpecLabel>
                      <SpecValue>-</SpecValue>
                    </SpecRow>
                  )}
                </SpecTable>
              </ProductSpecifications>
            )}
            {activeTab === "documents" && (
              <div>
                <h3>Documents & Resources</h3>
                {product.datasheet ? (
                  <ul>
                    <li>
                      <a href={getImageUrl(product.datasheet)} target="_blank" rel="noopener noreferrer">
                        <Download size={16} />
                        Datasheet
                      </a>
                    </li>
                  </ul>
                ) : (
                  <p>No documents available for this product.</p>
                )}
              </div>
            )}
          </TabContent>
        </TabContainer>

        {relatedProducts.length > 0 && (
          <RelatedProducts>
            <RelatedTitle>Related Products</RelatedTitle>
            <RelatedGrid>
              {relatedProducts.map((related) => (
                <RelatedCard key={related._id}>
                  <Link to={`/product/${related.slug}`}>
                    <RelatedImageContainer>
                      {related.imagePaths && related.imagePaths.length > 0 ? (
                        <RelatedImage
                          src={getImageUrl(related.imagePaths[0])}
                          alt={related.name}
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150?text=No+Image"
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            background: "#f5f5f5",
                            color: "#666"
                          }}
                        >
                          No image available
                        </div>
                      )}
                    </RelatedImageContainer>
                    <RelatedName>{related.name}</RelatedName>
                  </Link>
                </RelatedCard>
              ))}
            </RelatedGrid>
          </RelatedProducts>
        )}
      </ProductContainer>
      <Footer />
    </>
  )
}

export default ProductPage