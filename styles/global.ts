import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },

  html: {
    background: "#0B0B0F",
    "@font-face": [
      {
        fontFamily: "Inter",
      },
      {
        fontFamily: "sans-serif",
      },
    ],
  }
});

() => {
  return globalStyles();
}