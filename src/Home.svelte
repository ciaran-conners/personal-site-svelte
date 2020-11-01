<script>
  	export let name;
</script>

<main>
  <h1>Hi, I'm {name}!</h1>
  <div class="subtitle">It's great to meet you...</div>
  <div class="wave" role="img" aria-label="Waving Hand Sign">👋</div>
  <div class="subtitle">let's get started!</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--theme-fontColor);
		text-transform: uppercase;
		font-size: 6em;
		font-weight: 100;
	}

	div {
		color: var(--theme-fontColor);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	div.wave {
		animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
		animation-duration: 2.5s;        /* Change to speed up or slow down */
		animation-iteration-count: infinite;  /* Never stop waving :) */
		transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
		display: inline-block;
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>