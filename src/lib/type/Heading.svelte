<script>
	export let scale = 1;
	export let content = '';
	export let truncate = '';
  export let link = "";
</script>

{#if link !== ""} 
  <a class={`heading scale-${scale} ${truncate}`} href={link}>
    {@html ''}{content}{@html ''}
  </a>  
{:else}
<span class={`heading scale-${scale} ${truncate}`}>
  {@html ''}{content}{@html ''}
</span>
{/if}

<style>
	.heading {
		display: block;
	}
</style>
