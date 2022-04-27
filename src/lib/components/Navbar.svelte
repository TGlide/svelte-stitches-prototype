<script lang="ts">
  import Flex from "$lib/UI/Layout/Flex.svelte";
  import Link from "$lib/UI/Link.svelte";
  import type { CSS } from "$lib/UI/stitches.config";
  import type { BaseProps } from "$lib/UI/types";
  import { joinCss } from "$lib/UI/utils";

  interface $$Props extends BaseProps {}

  export let css: $$Props["css"] = undefined;

  const baseCss: CSS = {
    gap: "$16",
  };

  $: resolvedCss = joinCss(baseCss, css ?? {});
</script>

<Flex as="nav" css={resolvedCss} {...$$restProps}>
  <Link href="/">📚 UI Library</Link>
</Flex>
