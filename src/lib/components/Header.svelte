<script>
  import Navbar from "$lib/navigation/Navbar.svelte";

  const items = [
    {
      text: "Artikelen",
      link: "/blog"
    }
  ];
</script>

<header class="header rowspacing">
  <a href="/">hns</a>
  <Navbar items={items} />
</header>

<style>
  .header {
	padding: 32px;
	border-bottom: 1px solid var(--borderColor);
  display: flex;
  justify-content: space-between;
}

.header > * {
  padding-right: 30px;
}

.header > *:last-child {
  padding-right: 0;
}
</style>