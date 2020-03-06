<template>
  <div id="app">
    <TableWrapper />
  </div>
</template>

<script>
import Vue from "vue";
import TableWrapper from "@/components/TableWrapper.vue";
import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    TableWrapper
  }
};
</script>