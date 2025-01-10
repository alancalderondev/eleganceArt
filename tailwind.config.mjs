/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			beige: {
			  DEFAULT: '#F3E8DC', // Beige suave
			},
			sand: {
			  DEFAULT: '#D1BFA6', // Arena cálida
			},
			brown: {
			  DEFAULT: '#A68E75', // Marrón claro
			},
			cream: {
			  DEFAULT: '#FFF8F0', // Crema claro
			},
			black: {
			  DEFAULT: '#333333', // Negro clásico
			},
			pink: {
			  light: '#E8C7C1', // Rosa pálido
			},
		  },
		},
		fontFamily: {
			playfair: ['"Playfair Display"', 'serif'],
			cormorant: ['"Cormorant Garamond"', 'serif'],
		  },
		  keyframes: {
			fadeInDown: {
			  '0%': { opacity: '0', transform: 'translateY(-20px)' },
			  '100%': { opacity: '1', transform: 'translateY(0)' },
			},
			textFadeIn: {
			  '0%': { opacity: '0' },
			  '100%': { opacity: '1' },
			},
			textSlideIn: {
			  '0%': { opacity: '0', transform: 'translateX(-10px)' },
			  '100%': { opacity: '1', transform: 'translateX(0)' },
			},
		  },
		  animation: {
			'fade-in-down': 'fadeInDown 0.8s ease-out',
			'text-fade-in': 'textFadeIn 1s ease-out',
			'text-slide-in': 'textSlideIn 1s ease-out',
		  },
	  },
	  plugins: [],
	};