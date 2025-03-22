import { cva, type VariantProps } from "class-variance-authority";

export const buttonStyles = cva("c-btn", {
  variants: {
    intent: {
      primary: "c-btn--primary",
      secondary: "c-btn--secondary",
      accent: "c-btn--accent",
      white: "c-btn--white",
      // Other button variants
    },
  },
});

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;
