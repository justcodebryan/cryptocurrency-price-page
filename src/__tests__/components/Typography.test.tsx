import Typography from '@/components/Typography'
import { toJSON } from '@/utils/test-utils'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'

describe('Typography Test Suit', () => {
  test('Typography Snapshot', () => {
    const component = renderer.create(<Typography />)
    const tree = toJSON(component)
    expect(tree).toMatchSnapshot()
  })

  test('Should show children element', () => {
    const { container } = render(<Typography>test</Typography>)
    expect(container.querySelector('div')).toBeDefined()
    expect(screen.getByText('test')).toBeDefined()
  })
})
