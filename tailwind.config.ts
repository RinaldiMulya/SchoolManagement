import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Primary color - 
        // Used for header, navigation, and main elements
        primary: {
          DEFAULT: "#3B6790", // Base color for main elements
          light: "#4A7497", // Hover states, highlights
          dark: "#2E4B63", // Text on primary background
        },

        // Secondary color - 
        // Used for CTA, highlights, and important elements
        secondary: {
          DEFAULT: "#EFB036", // Base color for accents and CTA
          light: "#FFD073", // Hover states, highlights
          dark: "#CC9422", // Text on secondary background
        },

        // Accent color - 
        // Provides depth and variation to the design
        accent: {
          DEFAULT: "#3d8c95", // Accent elements and emphasis
          light: "#5EBAC5", // Subtle accents and hover
          dark: "#2A666D ", // Strong emphasis
        },

        // Text color system
        // Clear hierarchy for readability
        text: {
          primary: "#1A1A1A", // Main text
          secondary: "#a6a3a0", // Supporting text
          disabled: "#f0ebe8", // Disabled text
        },

        // Background colors
        // Creating visual hierarchy
        background: {
          primary: "#FFFFFF", // Background utama
          secondary: "#F5F5F5", // Card, section backgrounds
          tertiary: "#EEEEEE", // Subtle backgrounds
        },

        // Status and feedback colors
        // Consistent with UI standards
        status: {
          success: "#4CAF50", // Confirmation, success
          warning: "#FFC107", // Warning
          error: "#F44336", // Error, mistake
          info: "#2196F3", // Information
        },

        // Border colors
        // Helps in separating elements
        border: {
          light: "#E0E0E0", // Subtle borders
          DEFAULT: "#BDBDBD", // Standard borders
          dark: "#9E9E9E", // Emphasis borders
        },
      },
    },
  },
  plugins: [],
};

export default config;
