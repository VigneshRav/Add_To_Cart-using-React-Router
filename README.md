# 🛒 Add to Cart using React Router

## 📌 Project Overview:

This is a React-based eCommerce demo project that fetches products from the Fake Store API, displays them in a user-friendly interface, and allows users to:

- Add/remove products from a shopping cart

- Increase or decrease item quantities

- View total pricing with a 10% discount

- Navigate between the **Products** and **Cart** pages via React Router

---

## 📎 API Used:

**Fake Store API** : https://fakestoreapi.com/products

---

## 🧰 Tech Stack:

| **Technology**    | **Description**                    |
| ----------------- | ---------------------------------- |
| ReactJS           | JavaScript library for building UI |
| React Router DOM  | Page Routing                       |
| JavaScript (ES6+) | Logic and state management         |
| Tailwind CSS      | Utility-first CSS framework        |
| HTML5/CSS3        | Markup and styling                 |
| Fake Store API    | External API for product data      |

---

⚙️ Routing Configuration

| **Path** | **Component** | **Description**        |
| -------- | ------------- | ---------------------- |
| "/"      | Products      | Shows all products     |
| "/cart"  | Cart          | Displays items in cart |
| "\*"     | NotFound      | Handles unknown routes |

Routing is handled with react-router-dom.

---

## 📦 Features:

### 🛍️ Products Page ("/")

- Fetches product list from Fake Store API.

- Displays product **image**, **title**, **price**, **short description**, **rating** and **Count**.

- Responsive grid layout using TailwindCSS.

- "Add to Cart" button dynamically switches to "Remove from Cart" if the product is already in the cart.

### 🛒 Cart Page ("/cart")

- Displays all items added to the cart.

- Each cart item includes:

  - Product title and price
  - Quantity controls (increase/decrease)
  - Item total (price × quantity)
  - "Remove" button

- Calculates total price and applies **10% discount**.

- Dynamically updates totals as quantities are changed or items are removed.

### 🚫 Not Found Page ("\*")

- Custom 404 page with a return-to-home button.

- Navbar is **not shown** on this page.

### 🧭 Navigation

- Navbar displays links to Products and Cart pages.

- Cart count is shown in the navbar.

- Built with **react-router-dom**.

---

## 💻 Responsive Design:

- Built with Tailwind CSS.

- Tailwind CSS is configured using Vite method.

- Responsive layout with utility-first classes.

- Mobile-first approach.

- Flexbox & grid layout for adaptive design.

---

## ✂️ Future Improvements:

- Authentication.

- Product filtering/search bar.

- Persistent cart using localStorage or backend.

- A separate page for Product details.

---

## 🙋‍♂️ Author & Contact:

- Developed by: Vignesh R

- GitHub: @VigneshRav

- Email: vignesh212000@gmail.com

---
