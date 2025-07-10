# Replit.md

## Overview

This is a full-stack web application built as a personal portfolio website for Dhanush C, a software engineer specializing in mobile development, AI/ML, and full-stack web development. The application showcases a modern, responsive portfolio with smooth animations and a professional design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Animations**: Intersection Observer API for scroll-based animations

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: In-memory storage with planned database integration
- **API Pattern**: RESTful API with `/api` prefix

### Build and Development
- **Development**: Vite dev server with HMR
- **Production**: Express server serving static files
- **Build Process**: Vite for frontend, esbuild for backend bundling

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling
- **Hero Section**: Landing section with gradient text and call-to-action
- **About Section**: Contact information and personal details
- **Services Section**: Technical skills and service offerings
- **Education Section**: Academic background and achievements
- **Projects Section**: Showcase of major projects with links
- **Skills Section**: Animated progress bars for technical skills
- **Portfolio Section**: Filterable project gallery
- **Footer**: Contact links and social media

### Backend Components
- **Route Handler**: Centralized route registration system
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Vite Integration**: Development server with SSR support
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users Table**: Basic user management with username/password
- **Extensible Design**: Schema designed for future expansion

## Data Flow

1. **Client Requests**: Browser requests handled by Express server
2. **Development**: Vite middleware processes React components with HMR
3. **Production**: Static files served from dist/public directory
4. **API Calls**: Frontend makes requests to `/api` endpoints
5. **Database**: Drizzle ORM handles PostgreSQL operations
6. **State Management**: React Query manages server state and caching

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant handling

### Development Tools
- **TypeScript**: Type safety across the stack
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing with autoprefixer

### Database and Backend
- **Drizzle ORM**: Type-safe database operations
- **Drizzle Kit**: Database migrations and schema management
- **Zod**: Schema validation with drizzle-zod integration
- **Connect-PG-Simple**: PostgreSQL session store

### React Ecosystem
- **React Hook Form**: Form handling with validation
- **Date-fns**: Date utility functions
- **Wouter**: Lightweight routing solution

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reload**: Vite provides instant updates during development
- **Database**: Uses DATABASE_URL environment variable for connection

### Production Build
- **Build Command**: `npm run build` creates optimized bundles
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Start Command**: `npm start` runs the production server

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Node Environment**: Automatically detected for development/production modes
- **Replit Integration**: Special handling for Replit development environment

### Database Management
- **Migrations**: `npm run db:push` applies schema changes
- **Schema Location**: `shared/schema.ts` for shared types
- **Migration Files**: Generated in `./migrations` directory

The application follows modern web development practices with a focus on performance, accessibility, and maintainability. The modular architecture allows for easy feature additions and modifications while maintaining type safety throughout the stack.