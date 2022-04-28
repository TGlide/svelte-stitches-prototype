import type { VariantProps } from "@stitches/core"
import type { CSS } from "./stitches.config"
import { cssFn } from "./stitches.config"

type Cool = (...args: any) => () => string

type GenerateClassConfig<T> = {
  variants?: VariantProps<T>
  baseCssFn?: T
}

export function generateClass<T = undefined>(
  css?: CSS,
  { baseCssFn, variants }: GenerateClassConfig<T> = {}
) {
  const resolvedCss = css ?? {}

  if (baseCssFn) {
    return (baseCssFn as any)({ css: resolvedCss, ...variants }) // TODO: Improve Typing
  }

  return cssFn(resolvedCss, variants ?? {})()
}

export function joinCss(...css: CSS[]): CSS {
  return css.reduce((acc, c) => ({ ...acc, ...c }), {})
}

export function extractVariants<
  T extends { variants: Record<string, unknown> }
>(cssObj: T, props: Record<string, unknown>) {
  const variantKeys = Object.keys(cssObj.variants)
  const variants: Record<string, unknown> = {}
  const cleanedProps: Record<string, unknown> = {}

  Object.keys(props).forEach((key) => {
    if (variantKeys.includes(key)) {
      variants[key] = props[key]
    } else {
      cleanedProps[key] = props[key]
    }
  })

  return { variants, cleanedProps }
}
