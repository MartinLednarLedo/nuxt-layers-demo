import { cva, type VariantProps } from "class-variance-authority";

export const linkStyles = cva("c-link", {
  variants: {
    intent: {
      primary: "c-link--primary",
      secondary: "c-link--secondary",
      accent: "c-link--accent",
      white: "c-link--white",
      overridenVriant: "c-link--overriden",
      // Other link variants
    },
  },
});

export type LinkStyleProps = VariantProps<typeof linkStyles>;
