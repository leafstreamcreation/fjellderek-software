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
          background: "#FFFFFF",
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
            50: "#e6f1fe",
            100: "#cce3fd",
            200: "#99c7fb",
            300: "#66aaf9",
            400: "#338ef7",
            500: "#006FEE",
            600: "#005bc4",
            700: "#004493",
            800: "#002e62",
            900: "#001731",
            DEFAULT: "#006FEE",
          },
          secondary: {
            50: "#f2eafa",
            100: "#e4d4f4",
            200: "#c9a9e9",
            300: "#ae7ede",
            400: "#9353d3",
            500: "#7828c8",
            600: "#6020a0",
            700: "#481878",
            800: "#301050",
            900: "#180828",
            DEFAULT: "#7828c8",
          },
          success: {
            50: "#e8faf0",
            100: "#d1f4e0",
            200: "#a2e9c1",
            300: "#74dfa2",
            400: "#45d483",
            500: "#17c964",
            600: "#12a150",
            700: "#0e793c",
            800: "#095028",
            900: "#052814",
            DEFAULT: "#17c964",
          },
          warning: {
            50: "#fefce8",
            100: "#fdedd3",
            200: "#fbdba7",
            300: "#f9c97c",
            400: "#f7b750",
            500: "#f5a524",
            600: "#c4841d",
            700: "#936316",
            800: "#62420e",
            900: "#312107",
            DEFAULT: "#f5a524",
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
          background: "#000000",
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
            50: "#001731",
            100: "#002e62",
            200: "#004493",
            300: "#005bc4",
            400: "#006FEE",
            500: "#338ef7",
            600: "#66aaf9",
            700: "#99c7fb",
            800: "#cce3fd",
            900: "#e6f1fe",
            DEFAULT: "#006FEE",
          },
          secondary: {
            50: "#180828",
            100: "#301050",
            200: "#481878",
            300: "#6020a0",
            400: "#7828c8",
            500: "#9353d3",
            600: "#ae7ede",
            700: "#c9a9e9",
            800: "#e4d4f4",
            900: "#f2eafa",
            DEFAULT: "#9353d3",
          },
          success: {
            50: "#052814",
            100: "#095028",
            200: "#0e793c",
            300: "#12a150",
            400: "#17c964",
            500: "#45d483",
            600: "#74dfa2",
            700: "#a2e9c1",
            800: "#d1f4e0",
            900: "#e8faf0",
            DEFAULT: "#17c964",
          },
          warning: {
            50: "#312107",
            100: "#62420e",
            200: "#936316",
            300: "#c4841d",
            400: "#f5a524",
            500: "#f7b750",
            600: "#f9c97c",
            700: "#fbdba7",
            800: "#fdedd3",
            900: "#fefce8",
            DEFAULT: "#f5a524",
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
// [
//   {
//     "paletteName": "Light Primary",
//     "swatches": [
//       {
//         "name": "New Swatch",
//         "color": "3CC4ED"
//       },
//       {
//         "name": "New Swatch",
//         "color": "28BBE8"
//       },
//       {
//         "name": "New Swatch",
//         "color": "1BB5E3"
//       },
//       {
//         "name": "New Swatch",
//         "color": "0FADDE"
//       },
//       {
//         "name": "New Swatch",
//         "color": "08A8D9"
//       },
//       {
//         "name": "New Swatch",
//         "color": "0DA6D4"
//       },
//       {
//         "name": "New Swatch",
//         "color": "38A9CC"
//       },
//       {
//         "name": "New Swatch",
//         "color": "52AAC6"
//       },
//       {
//         "name": "New Swatch",
//         "color": "69ABC0"
//       },
//       {
//         "name": "New Swatch",
//         "color": "80ACB9"
//       }
//     ]
//   },
//   {
//     "paletteName": "Dark Primary",
//     "swatches": [
//       {
//         "name": "New Swatch",
//         "color": "1A578D"
//       },
//       {
//         "name": "New Swatch",
//         "color": "184F80"
//       },
//       {
//         "name": "New Swatch",
//         "color": "164773"
//       },
//       {
//         "name": "New Swatch",
//         "color": "143F65"
//       },
//       {
//         "name": "New Swatch",
//         "color": "123758"
//       },
//       {
//         "name": "New Swatch",
//         "color": "11304D"
//       },
//       {
//         "name": "New Swatch",
//         "color": "0F2A42"
//       },
//       {
//         "name": "New Swatch",
//         "color": "0E2337"
//       },
//       {
//         "name": "New Swatch",
//         "color": "0C1C2B"
//       },
//       {
//         "name": "New Swatch",
//         "color": "091520"
//       }
//     ]
//   },
//   {
//     "paletteName": "Secondary",
//     "swatches": [
//       {
//         "name": "New Swatch",
//         "color": "331000"
//       },
//       {
//         "name": "New Swatch",
//         "color": "4E1801"
//       },
//       {
//         "name": "New Swatch",
//         "color": "692103"
//       },
//       {
//         "name": "New Swatch",
//         "color": "842B05"
//       },
//       {
//         "name": "New Swatch",
//         "color": "9F3508"
//       },
//       {
//         "name": "New Swatch",
//         "color": "F0703B"
//       },
//       {
//         "name": "New Swatch",
//         "color": "F98B5C"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FC9C73"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FEAA87"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FFB899"
//       }
//     ]
//   },
//   {
//     "paletteName": "Success",
//     "swatches": [
//       {
//         "name": "New Swatch",
//         "color": "05331C"
//       },
//       {
//         "name": "New Swatch",
//         "color": "0E4A2C"
//       },
//       {
//         "name": "New Swatch",
//         "color": "175536"
//       },
//       {
//         "name": "New Swatch",
//         "color": "215D3F"
//       },
//       {
//         "name": "New Swatch",
//         "color": "2C6248"
//       },
//       {
//         "name": "New Swatch",
//         "color": "05AF5B"
//       },
//       {
//         "name": "New Swatch",
//         "color": "1DC371"
//       },
//       {
//         "name": "New Swatch",
//         "color": "39D789"
//       },
//       {
//         "name": "New Swatch",
//         "color": "5AEBA3"
//       },
//       {
//         "name": "New Swatch",
//         "color": "80FFC0"
//       }
//     ]
//   },
//   {
//     "paletteName": "Warning",
//     "swatches": [
//       {
//         "name": "New Swatch",
//         "color": "313305"
//       },
//       {
//         "name": "New Swatch",
//         "color": "636614"
//       },
//       {
//         "name": "New Swatch",
//         "color": "95992E"
//       },
//       {
//         "name": "New Swatch",
//         "color": "C8CC52"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FBFF80"
//       }
//     ]
//   },
//   {
//     "paletteName": "Danger",
//     "swatches": [
//       {
//         "name": "New Swatch",
//         "color": "C41313"
//       }
//     ]
//   },
//   {
//     "paletteName": "Default",
//     "swatches": [
//       {
//         "name": "New Swatch",
//         "color": "330F05"
//       },
//       {
//         "name": "New Swatch",
//         "color": "662614"
//       },
//       {
//         "name": "New Swatch",
//         "color": "99452E"
//       },
//       {
//         "name": "New Swatch",
//         "color": "CC6C52"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FF9B80"
//       }
//     ]
//   }
// ]