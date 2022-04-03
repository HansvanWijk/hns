<script context="module">
  import { variables } from '$lib/variables';
  import { gql, GraphQLClient } from 'graphql-request'

  export async function load() {
    const graphcms = new GraphQLClient(
      variables.VITE_GRAPHCMS_URL,
      {
        headers: {},
      }
    )

    const query = gql`
      query Posts {
        posts() {
          id
          title
          slug
          date
          excerpt
          coverImage {
            url
            width
            height
          }
        }
      }
    `

    const { posts } = await graphcms.request(query)

    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  import BlogList from '$lib/components/BlogList.svelte';
  import Heading from "$lib/type/Heading.svelte";
  import Section from "$lib/layout/Section.svelte";

  export let posts
</script>


<svelte:head>
  <title>SvelteKit starter blog</title>
</svelte:head>



  <Section>
    <Heading  scale={7} 
    content="This is the most <br />awesome blog ever" />
  </Section>

  <BlogList posts={posts} />


