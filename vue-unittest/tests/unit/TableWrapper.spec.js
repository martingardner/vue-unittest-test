import { mount, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import TableWrapper from "@/components/TableWrapper.vue";

describe("TableWrapper.vue unit tests", () => {
  test("TableWrapper.vue is a vue instance", () => {
    const wrapper = shallowMount(TableWrapper);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("TableWrapper.vue if drilldown is false, table component should render", () => {
    const wrapper = mount(TableWrapper);
    wrapper.setData({ drilldown: false });

    expect(wrapper.find(".table").exists()).toBe(true);
    expect(wrapper.find(".table-drilldown").exists()).toBe(false);
  });

  test("Tablewrapper.vue if drilldown is true, tabledrilldown should render", () => {
    const wrapper = mount(TableWrapper);
    wrapper.setData({ drilldown: true });

    expect(wrapper.find(".table").exists()).toBe(false);
    expect(wrapper.find(".table-drilldown").exists()).toBe(true);
  });
});

describe("Data table flows", () => {
  test("clicking a Table.vue row, should go to drilldown", async () => {
    const wrapper = mount(TableWrapper);

    //find finds the first instance, so the first row
    wrapper.find(".table tbody tr").trigger("click");

    await Vue.nextTick();
    //expect to find tabledrilldown
    expect(wrapper.find(".table-drilldown").exists()).toBe(true);
    expect(wrapper.find(".data-id").text()).toBe("1");
  });

  test("clicking back button from table drilldown shows table.vue", async () => {
    const wrapper = mount(TableWrapper);
    wrapper.setData({ drilldown: true });

    wrapper.find("button").trigger("click");

    await Vue.nextTick();
    expect(wrapper.find(".table").exists()).toBe(true);
  });
});
