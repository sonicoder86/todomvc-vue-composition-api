import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CopyRightComponent from '@/components/CopyRight.vue';

describe('CopyRight', () => {
  it('should render component', () => {
    const wrapper = shallowMount(CopyRightComponent);

    expect(wrapper.find('.info').text()).to.contain('Double-click to edit a todo');
  });
});
