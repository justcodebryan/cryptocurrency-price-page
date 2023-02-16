import Box from '@/components/Box'
import { toJSON } from '@/utils/test-utils'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

describe('Box Test Suit', () => {
  test('Box Snapshot', () => {
    const component = renderer.create(<Box />)
    const tree = toJSON(component)
    expect(tree).toMatchSnapshot()
  })

  test('Should show children element', () => {
    const { container } = render(<Box>test</Box>)
    expect(container.querySelector('div')).toBeDefined()
    expect(screen.getByText('test')).toBeDefined()
  })
})
