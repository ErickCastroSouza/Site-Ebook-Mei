# MEI Landing Page Application

## Overview

This is a React-based landing page application focused on MEI (Microempreendedor Individual) business registration in Brazil. The application uses a modern tech stack with React, TypeScript, Express.js, and PostgreSQL with Drizzle ORM. It's designed as a marketing/informational website to guide entrepreneurs through the MEI registration process.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom MEI-themed colors
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth UI animations

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Storage**: PostgreSQL-based sessions with connect-pg-simple
- **API Style**: RESTful API with `/api` prefix

### Database Schema
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema Location**: `shared/schema.ts` for shared types between frontend and backend
- **Migration Strategy**: Drizzle Kit for schema migrations
- **Validation**: Zod integration with drizzle-zod for type-safe validation

## Key Components

### Frontend Components
- **Landing Page**: Modern, animated landing page with MEI-focused content
- **UI Components**: Comprehensive shadcn/ui component library including:
  - Cards, buttons, dialogs, forms
  - Navigation, tooltips, toasts
  - Data display components (tables, charts)
  - Interactive elements (accordions, carousels)

### Backend Components
- **Express Server**: Main server with middleware for JSON parsing, CORS, and error handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)
- **Route System**: Modular route registration with API prefix
- **Development Tools**: Vite integration for development with hot reload

### Shared Components
- **Schema Definitions**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for data validation
- **Type Safety**: Full TypeScript coverage across the stack

## Data Flow

### Client-Server Communication
1. **API Requests**: Frontend uses React Query for server state management
2. **HTTP Client**: Custom fetch wrapper with error handling and credentials
3. **Response Handling**: Standardized JSON responses with proper error codes
4. **State Management**: React Query handles caching, background updates, and optimistic updates

### Database Operations
1. **Connection**: Neon Database serverless PostgreSQL connection
2. **Query Building**: Drizzle ORM with type-safe query builder
3. **Migrations**: Drizzle Kit for schema changes and database setup
4. **Validation**: Zod schemas ensure data integrity at API boundaries

## External Dependencies

### UI and Design
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Framer Motion**: Animation library for smooth user interactions
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with TypeScript support
- **ESBuild**: JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind integration
- **Replit Integration**: Development environment optimizations

### Backend Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Express.js**: Web framework for Node.js
- **Drizzle ORM**: TypeScript-first database toolkit

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild compiles TypeScript server to `dist/index.js`
3. **Static Assets**: Frontend assets served from Express in production
4. **Environment Variables**: Database URL and other configs from environment

### Development Workflow
- **Development Server**: Vite dev server with Express backend
- **Hot Reload**: Frontend changes update instantly
- **API Development**: Express server with automatic restart via tsx
- **Database Management**: Drizzle Kit for schema changes

### Production Deployment
- **Single Server**: Express serves both API and static frontend
- **Database**: PostgreSQL connection via environment variables
- **Session Management**: PostgreSQL-based sessions for user state
- **Error Handling**: Comprehensive error middleware with logging

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **SEO Optimized**: Meta tags and proper HTML structure for MEI content
- **Accessibility**: Radix UI components ensure WCAG compliance
- **Performance**: Optimized builds with code splitting and lazy loading
- **Type Safety**: End-to-end TypeScript coverage for reduced runtime errors