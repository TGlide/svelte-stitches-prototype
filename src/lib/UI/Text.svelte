<script lang="ts" context="module">
	import Box, { parseSpace, parseValue, type BoxProps } from './Box.svelte';
	import { isFontFamily, theme, type FontFamily } from './theme';

	export type TextProps = BoxProps & {
		fontSize?: string | number;
		fontFamily?: FontFamily;
		fontWeight?:
			| 100
			| 200
			| 300
			| 400
			| 500
			| 600
			| 700
			| 800
			| 900
			| '100'
			| '200'
			| '300'
			| '400'
			| '500'
			| '600'
			| '700'
			| '800'
			| '900';
		lineHeight?: string | number;
		letterSpacing?: string | number;
		textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
		textDecoration?: 'none' | 'underline' | 'line-through';
	};

	export const parseFontFamily = (
		value: FontFamily | string | undefined,
		cssVar: string | string[]
	): string | undefined => {
		if (!value) return undefined;

		let parsedValue = value;
		if (isFontFamily(value)) {
			parsedValue = theme.fontFamilies[value];
		}

		if (typeof cssVar === 'string') {
			return `--${cssVar}: ${parsedValue}`;
		}

		return cssVar.map((v) => `--${v}: ${parsedValue}`).join(';');
	};
</script>

<script lang="ts">
	interface $$Props extends TextProps {}

	// Due to some svelte:element bugs causing jumping around on 1st render, we set the tag as div instead of p.
	export let tag: $$Props['tag'] = 'div';

	const getStyle = (props: TextProps) => {
		return [
			// Style prop
			props.style ?? undefined,
			// Text props
			parseValue(props.textTransform, 'text-transform'),
			parseValue(props.fontWeight, 'font-weight'),
			parseValue(props.textDecoration, 'text-decoration'),
			parseSpace(props.fontSize, 'font-size'),
			parseSpace(props.lineHeight, 'line-height'),
			parseSpace(props.letterSpacing, 'letter-spacing'),
			parseFontFamily(props.fontFamily, 'font-family')
		]
			.filter(Boolean)
			.join(';');
	};

	$: style = getStyle($$props);
</script>

<div
	class="wrapper"
	class:font-size={$$props.fontSize}
	class:font-weight={$$props.fontWeight}
	class:line-height={$$props.lineHeight}
	class:letter-spacing={$$props.letterSpacing}
	class:text-transform={$$props.textTransform}
	class:font-family={$$props.fontFamily}
	class:text-decoration={$$props.textDecoration}
	{style}
>
	<Box {tag} {...$$restProps}>
		<slot />
	</Box>
</div>

<style>
	.wrapper {
		display: contents;
	}

	.wrapper.font-size > :global(*) {
		font-size: var(--font-size);
	}

	.wrapper.font-weight > :global(*) {
		font-weight: var(--font-weight);
	}

	.wrapper.line-height > :global(*) {
		line-height: var(--line-height);
	}

	.wrapper.letter-spacing > :global(*) {
		letter-spacing: var(--letter-spacing);
	}

	.wrapper.text-transform > :global(*) {
		text-transform: var(--text-transform);
	}

	.wrapper.font-family > :global(*) {
		font-family: var(--font-family);
	}

	.wrapper.text-decoration > :global(*) {
		text-decoration: var(--text-decoration);
	}
</style>
