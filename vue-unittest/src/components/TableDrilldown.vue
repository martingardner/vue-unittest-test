<template>
  <div>
    <h4>TableDrilldown</h4>
    <div>id: {{data.id}}</div>
    <div>location: {{ data.location }}</div>
    <div>code: {{ data.code }}</div>
    <div>price: {{ data.price }}</div>
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