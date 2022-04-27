import type { VariantProps } from "@stitches/core";
import type { CSS } from "./stitches.config";

export type BaseProps = {
  as?: string;
  css?: CSS;
};

export type WithVariantProps<BaseCss> = {
  variants?: VariantProps<BaseCss>;
};
