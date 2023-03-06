import { createTheme } from "@mui/material/styles";

export const textColor = {
  grey: "#CCCCCC",
  white: "#FFFAFA",
};

export const backgroundColor = "#1c2331";

export const shades = {
  primary: {
    100: "#d0d4db",
    200: "#a0a9b7",
    300: "#717e94",
    400: "#415370",
    500: "#12284c",
    600: "#0e203d",
    700: "#0b182e",
    800: "#07101e",
    900: "#04080f",
  },
  secondary: {
    100: "#fcfcfc",
    200: "#fafafa",
    300: "#f7f7f7",
    400: "#f5f5f5",
    500: "#f2f2f2",
    600: "#c2c2c2",
    700: "#919191",
    800: "#616161",
    900: "#303030",
  },

  warning: {
    100: "#ffe0da",
    200: "#ffc1b5",
    300: "#ffa191",
    400: "#ff826c",
    500: "#ff6347",
    600: "#cc4f39",
    700: "#993b2b",
    800: "#66281c",
    900: "#33140e",
  },

  info: {
    100: "#ffedcc",
    200: "#ffdb99",
    300: "#ffc966",
    400: "#ffb733",
    500: "#ffa500",
    600: "#cc8400",
    700: "#996300",
    800: "#664200",
    900: "#332100",
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#12284c",
    },
    secondary: {
      main: "#f2f2f2",
    },
    warning: {
      main: "#ff6347",
    },
    info: {
      main: "#ffa500",
    },
    background: {
      default: "#1e232b",
    },
    divider: "rgba(128, 128, 128, 1)",
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 500,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h6: {
      fontSize: "0.875rem",
      fontWeight: 500,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.01em",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.01em",
    },
    button: {
      fontSize: "0.9rem",
      fontWeight: 500,
      lineHeight: 1.59,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.01em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: shades.primary[500],
          borderRadius: 0,
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#BA68C8",
    },
    secondary: {
      main: "#8BC34A ",
    },
    error: {
      main: "#e53935",
    },
    warning: {
      main: "#FFC400",
    },
    info: {
      main: "#4CB8C4",
    },
    success: {
      main: "#3ea844",
    },
    divider: "rgba(162,58,58,0.12)",
    background: {
      default: "#f0f8ff",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 500,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h6: {
      fontSize: "0.875rem",
      fontWeight: 500,
      fontFamily: "Georgia",
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.01em",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.01em",
    },
    button: {
      fontSize: "0.9rem",
      fontWeight: 500,
      lineHeight: 1.59,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.01em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.01em",
    },
  },
});
