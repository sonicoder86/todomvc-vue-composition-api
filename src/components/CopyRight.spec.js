import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CopyRightComponent from './CopyRight.vue';

describe('CopyRight', function() {
  it('should contain creator and instruction', function() {
    const wrapper = shallowMount(CopyRightComponent);

    expect(wrapper.find('.info').text()).to.eql('Double-click to edit a todoCreated by blacksonicPart of TodoMVC');
  });
});
