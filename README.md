# SIH-INGRES

**INDIA-Groundwater Resource Estimation System (IN-GRES)**

A web-based application for groundwater resource assessment and management in India, developed for the Smart India Hackathon 2025.

## Project Overview

IN-GRES is a comprehensive platform that provides:
- Dynamic Ground Water Resources assessment for India
- State/UT, District, and Assessment Units-wise data
- Annual Ground Water Recharge and Extraction information
- Stage of Extraction and Categorization of assessment units
- Interactive maps and visualization dashboards
- AI-powered chatbot for groundwater data queries

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: shadcn/ui components (Radix UI primitives)
- **Styling**: Tailwind CSS
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Icons**: Lucide React

## Features

- 🌊 Groundwater resource assessment dashboard
- 📊 Interactive data visualization
- 🤖 AI-powered chatbot for data queries
- 🗺️ GIS-based thematic maps
- 📱 Responsive design for all devices
- 🔍 Quick access to major Indian cities' data

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nishchaydev/SIH-INGRES.git
cd SIH-INGRES
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ChatBot.tsx     # AI chatbot component
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## Contributing

This project is developed for Smart India Hackathon 2025 by Team Syntax Error.

## License

This project is developed for educational and research purposes as part of the Smart India Hackathon 2025.

## Acknowledgments

- Central Ground Water Board (CGWB)
- Indian Institute of Technology-Hyderabad (IIT-H)
- Smart India Hackathon 2025