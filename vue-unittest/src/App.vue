<template>
  <div id="app">
    <Table :data="tabledata" />
  </div>
</template>

<script>
import Table from "@/components/Table.vue";

export default {
  name: "app",
  data() {
    return {
      tabledata: [
        { id: 1, location: "MN", code: "F", price: "19.99" },
        { id: 2, location: "MN", code: "J", price: "9.99" },
        { id: 3, location: "WI", code: "P", price: "15.99" },
        { id: 4, location: "WI", code: "E", price: "12.99" },
        { id: 5, location: "TX", code: "F", price: "18.99" }
      ]
    };
  },
  components: {
    Table
  }
};
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
