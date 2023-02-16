import Loading from '@/components/Loading'
import { render, screen } from '@testing-library/react'
import { toJSON } from '@/utils/test-utils'
import renderer from 'react-test-renderer'

describe('Loading Test Suit', () => {
  test('Loading Snapshot', () => {
    const component = renderer.create(<Loading />)
    const tree = toJSON(component)
    expect(tree).toMatchSnapshot()
  })

  test('Should show the content at the start', () => {
    render(<Loading loading={true} />)
    expect(screen.getByText(/Loading.../i)).toBeDefined()
  })
})
