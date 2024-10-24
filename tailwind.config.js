/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		container: {
  			center: 'true',
  			padding: '2rem',
  			screens: {
  				'2xl': '1440px'
  			}
  		},
  		colors: {
  			background: {
  				light: '#FCF7FF',
  				dark: '#484554'
  			},
  			LavenderBlue: '#8576FF',
  			primarySelect: '#ADA9BB',
  			grayBlue: '#6A6676'
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

