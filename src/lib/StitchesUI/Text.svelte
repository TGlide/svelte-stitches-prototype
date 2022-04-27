<script lang="ts" context="module">
  import { cssFn } from "./stitches.config";
  import type { BaseProps, WithVariantProps } from "./types";
  import { generateClass } from "./utils";

  const baseCss = cssFn({
    lineHeight: "$none",

    variants: {
      size: {
        xxs: { fontSize: "$xxs" },
        xs: { fontSize: "$xs" },
        sm: { fontSize: "$sm" },
        md: { fontSize: "$md" },
        lg: { fontSize: "$lg" },
        xl: { fontSize: "$xl" },
        xxl: { fontSize: "$xxl" },
        xxxl: { fontSize: "$xxxl" },
      },
      lineHeight: {
        none: { lineHeight: "$none" },
        tighter: { lineHeight: "$tighter" },
        tight: { lineHeight: "$tight" },
        normal: { lineHeight: "$normal" },
        loose: { lineHeight: "$loose" },
      },
      fontWeight: {
        normal: { fontWeight: "$normal" },
        medium: { fontWeight: "$medium" },
      },
      letterSpacing: {
        tighter: { letterSpacing: "$tighter" },
        tight: { letterSpacing: "$tight" },
        none: { letterSpacing: "$none" },
        wide: { letterSpacing: "$wide" },
        wider: { letterSpacing: "$wider" },
      },
      variant: {
        caps: {
          fontSize: "$xxs",
          textTransform: "uppercase",
          fontWeight: "$medium",
          lineHeight: "$none",
          letterSpacing: "$wider",
        },
        small: {
          fontSize: "$xs",
          fontWeight: "$normal",
          lineHeight: "$loose",
        },
        normal: {
          fontSize: "$sm",
          fontWeight: "$normal",
          lineHeight: "$loose",
        },
        regular: {
          fontSize: "$rg",
          fontWeight: "$normal",
          lineHeight: "$normal",
        },
        body: {
          fontSize: "$md",
          fontWeight: "$normal",
          lineHeight: "$loose",
        },
        big: {
          fontSize: "$lg",
          fontWeight: "$normal",
          lineHeight: "$normal",
        },
        title: {
          fontSize: "$xl",
          fontWeight: "$medium",
          lineHeight: "$tight",
        },
        display: {
          fontSize: "$xxl",
          fontWeight: "$medium",
          lineHeight: "$tighter",
        },
        huge: {
          fontSize: "$xxxl",
          fontWeight: "$medium",
          lineHeight: "$none",
        },
      },
    },
  });

  type TextProps = BaseProps & WithVariantProps<typeof baseCss>;
</script>

<script lang="ts">
  interface $$Props extends TextProps {}

  export let as: TextProps["as"] = "div";
  export let css: TextProps["css"] = undefined;
  export let variants: TextProps["variants"] = undefined;
</script>

<svelte:element
  this={as}
  class={generateClass(css, { baseCssFn: baseCss, variants })}
  {...$$restProps}
>
  <slot />
</svelte:element>
