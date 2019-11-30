import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CopyRightComponent from '@/components/CopyRight.vue';

describe('CopyRight', function() {
  it('should contain creator and instruction', function() {
    const wrapper = shallowMount(CopyRightComponent);

    expect(wrapper.find('.info').text()).to.contain('Double-click to edit a todo');
  });
});
