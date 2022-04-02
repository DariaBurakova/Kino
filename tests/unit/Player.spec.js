import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import Player from '../../src/components/Player.vue'

describe('Player', () => {
  const spy = sinon.stub()
  const wrapper = mount(Player)
  it('rendering', () => {
    expect(wrapper.html()).toContain('<div class="video">')
  })
  it('logging', () => {
    const logSpy = jest.spyOn(console, 'log')
    function A () {
      console.log('')
    }
    A()
    expect(logSpy).toHaveBeenCalled()
  })
  it('destroying', () => {
    mount(Player, {
      destroyed () {
        spy()
      }
    }).destroy()
    expect(spy.calledOnce).toBe(true)
  })
})
