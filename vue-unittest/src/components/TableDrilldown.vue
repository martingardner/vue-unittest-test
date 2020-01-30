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
      <button @click="backButton">back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableDrilldown",
  data() {
    return {};
  },
  props: ["data"],
  methods: {
    backButton() {
      this.$emit("drilldownClicked");
    }
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