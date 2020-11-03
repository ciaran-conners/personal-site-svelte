<script>
  import Link from 'svelte-routing/src/Link.svelte';
  import { posts } from '../lib/posts';

  let id;

  const getPost = (id, posts) => (
    posts.find((post) => {
      return post.id === id;
    })
  );

  const currentPost = getPost(id, posts);

  export { id };
</script>

<style>
  main {
    font-weight: var(--theme-fontWeight);
  }
  h1 {
    font-size: var(--theme-fontSizeHeader);
    font-weight: inherit;
  }
  p {
    font-size: var(--theme-fontSize)
  }
</style>

<main>
  <h1>
    {currentPost.title}
  </h1>

  {#each currentPost.paragraphs as paragraph}
    <p>{paragraph}</p>
  {/each}

  <Link to="/blog">Back to posts.</Link>
</main>
