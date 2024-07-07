## Ecommerce Project 🛒

### Project Description

This project is a full-fledged ecommerce platform built using the MERN stack. It combines various features to create a functional ecommerce website for both clients and admins.

### Features

#### Client
- User Registration and Login 📝
- Browse and Explore Products by Categories 🗂️
- Add Products to Cart 🛒
- Checkout Items from Cart 💳
- Edit/Update Items in the Cart ✏️

#### Admin
- Admin Login 🔐
- View Registered Customers and Their Details 📋
- View Daily Sales 📈
- View Customer Orders with Details 🛍️
- Manage Inventory (Create, Update, Delete Products) 🛠️
- View Remaining Stock after Sales 📦

### Project Structure

```plaintext
ecommerce/
├── public/


├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   └── utils/
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md
```

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/umerfarooq5349/ecommerce.git
    cd ecommerce
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

### Running the Application

1. **Start the development server:**

    ```sh
    npm run dev
    ```

    (https://via.placeholder.com/400x200)

2. **Open your browser and navigate to `http://localhost:3000` to see the application in action.**

    ![Application Running](https://via.placeholder.com/400x200)

### API Endpoints

#### User Registration

- **URL:** `/api/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**

    ```json
    {
        "username": "user",
        "password": "password"
    }
    ```

- **Response:**

    ```json
    {
        "message": "User registered successfully"
    }
    ```

#### User Login

- **URL:** `/api/login`
- **Method:** `POST`
- **Description:** Logs in a user.
- **Request Body:**

    ```json
    {
        "username": "user",
        "password": "password"
    }
    ```

- **Response:**

    ```json
    {
        "message": "Login successful",
        "token": "jwt-token"
    }
    ```

### Dependencies

- **Node.js**: LTS version
- **Next.js**: Latest version
- **Express**: Latest version
- **SASS**: For styling
- **TypeScript**: For both Next.js and Node.js

### Author

Umer Farooq

---
