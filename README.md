# AWS Honeypots - Desktop Interface

## Overview

This project is a web-based desktop operating system interface emulator designed to serve as the frontend for an AWS honeypot deployment platform. The interface mimics the look and feel of a generic desktop operating system, providing users with a familiar environment to interact with honeypot management tools.

## Features

### Current Frontend Implementation

#### 🔒 **Lock Screen Experience**
- **Animated Lock Screen**: Features a space-themed background with dynamic star animations
- **Swipe-to-Unlock**: Interactive gesture-based unlocking mechanism using drag gestures
- **Real-time Clock**: Displays current date and time in Spanish locale
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and effects

#### 🖥️ **Desktop Environment**
- **Animated Desktop**: Full-screen desktop with animated wallpaper background
- **Taskbar**: Bottom taskbar with application icons and system information
  - Start button with bear icon
  - File Explorer launcher
  - Real-time clock display
- **File Explorer Window**: Resizable and draggable window system
  - Home view for navigation
  - Form interface for data input
  - Minimize, maximize, and close controls
  - Sidebar navigation

#### 🎨 **Visual Design**
- **Retro Aesthetic**: Uses VT323 monospace font for authentic terminal feel
- **Color Theme**: Dark theme with blue, red, and purple accent colors
- **Glow Effects**: CSS drop-shadow effects for visual enhancement
- **Responsive Design**: Bootstrap 5 integration for responsive layout

#### 🔐 **Authentication System**
- **User Login**: Username and password authentication
- **Token Management**: JWT-style token storage in localStorage
- **Protected Routes**: Route protection with automatic redirection
- **Session Validation**: Real-time token validation

## Technical Stack

### Frontend Technologies
- **React 19**: Modern React with hooks and context
- **Vite**: Fast development build tool
- **Framer Motion**: Advanced animations and gestures
- **React Router DOM**: Client-side routing
- **React RnD**: Resizable and draggable components
- **Axios**: HTTP client for API communication
- **SweetAlert2**: Beautiful alert dialogs
- **React Icons**: Icon library (FontAwesome, Ionicons, RemixIcons)
- **Bootstrap 5**: CSS framework for responsive design

### Development Tools
- **ESLint**: Code linting and quality checks
- **Electron**: Desktop application wrapper
- **JSON Server**: Mock API for development
- **Concurrently**: Run multiple npm scripts simultaneously

## Project Structure

```
frontend/
├── src/
│   ├── Components/
│   │   ├── Animations/          # Star effects and loading animations
│   │   ├── Alerts/              # SweetAlert2 toast notifications
│   │   ├── Dashboard/
│   │   │   ├── FileExplorer/    # File explorer window component
│   │   │   └── Taskbar/         # Bottom taskbar with apps and clock
│   │   └── LockScreen/          # Authentication form
│   ├── Contexts/                # React Context providers
│   ├── Hooks/                   # Custom React hooks
│   ├── Pages/                   # Main page components
│   ├── Router/                  # Routing configuration
│   └── Services/                # API communication services
├── electron/                    # Electron main and preload scripts
├── api/                         # Mock API data
└── assets/                      # Static assets (images, fonts)
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aws-honeypots/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. For Electron desktop app:
```bash
npm run electron
```

### Development Scripts

- `npm run dev`: Start Vite development server with Electron
- `npm run build`: Build production bundle
- `npm run lint`: Run ESLint code analysis
- `npm run start:server`: Start JSON server mock API

## Authentication

The current implementation uses a mock authentication system with the following credentials:
- **Username**: `user32`
- **Password**: `*********` (check api/db.json for actual credentials)

## Future Development Plans

### 🐍 **Backend Implementation**
The project roadmap includes developing a Python-based backend service that will provide:

#### **AWS Integration**
- **boto3 SDK**: Full AWS SDK integration for cloud resource management
- **Multi-Region Support**: Deploy honeypots across different AWS regions
- **Resource Automation**: Automated provisioning and management of AWS resources

#### **Honeypot Types**
The platform will support multiple honeypot categories:
- **Web Application Honeypots**: Vulnerable web services to attract web-based attacks
- **Database Honeypots**: Fake database services (MySQL, PostgreSQL, MongoDB)
- **SSH Honeypots**: Linux/Unix SSH services to capture brute-force attempts
- **SMB Honeypots**: Windows file sharing services
- **IoT Device Honeypots**: Simulated IoT devices with common vulnerabilities
- **Email Honeypots**: SMTP/POP3 services to capture email-based attacks

#### **Infrastructure Management**
- **EC2 Instance Management**: Automated instance deployment and monitoring
- **Security Groups**: Dynamic security group configuration
- **VPC Networking**: Isolated network environments for honeypots
- **CloudWatch Integration**: Real-time monitoring and logging
- **S3 Storage**: Log storage and analysis

#### **Security Features**
- **Incident Response**: Automated threat detection and response
- **Log Analysis**: Advanced parsing and analysis of attack patterns
- **Alerting System**: Real-time notifications for security events
- **Reporting**: Comprehensive security reports and dashboards

## Contributing

This project is currently in active development. The frontend interface serves as the foundation for the comprehensive AWS honeypot management platform.

## Technology Roadmap

### Phase 1: Frontend (Current)
- ✅ Desktop OS interface emulation
- ✅ User authentication system
- ✅ Responsive design and animations
- ✅ File explorer functionality

### Phase 2: Backend Integration (Planned)
- 🔄 Python Flask/FastAPI backend
- 🔄 boto3 AWS SDK integration
- 🔄 Database integration (PostgreSQL/MongoDB)
- 🔄 RESTful API development

### Phase 3: Honeypot Deployment (Planned)
- 🔄 Multiple honeypot type support
- 🔄 AWS resource automation
- 🔄 Real-time monitoring dashboard
- 🔄 Advanced threat analytics

### Phase 4: Enterprise Features (Future)
- 🔄 Multi-tenant support
- 🔄 Advanced reporting and analytics
- 🔄 Integration with SIEM systems
- 🔄 Custom honeypot configurations

## License

This project is currently in development phase. License information will be updated upon completion.

## Contact

For questions or contributions, please contact the development team.

---

*This README will be updated as the project evolves and new features are implemented.*
