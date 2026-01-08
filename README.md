# LowCostHost.id - React Version

Website company profile untuk LowCostHost.id yang dibangun dengan React, Vite, dan Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy (interactive helper)
./deploy.sh
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Deployment Ready

✅ **Vercel** - `vercel.json` configured
✅ **Netlify** - `_redirects` configured  
✅ **Apache/cPanel** - `.htaccess` configured
✅ **No 404 errors** - SPA routing fixed
✅ **Asset caching** - 1 year cache headers
✅ **Gzip compression** - Enabled
✅ **Code splitting** - Optimized bundle size

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Netlify
```bash
netlify deploy --prod --dir=dist
```

### Deploy to Apache/cPanel
1. `npm run build`
2. Upload `dist/*` to `public_html/`
3. Upload `.htaccess` to `public_html/`
4. `chmod 644 .htaccess`

📖 **Full deployment guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
🔧 **404 fix details**: See [DEPLOYMENT_FIX.md](./DEPLOYMENT_FIX.md)

## ✨ Features

✅ **Responsive Design** - Mobile-first approach
✅ **Smooth Animations** - Framer Motion powered
✅ **Multi-step Forms** - Wizard-style with progress
✅ **Modern UI** - Beautiful gradient heroes
✅ **Component-based** - Reusable & maintainable
✅ **Fast Development** - Vite HMR
✅ **SEO Friendly** - Proper routing & meta tags
✅ **Production Ready** - Optimized build

## 📄 Pages & Routes

- `/` - Homepage
- `/tentang-kami` - About Us
- `/hosting` - Hosting Types
- `/hosting/php` - PHP Hosting Registration Form
- `/pricing` - Pricing Tables (Tab-based)
- `/cek-status` - Check Hosting Status (Domain or Resi)

## 🎨 Components

### Shared Components
- **Navbar** - Main navigation with mobile menu
- **Footer** - Company info & social links
- **ScrollToTop** - Auto scroll on route change
- **Hero** - Animated gradient backgrounds
- **Ribbon** - Infinite scroll banner

### Feature Components
- **FeatureGrid** - Service highlights
- **PricingCards** - Package pricing display
- **TestimonialCarousel** - Customer reviews
- **FAQAccordion** - Expandable Q&A
- **StatsCounter** - Animated statistics
- **ContactSection** - CTA with WhatsApp

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel deployment & routing |
| `public/_redirects` | Netlify/Cloudflare routing |
| `.htaccess` | Apache server routing & caching |
| `vite.config.js` | Build optimization |
| `tailwind.config.js` | Custom theme colors |

## 🎯 Key Features Detail

### Multi-Step Form (PHP Hosting)
- 5-step wizard with progress tracking
- File upload support (database, payment proof)
- Dynamic pricing calculation
- Nota pembelian generation
- Unique resi number (LCH-PHP-xxxxx)

### Check Status Page
- Search by domain or resi number
- Status badges (Active, Expired, Warning, On Progress)
- Storage & bandwidth monitoring
- SSL & backup status
- Progress tracking for new orders

### Pricing Page
- Tab-based navigation (PHP, Domain, Custom)
- Duration selector (1, 3, 6, 12 months)
- Responsive grid layout
- Badge system (Silver, Gold, Diamond)

## 🌈 Customization

Warna brand di `tailwind.config.js`:
- Primary: #38BDF8 (Toska)
- Primary Dark: #3730A3 (Ungu)

---

**LowCostHost.id** | admin@lowcosthost.id
