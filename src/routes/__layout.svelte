<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
  import Box from "$lib/UI/Layout/Box.svelte";
  import { dark } from "$lib/UI/stitches.config";
  import "@fontsource/inter";
  import "../app.css";
</script>

<!-- 
  We create this empty div with dark theme applied on it, to force stitches to include the darkTheme
  in the getCSSText() function in SSR.
-->
<div class={dark} />

<Box
  css={{
    color: "$fg",
    backgroundColor: "$bg",
    minHeight: "100vh",
    p: "$16",
    fontFamily: "$sans",
  }}
>
  <Navbar css={{ mb: "$16" }} />
  <ThemeSwitch />
  <slot />
</Box>
