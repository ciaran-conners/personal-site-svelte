<script>
  import { fade, fly } from 'svelte/transition';
  import marked from 'marked';

  import Link from 'svelte-routing/src/Link.svelte';

  const fadeIn = {
    duration: 1200
  };

  let id;

  const getCurrentPost = async (id) => {
    const query = `filterByFormula=({id} = '${id}')`;

    const res = await fetch(`https://api.airtable.com/v0/app1aXgt9akv9tvuo/Posts?${query}`, {
      headers: {
        'Authorization': 'Bearer keyMc7RGyflv5aZKP'
      }
    });

    const data = await res.json();

    const {
      records: [
        {
          fields:
            {
              date,
              title,
              body
            }
        },
      ]
    } = data;
    
    return {
      date,
      title,
      postHtml: marked(body)
    };
  };

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
