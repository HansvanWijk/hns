<script>
  import Heading from "$lib/type/Heading.svelte";
  import Text from "$lib/type/Text.svelte";

  export let title = "";
  export let text = "";
  export let link = ""

</script>

<Heading 
content={title}
link={link}
/>
<Text 
type="p" 
content={text}
/>
