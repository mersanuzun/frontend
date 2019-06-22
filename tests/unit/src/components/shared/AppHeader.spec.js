import { shallowMount, createLocalVue } from '@vue/test-utils';
import AppHeader from '@/components/shared/AppHeader.vue';
import AppBanner from '@/components/shared/AppBanner.vue';
import AppTopbar from '@/components/shared/AppTopbar.vue';

describe('AppBanner.vue', () => {
  const generateWrapper = (propsData = {}) => {
    return shallowMount(AppHeader, {
      propsData,
      stubs: [
        'router-link'
      ]
    });
  }
  describe('props', () => {
    it('should render AppBanner component if withBanner props is given as true', () => {
      const wrapper = generateWrapper({
        withBanner: true
      });

      expect(wrapper.find(AppBanner).exists()).toBe(true);
    });

    it('should not render AppBanner component if withBanner props is given as false', () => {
      const wrapper = generateWrapper({
        withBanner: false
      });

      expect(wrapper.find(AppBanner).exists()).toBe(false);
    });


    it('should not render AppBanner component if withBanner props is not given', () => {
      const wrapper = generateWrapper();

      expect(wrapper.find(AppBanner).exists()).toBe(false);
    });
  });

  describe('template', () => {
    it('should match the snapshot', () => {
      const wrapper = generateWrapper();

      expect(wrapper.vm.$el).toMatchSnapshot();
    });
  });
})
