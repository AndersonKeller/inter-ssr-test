import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
// --dl-color-primary: #dc0714;
// --dl-color-secondary: #d8b973;
// --dl-color-terciaria: #575756;
// --dl-color-quaternaria: #f2ebe2;
// --dl-color-quinquenario: #e7e7e7;
// --dl-color-black: #261b1c;
// --dl-color-red-mid: #65383e;
// --dl-color-red-dark: #3b2427;
// --dl-color-orange: #f18700;
// --dl-color-orange-light: #ffeed8;
// --dl-color-red-light: #f7e3e2;
// --dl-color-white: #ffffff;
// --dl-color-grey-light: #f1f1f1;
// --dl-color-grey: #999999;
// --dl-color-grey-mid: #cccccc;
// --dl-color-green: #76962e;
// --dl-color-green-light: #ebf3da;
