# 🌐 Streamify - Language Learning Chat Platform

<div align="center">

![Streamify Logo](https://img.shields.io/badge/Streamify-Language%20Learning-4CAF50?style=for-the-badge&logo=chat&logoColor=white)

**Connect with language partners worldwide and practice through real-time chat and video calls**

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Stream](https://img.shields.io/badge/Stream-Chat%20%26%20Video-005FFF?style=flat&logo=stream&logoColor=white)](https://getstream.io/)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Screenshots](#-screenshots)

---

### 🌐 **[Live Demo →](https://realtime-chat-app-4-streamify.onrender.com/)**

---

</div>

---

## ✨ Features

### 🎯 Core Functionality
- **User Authentication** - Secure signup/login with JWT tokens
- **Friend System** - Send and accept friend requests
- **Real-time Chat** - Powered by Stream Chat SDK
- **Video Calls** - Integrated video calling with Stream Video SDK
- **Smart Matching** - Get recommended language partners based on learning goals

### 🎨 User Experience
- **Profile Onboarding** - Complete profile setup with language preferences
- **Theme Selector** - 30+ beautiful themes to customize your experience
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Notifications** - Stay updated with friend requests and messages

---

## 📸 Screenshots & Demo

### 1. Authentication
**Login Page**
<img width="1919" alt="Login Screen" src="https://github.com/user-attachments/assets/01f3f654-a959-405d-80bb-e089b7927274" />

**Register Page**
<img width="1917" alt="Registration Screen" src="https://github.com/user-attachments/assets/54b4af6e-853f-4c02-a52f-035bc999c45d" />

---

### 2. Onboarding Process
**Complete Your Profile**

After registration, new users complete their profile with language preferences and learning goals.

<img width="1917" alt="Profile Onboarding" src="https://github.com/user-attachments/assets/a0b074c4-c8bf-41fb-80e2-ed9dbacef6b0" />

---

### 3. Theme Customization
**Choose Your Theme**

Personalize your experience with 30+ beautiful themes.

<img width="293" alt="Theme Selector" src="https://github.com/user-attachments/assets/d46a5e6c-df8e-445b-b2ec-41dd6612e8f3" />

---

### 4. Home & Friend System
**Dashboard with Friend Requests**

View your friends and discover recommended language partners.

<img width="1919" alt="Home Page - Friends and Requests" src="https://github.com/user-attachments/assets/e2a1df55-8bd9-4bf2-a1d4-ff4df50279b2" />

---

### 5. Notifications
**Friend Request Notifications**

Receive and manage friend requests in real-time.

<img width="1903" alt="Friend Request Notification" src="https://github.com/user-attachments/assets/dfb240b8-7e11-4ac7-87ae-c583833eca91" />

---

### 6. Chat Interface
**Real-time Messaging**

Once connected, chat with your language partners instantly.

<img width="1917" alt="Chat Interface - Friends List" src="https://github.com/user-attachments/assets/f305684b-88bb-404d-a0db-8213b28df727" />

**Active Conversation**
<img width="1918" alt="Chat Conversation" src="https://github.com/user-attachments/assets/330c3211-a348-47d9-9fce-27e329e4cd19" />

---

### 7. Video Calling
**High-Quality Video Calls**

Start video calls directly from the chat interface for immersive language practice.

<img width="1913" alt="Video Call Interface" src="https://github.com/user-attachments/assets/b95658a9-ca7b-40f8-b2e0-1847463c4289" />

---

## 🚀 Installation

### Prerequisites
```bash
Node.js >= 16
MongoDB
Stream API Key & Secret
```

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/streamify.git
cd streamify
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
NODE_ENV=development
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
VITE_STREAM_API_KEY=your_stream_api_key
```

### 4️⃣ Run the Application

**Development Mode:**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

**Production Build:**
```bash
# From root directory
npm run build
npm start
```

The app will be running at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **React Router** - Navigation
- **TanStack Query** - Data fetching & caching
- **Stream Chat React** - Chat UI components
- **Stream Video React SDK** - Video calling
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **DaisyUI** - UI components
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Stream Chat** - Chat backend
- **Stream Video** - Video backend

---

## 📂 Project Structure

```
streamify/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Route controllers
│   │   ├── models/           # MongoDB models
│   │   ├── routes/           # API routes
│   │   ├── middleware/       # Auth middleware
│   │   ├── lib/              # Stream & DB config
│   │   └── server.js         # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom hooks
│   │   ├── store/            # State management
│   │   ├── lib/              # API & utilities
│   │   └── constants/        # App constants
│   └── package.json
└── package.json
```

---

## 🔑 Key Features Explained

### Friend Request System
Users can send friend requests to language partners. The system prevents:
- Sending requests to yourself
- Duplicate requests
- Requests to existing friends

### Real-time Chat
Powered by Stream Chat, featuring:
- Instant message delivery
- Message history
- Typing indicators
- Read receipts

### Video Calling
Integrated Stream Video SDK provides:
- One-click video calls
- Share video call links in chat
- Built-in call controls
- High-quality video/audio

### Smart Recommendations
The app recommends language partners based on:
- Native language
- Learning language
- Location
- Onboarding status

---

## 🌍 Environment Variables

### Backend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/streamify` |
| `JWT_SECRET_KEY` | JWT signing secret | `your-secret-key-here` |
| `STREAM_API_KEY` | Stream API key | `your-stream-key` |
| `STREAM_API_SECRET` | Stream API secret | `your-stream-secret` |
| `NODE_ENV` | Environment mode | `development` or `production` |

### Frontend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_STREAM_API_KEY` | Stream API key | `your-stream-key` |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

---

## 🙏 Acknowledgments

- [Stream](https://getstream.io/) for the amazing chat and video SDKs
- [DaisyUI](https://daisyui.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

<div align="center">

**Made with ❤️ for language learners worldwide**

⭐ Star this repo if you find it helpful!

[🌐 Try Live Demo](https://realtime-chat-app-4-streamify.onrender.com/)

</div>
