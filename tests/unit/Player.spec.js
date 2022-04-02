import { mount } from '@vue/test-utils'
import Player from '../../src/components/Player.vue'

describe('Player', () => {
  const wrapper = mount(Player)
  it('rendering', () => {
    expect(wrapper.html()).toContain('<div class="video">')
  })
})
