# ConVove - Real-Time Communication App

ConVove is a real-time communication platform that allows users to connect with celebrities through video calls, audio calls, and messaging. Built with a modern tech stack, the app features a secure user authentication system, a points management system, and a seamless user experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Points Management](#points-management)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure sign-up, login, and account management using JWT.
- **Real-Time Communication:** Support for video calls, audio calls, and messaging.
- **Points Management:** Users have 10 points for communication, deducted per minute based on activity.
- **Error Handling:** Robust error handling throughout the application.

## Tech Stack

- **Frontend:** React.js with TypeScript, Material-UI for styling
- **Backend:** Express.js with TypeScript
- **Database:** MongoDB
- **Real-Time Communication:** WebRTC, Socket.io
- **Authentication:** JWT (JSON Web Tokens)

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Steps

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/your-username/convove.git](https://github.com/Tauhidul-Hossain/Real-Time-Communication-App-For-Massage-Audio-Video-Call.git
   cd convove
   ```

2. **Install dependencies:**

   ```bash
   # For the client
   cd client
   npm install

   # For the server
   cd ../server
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `server` directory and configure the following variables:

   ```env
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**

   ```bash
   # Start the backend server
   cd server
   npm run dev

   # Start the frontend
   cd ../client
   npm start
   ```

5. **Visit the application:**

   Open your browser and go to `http://localhost:3000`.

## Usage

1. **Sign Up or Log In:**
   - Use the sign-up page to create an account or log in with existing credentials.
  
2. **View Celebrity Profiles:**
   - Browse through the list of celebrities, view their profiles, and initiate communication.

3. **Start Communication:**
   - Use your points to start a video call, audio call, or send a message.

4. **Manage Points:**
   - Add points when your balance is low to continue communication without interruptions.

## API Endpoints

| Method | Endpoint             | Description                           |
| ------ | -------------------- | ------------------------------------- |
| POST   | `/api/auth/signup`   | Sign up a new user                    |
| POST   | `/api/auth/login`    | Log in a user                         |
| GET    | `/api/celebrities`   | Get the list of celebrities           |
| POST   | `/api/points/add`    | Add points to the user's balance      |
| POST   | `/api/communication` | Initiate communication (video, audio, or messaging) |

## Points Management

- **Video Call:** 5 points per minute
- **Audio Call:** 3 points per minute
- **Messaging:** 1 point per message

Once a user's points reach zero, the communication session will automatically end. Users can add points at any time by clicking the "Add Points" button.

## Screenshots

### Sign-In Page
![Sign-In Page](./screenshots/signin.png)

### Celebrity Profile
![Celebrity Profile](./screenshots/profile.png)

### Video Call
![Video Call](./screenshots/video-call.png)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
