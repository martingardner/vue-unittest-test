<template>
  <b-modal id="TestModal" no-close-on-backdrop>
    <b-button variant="outline-danger">test</b-button>
    <template slot="modal-footer" slot-scope="{ ok , cancel }">
      <b-button variant="outline-danger">Test footer</b-button>
      <b-button @click="cancel" variant="outline-primary">Cancel</b-button>
      <b-button @click="cancel" variant="primary">Ok</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "TestModal"
};
</script>