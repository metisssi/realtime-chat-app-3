# 🌍 Streamify - Language Learning Platform - https://realtime-chat-app-4-streamify.onrender.com



A modern, full-stack language learning platform built with the MERN stack (MongoDB, Express.js, React, Node.js), Stream Chat, and Stream Video for real-time communication and video calling capabilities.

## 📸 Application Screenshots

### Signup Page
First, users create an account with their email, password, and full name.

<img width="1916" alt="Signup Page" src="https://github.com/user-attachments/assets/11c3ddcd-6747-4a37-8870-6a96d811c519" />

---

### Onboarding Page
After signup, users are redirected to the onboarding page to add additional information like bio, native language, learning language, and location.

<img width="1919" alt="Onboarding Page" src="https://github.com/user-attachments/assets/60ad266c-1767-46d1-b124-84c83ba52d7a" />

---

### Homepage with Recommended Users
Now we can see the homepage with recommended users. Here, we will add **test2** to our friend list.

<img width="1918" alt="Homepage with Recommended Users" src="https://github.com/user-attachments/assets/dd6aa45f-8a22-4132-9976-d30b407f5bbd" />

---

### Friend Request Notification
**test2** receives a notification about the friend request from **test1**.

<img width="1865" alt="Friend Request Notification" src="https://github.com/user-attachments/assets/e302cd63-f19e-468e-831a-13cabc9e3220" />

---

### Friend Request Accepted
When **test2** accepts the friend request, **test1** receives a notification that they are now friends.

<img width="1919" alt="Friend Request Accepted Notification" src="https://github.com/user-attachments/assets/075cebcd-5ebb-4971-b048-335b7aeb0660" />

---

### Theme Selection
Users can change the application theme from over 30 available options.

<img width="416" alt="Theme Selector" src="https://github.com/user-attachments/assets/72707589-a297-45ed-87f9-a28d4e752435" />

<img width="1919" alt="Theme Applied" src="https://github.com/user-attachments/assets/b7bd858d-d31c-4a56-840e-d7c4b6de6ff2" />

---

### Real-Time Chat
Now that we are friends, we can send messages to **test2** and even start a video call by clicking the camera icon.

<img width="1869" alt="Chat with Video Call Button" src="https://github.com/user-attachments/assets/5b665458-2acc-441e-9b8e-23a62a06afd6" />

---

### Video Call Link
When we click on the camera icon in the chat, a video call link is automatically sent to the chat. Both users can click on this link to join the call.

<img width="1912" alt="Video Call Link in Chat" src="https://github.com/user-attachments/assets/f539dead-76d9-45e8-a585-45485359b157" />

---

### Video Call Interface
After clicking the link, users join the video call where they can share their screen, turn on/off their camera, or mute/unmute their microphone.

<img width="1919" alt="Video Call Interface" src="https://github.com/user-attachments/assets/4b4c279a-9764-41f9-a30f-b89ccda89d52" />

---

