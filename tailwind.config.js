/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,html}"],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				bg: {
  					dark: '#1A1F36',
  					light: '#FFFFFF'
  				},
  				'accent-blue': {
  					dark: '#3366FF',
  					light: '#0056D2'
  				},
  				'light-blue': {
  					dark: '#99CCFF',
  					light: '#66B2FF'
  				},
  				purple: {
  					dark: '#6A5ACD',
  					light: '#66B2FF'
  				},
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			neutral: {
  				'dark-grey': {
  					dark: '#2B2F4C',
  					light: '#F7FAFC'
  				},
  				'mid-grey': {
  					dark: '#4B5563',
  					light: '#CBD5E0'
  				},
  				'light-grey': {
  					dark: '#E5E7EB',
  					light: '#2D3748'
  				}
  			},
  			text: {
  				primary: {
  					dark: '#FFFFFF',
  					light: '#2D3748'
  				},
  				secondary: {
  					dark: '#A0AEC0',
  					light: '#718096'
  				}
  			},
  			CTA: {
  				'hover-blue': {
  					dark: '#1E90FF',
  					light: '#0046A2'
  				}
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			header: '36px',
  			'sub-header': '28px',
  			'body-text': '16px',
  			'muted-text': '14px'
  		},
  		fontWeight: {
  			headings: '700',
  			'sub-headings': '600',
  			'body-text': '400',
  			'muted-text': '300'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
