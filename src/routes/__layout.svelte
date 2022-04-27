<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
  import { dark } from "$lib/StitchesUI/stitches.config";
  import "@fontsource/inter";
  import { css, globalCss } from "@stitches/core";
  import "../app.css";

  const globalStyles = globalCss({
    body: {
      color: "$fg",
      backgroundColor: "$bg",
    },
  });

  globalStyles();
</script>

<!-- 
  We create this empty div with dark theme applied on it, to force stitches to include the darkTheme
  in the getCSSText() function in SSR.
-->
<div class={dark} />

<main>
  <Navbar mb={16} />
  <ThemeSwitch />
  <div
    class={css({
      color: "red",
    })()}
  >
    hey
  </div>
  <slot />
</main>
