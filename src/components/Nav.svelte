<script>
  import { Router, Link } from 'svelte-routing';
</script>

<Router>
  <nav>
    <span><Link to="/">Home</Link></span>
    <span><Link to="/work">Work</Link></span>
  </nav>
</Router>

<style>
  nav {
    display: flex;
    justify-content: flex-end;
  }

  span {
    color: var(--theme-fontColorSecondary);
    font-size: var(--theme-fontSize);
  }

  span:not(:last-of-type) {
    margin-right: var(--theme-spacingMedium);
  }
</style>