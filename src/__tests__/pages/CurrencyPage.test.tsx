import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import CurrencyPage from '@/pages/CurrencyPage'
import { toJSON } from '@/utils/test-utils'

describe('Currency Page Test Suit', () => {
  test('Should show title', () => {
    render(<CurrencyPage />)
    expect(screen.getByRole('heading', { name: 'Cryptocurrency Realtime Price', level: 1 })).toBeDefined()
  })

  test('Should show list but do not have item', async () => {
    const component = renderer.create(<CurrencyPage />)
    const componentInstance = component.root
    expect(componentInstance.children).toHaveLength(1)
  })

  test('Should not show the content at the start', () => {
    expect(screen.getByText(/BTC/i)).toBeUndefined()
  })

  test('Currency Page Snapshot', () => {
    const component = renderer.create(<CurrencyPage />)
    const tree = toJSON(component)
    expect(tree).toMatchSnapshot()
  })
})
