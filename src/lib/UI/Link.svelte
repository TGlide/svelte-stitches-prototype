<script lang="ts" context="module">
  export type LinkProps = TextProps & {
    href: string;
    target?: string;
    rel?: string;
  };
</script>

<script lang="ts">
  import type { TextProps } from "./Text.svelte";
  import Text from "./Text.svelte";

  interface $$Props extends LinkProps {}
</script>

<div class="wrapper">
  <Text tag="a" {...$$restProps}>
    <slot />
  </Text>
</div>

<style>
  .wrapper {
    display: contents;
  }

  .wrapper :global(a) {
    transition: opacity 0.25s ease;
  }

  .wrapper :global(a:hover) {
    opacity: 0.75;
  }
</style>
