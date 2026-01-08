# Pre-Deployment Checklist

## ✅ Configuration Files

- [x] `vercel.json` - Vercel routing configuration
- [x] `public/_redirects` - Netlify routing (copied to dist/)
- [x] `.htaccess` - Apache server configuration
- [x] `vite.config.js` - Build optimization
- [x] `.gitignore` - Updated to include config files
- [x] `src/main.jsx` - Catch-all route added

## ✅ Build & Testing

```bash
# 1. Clean install (recommended)
rm -rf node_modules package-lock.json
npm install

# 2. Build production
npm run build

# 3. Check build output
ls -lah dist/

# 4. Verify critical files in dist/
ls -lah dist/_redirects  # For Netlify
ls -lah dist/index.html  # Main entry point

# 5. Preview production build
npm run preview

# 6. Test all routes in preview:
# - Open http://localhost:4173
# - Navigate to each page
# - Refresh browser on each page (Ctrl+R)
# - Use browser back/forward buttons
# - Test direct URL access
```

## ✅ Routes to Test

- [ ] `/` - Homepage loads correctly
- [ ] `/tentang-kami` - About page loads
- [ ] `/hosting` - Hosting types page loads
- [ ] `/hosting/php` - PHP hosting form works
- [ ] `/pricing` - Pricing tabs work
- [ ] `/cek-status` - Status checker works
- [ ] Refresh on `/hosting/php` - No 404 error
- [ ] Refresh on `/pricing` - No 404 error
- [ ] Direct URL `/cek-status` - Loads correctly
- [ ] Browser back button - Works smoothly
- [ ] Browser forward button - Works smoothly

## ✅ Form Testing

### PHP Hosting Form (`/hosting/php`)
- [ ] Step 1: Name, phone, framework validation
- [ ] Step 2: Package selection shows correct prices
- [ ] Step 2: Domain type changes price correctly
- [ ] Step 3: File upload works (database, payment)
- [ ] Step 4: Confirmation shows all data
- [ ] Step 5: Resi number generated
- [ ] Step 5: WhatsApp button has correct number
- [ ] Progress bar updates correctly
- [ ] Back button works between steps
- [ ] Can't proceed without filling required fields

### Status Checker (`/cek-status`)
- [ ] Toggle between Domain and Resi search
- [ ] Domain search: `progres.com` shows "On Progress"
- [ ] Domain search: `contoh.com` shows "Active"
- [ ] Domain search: `testing.my.id` shows "Warning"
- [ ] Domain search: `example.id` shows "Expired"
- [ ] Resi search: `LCH-PHP-1234567890-123` finds data
- [ ] Unknown domain shows "Not Found"
- [ ] Copy resi button works
- [ ] Progress bar animates correctly

### Pricing Page (`/pricing`)
- [ ] Tab switching works (PHP, Domain, Custom)
- [ ] Hosting+Domain: Duration selector shows
- [ ] Duration change updates packages
- [ ] All 9 packages show in 3-column grid
- [ ] 1 month prices: Rp80k - Rp350k
- [ ] 3 months prices: 1-month × 3
- [ ] WhatsApp buttons work

## ✅ Browser Testing

Test in multiple browsers:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Edge
- [ ] Mobile Chrome (responsive)
- [ ] Mobile Safari (if available)

## ✅ Performance Check

```bash
# Check build size
du -sh dist/

# Check individual bundles
ls -lh dist/assets/

# Verify gzip sizes
gzip -c dist/assets/index-*.js | wc -c
gzip -c dist/assets/vendor-*.js | wc -c
```

Expected sizes:
- Total uncompressed: ~532 KB
- Total gzipped: ~145 KB
- Index bundle: ~120 KB (21 KB gzipped)
- Vendor bundle: ~351 KB (113 KB gzipped)

## ✅ Console Errors

Open DevTools Console and check:
- [ ] No JavaScript errors on homepage
- [ ] No errors when navigating between pages
- [ ] No errors on form submission
- [ ] No 404 errors for assets
- [ ] No CORS errors
- [ ] No React warnings

## ✅ Network Tab Check

Open DevTools Network tab:
- [ ] All assets load successfully (200 OK)
- [ ] No 404 errors for CSS/JS files
- [ ] Images load correctly
- [ ] Fonts load (if any)
- [ ] No mixed content warnings (http vs https)

## ✅ Mobile Responsive

Test responsive design:
- [ ] Navbar collapses to mobile menu
- [ ] Forms are usable on mobile
- [ ] Buttons are touch-friendly
- [ ] Text is readable without zooming
- [ ] Images scale properly
- [ ] Tables/grids stack on mobile
- [ ] Animations work smoothly

## ✅ SEO & Accessibility

- [ ] Page titles are descriptive
- [ ] Links have meaningful text
- [ ] Images have alt attributes (if any)
- [ ] Color contrast is sufficient
- [ ] Focus indicators visible
- [ ] Keyboard navigation works

## ✅ Pre-Deploy Commands

```bash
# Final build with clean slate
npm run build

# Verify no errors in build output
echo $?  # Should return 0

# Check dist/ structure
tree dist/ -L 2

# Optional: Lighthouse audit
npx lighthouse http://localhost:4173 --view
```

## ✅ Platform-Specific Checks

### Before Deploying to Vercel
- [ ] `vercel.json` exists in root
- [ ] Run `vercel --prod`
- [ ] Test deployed URL immediately
- [ ] Check all routes work
- [ ] Verify SSL certificate

### Before Deploying to Netlify
- [ ] `dist/_redirects` exists
- [ ] Run `netlify deploy --prod --dir=dist`
- [ ] Test deployed URL
- [ ] Check custom domain (if configured)

### Before Uploading to Apache/cPanel
- [ ] `.htaccess` prepared for upload
- [ ] All `dist/` contents ready
- [ ] FTP/File Manager credentials ready
- [ ] Backup existing site (if any)
- [ ] Set correct file permissions after upload

## ✅ Post-Deployment Verification

After deploying:
- [ ] Visit production URL
- [ ] Test all routes
- [ ] Refresh on each page (no 404)
- [ ] Share link with team/client for testing
- [ ] Monitor for any error reports
- [ ] Check analytics (if configured)

## 🆘 If Something Goes Wrong

1. **404 Errors on refresh**
   - Check server logs
   - Verify routing config file deployed
   - Clear CDN cache (if applicable)

2. **Assets not loading**
   - Check base path configuration
   - Verify asset URLs in Network tab
   - Check file permissions

3. **Blank page**
   - Check browser console for errors
   - Verify all JS bundles loaded
   - Check for build errors

4. **Routing not working**
   - Verify BrowserRouter (not HashRouter)
   - Check catch-all route exists
   - Verify server rewrite rules

## 📞 Support

If you encounter issues:
- Check [DEPLOYMENT_FIX.md](./DEPLOYMENT_FIX.md)
- Review [DEPLOYMENT.md](./DEPLOYMENT.md)
- Contact: +62 882-0081-46761
