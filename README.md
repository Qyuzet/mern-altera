# MERN Altera

Welcome to **MERN Altera**, a full-stack web application showcasing the use of the MERN stack with advanced functionality like routing, state management, and server-side integration. This project highlights CRUD operations for managing products while providing a user-friendly interface.

## 🚀 Live Demo
Check out the live deployment on Render: [MERN Altera](https://mern-altera.onrender.com)

## 📂 Project Structure
This project is built using the MERN stack (MongoDB, Express, React, Node.js) with additional tools and libraries to enhance functionality and design.

### Technologies Used
- **Frontend:**
  - [React.js](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/) for responsive and modern UI
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [Tech Stack Icons](https://github.com/tech-stack-icons/)

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
  - RESTful API design

- **Testing and API Interaction:**
  - [Postman](https://www.postman.com/)

## 🌟 Features
- **Dynamic Product Management:**
  - CRUD functionality for products
  - Visual representation of products with images, names, and prices

- **Routing:**
  - Dynamic page navigation using `react-router-dom`

- **State Management:**
  - Centralized product state using custom hooks and `useProductStore`

- **Custom Alerts and Toasts:**
  - Real-time feedback with custom alerts and toast messages

- **Interactive Dialogs:**
  - Edit product details using modals

- **Responsive Design:**
  - Optimized for desktop and mobile using Tailwind CSS

## 📋 Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Qyuzet/mern-altera.git
   cd mern-altera
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend and frontend:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Environment Variables
Create a `.env` file in the root directory and set the following:
```env
MONGO_URI=<your-mongodb-connection-string>
PORT=<backend-server-port>
```

## 💻 Usage

### Pages
- **Welcome Page** (`/`): Introduction to the app
- **Products Page** (`/product`): Form for adding or editing product details
- **Super Page** (`/super`): Display all products with options to delete or edit
- **User Page** (`/user`): Placeholder page with a fun alert message

### Components
- **Card:** Visual representation of products
- **Sidebar:** Toggleable navigation menu
- **Alert:** Custom alert component for messages
- **DialogDemo:** Modal for editing products

## 🛠️ Development Tools
- **Render:** Live deployment
- **React Router:** For SPA-like navigation
- **Lucide React:** Modern icons
- **Custom Hooks:** Centralized state and utilities

## 🔧 Project Highlights
This project demonstrates:
- Integration of modern web technologies
- Efficient state management with centralized data
- Modular, reusable components
- Clean and responsive UI design

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

Happy coding!  
Feel free to contribute or raise issues in the repository.  
**GitHub Profile:** [Qyuzet](https://github.com/Qyuzet)  
