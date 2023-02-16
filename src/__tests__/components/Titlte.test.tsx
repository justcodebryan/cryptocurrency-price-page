import Title from '@/components/Title'
import { toJSON } from '@/utils/test-utils'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

describe('Title Test Suit', () => {
  test('Title Snapshot', () => {
    const component = renderer.create(<Title />)
    const tree = toJSON(component)
    expect(tree).toMatchSnapshot()
  })

  test('Should show level 1 title', () => {
    render(<Title level={1} />)
    expect(screen.getByRole('heading', { name: '', level: 1 })).toBeDefined()
  })

  test('Should show level 2 title', () => {
    render(<Title level={2} />)
    expect(screen.getByRole('heading', { name: '', level: 2 })).toBeDefined()
  })

  test('Should show level 3 title', () => {
    render(<Title level={3} />)
    expect(screen.getByRole('heading', { name: '', level: 3 })).toBeDefined()
  })

  test('Should show level 4 title', () => {
    render(<Title level={4} />)
    expect(screen.getByRole('heading', { name: '', level: 4 })).toBeDefined()
  })

  test('Should show default title', () => {
    const { container } = render(<Title />)
    expect(container.querySelector('div')).toBeDefined()
  })

  test('Should show children element', () => {
    const { container } = render(<Title>test</Title>)
    expect(container.querySelector('div')).toBeDefined()
    expect(screen.getByText('test')).toBeDefined()
  })
})
