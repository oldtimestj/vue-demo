import Vue from 'vue';
import { mount, shallowMount } from '@vue/test-utils';
import ElementUI from 'element-ui';
import PlSelect from '@/components/PlSelect.vue';

Vue.use(ElementUI);

const multipleProps = {
  hasSelectAll: true,
  multiple: true,
  options: [{ value: 'a', label: 'a' }, { value: 'b', label: 'b' }],
  value: [],
};

describe('PlSelect.vue', () => {
  it('Has "全选" checkbox when props.hasSelectAll is true', async () => {
    const wrapper = shallowMount(PlSelect, {
      propsData: multipleProps,
    });
    expect(wrapper.find({ name: 'el-checkbox' }).text()).toBe('全选');
  });
  it('click select all data', async () => {
    const wrapper = mount(PlSelect, {
      propsData: multipleProps,
      listeners: { input() {} },
    });
    wrapper.trigger('click');
    await wrapper.vm.$nextTick();
    wrapper.find('.el-select-dropdown__item').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().input[0]).toEqual([multipleProps.options.map(item => item.value)]);
  });
  it('has been all selected', async () => {
    const wrapper = mount(PlSelect, {
      propsData: multipleProps,
    });
    wrapper.setProps({ value: multipleProps.options.map(item => item.value) });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    expect(wrapper.find({ name: 'el-select' }).find('.el-input__inner').element.value).toBe('全部');
  });
});
