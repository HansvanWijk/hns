
<script>
    import Excerpt from "$lib/content/Excerpt.svelte"
    import Section from '$lib/layout/Section.svelte'
    import Split from "$lib/layout/Split.svelte"
    export let posts
</script>



{#each posts as post}
  <Section>
    <Split>
      <div slot="split-1">
        <img alt="" src={post.coverImage.url} height={post.coverImage.height} width={post.coverImage.width} />
      </div>
      <div slot="split-2">
        <Excerpt 
          link="/post/{post.slug}"
          title={post.title}
          text={post.excerpt}
        />
      </div>
    </Split>
  </Section>
{/each}