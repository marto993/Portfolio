/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta de colores corporativos dark
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { 
            'box-shadow': '0 0 5px rgb(59 130 246 / 0.5), 0 0 20px rgb(59 130 246 / 0.3), 0 0 30px rgb(59 130 246 / 0.1)' 
          },
          '100%': { 
            'box-shadow': '0 0 10px rgb(59 130 246 / 0.8), 0 0 30px rgb(59 130 246 / 0.4), 0 0 40px rgb(59 130 246 / 0.2)' 
          },
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#d1d5db', // text-gray-300
            '--tw-prose-headings': '#ffffff', // text-white
            '--tw-prose-lead': '#9ca3af', // text-gray-400
            '--tw-prose-links': '#60a5fa', // text-primary-400
            '--tw-prose-bold': '#ffffff', // text-white
            '--tw-prose-counters': '#9ca3af', // text-gray-400
            '--tw-prose-bullets': '#4b5563', // text-gray-600
            '--tw-prose-hr': '#374151', // border-gray-700
            '--tw-prose-quotes': '#d1d5db', // text-gray-300
            '--tw-prose-quote-borders': '#3b82f6', // border-primary-500
            '--tw-prose-captions': '#9ca3af', // text-gray-400
            '--tw-prose-code': '#34d399', // text-accent-400
            '--tw-prose-pre-code': '#d1d5db', // text-gray-300
            '--tw-prose-pre-bg': '#111827', // bg-gray-900
            '--tw-prose-th-borders': '#374151', // border-gray-700
            '--tw-prose-td-borders': '#374151', // border-gray-700
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}