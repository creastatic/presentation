/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
	  extend: {
	    dropShadow: {
	      'usual': '0 0 2px white'
	    }
	  },
	  	fontFamily: {
	    'highlight': 'Monoton, serif',
	    'header': 'Audiowide, monospace',
	    'default': 'Fragment Mono, monospace'

	  },
		extend: {},
	},
	plugins: [],
}

export default config
