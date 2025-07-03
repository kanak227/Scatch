# 👜 Scatch — E-commerce Web App

Welcome to **Scatch**, a simple e-commerce platform built with Node.js, Express, MongoDB, and EJS!  
This project lets users browse products, add them to their cart, and manage their accounts.  
Admins can create new products and manage the catalog.

---

## 🚀 Features

- 🛒 **Shop & Cart**: Browse products, add to cart, and view price breakdowns.
- 👤 **User Auth**: Register, login, and logout with JWT-based authentication.
- 🛍️ **Admin Panel**: Create new products and manage the product list.
- 📦 **Product Management**: Upload images, set prices, discounts, and colors.
- 🔒 **Session & Flash**: Secure sessions and user feedback with flash messages.
- 🎨 **Modern UI**: Styled with Tailwind CSS and Remixicon.

---

## 📂 Project Structure

```
Scatch/
├── app.js                # Main Express app
├── config/               # Configuration (Mongoose, Multer, etc.)
├── controllers/          # Auth logic
├── middlewares/          # Auth middleware
├── models/               # Mongoose models (User, Owner, Product)
├── public/               # Static assets (not shown)
├── routes/               # Express routers
├── utils/                # Utility functions (JWT)
├── views/                # EJS templates (pages & partials)
├── .env                  # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Setup & Run

1. **Clone the repo**
   ```sh
   git clone <repo-url>
   cd Scatch
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment**
   - Copy `.env` and set your `JWT_KEY`.
   - MongoDB should be running locally (`mongodb://127.0.0.1:27017`).

4. **Start the app**
   ```sh
   node app.js
   ```
   The app runs on [http://localhost:3000](http://localhost:3000).

---

## 📝 Main Scripts

- `npm start` — Start the server (add this script if needed).
- `node app.js` — Directly run the app.

---

## 👨‍💻 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Frontend**: EJS, Tailwind CSS, Remixicon
- **Auth**: JWT, bcrypt
- **File Uploads**: Multer

---

## 📸 Screenshots

> Add screenshots of your shop, cart, and admin pages here!

---

## 🙏 Credits

- Inspired by modern e-commerce UIs.
- Built with 💙 by [Your Name].

---

## 📄 License

This project is licensed under the ISC