import { rest } from 'msw'

export const currencyHandlers = [
  rest.all('/api/v1/currency', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            asset_id: 'BTC',
            name: 'Bitcoin',
            type_is_crypto: 1,
            data_quote_start: '2014-02-24T17:43:05.0000000Z',
            data_quote_end: '2023-02-14T00:00:00.0000000Z',
            data_orderbook_start: '2014-02-24T17:43:05.0000000Z',
            data_orderbook_end: '2023-02-14T00:00:00.0000000Z',
            data_trade_start: '2010-07-17T23:09:17.0000000Z',
            data_trade_end: '2023-02-14T00:00:00.0000000Z',
            data_symbols_count: 135659,
            volume_1hrs_usd: 847129155228.48,
            volume_1day_usd: 103663697635012.44,
            volume_1mth_usd: 12163573049987498,
            price_usd: 22161.498825283077,
            id_icon: '4caf2b16-a017-4e26-a348-2cea69c34cba',
            data_start: '2010-07-17',
            data_end: '2023-02-14',
          },
        ],
      })
    )
  }),
]
