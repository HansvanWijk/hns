<script context="module">
  import { gql, GraphQLClient } from 'graphql-request'
  console.log(process.env.VITE_GRAPHCMS_URL)
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
  import Heading from "$lib/type/Heading.svelte";
  import Text from "$lib/type/Text.svelte";
  import Container from "$lib/layout/Container.svelte";
  import BlogList from '$lib/components/BlogList.svelte';

  export let posts
</script>

  <svelte:head>
    <title>Hans | Rocking het internet sinds 1994</title>
    <meta name="description" content="This is an example of a meta description. This will often show up in search results.">
  </svelte:head>

  <Container>
    <Heading
      scale={7}
      content="Rocking het internet sinds 1994"
    />
  </Container>

  <BlogList posts={posts} />

  <Container type="content">
    <Heading content="Koptekst" scale={0} />
    <Heading content="Koptekst" scale={1} />
    <Heading content="Koptekst" scale={2} />
    <Heading content="Koptekst" scale={3} />
    <Heading content="Koptekst" scale={4} />
    <Heading content="Koptekst" scale={5} />
    <Heading content="Koptekst" scale={6} />

    <p class="dropcap">
      <Text content="Nunc egestas felis vitae neque fringilla sodales. Aenean blandit et orci accumsan commodo. Aenean aliquam turpis nec dictum bibendum. Nullam pulvinar lacus ut maximus finibus. Sed vel nisi consectetur, eleifend nulla a, pretium dolor. Ut scelerisque ultricies pellentesque. Quisque sit amet ligula magna. Donec sodales risus at neque vulputate">

      </Text>
    </p>  
    <Text content="Nunc egestas felis vitae neque fringilla sodales. Aenean blandit et orci accumsan commodo. Aenean aliquam turpis nec dictum bibendum. Nullam pulvinar lacus ut maximus finibus. Sed vel nisi consectetur, eleifend nulla a, pretium dolor. Ut scelerisque ultricies pellentesque. Quisque sit amet ligula magna. Donec sodales risus at neque vulputate">
    </Text>
</Container>

