<script lang="ts" context="module">
	import { isColor, isPalette, theme, type Color, type Palette } from './theme';

	export type ColorProp = Color | Palette;

	export type BoxProps = {
		// Style Prop
		style?: string;
		// Margin
		m?: string | number;
		mt?: string | number;
		mr?: string | number;
		mb?: string | number;
		ml?: string | number;
		mx?: string | number;
		my?: string | number;
		// Padding
		p?: string | number;
		pt?: string | number;
		pr?: string | number;
		pb?: string | number;
		pl?: string | number;
		px?: string | number;
		py?: string | number;
		// Width and height
		w?: string | number;
		minW?: string | number;
		maxW?: string | number;
		h?: string | number;
		minH?: string | number;
		maxH?: string | number;
		size?: string | number;
		// Border
		radius?: string | number;
		borderSize?: string | number;
		borderColor?: ColorProp;
		borderStyle?: string;
		// Colors
		bgColor?: ColorProp;
		color?: ColorProp;
		// Misc.
		opacity?: number;
		display?: string;
		textAlign?: string;
		tag?: string;
	};

	export const pxToRem = (px: number) => {
		return `${px / 16}rem`;
	};

	export const parseValue = (
		value: string | number | undefined,
		cssVar: string | string[]
	): string | undefined => {
		if (value === undefined) {
			return undefined;
		}

		if (typeof cssVar === 'string') {
			return `--${cssVar}: ${value};`;
		}

		return cssVar.map((v) => `--${v}: ${value}`).join(';');
	};

	export const parseSpace = (
		value: string | number | undefined,
		cssVar: string | string[]
	): string | undefined => {
		if (value === undefined) {
			return undefined;
		}

		let parsedValue = value;

		if (typeof value === 'number') {
			parsedValue = pxToRem(value);
		}

		if (typeof cssVar === 'string') {
			return `--${cssVar}: ${parsedValue}`;
		}

		return cssVar.map((v) => `--${v}: ${parsedValue}`).join(';');
	};

	export const parseColor = (
		value: ColorProp | string | undefined,
		cssVar: string | string[]
	): string | undefined => {
		if (!value) return undefined;

		let parsedValue = value;
		if (isColor(value)) {
			parsedValue = theme.colors[value];
		}

		if (isPalette(value)) {
			parsedValue = theme.palette[value];
		}

		if (typeof cssVar === 'string') {
			return `--${cssVar}: ${parsedValue}`;
		}

		return cssVar.map((v) => `--${v}: ${parsedValue}`).join(';');
	};
</script>

<script lang="ts">
	interface $$Props extends BoxProps {}

	export let tag: $$Props['tag'] = 'div';

	const getStyle = (props: BoxProps) => {
		return [
			// Style prop
			props.style ?? undefined,
			// Margin
			parseSpace(props.m, 'm'),
			parseSpace(props.mt, 'mt'),
			parseSpace(props.mr, 'mr'),
			parseSpace(props.mb, 'mb'),
			parseSpace(props.ml, 'ml'),
			parseSpace(props.mx, ['ml', 'mr']),
			parseSpace(props.my, ['mt', 'mb']),
			// Padding
			parseSpace(props.p, 'p'),
			parseSpace(props.pt, 'pt'),
			parseSpace(props.pr, 'pr'),
			parseSpace(props.pb, 'pb'),
			parseSpace(props.pl, 'pl'),
			parseSpace(props.px, ['pl', 'pr']),
			parseSpace(props.py, ['mp', 'pb']),
			// Width and height
			parseSpace(props.w, 'w'),
			parseSpace(props.minW, 'min-w'),
			parseSpace(props.maxW, 'max-w'),
			parseSpace(props.h, 'h'),
			parseSpace(props.minH, 'min-h'),
			parseSpace(props.maxH, 'max-h'),
			parseSpace(props.size, ['w', 'h']),
			// Border
			parseSpace(props.radius, 'radius'),
			parseColor(props.borderColor, 'border-color'),
			parseSpace(props.borderSize, 'border-size'),
			parseValue(props.borderStyle, 'border-style'),
			// Colors
			parseColor(props.bgColor, 'bg-color'),
			parseColor(props.color, 'color'),
			// Misc.
			parseValue(props.opacity, 'opacity'),
			parseValue(props.display, 'display'),
			parseValue(props.textAlign, 'text-align')
		]
			.filter(Boolean)
			.join(';');
	};

	$: style = getStyle($$props);
</script>

<svelte:element
	this={tag}
	{style}
	class:m={$$props.m}
	class:mt={$$props.mt}
	class:mr={$$props.mr}
	class:mb={$$props.mb}
	class:ml={$$props.ml}
	class:mx={$$props.mx}
	class:my={$$props.my}
	class:p={$$props.p}
	class:pt={$$props.pt}
	class:pr={$$props.pr}
	class:pb={$$props.pb}
	class:pl={$$props.pl}
	class:px={$$props.px}
	class:py={$$props.py}
	class:radius={$$props.radius}
	class:border-color={$$props.borderColor}
	class:border-size={$$props.borderSize}
	class:border-style={$$props.borderStyle}
	class:w={$$props.w}
	class:min-w={$$props.minW}
	class:max-w={$$props.maxW}
	class:h={$$props.h}
	class:min-h={$$props.minH}
	class:max-h={$$props.maxH}
	class:size={$$props.size}
	class:bg-color={$$props.bgColor}
	class:color={$$props.color}
	class:opacity={$$props.opacity}
	class:display={$$props.display}
	class:text-align={$$props.textAlign}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style>
	/* Margin */
	.m {
		margin: var(--m, 0);
	}
	.mt,
	.my {
		margin-top: var(--mt, 0);
	}
	.mr,
	.mx {
		margin-right: var(--mr, 0);
	}

	.mb,
	.my {
		margin-bottom: var(--mb, 0);
	}

	.ml,
	.mx {
		margin-left: var(--ml, 0);
	}

	/* Padding */
	.p {
		padding: var(--p, 0);
	}

	.pt,
	.py {
		padding-top: var(--pt, 0);
	}

	.pr,
	.px {
		padding-right: var(--pr, 0);
	}

	.pb,
	.py {
		padding-bottom: var(--pb, 0);
	}

	.pl,
	.px {
		padding-left: var(--pl, 0);
	}

	/* Width & Height */
	.w,
	.size {
		width: var(--w);
	}

	.min-w {
		min-width: var(--min-w);
	}

	.max-w {
		max-width: var(--maxW);
	}

	.h,
	.size {
		height: var(--h);
	}

	.min-h {
		min-height: var(--min-h);
	}

	.max-h {
		max-height: var(--max-h);
	}

	/* Border */
	.radius {
		border-radius: var(--radius);
	}

	.border-color {
		border-color: var(--border-color);
	}

	.border-size {
		border-width: var(--border-size);
	}

	.border-style {
		border-style: var(--border-style);
	}

	/* Colors */
	.bg-color {
		background-color: var(--bg-color);
	}

	.color {
		color: var(--color);
	}

	/* Misc. */
	.opacity {
		opacity: var(--opacity);
	}

	.display {
		display: var(--display);
	}

	.text-align {
		text-align: var(--text-align);
	}
</style>
