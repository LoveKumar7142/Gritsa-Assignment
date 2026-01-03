  # 📦 Product Management Dashboard – Frontend Assignment

## 🚀 Live Demo
👉 https://gritsa-assignment.netlify.app/

---

## 🧾 Overview
This is a **frontend-only Product Management Dashboard** built using **React (Vite)**.  
The application allows users to manage products with features like list & card views, real-time search with debounce, add/edit products, pagination, and a responsive UI.

This project was developed as part of a **Frontend Assignment**.  
No backend or API is used — all product data is managed **in-memory using React state**.

---

## ✨ Features

### 📋 Product List Display
- Table (List View)
- Card (Grid View)
- Toggle between views

### 🔍 Search Functionality
- Search products by name
- Real-time search
- **500ms debounce** implemented

### ➕ Add & ✏️ Edit Product
- Form fields:
  - Name (required)
  - Price (required, number)
  - Category (required)
  - Stock (number)
  - Description (optional)
- Basic form validation with error messages
- Edit existing products

### 📄 Pagination
- Pagination for product listing
- Works with search and view toggle

### 🎨 UI & UX
- Responsive and user-friendly interface
- Light / Dark / Bright theme toggle
- Glassmorphism-style UI
- Sticky footer layout

---

## 🛠️ Tech Stack
- React (Vite)
- React Router DOM
- HTML5
- CSS3
- JavaScript (ES6+)

---

## 📂 Project Structure

src/
├─ components/
│ ├─ ProductTable.jsx
│ ├─ ProductCard.jsx
│ ├─ ProductForm.jsx
│ ├─ Pagination.jsx
│ ├─ SearchBar.jsx
│ ├─ ViewToggle.jsx
│
├─ layout/
│ ├─ Header.jsx
│ ├─ Footer.jsx
│
├─ pages/
│ ├─ Home.jsx
│ ├─ Products.jsx
│ ├─ About.jsx
│ ├─ Contact.jsx
│
├─ data/
│ └─ dummyProducts.js
│
├─ App.jsx
├─ main.jsx
├─ index.css


---

## ⚙️ Getting Started (Local Setup)

### 1️⃣ Install Dependencies
```bash
npm install
