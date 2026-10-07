/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6F4FF2',
          hover: '#5D3DE6',
          light: '#8E74F8',
          subtle: 'rgba(111, 79, 242, 0.15)',
        },
        dark: {
          bg: '#131129',
          card: '#1D1932',
          cardHover: '#221D3B',
          surface: '#241F43',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#6C7AA0',
        },
        light: {
          bg: '#F5F6FA',
          card: '#FFFFFF',
          cardHover: '#F9FAFB',
          border: '#E8E8EE',
          muted: '#7E8B9B',
        },
        accent: {
          coral: '#FF5656',
          coralHover: '#E04848',
          green: '#00D289',
          amber: '#FBBF24',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      boxShadow: {
        'card': '0 4px 20px 0 rgba(0, 0, 0, 0.25)',
        'glow': '0 0 25px rgba(111, 79, 242, 0.45)',
      }
    },
  },
  plugins: [],
}
