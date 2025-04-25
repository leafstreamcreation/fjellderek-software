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
  // {
  //   "paletteName": "Light Primary",
  //   "swatches": [
  //     {
  //       "name": "New Swatch",
  //       "color": "3CC4ED"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "28BBE8"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "1BB5E3"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "0FADDE"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "08A8D9"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "0DA6D4"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "38A9CC"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "52AAC6"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "69ABC0"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "80ACB9"
  //     }
  //   ]
  // },
  // {
  //   "paletteName": "Dark Primary",
  //   "swatches": [
  //     {
  //       "name": "New Swatch",
  //       "color": "1A578D"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "184F80"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "164773"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "143F65"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "123758"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "11304D"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "0F2A42"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "0E2337"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "0C1C2B"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "091520"
  //     }
  //   ]
  // },
  // {
  //   "paletteName": "Secondary",
  //   "swatches": [
  //     {
  //       "name": "New Swatch",
  //       "color": "331000"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "4E1801"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "692103"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "842B05"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "9F3508"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "F0703B"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "F98B5C"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "FC9C73"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "FEAA87"
  //     },
  //     {
  //       "name": "New Swatch",
  //       "color": "FFB899"
  //     }
  //   ]
  // },
  // {
  //   "paletteName": "Success",
  //   "swatches": [
      // {
      //   "name": "New Swatch",
      //   "color": "05331C"
      // },
      // {
      //   "name": "New Swatch",
      //   "color": "0E4A2C"
      // },
      // {
      //   "name": "New Swatch",
      //   "color": "175536"
      // },
      // {
      //   "name": "New Swatch",
      //   "color": "215D3F"
      // },
      // {
      //   "name": "New Swatch",
      //   "color": "2C6248"
      // },
      // {
      //   "name": "New Swatch",
      //   "color": "05AF5B"
      // },
      // {
      //   "name": "New Swatch",
      //   "color": "1DC371"
      // },
      // {
      //   "name": "New Swatch",
      //   "color": "39D789"
      // },
      // {
      //   "name": "New Swatch",
      //   "color": "5AEBA3"
      // },
      // {
      //   "name": "New Swatch",
      //   "color": "80FFC0"
      // }
  //   ]
  // },


//   {
//     "paletteName": "Warning",
//     "swatches": [
//       {
//         "name": "New Swatch",
//         "color": "332605"
//       },
//       {
//         "name": "New Swatch",
//         "color": "413108"
//       },
//       {
//         "name": "New Swatch",
//         "color": "4F3C0D"
//       },
//       {
//         "name": "New Swatch",
//         "color": "5D4815"
//       },
//       {
//         "name": "New Swatch",
//         "color": "6B5623"
//       },
//       {
//         "name": "New Swatch",
//         "color": "AB8E45"
//       },
//       {
//         "name": "New Swatch",
//         "color": "C4A456"
//       },
//       {
//         "name": "New Swatch",
//         "color": "D8B767"
//       },
//       {
//         "name": "New Swatch",
//         "color": "EDCC7B"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FFDE8E"
//       }
//     ]
//   },
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