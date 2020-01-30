import { shallowMount } from "@vue/test-utils";
import TableDrilldown from "@/components/TableDrilldown.vue";

describe("TableDrilldown.vue", () => {
  const dummyData = {
    id: 1,
    location: "MN",
    code: "F",
    price: "19.99"
  };

  test("TableDrilldown.vue is a vue instance", () => {
    const wrapper = shallowMount(TableDrilldown);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("TableDrilldownv.ue should have no data in id when passed no props", () => {
    const wrapper = shallowMount(TableDrilldown);
    expect(wrapper.find(".data-id").exists()).toBe(false);
  });

  test("TableDrilldown.vue id should be 1 with dummyData", () => {
    const wrapper = shallowMount(TableDrilldown, {
      propsData: { data: dummyData }
    });

    expect(wrapper.find(".data-id").text()).toBe("1");
  });
});
