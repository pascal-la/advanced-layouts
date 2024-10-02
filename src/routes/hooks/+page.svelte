<script lang="ts">
  import { page } from "$app/stores";
</script>

{#if $page.data.user}
  Welcome {$page.data.user}
{/if}

Welcome to `{$page.route.id}`

<form method="POST">
  <input type="text" name="user" />
  <input type="password" name="password" />
  <button type="submit"> Login </button>
</form>
