<script context="module" lang="ts">
  import Box from "$lib/UI/Box.svelte";
  import Flex from "$lib/UI/Flex.svelte";
  import Grid from "$lib/UI/Grid.svelte";
  import Text from "$lib/UI/Text.svelte";
  import { theme } from "$lib/UI/theme";
  import { objectKeys } from "$lib/utils/object";

  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Box tag="section">
  <Flex gap={16} align="center">
    <Text tag="h3" fontSize={32}>Palette</Text>
  </Flex>

  <Grid gap={32} templateColumns="repeat(10, 1fr)" mt={16}>
    {#each objectKeys(theme.palette) as key}
      <Flex mt={8} direction="column" gap={6}>
        <Box bgColor={key} size={64} radius={6} />
        <span>{key}</span>
      </Flex>
    {/each}
  </Grid>

  <Box mt={32}>
    <Text tag="h3" fontSize={32}>Colors</Text>
  </Box>

  <Grid gap={32} templateColumns="repeat(10, 1fr)" mt={16}>
    {#each objectKeys(theme.colors) as key}
      <Flex mt={8} direction="column" gap={6}>
        <Box bgColor={key} size={64} radius={6} />
        <span>{key}</span>
      </Flex>
    {/each}
  </Grid>
</Box>
