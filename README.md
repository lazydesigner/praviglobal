# Pravi IVF & Fertility Center Website

A modern, responsive website for Pravi IVF and Fertility Center built with Next.js 14, React, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional medical theme with blue and white color palette
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data
- **Fast Performance**: Built with Next.js App Router for optimal performance
- **Accessible**: WCAG compliant with semantic HTML
- **Interactive Components**: Smooth animations and transitions
- **Contact Forms**: Functional contact and appointment booking forms

## 📁 Project Structure

```
pravi-ivf-website/
├── app/
│   ├── layout.js                 # Root layout with Header & Footer
│   ├── page.js                   # Home page
│   ├── globals.css               # Global styles & Tailwind
│   ├── about/
│   │   └── page.js              # About page
│   ├── services/
│   │   └── page.js              # Services page
│   ├── doctors/
│   │   └── page.js              # Doctors page
│   ├── gallery/
│   │   └── page.js              # Gallery page
│   ├── contact/
│   │   └── page.js              # Contact page
│   ├── book-appointment/
│   │   └── page.js              # Appointment booking page
│   └── api/
│       ├── contact/
│       │   └── route.js         # Contact form API
│       └── appointment/
│           └── route.js         # Appointment API
├── components/
│   ├── Header.js                 # Navigation header
│   ├── Footer.js                 # Site footer
│   ├── ServiceCard.js           # Service card component
│   ├── DoctorCard.js            # Doctor profile card
│   └── TestimonialCard.js       # Testimonial card
├── lib/
│   ├── data.js                   # Site content & data
│   └── schema.js                 # JSON-LD schemas
├── public/
│   └── images/                   # Static images
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🛠️ Installation

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Setup Steps

1. **Clone or create the project directory:**

```bash
mkdir pravi-ivf-website
cd pravi-ivf-website
```

2. **Initialize the project:**

```bash
npm init -y
```

3. **Install dependencies:**

```bash
npm install next@latest react@latest react-dom@latest lucide-react
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

4. **Initialize Tailwind CSS:**

```bash
npx tailwindcss init -p
```

5. **Create the project structure and copy all files** from the artifacts provided above into their respective locations.

6. **Run the development server:**

```bash
npm run dev
```

7. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Updating Hospital Information

Edit `lib/data.js` to update:
- Hospital name, address, contact details
- Services offered
- Doctor profiles
- Testimonials
- Gallery images

### SEO Configuration

Edit `app/layout.js` to update:
- Meta titles and descriptions
- Open Graph tags
- Verification codes (Google Search Console, etc.)

### Styling

Edit `app/globals.css` and `tailwind.config.js` to customize:
- Color scheme
- Fonts
- Spacing
- Animations

## 🎨 Color Palette

```css
Primary Blue: #2563eb (blue-600)
Secondary Blue: #1d4ed8 (blue-700)
Light Blue: #dbeafe (blue-100)
White: #ffffff
Gray: #6b7280 (gray-600)
Dark: #1f2937 (gray-800)
```

## 📱 Pages

1. **Home** (`/`) - Hero section, about preview, services, doctors, testimonials
2. **About** (`/about`) - Hospital story, mission, vision, founder profile
3. **Services** (`/services`) - Detailed service descriptions with features
4. **Doctors** (`/doctors`) - Doctor profiles with specialties
5. **Gallery** (`/gallery`) - Facility images and success stories
6. **Contact** (`/contact`) - Contact information, form, and map
7. **Book Appointment** (`/book-appointment`) - Appointment booking form

## 🔧 API Routes

### Contact Form - `/api/contact`

**POST** request with:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```

### Appointment Booking - `/api/appointment`

**POST** request with:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "service": "string",
  "doctor": "string (optional)",
  "preferredDate": "YYYY-MM-DD",
  "preferredTime": "HH:MM-HH:MM",
  "message": "string (optional)"
}
```

## 📧 Email Integration (Production Setup)

To enable email notifications in production, integrate with:

### Option 1: SendGrid

```bash
npm install @sendgrid/mail
```

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

### Option 2: Resend

```bash
npm install resend
```

```javascript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
```

### Option 3: Nodemailer

```bash
npm install nodemailer
```

Add your configuration to `app/api/contact/route.js` and `app/api/appointment/route.js`

## 🗄️ Database Integration (Optional)

For production, integrate with a database to store:
- Contact form submissions
- Appointment requests
- Patient records (with proper security)

Recommended options:
- **MongoDB** with Mongoose
- **PostgreSQL** with Prisma
- **Supabase** for backend-as-a-service

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

### Environment Variables

Create `.env.local` file:

```env
# Email Service (choose one)
SENDGRID_API_KEY=your_sendgrid_key
RESEND_API_KEY=your_resend_key

# Database (if using)
DATABASE_URL=your_database_url

# Google Maps API (optional)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_maps_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📊 Analytics Setup

### Google Analytics

1. Add tracking ID to `.env.local`
2. Add to `app/layout.js`:

```javascript
import Script from 'next/script'

// Add in layout return:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

## 🔒 Security Best Practices

1. **Never commit** `.env.local` to version control
2. **Validate** all form inputs on both client and server
3. **Rate limit** API endpoints to prevent abuse
4. **Use HTTPS** in production
5. **Implement CAPTCHA** on forms to prevent spam
6. **Sanitize** user inputs before storing or displaying

## 🎯 Performance Optimization

- Images are optimized using Next.js Image component
- Code splitting with App Router
- Font optimization with next/font
- Lazy loading for images
- Minified CSS and JavaScript in production

## 📱 Mobile Optimization

- Hamburger menu for mobile navigation
- Touch-friendly UI elements
- Responsive images and layouts
- Fast loading on slower connections

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🧪 Testing

### Run locally:

```bash
npm run dev
```

### Build for production:

```bash
npm run build
npm start
```

### Lint code:

```bash
npm run lint
```

## 📞 Support

For technical issues or questions about the website:
- Email: info@praviivf.in
- Phone: +91 9301522255

## 📄 License

© 2025 Pravi IVF and Fertility Center. All rights reserved.

## 🤝 Contributing

For updates or modifications, contact the development team.

---

**Built with ❤️ using Next.js 14, React, and Tailwind CSS**