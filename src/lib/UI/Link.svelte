<script lang="ts" context="module">
  export type LinkProps = TextProps & {
    href: string;
    target?: string;
    rel?: string;
  };
</script>

<script lang="ts">
  import type { CSS } from "./stitches.config";
  import type { TextProps } from "./Text.svelte";
  import Text from "./Text.svelte";
  import { joinCss } from "./utils";

  interface $$Props extends LinkProps {}

  export let css: $$Props["css"] = undefined;

  const baseCss = {
    transition: "opacity 0.25s ease",
    "&:hover": {
      opacity: 0.75,
    },
  } as CSS;
  $: resolvedCss = joinCss(baseCss, css ?? {});
</script>

<Text as="a" css={resolvedCss} {...$$restProps}>
  <slot />
</Text>
