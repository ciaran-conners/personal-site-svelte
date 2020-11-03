<script>
  import { Router, Link } from 'svelte-routing';

  const pages = [
    ['/', 'Home'],
    ['/work', 'Res-Oh-My!'],
    ['/blog', 'Blog']
  ];
</script>

<style>
  nav {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    position: sticky;
    top: 0;
  }

  span {
    color: var(--theme-fontColorSecondary);
    font-size: var(--theme-fontSize);
  }

  span:not(:last-of-type) {
    margin-right: var(--theme-spacingMedium);
  }
</style>

<Router>
  <nav>
    {#each pages as [route, pageName]}
      <span><Link to="{route}">{pageName}</Link></span>
    {/each}
  </nav>
</Router>