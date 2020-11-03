<script>
	import { draw, fly } from "svelte/transition";
	export let name;
</script>

<main in:fly={{ x: 500, duration: 1000 }}>
  <h1>Hi, I'm {name}!</h1>
  <h2>It's great to meet you...</h2>
	<div
		class="wave"
		role="img"
		aria-label="Waving Hand Sign"
	>
		<span title="Hello!">👋</span>
	</div>
  <h2>Let's get started!</h2>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		color: var(--theme-fontColor);
	}

	h1 {
		font-size: var(--theme-fontSizeHeader);
		font-weight: 100;
	}

	h2 {
		font-size: var(--theme-fontSizeSubHeader);
		font-weight: 100;
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