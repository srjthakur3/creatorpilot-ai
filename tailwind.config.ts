import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Space Grotesk', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(0, 0%, 6%)', // Deep Black
        foreground: 'hsl(0, 0%, 90%)', // Light Gray for foreground text
        card: {
          DEFAULT: 'hsl(0, 0%, 10%)', // Darker card background
          foreground: 'hsl(0, 0%, 90%)',
        },
        popover: {
          DEFAULT: 'hsl(0, 0%, 10%)',
          foreground: 'hsl(0, 0%, 90%)',
        },
        primary: {
          DEFAULT: 'hsl(34, 90%, 50%)', // Energetic Orange
          foreground: 'hsl(0, 0%, 10%)', // Dark text on orange
        },
        secondary: {
          DEFAULT: 'hsl(0, 0%, 30%)', // Darker Gray
          foreground: 'hsl(0, 0%, 90%)',
        },
        muted: {
          DEFAULT: 'hsl(0, 0%, 20%)', // Slightly lighter dark gray for muted
          foreground: 'hsl(0, 0%, 60%)', // Lighter gray for muted foreground
        },
        accent: {
          DEFAULT: 'hsl(0, 0%, 30%)', // Soft Gray
          foreground: 'hsl(0, 0%, 90%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 70%, 50%)', // Standard destructive red
          foreground: 'hsl(0, 0%, 90%)',
        },
        border: 'hsl(0, 0%, 25%)', // Darker border
        input: 'hsl(0, 0%, 20%)', // Darker input background
        ring: 'hsl(34, 90%, 50%)', // Orange ring
        chart: {
          '1': 'hsl(34, 90%, 50%)', // Orange
          '2': 'hsl(0, 0%, 70%)', // Soft Gray
          '3': 'hsl(0, 0%, 50%)', // Darker Gray
          '4': 'hsl(200, 50%, 60%)', // Example accent color
          '5': 'hsl(100, 50%, 60%)', // Example accent color
        },
        sidebar: {
          DEFAULT: 'hsl(0, 0%, 10%)', // Sidebar background
          foreground: 'hsl(0, 0%, 90%)', // Sidebar foreground
          primary: 'hsl(34, 90%, 50%)', // Orange for sidebar primary elements
          'primary-foreground': 'hsl(0, 0%, 10%)', // Dark text on orange sidebar primary
          accent: 'hsl(0, 0%, 25%)', // Darker Gray for sidebar accent
          'accent-foreground': 'hsl(0, 0%, 90%)', // Light text on sidebar accent
          border: 'hsl(0, 0%, 25%)', // Sidebar border
          ring: 'hsl(34, 90%, 50%)', // Orange ring for sidebar
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
