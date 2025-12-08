/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',      // Orange-Red (energy, urgency)
        primaryDark: '#E55A24',  // Darker orange
        secondary: '#00D9FF',    // Electric Teal (innovation)
        accent: '#6366F1',       // Deep Purple (premium)
        textDark: '#1F2937',     // Dark charcoal
        textLight: '#6B7280',    // Light gray
        bgLight: '#FAFAFA',      // Off-white background
        bgWhite: '#FFFFFF',      // Pure white
        success: '#10B981',      // Green (success message)
        border: '#E5E7EB',       // Light border
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        h1: ['3.5rem', { lineHeight: '1.1' }],
        h2: ['2.5rem', { lineHeight: '1.2' }],
        h3: ['1.5rem', { lineHeight: '1.3' }],
        h4: ['1.25rem', { lineHeight: '1.4' }],
        body: ['1rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        xs: ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
      }
    },
  },
  plugins: [],
}
