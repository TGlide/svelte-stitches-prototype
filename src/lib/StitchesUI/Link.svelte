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

  interface $$Props extends LinkProps {}

  export let css: $$Props["css"] = undefined;

  $: resolvedCss = {
    transition: "opacity 0.25s ease",
    "&:hover": {
      opacity: 0.75,
    },
    ...css,
  } as CSS;
</script>

<Text as="a" css={resolvedCss} {...$$restProps}>
  <slot />
</Text>
