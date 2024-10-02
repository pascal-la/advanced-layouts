<script lang="ts">
  import { DevTools } from "$lib/devtools";

  import "@picocss/pico";
  import "../app.css";
</script>

<DevTools />

<slot />

<svelte:head>
  <link rel="icon" href="https://fav.farm/🪶" />
  <title>Plume</title>
</svelte:head>
