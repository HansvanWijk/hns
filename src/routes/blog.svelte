<script context="module">
  import { gql, GraphQLClient } from 'graphql-request'

  export async function load() {
    const graphcms = new GraphQLClient(
      'https://api-eu-west-2.graphcms.com/v2/cl1jn5n3w6n6201xi8v0z3ofj/master',
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
    <title>Blog | Hans</title>
    <meta name="description" content="This is an example of a meta description. This will often show up in search results.">
  </svelte:head>




  <Section>
    <Heading  scale={7} 
    content="This is the most <br />awesome blog ever" />
  </Section>

  <BlogList posts={posts} />


