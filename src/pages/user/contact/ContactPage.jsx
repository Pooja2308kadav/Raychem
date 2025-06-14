"use client"

import { useState, useEffect } from "react"
import { Mail, HelpCircle, Users, MapPin, Phone } from "lucide-react"
import axiosInstance from "../../../utils/axiosInstance"
import Navbar from "../../../components/user/layouts/Navbar2"
import Footer from "../../../components/user/Footer"
import {
  ContactContainer,
  HeroSection,
  HeroTitle,
  OptionsSection,
  OptionCard,
  OptionIcon,
  OptionTitle,
  InfoSection,
  InfoTitle,
  InfoContent,
  ContactInfo,
  GrievanceSection,
  GrievanceTitle,
  GrievanceContent,
  MainContentSection,
  FindUsSection,
  WriteUsSection,
  SectionTitle,
  MapContainer,
  MapFrame,
  LocationCard,
  LocationName,
  LocationAddress,
  ContactForm,
  FormRow,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
} from "./ContactPageStyles"

const ContactPage = () => {
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [formData, setFormData] = useState({
    purpose: "",
    fullName: "",
    city: "",
    country: "",
    companyName: "",
    email: "",
    phone: "",
    requirement: "",
  })

  // Fetch locations on component mount
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axiosInstance.get("/locations")
        setLocations(response.data)
      } catch (err) {
        console.error("Error fetching locations:", err)
      }
    }

    fetchLocations()
  }, [])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission (unchanged as per your request)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      // Create enquiry payload - matching the backend expected format
      const enquiryData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || "Not provided",
        message: `Purpose: ${formData.purpose}\nCity: ${formData.city}\nCountry: ${formData.country}\nCompany: ${formData.companyName || "Not provided"}\nRequirement: ${formData.requirement}`,
      }

      console.log("Submitting enquiry:", enquiryData)

      const response = await axiosInstance.post("/enquiries", enquiryData)
      console.log("Enquiry response:", response.data)
      
      setSuccess("Your enquiry has been submitted successfully! We will get back to you soon.")

      // Reset form
      setFormData({
        purpose: "",
        fullName: "",
        city: "",
        country: "",
        companyName: "",
        email: "",
        phone: "",
        requirement: "",
      })
    } catch (err) {
      console.error("Error submitting enquiry:", err)
      setError(err.response?.data?.message || "Failed to submit enquiry. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Function to open Gmail with pre-filled email for "Email Us"
  const handleEmailClick = () => {
    const adminEmail = "kadavp0@gmail.com" // Using the email from .env (ideally fetched from backend)
    const subject = encodeURIComponent("Enquiry from Contact Page")
    const body = encodeURIComponent("Hello,\n\nI would like to discuss the following:\n\n")
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${adminEmail}&su=${subject}&body=${body}`
    window.open(gmailUrl, "_blank")
  }

  // Generate OpenStreetMap embed URL
  const getOpenStreetMapUrl = () => {
    if (locations.length > 0) {
      const location = locations[0]
      return `https://www.openstreetmap.org/export/embed.html?bbox=72.9500,19.1800,72.9700,19.2000&layer=mapnik&marker=19.1900,72.9600`
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=72.9500,19.1800,72.9700,19.2000&layer=mapnik&marker=19.1900,72.9600`
  }

  return (
    <>
      <Navbar />
      <ContactContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroTitle>Connect with us by clicking on one of the following options.</HeroTitle>
        </HeroSection>

        {/* Options Section */}
        <OptionsSection>
          <OptionCard onClick={handleEmailClick}>
            <OptionIcon>
              <Mail size={48} />
            </OptionIcon>
            <OptionTitle>Email Us</OptionTitle>
          </OptionCard>

     

          <OptionCard>
            <OptionIcon>
              <Users size={48} />
            </OptionIcon>
            <OptionTitle>Sales</OptionTitle>
          </OptionCard>
        </OptionsSection>

        {/* Customer Interaction Cell */}
        <InfoSection>
          <InfoTitle>Customer Interaction Cell</InfoTitle>
          <InfoContent>
            <ContactInfo>
              <Phone size={20} />
              <span>Contact No.: 02245745060 (8 am to 9 pm IST)</span>
            </ContactInfo>
            <ContactInfo>
              <Mail size={20} />
              <span>Email: cic@raychemrpg.com</span>
            </ContactInfo>
          </InfoContent>
        </InfoSection>

        {/* Grievance Officer */}
        <GrievanceSection>
          <GrievanceTitle>Grievance Officer</GrievanceTitle>
          <GrievanceContent>
            <p>
              For any support or grievance with respect to processing of your data, the grievance officer may be reached
              at: grievance_officer@raychemrpg.com or at Raychem RPG Pvt Ltd. A- 1401, 14th Floor, Thane One, DIL
              Complex, Ghodbunder Road, Majiwada, Thane (West) 400 610
            </p>
            <p>
              Please note that this email is used only for the purpose of resolving complaints under Information
              Technology Act, 2000 and to resolve complaints of users or victims in India and not to receive legal
              process
            </p>
          </GrievanceContent>
        </GrievanceSection>

        {/* Main Content Section */}
        <MainContentSection>
          {/* Find Us Section */}
          <FindUsSection>
            <SectionTitle>Find us</SectionTitle>

            {/* Map Container with Real Map */}
            <MapContainer>
              <MapFrame
                src={getOpenStreetMapUrl()}
                title="Office Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapContainer>

            {/* Locations List */}
            {locations.length > 0 ? (
              <div style={{ marginTop: "20px" }}>
                {locations.map((location) => (
                  <LocationCard key={location._id}>
                    <LocationName>{location.name}</LocationName>
                    <LocationAddress>
                      <MapPin size={16} />
                      <span>
                        {location.street}, {location.city}, {location.state}, {location.country} - {location.postalCode}
                      </span>
                    </LocationAddress>
                  </LocationCard>
                ))}
              </div>
            ) : (
              <LocationCard>
                <LocationName>Raychem RPG Pvt Ltd</LocationName>
                <LocationAddress>
                  <MapPin size={16} />
                  <span>
                    A-1401, 14th Floor, Thane One, DIL Complex, Ghodbunder Road, Majiwada, Thane (West) - 400 610
                  </span>
                </LocationAddress>
              </LocationCard>
            )}
          </FindUsSection>

          {/* Write to Us Section (unchanged) */}
          <WriteUsSection>
            <SectionTitle>Write to us</SectionTitle>

            {success && <SuccessMessage>{success}</SuccessMessage>}
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="purpose">Select Purpose of Enquiry</Label>
                <Select id="purpose" name="purpose" value={formData.purpose} onChange={handleInputChange} required>
                  <option value="">Select Purpose</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Sales">Sales</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Complaint">Complaint</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="city">City</Label>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="companyName">Company Name (Optional)</Label>
                <Input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="requirement">Your Requirement</Label>
                <TextArea
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Please describe your requirement in detail..."
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={loading} >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </SubmitButton>
            </ContactForm>
          </WriteUsSection>
        </MainContentSection>
        <Footer />
      </ContactContainer>
    </>
  )
}

export default ContactPage