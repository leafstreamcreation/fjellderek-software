import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#123758",
          orange: "#C23F0E",
          teal: "#0DA6D4"
        }
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#343738",
          divider: "rgba(17, 17, 17, 0.15)",
          focus: "#123758",
          content1: "#F4F9FB", // Lighter for better contrast
          content2: "#123758",
          content3: "#707A7D", // Darker for better contrast
          content4: "#505A5D", // Darker for better contrast
          default: {
            50: "#8F9699",
            100: "#98A0A2",
            200: "#A1A9AC",
            300: "#AAB3B5",
            400: "#B3BCBF",
            500: "#BCC5C9",
            600: "#C5CFD2",
            700: "#CED8DC",
            800: "#D7E2E5",
            900: "#DFEBEF",
            DEFAULT: "#BCC5C9",
          },
          primary: {
            50: "#E1F5FB",
            100: "#C3EBF7",
            200: "#A5E1F3",
            300: "#87D7EF",
            400: "#2BBDE7", // Darkened for better contrast
            500: "#0DA6D4", // Brand teal
            600: "#0B93BC", // Darkened for better readability on white
            700: "#0A81A5",
            800: "#086F8E",
            900: "#075D77",
            DEFAULT: "#0DA6D4",
          },
          secondary: {
            50: "#FBEAE2",
            100: "#F7D5C5",
            200: "#F3BFA8",
            300: "#EFA98B",
            400: "#EB946E",
            500: "#C23F0E", // Brand orange
            600: "#AB380C", // Darkened for better readability on white
            700: "#94310B",
            800: "#7D2A09",
            900: "#662308",
            DEFAULT: "#C23F0E",
          },
          success: {
            50: "#E3FCF0",
            100: "#C7F9E1",
            200: "#ABF6D2",
            300: "#8FF3C3",
            400: "#60ECB0",
            500: "#40DB8F",
            600: "#22C672",
            700: "#1CA65F",
            800: "#17864D",
            900: "#12663B",
            DEFAULT: "#22C672", // Darkened for better readability
          },
          warning: {
            50: "#FFF6E5",
            100: "#FFECCC",
            200: "#FFE3B2",
            300: "#FFD999",
            400: "#FFD080",
            500: "#DAB96A",
            600: "#BA9C4E", // Darkened for better readability
            700: "#9A7F38",
            800: "#7A6228",
            900: "#5A4517",
            DEFAULT: "#BA9C4E",
          },
          danger: {
            50: "#FEECEE",
            100: "#FCDADD",
            200: "#FBC7CB",
            300: "#FAB5BA",
            400: "#F8A2A8",
            500: "#E5383B", // Significantly darkened for better contrast
            600: "#D22B2E",
            700: "#B92528",
            800: "#A01F22",
            900: "#87191C",
            DEFAULT: "#E5383B",
          },
        },
      },
      dark: {
        colors: {
          background: "#091520",
          foreground: "#F4F9FB", // Lightened for better contrast
          divider: "rgba(255, 255, 255, 0.15)",
          focus: "#3CBAE5", // Lightened teal for focus in dark mode
          content1: "#1A1D1D", // Slightly lightened for better contrast
          content2: "#3CBAE5", // Lightened teal for dark mode
          content3: "#ADBDC0", // Lightened for better contrast
          content4: "#CED8DC", // Lightened for better contrast
          default: {
            50: "#0E0E0E",
            100: "#151617",
            200: "#1D1F1F",
            300: "#252727",
            400: "#2D2F2F",
            500: "#343738",
            600: "#3C3F40",
            700: "#444748",
            800: "#4C4F51",
            900: "#535759",
            DEFAULT: "#343738",
          },
          primary: {
            50: "#DCEEF9",
            100: "#B9DDF3",
            200: "#95CCED",
            300: "#72BBE7",
            400: "#4EAAE1", // Lightened for better contrast
            500: "#2A99DB", // Lightened from brand navy for dark mode visibility
            600: "#2381B8",
            700: "#1C6A95",
            800: "#155273",
            900: "#0E3B50",
            DEFAULT: "#2A99DB",
          },
          secondary: {
            50: "#FFDCCF",
            100: "#FFB99F",
            200: "#FF9670",
            300: "#FF7340", // Lightened for better contrast
            400: "#FF5010",
            500: "#E23F0F", // Similar to brand orange but adjusted for dark mode
            600: "#BF360D",
            700: "#9C2D0B",
            800: "#792408",
            900: "#561B06",
            DEFAULT: "#E23F0F",
          },
          success: {
            50: "#D1FFEB",
            100: "#A3FFD7",
            200: "#75FFC3",
            300: "#47FFAF",
            400: "#19FF9B",
            500: "#00DB7A", // Lightened for dark mode
            600: "#00B866",
            700: "#009552",
            800: "#00723E",
            900: "#004F2B",
            DEFAULT: "#00DB7A",
          },
          warning: {
            50: "#FFFAEB",
            100: "#FFF0C7",
            200: "#FFE7A3",
            300: "#FFDD7F",
            400: "#FFD45B",
            500: "#FFCA37", // Significantly lightened for dark mode
            600: "#FFC013",
            700: "#EFB000",
            800: "#CC9700",
            900: "#A87D00",
            DEFAULT: "#FFCA37",
          },
          danger: {
            50: "#FFE5E5",
            100: "#FFCCCC",
            200: "#FFB2B2",
            300: "#FF9999",
            400: "#FF7F7F",
            500: "#FF6666", // Significantly lightened for dark mode
            600: "#FF4C4C",
            700: "#FF3333",
            800: "#FF1919",
            900: "#FF0000",
            DEFAULT: "#FF6666",
          },
        },
      }
    }
  })],
}