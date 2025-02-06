# Blog API

A simple Express.js API for managing blog posts using MongoDB.

## Features

- Retrieve all blog posts
- Create new blog posts
- CORS-enabled for cross-origin requests
- JSON and URL-encoded body parsing

## Technologies Used

- **Node.js** (Server-side runtime)
- **Express.js** (Backend framework)
- **MongoDB** with **Mongoose** (Database and ORM)
- **Cors** (Cross-origin resource sharing)

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/blog-api.git
cd blog-api
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Start the Server

```sh
npm start
```

The API will run on `http://localhost:3000` (or your specified port).

## API Endpoints

### 1. Get All Blogs

**GET** `/api/blogs`

**Response:**

```json
[
  {
    "_id": "65b7d12f8f2a5c001e34abcd",
    "title": "Understanding JavaScript Closures",
    "author": "John Doe",
    "url": "https://example.com/js-closures",
    "likes": 42
  }
]
```

---

### 2. Create a New Blog

**POST** `/api/blogs`

**Request Body:**

```json
{
  "title": "A Guide to Responsive Web Design",
  "author": "Jane Smith",
  "url": "https://example.com/responsive-design",
  "likes": 30
}
```

**Response:**

```json
{
  "_id": "65b7d12f8f2a5c001e34efgh",
  "title": "A Guide to Responsive Web Design",
  "author": "Jane Smith",
  "url": "https://example.com/responsive-design",
  "likes": 30
}
```

## Folder Structure

```
blog-api/
│-- models/
│   ├── blog.js       # Mongoose schema for blogs
│-- utils/
│   ├── connectDb.js  # MongoDB connection setup
│-- server.js         # Starts the server
│-- app.js            # Express app setup
│-- package.json
│-- README.md
```
