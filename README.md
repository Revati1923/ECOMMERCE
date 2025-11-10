"# ECOMMERCE" 

# E‑Commerce MERN + Admin Module

## Overview

A simple MERN e‑commerce project with a secure admin panel to manage **Products** and **Orders**.

## Tech Stack

* Frontend: React.js, Tailwind CSS
* Backend: Node.js, Express.js
* Database: MongoDB (Mongoose)
* Auth: JWT, bcrypt

## Installation

### Backend Setup

```
cd server
npm install
```

Create `.env` file in `server/` folder:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=Admin@12345
```

Run server:

```
npm start
```

Seed Admin User:

```
node scripts/seedAdmin.js
```

### Frontend Setup

```
cd client
npm install
npm start
```

## Admin Login

Open in browser:

```
http://localhost:3000/admin/login
```

Default login:

* Email: `admin@example.com`
* Password: `Admin@12345`

## Admin Features

* Add / Edit / Delete products
* View and update orders
* Change order status (Pending → Processing → Shipped → Delivered)
* Export orders to CSV
* Protected routes for admin only

## API Routes (Admin)

| Method | Endpoint                     | Purpose             |
| ------ | ---------------------------- | ------------------- |
| POST   | /api/admin/login             | Admin login         |
| GET    | /api/admin/products          | List products       |
| POST   | /api/admin/products          | Add product         |
| PUT    | /api/admin/products/:id      | Update product      |
| DELETE | /api/admin/products/:id      | Delete product      |
| GET    | /api/admin/orders            | List orders         |
| PUT    | /api/admin/orders/:id/status | Update order status |
| POST   | /api/admin/orders/export     | Download orders CSV |

## Notes

Make sure only admin users (`role: "admin"`) can access admin routes using JWT.

--

