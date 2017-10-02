<template>
  <mdc-toolbar>
    <mdc-toolbar-row>
      <mdc-toolbar-section align-start>
        <mdc-toolbar-icon icon="menu"></mdc-toolbar-icon>
        <mdc-toolbar-title>{{title}}</mdc-toolbar-title>
      </mdc-toolbar-section>
      <mdc-toolbar-section align-end>
        <mdc-toolbar-icon event="show-help" icon="help"></mdc-toolbar-icon>
      </mdc-toolbar-section>
    </mdc-toolbar-row>
  </mdc-toolbar>
</template>

<script>

export default {
  name: 'header',
  // functional: true,
  props: {
    title: String
  }
}

</script>
