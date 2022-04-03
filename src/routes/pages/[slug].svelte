<script context="module">
 
  import { gql, GraphQLClient } from 'graphql-request'
  import { variables } from '../../lib/variabless
  export async function load(context) {
    const graphcms = new GraphQLClient(
      variables.VITE_GRAPHCMS_URL,
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