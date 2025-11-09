# Hot Yoga Dunedin - Website Clone

A modern website clone of Hot Yoga Dunedin built with Next.js 15 and Tailwind CSS.

## Overview

This is a complete website recreation of the Hot Yoga Dunedin studio website, featuring:

- **Homepage** with hero section, studio information, class previews, and news
- **About page** detailing the studio's mission and facilities
- **Classes page** showcasing all available yoga and pilates classes
- **Individual class pages** with detailed descriptions and benefits
- **Teachers page** featuring instructor profiles and specialties
- **Pricing page** with membership options and packages
- **Contact page** with location details and contact form
- **Booking page** for class reservations

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first approach with full mobile optimization
- ⚡ Built with Next.js 15 App Router for optimal performance
- 🎯 SEO-optimized with proper meta tags and structure
- 🔗 Integration-ready for MindBody booking system
- 🌈 Consistent color scheme matching original design
- 📧 Contact forms and newsletter signup functionality
- 🏢 Complete studio information and class schedules

## Technology Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd hot-yoga-dunedin
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
hot-yoga-dunedin/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Site footer
│   ├── about/               # About page
│   ├── book/                # Booking page
│   ├── classes/             # Classes overview
│   │   └── [class-name]/    # Individual class pages
│   ├── contact/             # Contact page
│   ├── pricing/             # Pricing and packages
│   ├── teachers/            # Teachers directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── public/                  # Static assets
└── tailwind.config.ts       # Tailwind configuration
```

## Pages Overview

### Homepage (`/`)

- Hero section with call-to-action buttons
- Studio introduction and mission
- Classes overview with links to detailed pages
- Newsletter signup section
- Latest news and blog posts

### About (`/about`)

- Studio history and mission statement
- Information about heated yoga benefits
- Health and safety protocols
- Team message and studio features

### Classes (`/classes`)

- Overview of all available classes
- Individual class pages with detailed information
- Class schedules and booking links
- Benefits and preparation guides

### Teachers (`/teachers`)

- Complete instructor directory
- Teacher specialties and class types
- Individual teacher profile pages
- Contact and booking information

### Pricing (`/pricing`)

- Membership options and pricing tiers
- Class packages and drop-in rates
- Special offers for new students
- Terms and conditions

### Contact (`/contact`)

- Studio location and contact details
- Opening hours and directions
- Contact form for inquiries
- Social media links

### Book (`/book`)

- Class booking integration
- Booking policies and guidelines
- New student information
- MindBody system integration

## Customization

### Colors

The color scheme uses orange as the primary brand color:

- Primary: Orange-600 (#ea580c)
- Secondary: Gray tones for text and backgrounds
- Accent colors for different class types

### Fonts

- Primary font: Inter (Google Fonts)
- Fallback: system fonts for optimal loading

### Layout

- Responsive design with mobile-first approach
- Container max-width for optimal readability
- Consistent spacing using Tailwind's spacing scale

## Integration Notes

### MindBody Integration

The booking system is designed to integrate with MindBody Online:

- Booking links point to the studio's MindBody portal
- Class schedules can be embedded via MindBody widgets
- Member login and account management through MindBody

### Contact Forms

Contact forms are styled and ready for backend integration:

- Form validation using HTML5 attributes
- Proper form structure for easy backend connection
- Newsletter signup ready for email service integration

## Deployment

This project is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Configure environment variables if needed
3. Deploy with automatic builds on git push

For other platforms:

```bash
npm run build
npm start
```

## Performance

- Optimized images and assets
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind for optimal performance
- Server-side rendering with Next.js

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for demonstration purposes. Please respect the original Hot Yoga Dunedin branding and content.

## Contact

For questions about this implementation, please refer to the original Hot Yoga Dunedin website or contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
