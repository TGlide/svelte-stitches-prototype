<script lang="ts">
  import type { BaseProps } from "../types";
  import { generateClass } from "../utils";

  interface $$Props extends BaseProps {}

  export let as: BaseProps["as"] = "div";
  export let css: BaseProps["css"] = undefined;
</script>

<svelte:element this={as} class={generateClass(css)} {...$$restProps}>
  <slot />
</svelte:element>
