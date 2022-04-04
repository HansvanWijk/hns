<script context="module">
  import { gql, GraphQLClient } from 'graphql-request'

  export async function load(context) {
    const graphcms = new GraphQLClient(
      'https://api-eu-west-2.graphcms.com/v2/cl1jn5n3w6n6201xi8v0z3ofj/master',
      {
        headers: {},
      }
    )

    const query = gql`
      query PostPageQuery($slug: String!) {
        post(where: { slug: $slug }) {
          title
          date
          content {
            html
          }
          tags
          author {
            id
            name
          }
        }
      }
    `

    const variables = {
      slug: context.params.slug,
    }

    const { post } = await graphcms.request(query, variables)

    return {
      props: {
        post,
      },
    }
  }
</script>

<script>
  import Container from '$lib/layout/Container.svelte'
  import Heading from '$lib/type/Heading.svelte'
  import MetaData from '$lib/content/MetaData.svelte'
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Container>
  <Heading scale={7} content={post.title} />
  <MetaData author={post.author.name} date={post.date} tags={post.tags} />
</Container>

<Container type="content">
  <div>{@html post.content.html}</div>
</Container>