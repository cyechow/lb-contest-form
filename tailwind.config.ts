import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(table|checkbox|spacer).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/bg.png')"
      },
      colors: {
        customGreen: '#C4DA5E',
        customPurple: '#4D1B73',
        customDarkPurple: '#23003E',
        customCoral: '#F0957E',
      }
    },
  },
  plugins: [nextui()],
};
export default config;
