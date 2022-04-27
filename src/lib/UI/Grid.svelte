<script lang="ts" context="module">
	import Box, { parseSpace, parseValue, type BoxProps } from './Box.svelte';

	type GridProps = BoxProps & {
		grid?: string;
		templateColumns?: string;
		templateRows?: string;
		placeItems?: string;
		gap?: string | number;
	};
</script>

<script lang="ts">
	interface $$Props extends GridProps {}

	const getStyle = (props: GridProps) => {
		return [
			// Style prop
			props.style ?? undefined,
			// Grid props
			parseValue(props.grid, 'grid'),
			parseValue(props.templateColumns, 'template-columns'),
			parseValue(props.templateRows, 'template-rows'),
			parseValue(props.placeItems, 'place-items'),
			parseSpace(props.gap, 'gap')
		]
			.filter(Boolean)
			.join(';');
	};

	$: style = getStyle($$props);
</script>

<div
	class="wrapper"
	class:grid={$$props.grid}
	class:template-columns={$$props.templateColumns}
	class:template-rows={$$props.templateRows}
	class:gap={$$props.gap}
	class:place-items={$$props.placeItems}
	{style}
>
	<Box {...$$props}>
		<slot />
	</Box>
</div>

<style>
	.wrapper {
		display: contents;
	}

	.wrapper > :global(*) {
		display: grid;
	}

	.wrapper.grid > :global(*) {
		grid: var(--grid);
	}

	.wrapper.template-columns > :global(*) {
		grid-template-columns: var(--template-columns);
	}

	.wrapper.template-rows > :global(*) {
		grid-template-rows: var(--template-rows);
	}

	.wrapper.gap > :global(*) {
		grid-gap: var(--gap);
	}

	.wrapper.place-items > :global(*) {
		place-items: var(--place-items);
	}
</style>
