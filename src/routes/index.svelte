<script context="module" lang="ts">
  import Box from "$lib/UI/Layout/Box.svelte"
  import Flex from "$lib/UI/Layout/Flex.svelte"
  import Grid from "$lib/UI/Layout/Grid.svelte"
  import { lightTheme, palette } from "$lib/UI/stitches.config"
  import Text from "$lib/UI/Text.svelte"
  import { objectKeys } from "$lib/utils/object"

  export const prerender = true
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Box as="section">
  <Text as="h3" size="lg">Palette</Text>

  <Grid
    css={{
      gap: 32,
      gridTemplateColumns: "repeat(10, 1fr)",
      mt: 16,
    }}
  >
    {#each objectKeys(palette) as key}
      <Flex css={{ mt: 8, flexDirection: "column", gap: "$6" }}>
        <Box
          css={{
            backgroundColor: `$${key}`,
            size: "$64",
            borderRadius: "$lg",
            border: "1px solid $fg",
          }}
        />
        <span>{key}</span>
      </Flex>
    {/each}
  </Grid>

  <Text as="h3" css={{ mt: "$32" }} size="lg">Colors</Text>
  <Grid
    css={{
      gap: 32,
      gridTemplateColumns: "repeat(10, 1fr)",
      mt: 16,
    }}
  >
    {#each objectKeys(lightTheme) as key}
      <Flex css={{ mt: 8, flexDirection: "column", gap: "$6" }}>
        <Box
          css={{
            backgroundColor: `$${key}`,
            size: "$64",
            borderRadius: "$lg",
            border: "1px solid $fg",
          }}
        />
        <span>{key}</span>
      </Flex>
    {/each}
  </Grid>
</Box>
