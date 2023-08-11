import localFont from "next/font/local";

// define your variable fonts

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const montSerrat = localFont({
  src: "./montSerrat/Montserrat-Regular.ttf",
});
const avalon = localFont({
  src: "./avalon/AvallonAlt.ttf",
});
export { avalon, montSerrat };
