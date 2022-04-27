<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Box from "$lib/UI/Box.svelte";
  import Flex from "$lib/UI/Flex.svelte";
  import Link from "$lib/UI/Link.svelte";
  import Text from "$lib/UI/Text.svelte";
  import { getHSLA } from "$lib/utils/colors";

  let name = "color";
  let color = "";

  $: parsedColor = getHSLA(color);
  $: [h, s, l, a] = parsedColor ?? [];

  const getCssVars = (h: string, s: string, colorName: string) => {
    const vars: Record<string, string> = {};

    for (let l = 10; l <= 100; l += 10) {
      const varName = `${colorName}${l}`;

      vars[varName] = `hsl(${h}, ${s}, ${l}%)`;
    }

    return vars;
  };

  $: cssVars = getCssVars(h, s, name);
</script>

<svelte:head>
  <title>Color Generator</title>
</svelte:head>

<section class="themed">
  <Flex justify="center" align="center" p={16} mt={128}>
    <Box textAlign="left">
      <Link href="/">{"<"} Back</Link>
      <Text fontWeight={600} fontSize={32} mt={24}>Color Generator</Text>

      <Flex minW="50vh" direction="column" gap={16} mt={32}>
        <Box tag="label" display="block">
          <Text fontSize={18} mb={8}>Name</Text>
          <input bind:value={name} />
        </Box>
        <Box tag="label" display="block">
          <Text fontSize={18} mb={8}>Color</Text>
          <input bind:value={color} />
          {#if color && parsedColor === null}
            <Text color="red50" fontSize={12} mt={4}>Invalid color</Text>
          {/if}
        </Box>
      </Flex>

      <Flex direction="column" gap={6} mt={32}>
        {#each Object.entries(cssVars) as [key, value]}
          <Text fontFamily="mono">
            {key}:<Text tag="span" opacity={0.5}>&nbsp;{value};</Text>
          </Text>
        {/each}
      </Flex>
    </Box>
  </Flex>
</section>

<style>
  section.themed {
    --input-bg: var(--palette-gray-80);
  }

  :global([data-theme="dark"]) section.themed {
    --input-bg: var(--palette-gray-20);
  }
  input {
    width: 100%;

    background-color: var(--input-bg);
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
</style>
