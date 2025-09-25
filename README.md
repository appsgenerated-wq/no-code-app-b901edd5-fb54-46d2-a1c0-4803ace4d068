# Pearadise - A Manifest-Powered App

Welcome to Pearadise, a web application for discovering and cataloging pear varieties. This project demonstrates a complete full-stack application built with a React frontend and a Manifest backend.

## Features

- **User Authentication**: Secure user sign-up and login powered by Manifest's built-in authentication.
- **Pear Variety Management**: Users can create, view, and delete their own pear entries.
- **Image Uploads**: Each pear variety can have a photo, handled by Manifest's file storage.
- **Role-Based Access Control**: Users can only manage their own data. An auto-generated admin panel is available for administrative tasks.
- **Responsive UI**: A modern, professional user interface built with Tailwind CSS.

## Tech Stack

- **Backend**: Manifest (YAML-based backend configuration)
- **Frontend**: React
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **SDK**: `@mnfst/sdk` for all frontend-backend communication

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- A Manifest account and the Manifest CLI

### Backend Setup (with Manifest)

1.  **Save the `manifest.yml` file** provided in this project.
2.  **Run the Manifest server**: Open your terminal in the directory with `manifest.yml` and run:
    ```bash
    mnfst start
    ```
3.  The backend server will start, typically on `http://localhost:3000`. It will automatically create the database schema and API endpoints.
4.  **Access the Admin Panel**: Navigate to `http://localhost:3000/admin`. Log in with default credentials (`admin@manifest.build` / `admin`) to manage users and data.

### Frontend Setup

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Configure environment variables**: Create a `.env.local` file in the root of the frontend project and set the Manifest App ID.
    ```
    VITE_APP_ID=pearadise_app_v1
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
4.  The React app will be available at `http://localhost:5173`.

### Demo Account

The application is pre-configured with a demo account to allow easy access.

- **Email**: `user@example.com`
- **Password**: `password`

You can create this user via the frontend sign-up flow or in the Manifest Admin Panel.
