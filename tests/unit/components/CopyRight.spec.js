import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CopyRightComponent from '@/components/CopyRight.vue';

describe('CopyRight', function() {
  it('should render component', function() {
    const wrapper = shallowMount(CopyRightComponent);

    expect(wrapper.find('.info').text()).to.contain('Double-click to edit a todo');
  });
});
