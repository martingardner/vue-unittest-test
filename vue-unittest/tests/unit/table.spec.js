import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Table from "@/components/Table.vue";

describe("Table.vue", () => {
  const dummyData = [
    { id: 1, location: "MN", code: "F", price: "19.99" },
    { id: 2, location: "MN", code: "J", price: "9.99" },
    { id: 3, location: "WI", code: "P", price: "15.99" },
    { id: 4, location: "WI", code: "E", price: "12.99" },
    { id: 5, location: "TX", code: "F", price: "18.99" }
  ];

  const nonArray = { id: 1, location: "MN", code: "F", price: "19.99" };

  test("Table.vue is a vue instance", () => {
    const wrapper = shallowMount(Table);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Table.vue table should not have tbody rows when given no data", () => {
    const wrapper = shallowMount(Table);
    expect(wrapper.find("table tbody tr td").exists()).toBe(false);
  });

  test("Table.vue table should have tbody rows when given data", () => {
    const wrapper = shallowMount(Table, {
      propsData: { data: dummyData }
    });
    expect(wrapper.find("table tbody tr td")).toBeTruthy();
  });

  test("Table.vue table should have 5 tbody rows with dummy data", () => {
    const wrapper = shallowMount(Table, {
      propsData: { data: dummyData }
    });

    expect(wrapper.findAll("tbody tr").length).toBe(5);
  });

  test("Table.vue table should have 0 tbody rows if given non-array", () => {
    const wrapper = shallowMount(Table, {
      propsData: { data: nonArray }
    });

    expect(wrapper.findAll("tbody tr").length).toBe(0);
  });
});
