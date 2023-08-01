import {
  extendTheme,
  theme,
  withDefaultColorScheme,
  withDefaultSize,
} from "@chakra-ui/react";

import type { ComponentStyleConfig } from "@chakra-ui/theme";

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    // fontWeight: "bold",
    borderRadius: "5px", // <-- border radius is same for all variants and sizes
    // _focus: {
    //   bg: "#4C2D64",
    //   color: "white",
    // },
    _focus: { boxShadow: 'none' }
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      //   px: 4, // <-- px is short for paddingLeft and paddingRight
      // py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      //   px: 6, // <-- these values are tokens from the design system
      // py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      // borderColor: "red.500",
      // color: "red.500",
      _active:{
        color:'white'
      }
    },
    solid: {
      bg: "#680285",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};

// const customTheme = extendTheme({
const themeStyles = {
  /* Foundational style overrides */
  colors: {
    ...theme.colors,
    // primary: "purple and dark purple >500",
    primary: {
      100: "#680285",
      200: "#680285",
      300: "#680285",
      400: "#680285",
      500: "#680285",
      600: "#4C2D64",
      700: "#4C2D64",
      800: "#4C2D64",
      900: "#4C2D64",
    },
    secondary: {
      100: "#FFFFFF",
      200: "#FFFFFF",
      300: "#FFFFFF",
      400: "#FFFFFF",
      500: "#FFFFFF",
      600: "#E0E0E0",
      700: "#E0E0E0",
      800: "#E0E0E0",
      900: "#E0E0E0",
    },
  },
  layerStyles: {},
  fonts: {
    ...theme.fonts,
    /** Example */
    // body: "Work Sans, sans-serif",
    // heading: "Markazi Text, serif",
  },
  // borders: foundations.borders,

  /* Component style overrides */
  components: {
    Button,

    Heading: {
      variants: {
        "page-heading": {
          color: "primary.100",
          fontWeight: "semibold",
          fontSize: "4xl",
          as: "h1",
          lineHeight: "100px",
          width: "fit-content",

          // px: "6",
        },
        "card-heading": {
          letterSpacing: "wide",
          fontSize: "xl",
          width: "fit-content",
        },
        "black-heading-36": {
          fontSize: "2xl",
          fontWeight: "Bold",
          color: "black",
          as: "h1",
          width: "fit-content",
        },
      },
    },
    Text: {
      variants: {
        "card-text": {
          pt: "6",
          // lineHeight: "2",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      },
    },
  },
};

const customTheme = extendTheme(
  themeStyles,
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Button", "Badge"],
  }),
  withDefaultSize({
    size: "lg",
    components: ["Button"],
  })
);

export default customTheme;