![Node.js](https://img.shields.io/badge/Node.js-v16+-green)
![React](https://img.shields.io/badge/React-v19.1-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-v8+-brightgreen)

## ✨ Features

- 🔐 **User Authentication** - Secure signup and login with JWT tokens
- 👤 **User Onboarding** - Complete profile setup with language preferences
- 🌐 **Language Matching** - Find language exchange partners based on native and learning languages
- 💬 **Real-Time Chat** - Instant messaging using Stream Chat SDK
- 📹 **Video Calling** - High-quality video calls with Stream Video SDK
- 👥 **Friend System** - Send and accept friend requests
- 🔔 **Notifications** - Real-time friend request notifications
- 🎨 **Multiple Themes** - 30+ beautiful themes to choose from
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🖼️ **Random Avatars** - Automatic profile picture generation
- 🌍 **Location-Based** - Display user locations with country flags

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Stream Chat** - Real-time chat infrastructure
- **Stream Video** - Video calling infrastructure
- **JWT** - JSON Web Tokens for authentication
- **bcrypt.js** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library (v19.1)
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **TanStack Query** - Data fetching and state management
- **Zustand** - State management
- **React Router** - Client-side routing
- **Stream Chat React** - Chat UI components
- **Stream Video React SDK** - Video calling components
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager
- Stream account (for Chat and Video APIs)

## 🚀 Installation

1. **Clone the repository**
```bash
git clone <your-repository-url>
cd realtime-chat-app-4-streamify
```

2. **Install root dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
npm install
cd ..
```

4. **Install frontend dependencies**
```bash
cd frontend
npm install
cd ..
```

5. **Environment setup**

Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
NODE_ENV=development
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

Create a `.env` file in the `frontend` directory:
```env
VITE_STREAM_API_KEY=your_stream_api_key
```

## 🎮 Usage

### Development Mode

1. **Start the backend server**
```bash
cd backend
npm run dev
```
The server will run on `http://localhost:5000`

2. **Start the frontend (in a separate terminal)**
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

### Production Build

1. **Build the application**
```bash
npm run build
```

2. **Start the production server**
```bash
npm start
```

## 📁 Project Structure

```
realtime-chat-app-4-streamify/
├── backend/
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   │   ├── auth.controller.js
│   │   │   ├── chat.controller.js
│   │   │   └── user.controller.js
│   │   ├── models/           # Database schemas
│   │   │   ├── User.js
│   │   │   └── FriendRequest.js
│   │   ├── routes/           # API routes
│   │   │   ├── auth.route.js
│   │   │   ├── chat.route.js
│   │   │   └── user.route.js
│   │   ├── middleware/       # Custom middleware
│   │   │   └── auth.middleware.js
│   │   ├── lib/              # Utilities
│   │   │   ├── db.js
│   │   │   └── stream.js
│   │   └── server.js         # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utilities and API
│   │   ├── store/           # State management
│   │   └── constants/       # Constants and configs
│   └── package.json
└── package.json
```

## 🔒 Authentication Flow

1. User signs up with email, password, and full name
2. Password is hashed using bcrypt
3. User is created in MongoDB and Stream Chat
4. JWT token is generated and stored in HTTP-only cookie
5. User completes onboarding with profile details
6. Token is validated on protected routes
7. User can logout to clear the cookie

## 💬 Chat System

1. User selects a friend from their friends list
2. Chat channel is created/retrieved using Stream Chat SDK
3. Messages are sent and received in real-time
4. Chat history is stored by Stream
5. Users can initiate video calls from chat interface

## 📹 Video Calling Flow

1. User clicks video call button in chat
2. Unique call ID is generated from channel ID
3. Video call link is sent to chat
4. Both users can join the call
5. Stream Video SDK handles peer-to-peer connection
6. Call controls (mute, camera, hang up) are available

## 👥 Friend System

1. User browses recommended language partners
2. User sends friend request
3. Recipient receives notification
4. Recipient accepts friend request
5. Both users are added to each other's friends list
6. Users can now chat and call each other

## 🎨 Theme System

- 30+ pre-configured DaisyUI themes
- Theme selection saved to localStorage
- Themes include: forest, coffee, dark, light, cyberpunk, and more
- Theme persists across sessions

## 🌍 Language Matching

- Users specify native and learning languages
- System recommends partners with complementary language pairs
- Language flags displayed using flagcdn.com
- Supports 14 major languages

## 🔌 Stream Integration

### Stream Chat
- Real-time messaging
- Message history
- Typing indicators
- Read receipts
- Channel management

### Stream Video
- HD video quality
- Screen sharing
- Camera/mic controls
- Network adaptive streaming
- Recording capabilities

## 🔐 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT authentication with HTTP-only cookies
- Protected API routes with middleware
- XSS protection through HTTP-only cookies
- CSRF protection with sameSite cookie attribute
- Input validation and sanitization
- Email format validation

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/onboarding` - Complete user onboarding
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get recommended users
- `GET /api/users/friends` - Get user's friends
- `POST /api/users/friend-request/:id` - Send friend request
- `PUT /api/users/friend-request/:id/accept` - Accept friend request
- `GET /api/users/friend-requests` - Get friend requests
- `GET /api/users/outgoing-friend-requests` - Get outgoing requests

### Chat
- `GET /api/chat/token` - Get Stream Chat token

## 🐛 Known Issues

- None currently reported

## 🚀 Future Enhancements

- [ ] Group chat functionality
- [ ] Message reactions and emojis
- [ ] User blocking functionality
- [ ] Advanced search filters
- [ ] Learning progress tracking
- [ ] Scheduled language sessions
- [ ] Language learning resources
- [ ] Achievement system
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] Audio-only calls
- [ ] Screen sharing in calls
- [ ] Recording sessions
- [ ] AI language tutor integration

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Environment Variables

### Backend
- `PORT` - Server port (default: 5000)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET_KEY` - Secret key for JWT tokens
- `NODE_ENV` - Environment (development/production)
- `STREAM_API_KEY` - Stream API key
- `STREAM_API_SECRET` - Stream API secret

### Frontend
- `VITE_STREAM_API_KEY` - Stream API key for client

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

A. Simchera

## 🙏 Acknowledgments

- Avatar images provided by [avatar.iran.liara.run](https://avatar.iran.liara.run)
- Country flags from [flagcdn.com](https://flagcdn.com)
- Icons from Lucide React
- UI components from DaisyUI
- Chat infrastructure by Stream Chat
- Video infrastructure by Stream Video
- Illustration from [storyset.com](https://storyset.com)

---

⭐ Star this repository if you find it helpful!
