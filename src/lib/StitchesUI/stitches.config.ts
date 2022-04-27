import { createStitches } from "@stitches/core";

const palette = {
  gray10: "hsl(215, 14%, 10%)",
  gray20: "hsl(215, 14%, 20%)",
  gray30: "hsl(215, 14%, 30%)",
  gray40: "hsl(215, 14%, 40%)",
  gray50: "hsl(215, 14%, 50%)",
  gray60: "hsl(215, 14%, 60%)",
  gray70: "hsl(215, 14%, 70%)",
  gray80: "hsl(215, 14%, 80%)",
  gray90: "hsl(215, 14%, 90%)",
  gray100: "hsl(215, 14%, 100%)",
  red10: "hsl(0, 72%, 10%)",
  red20: "hsl(0, 72%, 20%)",
  red30: "hsl(0, 72%, 30%)",
  red40: "hsl(0, 72%, 40%)",
  red50: "hsl(0, 72%, 50%)",
  red60: "hsl(0, 72%, 60%)",
  red70: "hsl(0, 72%, 70%)",
  red80: "hsl(0, 72%, 80%)",
  red90: "hsl(0, 72%, 90%)",
  red100: "hsl(0, 72%, 100%)",
  blue10: "hsl(222, 89%, 10%)",
  blue20: "hsl(222, 89%, 20%)",
  blue30: "hsl(222, 89%, 30%)",
  blue40: "hsl(222, 89%, 40%)",
  blue50: "hsl(222, 89%, 50%)",
  blue60: "hsl(222, 89%, 60%)",
  blue70: "hsl(222, 89%, 70%)",
  blue80: "hsl(222, 89%, 80%)",
  blue90: "hsl(222, 89%, 90%)",
  blue100: "hsl(222, 89%, 100%)",
};

const lightTheme = {
  bg: palette.gray100,
  fg: palette.gray10,
};

const darkTheme: typeof lightTheme = {
  bg: palette.gray10,
  fg: palette.gray100,
};

export const { css, createTheme, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
      mono: "'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace",
    },
    colors: {
      ...palette,
      ...lightTheme,
    },
  },
});

export const dark = createTheme("dark-theme", {
  colors: {
    ...darkTheme,
  },
});
