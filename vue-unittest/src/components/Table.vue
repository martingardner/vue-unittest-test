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
        <tr v-for="row in this.tabledata" :key="row.id">
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
      tabledata: []
    };
  },
  props: ["data"],
  methods: {
    validateArray() {
      if (Array.isArray(this.data)) {
        this.tabledata = this.data;
      }
    }
  },
  created() {
    this.validateArray();
  }
};
</script>

