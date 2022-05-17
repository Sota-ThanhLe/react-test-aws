module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '10-16': ['0.625rem', '1rem'],
        '12-14': ['0.75rem', '0.875rem'],
        '14-16': ['0.875rem', '1rem'],
        '14-22': ['0.875rem', '1.375rem'],
        '14-24': ['0.875rem', '1.5rem'],
        '16-18': ['0.875rem', '1rem'],
        '16-22': ['0.875rem', '1.125rem'],
        '16-26': ['0.875rem', '1.625rem'],
        '22-24': ['1.125rem', '1.5rem'],
        '24-30': ['1.5rem', '1.375rem'],
        '32-34': ['2rem', '2.125rem'],
        '40-48': ['2.5rem', '3rem'],
      },
      screens: {
        sm: { max: '575px' },
        md: { max: '767px' },
        lg: { min: '992px' },
      },
    },
  },
  plugins: [],
};
