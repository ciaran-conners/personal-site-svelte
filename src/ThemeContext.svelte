<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'
  import { theme } from './theme.js'
  
  // set up Theme store, holding current theme object
  const Theme = writable(theme);

  setContext('theme', {
    // provide Theme store through context
    theme: Theme
  })

  
  onMount(() => {
    // set CSS vars on mount
    setRootColors(theme);
  });

  // sets CSS vars for easy use in components
  // ex: var(--theme-background)
  const setRootColors = theme => {
    for (let [prop, color] of Object.entries(theme)) {
      const varString = `--theme-${prop}`;
      document.documentElement.style.setProperty(varString, color);
    }

    // document.documentElement.style.setProperty("--theme-name", theme.name);
  };
</script>

<slot>
  <!-- content will go here -->
</slot>
