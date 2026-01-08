# LowCostHost - Deployment Guide

## 🚀 Deployment Configuration

File konfigurasi untuk deployment sudah disediakan untuk berbagai platform:

### 📦 Vercel (Recommended)
- **File**: `vercel.json`
- **Setup**: Otomatis terdeteksi saat deploy
- **Command**: `npm run build`
- **Output Directory**: `dist`

### 🌐 Netlify
- **File**: `public/_redirects`
- **Setup**: Otomatis terdeteksi
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

### 🖥️ Apache Server (cPanel, Shared Hosting)
- **File**: `.htaccess`
- **Setup**: Upload ke root directory setelah build
- **Steps**:
  1. Build project: `npm run build`
  2. Upload semua file dari folder `dist/` ke public_html
  3. Upload file `.htaccess` ke public_html
  4. Pastikan mod_rewrite enabled di server

### 🐳 Docker / VPS
- **File**: `vite.config.js` sudah dikonfigurasi
- **Command**:
  ```bash
  npm run build
  npm run preview  # untuk test production build
  ```

## 📋 Pre-Deployment Checklist

1. ✅ Test semua routes lokal: `npm run dev`
2. ✅ Build production: `npm run build`
3. ✅ Test production build: `npm run preview`
4. ✅ Check console untuk errors
5. ✅ Test semua navigasi dan refresh halaman

## 🔧 Troubleshooting

### Error 404 di Vercel/Netlify
- **Penyebab**: Routing SPA tidak dikonfigurasi
- **Solusi**: File `vercel.json` dan `public/_redirects` sudah disediakan

### Error 404 di Apache/cPanel
- **Penyebab**: mod_rewrite tidak aktif atau .htaccess tidak ter-upload
- **Solusi**: 
  - Pastikan .htaccess ada di root directory
  - Hubungi hosting untuk enable mod_rewrite
  - Check file permissions (644 untuk .htaccess)

### Assets tidak load
- **Penyebab**: Base path tidak sesuai
- **Solusi**: Check vite.config.js - base path sudah di-set default `/`

### Slow loading
- **Solusi**: 
  - Sudah ada code splitting di vite.config.js
  - Cache headers sudah dikonfigurasi
  - Assets akan auto-cache 1 tahun

## 🌍 Environment Variables (Optional)

Jika menggunakan API di masa depan, tambahkan di platform hosting:

```env
VITE_API_URL=https://api.lowcosthost.com
VITE_WA_NUMBER=62882008146761
```

## 📱 Routes yang Tersedia

- `/` - Homepage
- `/tentang-kami` - About Page
- `/hosting` - Hosting Types
- `/hosting/php` - PHP Hosting Form
- `/pricing` - Pricing Tables
- `/cek-status` - Check Hosting Status

## ⚡ Performance Optimizations

Sudah diterapkan:
- ✅ Code splitting (vendor, motion, icons)
- ✅ Asset minification
- ✅ Browser caching headers
- ✅ Gzip/Deflate compression
- ✅ Lazy loading untuk images
- ✅ Tree shaking otomatis

## 📞 Support

Jika ada masalah deployment, hubungi:
- WhatsApp: +62 882-0081-46761
- Email: support@lowcosthost.com
