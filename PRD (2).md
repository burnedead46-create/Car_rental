# Car Rental Website – Product Requirements Document (PRD)

## 1. Overview
This document defines the product requirements for a **Car Rental Website** built using **HTML, CSS, and JavaScript only**.  
The website is frontend-only and simulates the car rental process without backend integration.

---

## 2. Objectives
- Display available rental cars with clear details
- Show rental prices in Moroccan Dirham (MAD)
- Provide an interactive map showing the agency location
- Offer clear contact information
- Explain the rental process and available options
- Allow users to simulate a rental request

---

## 3. Target Users
- Local customers in Morocco
- Tourists looking to rent cars
- Users browsing on desktop or mobile devices

---

## 4. Functional Requirements

### 4.1 Car Listings
Each car must display:
- Car image
- Name and model
- Category (Economy, Sedan, SUV, Luxury)
- Transmission type
- Fuel type
- Number of seats
- Daily rental price (MAD)
- Rent action button

**Sample Cars:**
- Dacia Logan – Economy – Manual – Diesel – 5 seats – 300 MAD/day  
- Hyundai Accent – Sedan – Automatic – Petrol – 5 seats – 400 MAD/day  
- Toyota Prado – SUV – Automatic – Diesel – 7 seats – 900 MAD/day  

---

### 4.2 Pricing Rules
- Prices displayed per day in MAD
- Discounts:
  - 7+ days: 10%
  - 14+ days: 15%
- Optional services add to daily cost
- Total price updates dynamically

---

### 4.3 Rental Options
Optional add-ons (per day):
- GPS Navigation
- Baby Seat
- Full Insurance
- Additional Driver

Users can select or remove options before confirmation.

---

### 4.4 Rental Process
1. Browse available cars
2. Select a car
3. Choose rental duration
4. Select options
5. View total price
6. Submit rental request
7. Receive on-screen confirmation (simulation)

---

### 4.5 Map Location
- Embedded interactive map
- Displays agency location
- Default city: Casablanca, Morocco

---

### 4.6 Contact Information
Displayed contact details:
- Phone number (click-to-call)
- Email address
- Physical address
- WhatsApp contact link

---

## 5. Non-Functional Requirements

### 5.1 Design
- Clean and modern layout
- Responsive design
- Neutral color palette
- Clear typography

### 5.2 Performance
- Fast loading
- No external dependencies except map embed

---

## 6. Technical Constraints
- Frontend only (HTML, CSS, JavaScript)
- No database
- No authentication
- No online payments
- No backend services

---

## 7. Assumptions
- Booking requests are not stored
- Prices are fixed and manually managed
- Internet connection is required for map display

---

## 8. Out of Scope
- User accounts
- Payment processing
- Admin dashboard
- Real-time availability management

---

## 9. Success Criteria
- Users can clearly view cars and prices
- Rental process is easy to understand
- Website works on desktop and mobile
- All interactions function without errors

---

## 10. Future Enhancements
- Backend integration
- Online payment support
- Booking management system
- Multi-language support
