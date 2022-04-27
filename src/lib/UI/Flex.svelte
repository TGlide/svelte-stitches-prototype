<script lang="ts" context="module">
	import Box, { parseSpace, parseValue, type BoxProps } from './Box.svelte';

	export type FlexProps = BoxProps & {
		direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
		wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
		justify?: 'start' | 'end' | 'center' | 'between' | 'around';
		align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
		gap?: string | number;
	};
</script>

<script lang="ts">
	interface $$Props extends FlexProps {}

	const getStyle = (props: FlexProps) => {
		return [
			// Style prop
			props.style ?? undefined,
			// Flexbox props
			parseValue(props.direction, 'direction'),
			parseValue(props.wrap, 'wrap'),
			parseValue(props.justify, 'justify'),
			parseValue(props.align, 'align'),
			parseSpace(props.gap, 'gap'),
			parseSpace(props.gap, 'gap')
		]
			.filter(Boolean)
			.join(';');
	};

	$: style = getStyle($$props);
</script>

<div
	class="wrapper"
	class:direction={$$props.direction}
	class:wrap={$$props.wrap}
	class:justify={$$props.justify}
	class:align={$$props.align}
	class:gap={$$props.gap}
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
		display: flex;
	}

	.wrapper.direction > :global(*) {
		flex-direction: var(--direction);
	}

	.wrapper.wrap > :global(*) {
		flex-wrap: var(--wrap);
	}

	.wrapper.justify > :global(*) {
		justify-content: var(--justify);
	}

	.wrapper.align > :global(*) {
		align-items: var(--align);
	}

	.wrapper.gap > :global(*) {
		gap: var(--gap);
	}
</style>
