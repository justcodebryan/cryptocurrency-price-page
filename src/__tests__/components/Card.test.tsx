import Card from '@/components/Card'
import { toJSON } from '@/utils/test-utils'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'

describe('Card Test Suit', () => {
  test('Card Snapshot', () => {
    const component = renderer.create(<Card />)
    const tree = toJSON(component)
    expect(tree).toMatchSnapshot()
  })

  test('Should show children element', () => {
    const { container } = render(<Card>test</Card>)
    expect(container.querySelector('div')).toBeDefined()
    expect(screen.getByText('test')).toBeDefined()
  })
})
