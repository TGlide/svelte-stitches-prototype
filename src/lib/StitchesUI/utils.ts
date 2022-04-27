import type { VariantProps } from "@stitches/core";
import type { CSS } from "./stitches.config";
import { cssFn } from "./stitches.config";

type Cool = (...args: any) => () => string;

type GenerateClassConfig<T> = {
  variants?: VariantProps<T>;
  baseCssFn?: T;
};

export function generateClass<T = undefined>(
  css?: CSS,
  { baseCssFn, variants }: GenerateClassConfig<T> = {}
) {
  if (!css) return undefined;

  if (baseCssFn) {
    return (baseCssFn as any)({ css, ...variants }); // TODO: Improve Typing
  }

  return cssFn(css, variants ?? {})();
}
