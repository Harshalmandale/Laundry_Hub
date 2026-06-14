# Laundry_Hub


# 🧺 Laundry Service Web Application

A modern, responsive Laundry Service Web Application built using **HTML, CSS, and JavaScript**. This project allows users to browse laundry services, add/remove services from a cart, calculate totals dynamically, and book services with email confirmation using EmailJS.

## 🚀 Live Demo

Add your deployed link here:

```
https://your-username.github.io/laundry-service-web-app/
```

## 📸 Screenshots

### Home Page
![Home Page](screenshots/homepage.png)

### Booking Section
![Booking Section](screenshots/booking-section.png)

### Mobile View
![Mobile View](screenshots/mobile-view.png)

---

## ✨ Features

- Responsive Canva-inspired UI
- Sticky Navigation Bar
- Smooth Scrolling Navigation
- Service Overview Section
- Dynamic Add/Remove Cart Functionality
- Quantity Management
- Real-time Total Calculation
- Booking Form Validation
- EmailJS Integration for Booking Confirmation
- Newsletter Subscription Section
- Quality Description Section
- Social Media Footer
- Mobile-Friendly Design

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- EmailJS
- Font Awesome

---

## 📂 Project Structure

```
laundry-service-web-app/
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
├── LICENSE
├── images/
└── screenshots/
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/laundry-service-web-app.git
```

2. Open the project folder:

```bash
cd laundry-service-web-app
```

3. Open `index.html` in your browser.

---

## 📧 EmailJS Setup

Replace the placeholders in `script.js`:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");

emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    {
        customer_name: fullName,
        customer_email: email,
        customer_phone: phone,
        selected_services: services,
        total_amount: total
    }
);
```

with your EmailJS credentials.

---

## 📈 Future Improvements

- Payment Gateway Integration
- User Authentication
- Order Tracking System
- Backend Database Integration
- Admin Dashboard

---

## 👨‍💻 Author

Harshal Mandale33
- GitHub: https://github.com/Harshalmandale
- LinkedIn: https://linkedin.com/in/harshalm-m01

---

## ⭐ Support

If you found this project helpful, please consider giving it a star ⭐ on GitHub.
