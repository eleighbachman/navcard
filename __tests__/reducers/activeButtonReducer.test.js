const activeButtonReducer = require('../../src/reducers/activeButtonReducer');
describe('active button reducer', () => {
  it('has a default state', () => {
    expect(activeButtonReducer(undefined)).toEqual({})
  })
})
