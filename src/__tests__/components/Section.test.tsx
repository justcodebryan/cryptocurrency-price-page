import Section from '@/components/Section'
import { toJSON } from '@/utils/test-utils'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'

describe('Section Test Suit', () => {
  test('Section Snapshot', () => {
    const component = renderer.create(<Section />)
    const tree = toJSON(component)
    expect(tree).toMatchSnapshot()
  })

  test('Should show children element', () => {
    const { container } = render(<Section>test</Section>)
    expect(container.querySelector('div')).toBeDefined()
    expect(screen.getByText('test')).toBeDefined()
  })
})
