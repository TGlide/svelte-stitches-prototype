<script lang="ts">
  import Link from "$lib/StitchesUI/Link.svelte";
  import Flex, { type FlexProps } from "$lib/UI/Flex.svelte";

  interface $$Props extends FlexProps {}
</script>

<Flex tag="nav" gap={16} {...$$restProps}>
  <Link href="/">📚 UI Library</Link>
  <Link href="/color-gen">🎨 Generate colors</Link>
</Flex>
