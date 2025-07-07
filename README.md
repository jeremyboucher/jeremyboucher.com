# Interactive Logo Particles

A stunning interactive particle effect featuring custom logos. Move your cursor to scatter and manipulate thousands of particles in real-time.

## 🌟 Live Demo

**[View Live Demo](https://jeremyboucher.github.io/jeremyboucher.com)**

## 🚀 Features

- **Interactive Particles**: Thousands of particles that respond to mouse movement
- **Custom Logos**: Three unique logo designs rendered as particle formations
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: 60fps canvas-based animations
- **Touch Support**: Full touch interaction support for mobile devices

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Canvas API** - High-performance 2D graphics

## 📦 Local Development

1. Clone the repository:
\`\`\`bash
git clone https://github.com/jeremyboucher/jeremyboucher.com.git
cd jeremyboucher.com
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

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Any push to the main branch will trigger a new deployment.

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

## 📄 License

This project is licensed under the MIT License.
