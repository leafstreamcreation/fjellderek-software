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
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: "#80ACB9",
          foreground: "#11181C",
          divider: "rgba(17, 17, 17, 0.15)",
          focus: "#006FEE",
          content1: "#FFFFFF",
          content2: "#f4f4f5",
          content3: "#e4e4e7",
          content4: "#d4d4d8",
          default: {
            50: "#fafafa",
            100: "#f4f4f5",
            200: "#e4e4e7",
            300: "#d4d4d8",
            400: "#a1a1aa",
            500: "#71717a",
            600: "#52525b",
            700: "#3f3f46",
            800: "#27272a",
            900: "#18181b",
            DEFAULT: "#d4d4d8",
          },
          primary: {
            50: "#3CC4ED",
            100: "#28BBE8",
            200: "#1BB5E3",
            300: "#0FADDE",
            400: "#08A8D9",
            500: "#0DA6D4",
            600: "#38A9CC",
            700: "#52AAC6",
            800: "#69ABC0",
            900: "#80ACB9",
            DEFAULT: "#0DA6D4",
          },
          secondary: {
            50: "#331000",
            100: "#4E1801",
            200: "#692103",
            300: "#842B05",
            400: "#9F3508",
            500: "#F0703B",
            600: "#F98B5C",
            700: "#FC9C73",
            800: "#FEAA87",
            900: "#FFB899",
            DEFAULT: "#F0703B",
          },
          success: {
            50: "#05331C",
            100: "#0E4A2C",
            200: "#175536",
            300: "#215D3F",
            400: "#2C6248",
            500: "#05AF5B",
            600: "#1DC371",
            700: "#39D789",
            800: "#5AEBA3",
            900: "#80FFC0",
            DEFAULT: "#05AF5B",
          },
          warning: {
            50: "#332605",
            100: "#413108",
            200: "#4F3C0D",
            300: "#5D4815",
            400: "#6B5623",
            500: "#AB8E45",
            600: "#C4A456",
            700: "#D8B767",
            800: "#EDCC7B",
            900: "#FFDE8E",
            DEFAULT: "#AB8E45",
          },
          danger: {
            50: "#fee7ef",
            100: "#fdd0df",
            200: "#faa0bf",
            300: "#f871a0",
            400: "#f54180",
            500: "#f31260",
            600: "#c20e4d",
            700: "#920b3a",
            800: "#610726",
            900: "#310413",
            DEFAULT: "#f31260",
          },
        },
      },
      dark: {
        colors: {
          background: "#091520",
          foreground: "#ECEDEE",
          divider: "rgba(255, 255, 255, 0.15)",
          focus: "#006FEE",
          content1: "#18181b",
          content2: "#27272a",
          content3: "#3f3f46",
          content4: "#52525b",
          default: {
            50: "#18181b",
            100: "#27272a",
            200: "#3f3f46",
            300: "#52525b",
            400: "#71717a",
            500: "#a1a1aa",
            600: "#d4d4d8",
            700: "#e4e4e7",
            800: "#f4f4f5",
            900: "#fafafa",
            DEFAULT: "#3f3f46",
          },
          primary: {
            50: "#1A578D",
            100: "#184F80",
            200: "#164773",
            300: "#143F65",
            400: "#123758",
            500: "#11304D",
            600: "#0F2A42",
            700: "#0E2337",
            800: "#0C1C2B",
            900: "#091520",
            DEFAULT: "#11304D",
          },
          secondary: {
            50: "#FFB899",
            100: "#FEAA87",
            200: "#FC9C73",
            300: "#F98B5C",
            400: "#F0703B",
            500: "#9F3508",
            600: "#842B05",
            700: "#692103",
            800: "#4E1801",
            900: "#331000",
            DEFAULT: "#9F3508",
          },
          success: {
            50: "#80FFC0",
            100: "#5AEBA3",
            200: "#39D789",
            300: "#1DC371",
            400: "#05AF5B",
            500: "#2C6248",
            600: "#215D3F",
            700: "#175536",
            800: "#0E4A2C",
            900: "#05331C",
            DEFAULT: "#2C6248",
          },
          warning: {
            50: "#FFDE8E",
            100: "#EDCC7B",
            200: "#D8B767",
            300: "#C4A456",
            400: "#AB8E45",
            500: "#6B5623",
            600: "#5D4815",
            700: "#4F3C0D",
            800: "#413108",
            900: "#332605",
            DEFAULT: "#6B5623",
          },
          danger: {
            50: "#310413",
            100: "#610726",
            200: "#920b3a",
            300: "#c20e4d",
            400: "#f31260",
            500: "#f54180",
            600: "#f871a0",
            700: "#faa0bf",
            800: "#fdd0df",
            900: "#fee7ef",
            DEFAULT: "#f31260",
          },
        },
      }
    }
  })],
}
//   {
//     "paletteName": "Danger",
//     "swatches": [
//       {
//         "name": "New Swatch",
//         "color": "470207"
//       },
//       {
//         "name": "New Swatch",
//         "color": "62040B"
//       },
//       {
//         "name": "New Swatch",
//         "color": "7D060F"
//       },
//       {
//         "name": "New Swatch",
//         "color": "970913"
//       },
//       {
//         "name": "New Swatch",
//         "color": "B20D19"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FA626C"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FB6C77"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FC7780"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FE818A"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FF8C95"
//       }
//     ]
//   },
//   {
//     "paletteName": "Default",
//     "swatches": [
//       {
//         "name": "New Swatch",
//         "color": "0E0E0E"
//       },
//       {
//         "name": "New Swatch",
//         "color": "1F2121"
//       },
//       {
//         "name": "New Swatch",
//         "color": "313334"
//       },
//       {
//         "name": "New Swatch",
//         "color": "424546"
//       },
//       {
//         "name": "New Swatch",
//         "color": "535859"
//       },
//       {
//         "name": "New Swatch",
//         "color": "8F9799"
//       },
//       {
//         "name": "New Swatch",
//         "color": "A3ACAE"
//       },
//       {
//         "name": "New Swatch",
//         "color": "B7C1C4"
//       },
//       {
//         "name": "New Swatch",
//         "color": "CBD6D9"
//       },
//       {
//         "name": "New Swatch",
//         "color": "DFEBEF"
//       }
//     ]
//   }
// ]