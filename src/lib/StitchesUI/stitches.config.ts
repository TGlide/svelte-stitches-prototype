import {
  createStitches,
  type CSS as StitchesCSS,
  type PropertyValue,
} from "@stitches/core";

const toRem = (px: number) => px / 16 + "rem";

const space = {
  0: "0",
  1: toRem(1),
  2: toRem(2),
  4: toRem(4),
  6: toRem(6),
  8: toRem(8),
  10: toRem(10),
  12: toRem(12),
  14: toRem(14),
  16: toRem(16),
  20: toRem(20),
  24: toRem(24),
  26: toRem(26),
  28: toRem(28),
  32: toRem(32),
  36: toRem(36),
  38: toRem(38),
  40: toRem(40),
  42: toRem(42),
  48: toRem(48),
  50: toRem(50),
  56: toRem(56),
  60: toRem(60),
  64: toRem(64),
  80: toRem(80),
  96: toRem(96),
  100: toRem(100),
} as const;

const createSpaceUtil =
  (keys: string[]) => (value: PropertyValue<"margin">) => {
    return keys.reduce((acc, key) => {
      return {
        ...acc,
        [key]: value,
      };
    }, {});
  };

export const palette = {
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

export const lightTheme = {
  bg: palette.gray100,
  fg: palette.gray10,
};

export const darkTheme: typeof lightTheme = {
  bg: palette.gray10,
  fg: palette.gray100,
};

const stitchesConfig = createStitches({
  theme: {
    colors: {
      ...palette,
      ...lightTheme,
    },
    fonts: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
      mono: "'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace",
    },
    fontSizes: {
      xxs: toRem(12),
      xs: toRem(14),
      sm: toRem(16),
      rg: toRem(18),
      md: toRem(20),
      lg: toRem(24),
      xl: `clamp(${toRem(28)}, 5vw, ${toRem(32)})`,
      xxl: `clamp(${toRem(48)}, 8vw, ${toRem(56)})`,
      xxxl: `clamp(${toRem(56)}, 10vw, ${toRem(96)})`,
    },
    fontWeights: {
      normal: "400",
      medium: "600",
    },
    lineHeights: {
      none: "1",
      tighter: "1.15",
      tight: "1.25",
      normal: "1.375",
      loose: "1.5",
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      none: "0",
      wide: "0.025em",
      wider: "0.05em",
    },
    space,
    sizes: {
      ...space,
      containerReading: "62ch",
      containerMedium: "78rem",
      containerWide: "105rem",
      sidebar: "18rem",
      fullHeight: "calc(var(--vh, 1vh) * 100)",
    },
    borderWidths: {
      normal: "1px",
    },
    borderStyles: {
      normal: "solid",
    },
    radii: {
      none: 0,
      sm: "0.0625rem",
      md: "0.125rem",
      lg: "0.35rem",
      pill: "999999px",
      full: "100%",
    },
    shadows: {
      focus: "0 0 0 3px hsla($colors$foreground, 0.3)",
      subtle:
        "0 1px 2px hsla($colors$black, 0.1), 0 2px 4px hsla($colors$black, 0.05)",
      medium:
        "0 1px 2px hsla($colors$black, 0.1), 0 4px 8px hsla($colors$black, 0.05), 0 8px 12px hsla($colors$black, 0.05)",
    },
    transitions: {
      appearance: "0.15s ease",
      motion: "0.3s cubic-bezier(0.20, 1, 0.20, 1)",
      smooth: "0.4s cubic-bezier(0.90, 0, 0.05, 1)",
    },
    zIndices: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      max: 999,
    },
  },
  media: {
    xs: "(min-width: 24em)",
    sm: "(min-width: 30em)",
    md: "(min-width: 48em)",
    lg: "(min-width: 62em)",
    xl: "(min-width: 80em)",
    xxl: "(min-width: 96em)",
    hover: "(hover: hover)",
  },
  utils: {
    m: createSpaceUtil(["margin"]),
    mt: createSpaceUtil(["marginTop"]),
    mr: createSpaceUtil(["marginRight"]),
    mb: createSpaceUtil(["marginBottom"]),
    ml: createSpaceUtil(["marginLeft"]),
    mx: createSpaceUtil(["marginLeft", "marginRight"]),
    my: createSpaceUtil(["marginTop", "marginBottom"]),
    p: createSpaceUtil(["padding"]),
    pt: createSpaceUtil(["paddingTop"]),
    pr: createSpaceUtil(["paddingRight"]),
    pb: createSpaceUtil(["paddingBottom"]),
    pl: createSpaceUtil(["paddingLeft"]),
    px: createSpaceUtil(["paddingLeft", "paddingRight"]),
    py: createSpaceUtil(["paddingTop", "paddingBottom"]),
    size: createSpaceUtil(["width", "height"]),
  },
});

export const { css, createTheme, getCssText, globalCss, config } =
  stitchesConfig;
export type CSS = StitchesCSS<typeof config>;

export const dark = createTheme("dark-theme", {
  colors: {
    ...darkTheme,
  },
});
