<script>
	import { fly } from "svelte/transition";
	export let name;
</script>

<svelte:head>
	<style>
		/* set body styles to prevent jumping
			after animation when scrollbar is hidden
			(this style will only be applied to the body while on the /home route)
		*/
		body {
			overflow-y: hidden;
			overflow-x: hidden;
		}
	</style>
</svelte:head>

<main>
	<h1 in:fly={{ x: 500, duration: 1000 }}>Hi, I'm {name}!</h1>
	<section in:fly={{ y: 500, delay: 1100, duration: 1000 }}>
		<h2>It's great to meet you...</h2>
		<div
			class="wave"
			role="img"
			aria-label="Waving Hand Sign"
		>
			<span title="Hello!">👋</span>
		</div>
		<h2>Let's get started!</h2>
	</section>
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
		color: var(--theme-fontColor);
		font-weight: var(--theme-fontWeight);
	}

	h1 {
		font-size: var(--theme-fontSizeHeader);
		font-weight: inherit;
	}

	h2 {
		font-size: var(--theme-fontSizeSubHeader);
		font-weight: inherit;
		margin: 0;
	}

	div {
		margin: var(--theme-spacingMedium) 0;
		font-size: var(--theme-fontSizeSubHeader);
	}

	div.wave {
		display: inline-block;
		cursor: default;
		-moz-user-select: none;
		-webkit-user-select: none;
		animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
		animation-duration: 1.5s;        /* Change to speed up or slow down */
		animation-iteration-count: infinite;  /* Never stop waving :) */
		transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
	}

	@keyframes wave-animation {
		0% { transform: rotate( 0.0deg) }
		10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
		20% { transform: rotate(-8.0deg) }
		30% { transform: rotate(14.0deg) }
		40% { transform: rotate(-4.0deg) }
		50% { transform: rotate(10.0deg) }
		60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
		100% { transform: rotate( 0.0deg) }
	}
</style>