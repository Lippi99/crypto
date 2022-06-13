import { styled } from "../../../stitches.config";
export const Button = styled("button", {
  border: "none",
  background: "none",
  cursor: "pointer",

  variants: {
    variant: {
      purple: {
        background: "none",
        border: "none",
        color: "#B982FF",
        fontWeight: 600,
        borderRadius: "6px",
        fontSize: "$4",
        cursor: "pointer",
      },
      black: {
        background: "black",
        border: "1px solid white",
        color: "White",
        fontWeight: 600,
        borderRadius: "6px",
      },
      gradientBluePurple: {
        background: "linear-gradient(#18C8FF, #933FFE)",
        border: "1px solid linear-gradient(#18C8FF, #933FFE)",
        color: "White",
        fontWeight: 600,
        borderRadius: "6px",
      },
    },
  },
});
