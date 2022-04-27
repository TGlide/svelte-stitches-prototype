<script lang="ts">
  import { cssFn } from "../stitches.config";
  import type { BaseProps } from "../types";
  import { generateClass } from "../utils";

  interface $$Props extends BaseProps {}

  const baseCss = cssFn({
    display: "grid",
  });
  export let as: BaseProps["as"] = "div";
  export let css: BaseProps["css"] = undefined;
</script>

<svelte:element
  this={as}
  class={generateClass(css, { baseCssFn: baseCss })}
  {...$$restProps}
>
  <slot />
</svelte:element>
