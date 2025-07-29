# 📝 User Registration and Listing Web App

A simple frontend project that allows users to **register** and view a **user list** using a fake REST API powered by **JSON Server**.

---

## 📁 Project Structure

```
json-server-app/
├── index.html         # Registration form page
├── userlist.html      # Page to view registered users
├── Form2Server.js     # Handles form submission (POST)
├── Server2Form.js     # Fetches and deletes users (GET, DELETE)
├── db.json            # Fake database for JSON Server
├── README.md          # Project instructions and usage
│
├── [Auto-generated files below after npm init / install]
├── node_modules/      # Node.js dependencies
├── package.json       # NPM metadata
└── package-lock.json  # Dependency lock file
```

---

## ⚙️ Setup Instructions

### ✅ 1. Install JSON Server
Make sure you have Node.js installed, then run:
```bash
npm install -g json-server
```

### ✅ 2. Run the Fake Backend
Navigate to the project folder and run:
```bash
json-server --watch db.json --port 4444
```

API will be available at:  
📍 `http://localhost:4444/users`

---

## 🚀 How to Use the App

### 🔹 Step 1: Register a User
- Open `index.html` in your browser.
- Fill in the form fields.
- Click **Submit**.
- Data is sent via `Form2Server.js` to JSON Server using a POST request.

### 🔹 Step 2: View Users
- Open `userlist.html`.
- Users are fetched from the server and displayed in a table.
- `Server2Form.js` handles fetching and deleting users.

### 🔹 Step 3: Delete a User
- Click the 🗑️ (delete) icon beside a user.
- User is removed from the JSON server (`db.json`) file.

---

## 💻 Tech Stack

| Technology     | Purpose                       |
|----------------|-------------------------------|
| HTML, CSS      | Structure and design          |
| Bootstrap      | Responsive styling            |
| jQuery         | DOM manipulation & AJAX       |
| Font Awesome   | Icons (e.g., delete icon)     |
| JSON Server    | Fake REST API (for testing)   |

---

## ✅ Features

- Simple registration form
- List of users displayed in a table
- Delete functionality for users
- Real-time updates with fake backend

---

## ✨ Optional Improvements

- Add edit functionality
- Form validation
- Toast alerts for actions
- Responsive enhancements

---

## 👩‍💻 Developer

**Suzie (Sushma Kalikota)**  
Frontend Developer in progress 🚀
