<script context="module" lang="ts">
  import Box from "$lib/StitchesUI/Layout/Box.svelte";
  import { lightTheme, palette } from "$lib/StitchesUI/stitches.config";
  import Flex from "$lib/UI/Flex.svelte";
  import Grid from "$lib/UI/Grid.svelte";
  import Text from "$lib/UI/Text.svelte";
  import { objectKeys } from "$lib/utils/object";

  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Box as="section">
  <Flex gap={16} align="center">
    <Text tag="h3" fontSize={32}>Palette</Text>
  </Flex>

  <Grid gap={32} templateColumns="repeat(10, 1fr)" mt={16}>
    {#each objectKeys(palette) as key}
      <Flex mt={8} direction="column" gap={6}>
        <Box
          css={{ backgroundColor: `$${key}`, size: "$64", borderRadius: "$lg" }}
        />
        <span>{key}</span>
      </Flex>
    {/each}
  </Grid>

  <Box css={{ mt: "$32" }}>
    <Text tag="h3" fontSize={32}>Colors</Text>
  </Box>

  <Grid gap={32} templateColumns="repeat(10, 1fr)" mt={16}>
    {#each objectKeys(lightTheme) as key}
      <Flex mt={8} direction="column" gap={6}>
        <Box
          css={{ backgroundColor: `$${key}`, size: "$64", borderRadius: "$lg" }}
        />
        <span>{key}</span>
      </Flex>
    {/each}
  </Grid>
</Box>
