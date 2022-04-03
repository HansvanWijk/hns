<script>
  export let items = [];
</script>

<nav class="navbar stack stack-horizontal">
  {#each items as item }
    <a href={item.link}>{item.text}</a>
  {/each}
</nav>