# Dhanush C - Personal Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and professional experience as a software engineer specializing in mobile development, AI/ML, and full-stack web development.

## 🌟 Features

- **Modern Design**: Clean, professional interface with blue-purple gradient theme
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Sections**: Smooth animations and hover effects
- **Project Showcase**: Detailed project documentation with source code examples
- **Skills Visualization**: Animated progress bars for technical skills
- **Contact Integration**: Direct links to email, GitHub, and resume

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) <!-- Replace with your actual URL -->

## 📋 Sections

- **Hero Section**: Introduction and call-to-action buttons
- **About**: Contact information and professional summary
- **Services**: Technical expertise and specializations
- **Education**: Academic background and achievements
- **Project Files**: Comprehensive project documentation including:
  - HealthWhisper (Android health monitoring app)
  - BinaryBox (Multi-format file converter)
  - NeuroSynk (Flutter-based health monitoring platform)
- **Skills**: Technical proficiency levels
- **Resume**: Direct download link to resume

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and development
- **Tailwind CSS** for styling
- **Shadcn/UI** components
- **Wouter** for routing
- **TanStack Query** for state management
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **TypeScript** with ES modules
- **PostgreSQL** with Drizzle ORM
- **Neon Database** for cloud database

### Development Tools
- **ESLint** for code linting
- **PostCSS** for CSS processing
- **Drizzle Kit** for database migrations

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Dhanushc22/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create .env file and add your database URL
DATABASE_URL=your_postgresql_connection_string
```

4. Run database migrations
```bash
npm run db:push
```

5. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:push` - Apply database schema changes
- `npm run db:studio` - Open Drizzle Studio for database management

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Database interface
├── shared/                 # Shared types and schemas
├── projects/              # Project documentation files
└── README.md
```

## 🎨 Customization

### Colors
The portfolio uses CSS custom properties for theming. You can modify colors in `client/src/index.css`:

```css
:root {
  --portfolio-primary: #6366f1;
  --portfolio-secondary: #8b5cf6;
  --portfolio-dark: #1e293b;
  --portfolio-light: #0f172a;
  --portfolio-darker: #020617;
}
```

### Content
- Update personal information in component files
- Modify project data in `projects/` directory
- Update skills and services in respective component files

## 📱 Features Showcase

### Interactive Project Documentation
- Complete source code examples
- File structure visualization
- Technology stack details
- Live project links

### Responsive Design
- Mobile-first approach
- Smooth animations
- Touch-friendly interface
- Cross-browser compatibility

### Performance Optimized
- Fast loading times
- Efficient bundling with Vite
- Optimized images and assets
- SEO-friendly structure

## 📄 Resume

Download my complete resume: [Resume PDF](https://drive.google.com/file/d/1eAy7ZhYZSqRz3tL68l_1JvlAl1zOqSK9/view?usp=drivesdk)

## 📞 Contact

- **Email**: dhanushc092@gmail.com
- **Phone**: (+91) 6362638287
- **GitHub**: [Dhanushc22](https://github.com/Dhanushc22)
- **LinkedIn**: [Your LinkedIn Profile] <!-- Add your LinkedIn -->

## 🤝 Contributing

While this is a personal portfolio, I'm open to suggestions and improvements. Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons provided by Lucide React
- UI components from Shadcn/UI
- Built with love using React and TypeScript

---

**Built with ❤️ by Dhanush C**

*Last updated: July 2025*