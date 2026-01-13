# Chat App

A TypeScript-based Node.js and Express chat application with real-time capabilities.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with hot reload:
```bash
npm run dev
```

This will start the server with nodemon, which will automatically restart when you make changes to your TypeScript files.

### Building for Production

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run dev:build` - Watch mode for TypeScript compilation
- `npm run clean` - Remove compiled files

## 📁 Project Structure

```
src/
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── routes/          # API routes
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── index.ts         # Main application entry point
```

## 🛠️ Technology Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Nodemon** - Development server with hot reload
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🔧 Configuration

The application uses the following configuration files:

- `tsconfig.json` - TypeScript compiler configuration
- `nodemon.json` - Nodemon configuration for development
- `.env` - Environment variables (create from `.env.example`)

## 📝 API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check

## 🚧 Next Steps

1. Set up database connection
2. Implement user authentication
3. Add real-time messaging with Socket.io
4. Create chat rooms and private messaging
5. Add file upload capabilities
6. Implement user presence status

## 📄 License

ISC
