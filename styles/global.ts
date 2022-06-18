import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },

  html: {
    background: "$dark",
    "@font-face": [
      {
        fontFamily: `Inter, sans-serif`
      },
    ],
  }
});

() => {
  return globalStyles();
}