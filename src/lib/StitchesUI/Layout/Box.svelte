<script lang="ts" context="module">
  import type { CSS } from "../stitches.config";
  import { css as stitchesCSS } from "../stitches.config";

  export type BoxProps = {
    as?: string;
    css?: CSS;
    cssArgs?: Record<string, unknown>;
  };
</script>

<script lang="ts">
  interface $$Props extends BoxProps {}

  export let as: $$Props["as"] = "div";
  export let css: $$Props["css"] = undefined;
  export let cssArgs: $$Props["cssArgs"] = {};
</script>

<svelte:element
  this={as}
  class={css && stitchesCSS(css)({ ...cssArgs })}
  {...$$restProps}
>
  <slot />
</svelte:element>
