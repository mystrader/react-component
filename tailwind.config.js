module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'background': 'var(--color-grey-50)',
        transparent: 'transparent',
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        grey: {
          25: 'var(--color-grey-25)',
          50: 'var(--color-grey-50)',
          100: 'var(--color-grey-100)',
          200: 'var(--color-grey-200)',
          300: 'var(--color-grey-300)',
          400: 'var(--color-grey-400)',
        },
        violet: {
          100: 'var(--color-violet-100)',
          200: 'var(--color-violet-200)',
          300: 'var(--color-violet-300)',
          400: 'var(--color-violet-400)',
        },
        orange: {
          100: 'var(--color-orange-100)',
          200: 'var(--color-orange-200)',
          300: 'var(--color-orange-300)',
          400: 'var(--color-orange-400)',
        },
        red: {
          100: 'var(--color-red-100)',
          200: 'var(--color-red-200)',
          300: 'var(--color-red-300)',
          400: 'var(--color-red-400)',
        },
        yellow: {
          100: 'var(--color-yellow-100)',
          200: 'var(--color-yellow-200)',
          300: 'var(--color-yellow-300)',
          400: 'var(--color-yellow-400)',
        },
        green: {
          100: 'var(--color-green-100)',
          200: 'var(--color-green-200)',
          300: 'var(--color-green-300)',
          400: 'var(--color-green-400)',
        },
        blue: {
          200: 'var(--color-blue-200)',
          300: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
        },
        'theme-color-primary': {
          100: 'var(--color-violet-100)',
          'main': 'var(--color-violet-200)',
          300: 'var(--color-violet-300)',
          400: 'var(--color-violet-400)',
        },
        'theme-color-secondary': {
          100: 'var(--color-orange-100)',
          'main': 'var(--color-orange-200)',
          300: 'var(--color-orange-300)',
          400: 'var(--color-orange-400)',
        },
        'theme-color-neutral': {
          25: 'var(--color-grey-25)',
          50: 'var(--color-grey-50)',
          100: 'var(--color-grey-100)',
          'main': 'var(--color-grey-200)',
          300: 'var(--color-grey-300)',
          400: 'var(--color-grey-400)',
          'black': 'var(--color-black)',
          'white': 'var(--color-white)',
        },
        'theme-color-negative': {
          100: 'var(--color-red-100)',
          'main': 'var(--color-red-200)',
          300: 'var(--color-red-300)',
          400: 'var(--color-red-400)',
        },
        'theme-color-warning': {
          100: 'var(--color-yellow-100)',
          'main': 'var(--color-yellow-200)',
          300: 'var(--color-yellow-300)',
          400: 'var(--color-yellow-400)',
        },
        'theme-color-accent': {
          100: 'var(--color-green-100)',
          'main': 'var(--color-green-200)',
          300: 'var(--color-green-300)',
          400: 'var(--color-green-400)',
        },
        'theme-color-informative': {
          100: 'var(--color-blue-100)',
          'main': 'var(--color-blue-200)',
          300: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
        },
      },
      fontFamily: {
        sans: ['noto-sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
        'pill': 'pill',
        'circular': '50%',
      },
      borderWidth: {
        DEFAULT: '1px',
        'none': '0',
        'sm': '1px',
        'md': '2px',
        'lg': '4px',
        'xl': '8px',
      },
      opacity: {
        'total': '0',
        'semitransparent': '0.08',
        'light': '0.16',
        'medium': '0.32',
        'intense': '0.64',
        'semiopaque': '0.8',
      },
      dropShadow: {
        'level-1': '0px 2px 3px rgba(0, 0, 0, 0.09)',
        'level-2': '0px 3px 6px rgba(0, 0, 0, 0.09)',
        'level-3': '0px 8px 24px rgba(0, 0, 0, 0.09)',
        'level-4': '0px 16px 32px rgba(0, 0, 0, 0.09)',
      },
      'innerShadow': {
        'level-1': 'inset 0px 2px 3px rgba(0, 0, 0, 0.09);',
        'level-2': 'inset 0px 3px 6px rgba(0, 0, 0, 0.09)',
        'level-3': 'inset 0px 8px 24px rgba(0, 0, 0, 0.09)',
        'level-4': 'inset 0px 16px 32px rgba(0, 0, 0, 0.09)',
      },
      fontWeight: {
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'md': '16px',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '2.125rem',
        '3xl': '3rem',
        '4xl': '3.75rem',
        '5xl': '6rem',
      },
      lineHeight: {
        '100': '100%',
        '200': '120%',
        '300': '150%',
        '400': '200%',
      },
      letterSpacing: {
        '200': '200',
        '300': '300',
        'none': 'none',
      },
      'textCase': {
        'upper': 'uppercase',
        'lower': 'lowercase',
        'normal': 'none',
      }
    },
  },
  plugins: [],
}