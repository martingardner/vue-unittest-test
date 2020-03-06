<template>
  <div class="table-drilldown">
    <h4>TableDrilldown</h4>
    <div>
      id:
      <span class="data-id" v-if="data && data.id">{{data.id}}</span>
    </div>
    <div>
      location:
      <span class="data-location" v-if="data && data.location">{{ data.location }}</span>
    </div>
    <div>
      code:
      <span class="data-code" v-if="data && data.code">{{ data.code }}</span>
    </div>
    <div>
      price:
      <span class="data-price" v-if="data && data.price">{{ data.price }}</span>
    </div>
    <div>
      <b-button variant="outline-primary" @click="backButton">back</b-button>
    </div>
    <div>
      <b-button variant="primary" @click="modalOpen">modal</b-button>
    </div>

    <TestModal></TestModal>
  </div>
</template>

<script>
import TestModal from "@/components/TestModal.vue";

export default {
  name: "TableDrilldown",
  data() {
    return {};
  },
  props: ["data"],
  methods: {
    backButton() {
      this.$emit("drilldownClicked");
    },
    modalOpen() {
      this.$bvModal.show("TestModal");
    }
  },
  components: {
    TestModal
  }
};
</script>

<!--
sample props.data
{
    id: 1,
    location: 'MN',
    code: 'F',
    price: '19.99'
}
-->