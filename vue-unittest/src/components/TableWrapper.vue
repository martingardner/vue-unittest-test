<template>
  <div v-if="drilldown">
    <TableDrilldown :data="datarow" @drilldownClicked="drilldownStatus" />
  </div>
  <div v-else>
    <Table :data="tabledata" @rowClicked="onRowClicked" />
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import TableDrilldown from "@/components/TableDrilldown.vue";

export default {
  name: "TableWrapper",
  data() {
    return {
      tabledata: [
        { id: 1, location: "MN", code: "F", price: "19.99" },
        { id: 2, location: "MN", code: "J", price: "9.99" },
        { id: 3, location: "WI", code: "P", price: "15.99" },
        { id: 4, location: "WI", code: "E", price: "12.99" },
        { id: 5, location: "TX", code: "F", price: "18.99" }
      ],
      datarow: [],
      drilldown: false
    };
  },
  methods: {
    drilldownStatus() {
      this.drilldown = !this.drilldown;
    },
    onRowClicked(id) {
      const index = this.tabledata.findIndex(x => x.id === id);

      if (this.tabledata[index]) {
        this.datarow = this.tabledata[index];
        this.drilldownStatus();
      }
    }
  },
  components: {
    Table,
    TableDrilldown
  }
};
</script>