# Task Management Project

This is a task management project created using Next.js and Firebase. It allows users to manage their tasks by logging in, creating, updating, and deleting tasks. Users can also filter and view tasks based on different criteria.

## Features

- User authentication with Firebase.
- Real-time database using Firebase Firestore.
- CRUD operations for tasks (Create, Read, Update, Delete).
- Filtering and viewing tasks based on status.

## Setup

To set up the project locally, follow these steps:

# Clone the repository:

   ```bash
   git clone <repository_url>
```

# Install dependencies:
```
cd task-management-project
npm install
```

# Set up Firebase:

Create a Firebase project on the Firebase Console.
Enable Authentication and Firestore for the project.
Add your Firebase project configuration to firebase.js in the project.
Ensure Firestore rules allow read and write access.

# Run the project:
```
npm run dev
```
The project will start on http://localhost:3000.

# Usage
To access the application, users need to sign up for an account.
Once signed up, users can log in to access their tasks.
Users can create, update, and delete tasks.
Users can filter and view tasks based on different statuses (e.g., Todo, In Progress, Done).

# Technologies Used
Next.js 13
Firebase (Authentication, Firestore)
React.js
HTML/CSS
