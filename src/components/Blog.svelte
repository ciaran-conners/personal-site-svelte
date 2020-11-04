<script>
  import Link from 'svelte-routing/src/Link.svelte';
  import { fly } from 'svelte/transition';

  const getPosts = async () => {
    const res = await fetch('https://api.airtable.com/v0/app1aXgt9akv9tvuo/Posts', {
      headers: {
        'Authorization': 'Bearer keyMc7RGyflv5aZKP'
      }
    });
    const data = await res.json();
    return data;
  };
</script>

<main>
  <h1 in:fly={{ x: 500, duration: 1000 }}>Welcome to my blog.</h1>
  {#await getPosts() then data}
    <section in:fly={{ x: -500, duration: 1000, delay: 1000 }}>
      {#each data.records as { fields: { id, title }}}
        <h4>
          <Link to="blog/posts/{id}">{title}</Link>
        </h4>
      {/each}
    </section>
  {/await}
</main>

<style>
  main {
    font-weight: var(--theme-fontWeight);
  }
  h1 {
    font-size: inherit;
    font-weight: inherit;
    display: inline-block;
    font-size: var(--theme-fontSizeHeader);
  }
  h4 {
    font-size: var(--theme-fontSizeSubHeader);
    font-weight: inherit;
  }
</style>