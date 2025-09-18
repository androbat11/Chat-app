# Chat App - Imperative Shell Architecture

A TypeScript-based Node.js and Express chat application built with an **Imperative Shell Architecture**. This architecture provides a command-driven interface that separates concerns and makes the application more modular, testable, and maintainable.

## 🏗️ Architecture Overview

The Imperative Shell Architecture consists of several key components:

- **Commands**: Encapsulated business logic as executable commands
- **Command Registry**: Central registry for managing and discovering commands
- **Command Dispatcher**: Handles command execution and validation
- **Command Shell**: Provides a unified interface for command execution
- **Middleware**: Handles cross-cutting concerns like authentication, logging, and rate limiting

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

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run dev:build` - Watch mode for TypeScript compilation
- `npm run clean` - Remove compiled files

## 📁 Project Structure

```
src/
├── core/              # Core command architecture
│   ├── Command.ts     # Base command interface and class
│   └── CommandRegistry.ts # Registry and dispatcher
├── commands/          # Business logic commands
│   ├── ChatCommands.ts    # Chat-related commands
│   └── UserCommands.ts    # User management commands
├── middleware/        # Express middleware
│   └── CommandMiddleware.ts # Command-specific middleware
├── shell/             # Shell interface
│   └── ShellService.ts # Shell service implementation
├── types/             # TypeScript type definitions
│   └── index.ts       # Application types
└── index.ts           # Main application entry point
```

## 🎯 Command Architecture

### Core Components

1. **ICommand Interface**: Defines the contract for all commands
2. **BaseCommand Class**: Provides common functionality for all commands
3. **CommandRegistry**: Manages command registration and discovery
4. **CommandDispatcher**: Handles command execution and validation
5. **CommandShell**: Provides a unified interface for command execution

### Command Structure

Each command implements:
- `name`: Unique command identifier
- `description`: Human-readable description
- `parameters`: Parameter definitions with types and validation
- `execute()`: Main execution logic

## 🔌 API Endpoints

### Command Execution

- `POST /api/command/public` - Execute public commands (no auth required)
- `POST /api/command` - Execute authenticated commands

**Request Format:**
```json
{
  "command": "send_message content=\"Hello!\" chatId=chat123"
}
```

### Utility Endpoints

- `GET /` - Welcome message with architecture info
- `GET /health` - Health check
- `GET /api/help` - Get command help (`?command=commandName`)
- `GET /api/commands` - List all available commands
- `GET /api/demo` - Execute demo commands

## 📋 Available Commands

### Chat Commands
- `send_message` - Send a message to a chat room
- `create_chat` - Create a new chat room
- `join_chat` - Join an existing chat room
- `leave_chat` - Leave a chat room
- `get_messages` - Get messages from a chat room
- `list_chats` - List all chats for the current user

### User Commands
- `create_user` - Create a new user account
- `login` - Authenticate a user
- `get_profile` - Get user profile information
- `update_profile` - Update user profile information
- `logout` - Logout the current user

## 💡 Usage Examples

### Using the API

1. **Send a message:**
   ```bash
   curl -X POST http://localhost:3000/api/command \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer jwt_token_123" \
     -d '{"command": "send_message content=\"Hello everyone!\" chatId=chat123"}'
   ```

2. **Create a chat:**
   ```bash
   curl -X POST http://localhost:3000/api/command \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer jwt_token_123" \
     -d '{"command": "create_chat name=\"General Discussion\" type=group participants=[\"user1\",\"user2\"]"}'
   ```

3. **Get help for a command:**
   ```bash
   curl http://localhost:3000/api/help?command=send_message
   ```

4. **List all commands:**
   ```bash
   curl http://localhost:3000/api/commands
   ```

### Command Syntax

Commands use a simple key=value syntax:
```
command_name param1=value1 param2=value2
```

For complex values (arrays, objects), use JSON:
```
create_chat name="My Chat" participants=["user1","user2","user3"]
```

## 🛡️ Security Features

- **Authentication Middleware**: Validates JWT tokens for protected commands
- **Rate Limiting**: Prevents abuse with configurable limits
- **Parameter Validation**: Type-safe parameter validation
- **Error Handling**: Comprehensive error handling and logging

## 🔧 Middleware Stack

1. **Rate Limiting**: 100 requests per 15 minutes per client
2. **Logging**: Request/response logging with timing
3. **Error Handling**: Centralized error handling
4. **Authentication**: JWT token validation (for protected routes)
5. **Command Execution**: Command parsing and execution

## 🧪 Testing Commands

Use the demo endpoint to test the command system:
```bash
curl http://localhost:3000/api/demo
```

This will execute a series of demo commands and show the results.

## 🚧 Next Steps

1. **Database Integration**: Connect commands to a real database
2. **Real-time Features**: Add Socket.io for real-time messaging
3. **Command History**: Implement command history and undo functionality
4. **Command Composition**: Allow chaining multiple commands
5. **Plugin System**: Enable dynamic command loading
6. **Command Permissions**: Fine-grained permission system
7. **Command Scheduling**: Delayed and recurring command execution

## 📄 License

ISC
