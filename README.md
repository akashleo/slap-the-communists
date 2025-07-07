# 🚀 Slap the Communists

An interactive web application where you can select your favorite communist leaders and give them a virtual slap! Built with React, TypeScript, and Tailwind CSS.

## 🎯 Features

- **Interactive Leader Selection**: Choose from a curated list of historical communist leaders
- **Immersive Slapping Experience**: Enjoy satisfying animations and visual effects
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Statistical Tracking**: Keep track of your slapping progress and achievements
- **Beautiful UI**: Modern gradient design with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript support

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/slap-commies.git
cd slap-commies
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

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Usage

1. **Landing Page**: Start your journey with the iconic hammer and sickle welcome screen
2. **Leader Selection**: Browse through the gallery of communist leaders and select your target
3. **Slapping Action**: Click the "SLAP!" button to deliver satisfying virtual justice
4. **Track Progress**: Monitor your slapping statistics and achievement levels

## 🎮 Available Leaders

The app currently features these historical figures:

- **Joseph Stalin** (Soviet Union, 1924-1953)
- **Mao Zedong** (China, 1949-1976)
- **Fidel Castro** (Cuba, 1959-2008)
- **Vladimir Lenin** (Soviet Union, 1917-1924)
- **Che Guevara** (Argentina/Cuba, 1950s-1967)
- **Jyoti Basu** (India, 1977-2000)
- **Charu Majumdar** (India, 1967-1972)
- **Buddhadeb Bhattacharya** (India, 2000-2011)
- **Shatarup Ghosh** (India, 2010s-present)

## 🤝 Contributing

We welcome contributions! To add a new communist leader to the app, please follow our [Contributing Guidelines](CONTRIBUTING.md).

### Quick Contribution Guide

1. Add leader details to `src/data/leaders.ts`
2. Add the leader's image to the `public/` folder
3. Ensure the image filename matches the `imageUrl` in the data
4. Test your changes locally
5. Submit a pull request

## 📂 Project Structure

```
slap-commies/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── components/         # React components
│   │   ├── LandingPage.tsx
│   │   ├── SelectionPage.tsx
│   │   └── SlapPage.tsx
│   ├── data/
│   │   └── leaders.ts      # Leader data and definitions
│   ├── types/
│   │   └── Leader.ts       # TypeScript type definitions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Design Features

- **Gradient Backgrounds**: Eye-catching red and yellow Communist-themed gradients
- **Smooth Animations**: CSS transitions and keyframe animations
- **Touch-Friendly**: Optimized for mobile touch interactions
- **Responsive Layout**: Adapts to all screen sizes
- **Visual Feedback**: Satisfying slap animations and impact effects

## 📄 License

This project is for educational and entertainment purposes only. All historical figures depicted are public domain personalities.

## 🙏 Acknowledgments

- Historical images sourced from public domain
- Icons by Lucide React
- Built with love and TypeScript

## 🐛 Bug Reports

Found a bug? Please open an issue on GitHub with:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

## 💡 Feature Requests

Have an idea for a new feature? We'd love to hear it! Open an issue with:
- Feature description
- Use case
- Mockups or examples (if applicable)

---

**Disclaimer**: This application is purely for entertainment purposes and does not promote or endorse any political violence. It's a satirical web application meant for humor and stress relief. 