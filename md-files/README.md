# Place Lund Hotel Website

A modern, performant website built with Next.js 16, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/maltebinz/placelundhotelwebsite.git
cd place-lund-hotel
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                      # App Router pages
├── components/              # React components
│   ├── ui/                  # Reusable UI primitives
│   ├── layout/              # Layout components
│   └── sections/            # Page sections
├── lib/                     # Utilities and configuration
├── services/                # Data fetching and business logic
├── types/                   # TypeScript interfaces
└── styles/                  # Global styles
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is optimized for deployment on Vercel:

1. Push code to GitHub
2. Import project in Vercel
3. Deploy

## Environment Variables

Copy `.env.local` and add your environment variables. Never commit `.env.local` to version control.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
