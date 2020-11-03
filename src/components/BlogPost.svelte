<script>
  import { fade, fly } from 'svelte/transition';
  import marked from 'marked';

  import Link from 'svelte-routing/src/Link.svelte';
  import { posts } from '../lib/posts';

  const fadeIn = {
    duration: 1200
  };

  let id;

  const getPost = (id, posts) => (
    posts.find((post) => {
      return post.id === id;
    })
  );

  const currentPost = getPost(id, posts);

  const currentPostHtml = marked(currentPost.body);

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
  <article>
    <header>
      <h1
        in:fly={{ x: -500, duration: fadeIn.duration + 200 }}
      >{currentPost.title}</h1>
      <time in:fade={fadeIn}>{currentPost.timestamp}</time>
    </header>
    <section in:fade={fadeIn}>
      {@html currentPostHtml}
    </section>
    <footer in:fade={fadeIn}>
      <Link to="/blog">Back to posts.</Link>
    </footer>
  </article>
</main>
