<script>
  import { fade, fly } from 'svelte/transition';
  import Link from 'svelte-routing/src/Link.svelte';
  import { getCurrentPost } from '../lib/api';

  const fadeIn = {
    duration: 1200
  };

  let id;
  export { id };
</script>

<style>
  main {
    font-weight: var(--theme-fontWeight);
  }
  h1 {
    font-size: var(--theme-fontSizeSubHeader);
    font-weight: inherit;
    margin: var(--theme-spacingExtraLarge) 0;
  }
  article {
    font-size: var(--theme-fontSize)
  }
  article time {
    text-decoration: underline;
  }
</style>

<main>
  {#await getCurrentPost(id) then { date, title, postHtml }}
    <article>
      <header>
        <h1
          in:fly={{ x: -500, duration: fadeIn.duration + 200 }}
        >{title}</h1>
        <time in:fade={fadeIn}>{date}</time>
      </header>
      <section in:fade={fadeIn}>
        {@html postHtml}
      </section>
      <footer in:fade={fadeIn}>
        <Link to="/blog">Back to posts.</Link>
      </footer>
    </article>
  {/await}
</main>
