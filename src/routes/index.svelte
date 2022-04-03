<script>
  import Heading from "$lib/type/Heading.svelte";
  import Divider from "$lib/layout/Divider.svelte";
  import Text from "$lib/type/Text.svelte";
  import Input from "$lib/elements/Input.svelte";
  import Button from "$lib/elements/Button.svelte";
  import Container from "$lib/layout/Container.svelte";
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
    
    <Divider />
    <h1>Sparkle</h1>
    <Input />
    <Divider />
    <div class="stack-vertical">
      <Button scale={0} />
      <Button scale={1} />
      <Button scale={2} />
      <Button scale={3} />
      <Button scale={4} />
      <Button scale={5} />
      <Button scale={6} />
    </div>
    <Divider />

</Container>

