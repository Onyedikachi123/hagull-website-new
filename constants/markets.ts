export const TOP_MARKETS = [
  { pair: 'BTC/USDT', price: '64,231.50', change: '-1.24%', isPositive: false, sparkline: 'btc-spark' },
  { pair: 'ETH/USDT', price: '3,450.12', change: '+0.85%', isPositive: true, sparkline: 'eth-spark' },
  { pair: 'SOL/USDT', price: '142.88', change: '+4.12%', isPositive: true, sparkline: 'sol-spark' },
]

export const P2P_MERCHANTS = [
  {
    id: 'merch-1',
    name: 'User_882',
    orders: '1,240 orders',
    completion: '98.2% completion',
    price: '1.02',
    currency: 'USD',
    rate: 'per 1 USDT',
    available: '52,000.00 USDT',
    limit: '$500.00 - $10,000.00',
    paymentMethods: ['Bank Transfer']
  },
  {
    id: 'merch-2',
    name: 'Trader_Alpha',
    orders: '4,500 orders',
    completion: '99.9% completion',
    price: '1.03',
    currency: 'USD',
    rate: 'per 1 USDT',
    available: '120,450.00 USDT',
    limit: '$1,000.00 - $50,000.00',
    paymentMethods: ['Zelle', 'PayPal']
  },
  {
    id: 'merch-3',
    name: 'Global_Merchant_9',
    orders: '822 orders',
    completion: '92.5% completion',
    price: '1.04',
    currency: 'USD',
    rate: 'per 1 USDT',
    available: '2,100.00 USDT',
    limit: '$50.00 - $2,000.00',
    paymentMethods: ['Wise']
  }
]

export const ACTIVE_TRADES = [
  {
    id: 'trade-1',
    type: 'Buy',
    asset: 'USDT',
    amount: '$1,200.00 USD',
    partner: 'Crypto Whale 🐋',
    status: 'Awaiting Payment',
    statusColor: 'text-orange-600 bg-orange-100'
  },
  {
    id: 'trade-2',
    type: 'Sell',
    asset: 'ETH',
    amount: '0.45 ETH',
    partner: 'NodeMaster_X',
    status: 'Escrow Released',
    statusColor: 'text-emerald-600 bg-emerald-100'
  }
]
