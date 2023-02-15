import Box from '@/components/Box'
import { toJSON } from '@/utils/test-utils'
import renderer from 'react-test-renderer'

describe('Box Test Suit', () => {
  test('Box Snapshot', () => {
    const component = renderer.create(<Box />)
    const tree = toJSON(component)
    expect(tree).toMatchSnapshot()
  })
})
