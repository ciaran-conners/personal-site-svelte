<script>
	import { Router, Route } from "svelte-routing";

	import ThemeContext from './ThemeContext.svelte';
	import Nav from './Nav.svelte';
	import Home from './Home.svelte';
	import Work from './Work.svelte';
	import Blog from "./Blog.svelte";
	import BlogPost from './BlogPost.svelte';

	export let name;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<ThemeContext>
	<div>
		<Nav />
		<Router>
			<Route path="/" component="{Home}" {name} />
			<Route path="/work" component="{Work}" />
			<Route path="/blog" component="{Blog}" />
			<Route path="/blog/posts/:id" let:params>
				<BlogPost id="{parseInt(params.id, 10)}" />
			</Route>
		</Router>
	</div>
</ThemeContext>

<style>
	div {
		padding: var(--theme-spacingExtraLarge)
	}
</style>
