#!/bin/bash
# Quick Deployment Script for LowCostHost

echo "🚀 LowCostHost Deployment Helper"
echo "================================="
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "📋 Checking prerequisites..."
if ! command_exists npm; then
    echo "❌ npm not found. Please install Node.js"
    exit 1
fi
echo "✅ npm found"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo ""
    echo "📦 Installing dependencies..."
    npm install
fi

# Build
echo ""
echo "🔨 Building production version..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "📂 Build output in: dist/"
    echo ""
    echo "📤 Deployment Options:"
    echo ""
    echo "1️⃣  Vercel:"
    echo "   vercel --prod"
    echo "   (vercel.json will be auto-detected)"
    echo ""
    echo "2️⃣  Netlify:"
    echo "   netlify deploy --prod --dir=dist"
    echo "   (dist/_redirects will be auto-used)"
    echo ""
    echo "3️⃣  Apache/cPanel:"
    echo "   - Upload all files from dist/ to public_html/"
    echo "   - Upload .htaccess to public_html/"
    echo "   - Set .htaccess permissions: chmod 644 .htaccess"
    echo ""
    echo "4️⃣  Preview locally:"
    echo "   npm run preview"
    echo ""
    
    # Ask if user wants to preview
    read -p "🔍 Preview build now? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Starting preview server..."
        npm run preview
    fi
else
    echo ""
    echo "❌ Build failed. Please check errors above."
    exit 1
fi
