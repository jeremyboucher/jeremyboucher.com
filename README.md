# Interactive Logo Particles

A stunning interactive particle effect landing page featuring custom logos. Move your cursor to scatter and manipulate thousands of particles in real-time.

## 🌟 Features

- **Interactive Particles**: Thousands of particles that respond to mouse movement
- **Custom Logos**: Three unique logo designs rendered as particle formations
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: 60fps canvas-based animations
- **Touch Support**: Full touch interaction support for mobile devices
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🚀 Live Demo

[View Live Demo](https://yourusername.github.io/logo-particles)

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Canvas API** - High-performance 2D graphics
- **Lucide React** - Beautiful icons

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/logo-particles.git
cd logo-particles
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Fork or clone this repository**

2. **Update the configuration**:
   - Edit `next.config.mjs` and replace `/logo-particles` with your repository name
   - Update `package.json` homepage URL
   - Update the GitHub repository URL in `components/header.tsx`

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

4. **Push to main branch**:
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

The GitHub Action will automatically build and deploy your site to `https://yourusername.github.io/your-repo-name`

## 🎨 Customization

### Changing the Logos

1. Replace the SVG paths in `logo-paths.ts` with your own logo paths
2. Update the logo dimensions and aspect ratios in the component
3. Modify the colors in the `scatteredColor` assignments

### Adjusting Particle Behavior

- **Particle Count**: Modify `baseParticleCount` in the component
- **Interaction Distance**: Change `maxDistance` value
- **Animation Speed**: Adjust the force multiplier and return speed
- **Particle Size**: Modify the size calculation in `createParticle`

## 📱 Mobile Optimization

The application automatically detects mobile devices and:
- Reduces particle count for better performance
- Adjusts logo sizes for smaller screens
- Implements touch-based interaction
- Optimizes spacing and layout

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern particle effect libraries
- Built with the amazing Next.js and React ecosystem
- Icons provided by Lucide React
\`\`\`

```text file=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
