<script lang="ts">
  import type { CSS } from "../stitches.config";
  import type { BoxProps } from "./Box.svelte";
  import Box from "./Box.svelte";

  interface $$Props extends BoxProps {}

  const baseCss: CSS = { display: "flex" };
  export let css: $$Props["css"] = undefined;

  $: resolvedCss = { ...baseCss, ...css };
</script>

<Box css={resolvedCss} {...$$restProps}>
  <slot />
</Box>
