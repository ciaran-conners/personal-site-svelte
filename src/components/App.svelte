<script>
	import { Router, Route } from "svelte-routing";

	import ThemeContext from './ThemeContext.svelte';
	import Nav from './Nav.svelte';
	import Home from './Home.svelte';
	import Work from './Work.svelte';
	import Blog from "./Blog.svelte";

	export let name;
</script>

<ThemeContext>
	<div id="body">
		<Nav />
		<Router>
			<Route path="/" component="{Home}" {name} />
			<Route path="/work" component="{Work}" />
			<Route path="/blog" component="{Blog}" />
		</Router>
	</div>
</ThemeContext>

<style>
	div#body {
		padding: var(--theme-spacingExtraLarge)
	}
</style>
