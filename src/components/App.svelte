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
	<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😎</text></svg>">

	<title>{name}</title>
</svelte:head>

<ThemeContext>
	<Nav />
	<Router>
		<Route path="/" component="{Home}" {name} />
		<Route path="/work" component="{Work}" />
		<Route path="/blog" component="{Blog}" />
		<Route path="/blog/posts/:id" let:params>
			<BlogPost id="{parseInt(params.id, 10)}" />
		</Route>
	</Router>
</ThemeContext>
