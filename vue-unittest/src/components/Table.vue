<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Location</th>
          <th>Code</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="rowClick(row.id)" v-for="row in this.tabledata" :key="row.id">
          <td>{{row.id}}</td>
          <td>{{row.location}}</td>
          <td>{{row.code}}</td>
          <td>{{row.price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      tabledata: [],
      drilldown: false
    };
  },
  props: ["data"],
  methods: {
    validateArray() {
      if (Array.isArray(this.data)) {
        this.tabledata = this.data;
      }
    },
    rowClick(id) {
      console.log("id", id);
      this.$emit("rowClicked", id);
    }
  },
  created() {
    this.validateArray();
  }
};
</script>

