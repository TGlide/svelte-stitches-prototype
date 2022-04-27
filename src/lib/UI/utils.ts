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
  const resolvedCss = css ?? {};

  if (baseCssFn) {
    return (baseCssFn as any)({ css: resolvedCss, ...variants }); // TODO: Improve Typing
  }

  return cssFn(resolvedCss, variants ?? {})();
}

export function joinCss(...css: CSS[]): CSS {
  return css.reduce((acc, c) => ({ ...acc, ...c }), {});
}
