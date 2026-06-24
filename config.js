module.exports = {
  TOKEN: '',
  GUILD_ID: '1495786428490059866',
  OWNER_IDS: ['1496562334095642716'],

  DEAL_CATEGORY_NAME: 'DEALS',
  TRANSCRIPT_CHANNEL_NAME: 'transcripts',
  LOG_CHANNEL_NAME: 'deal-logs',
  STATS_CATEGORY_NAME: 'STATISTICS',

  FEE_PERCENT: 0,

  CRYPTOCURRENCIES: {
    LTC: {
      name: 'Litecoin',
      symbol: 'LTC',
      emoji: '<:ltc:1> 🟦',
      color: 0x345D9D,
      enabled: true,
      network: 'litecoin',
      explorerTx: 'https://blockchair.com/litecoin/transaction/',
      explorerAddr: 'https://blockchair.com/litecoin/address/',
    },
    SOL: {
      name: 'Solana',
      symbol: 'SOL',
      emoji: '◎',
      color: 0x9945FF,
      enabled: true,
      network: 'solana',
      explorerTx: 'https://solscan.io/tx/',
      explorerAddr: 'https://solscan.io/account/',
    },
    USDT: {
      name: 'Tether (TRC20)',
      symbol: 'USDT',
      emoji: '💚',
      color: 0x26A17B,
      enabled: true,
      network: 'tron',
      explorerTx: 'https://tronscan.org/#/transaction/',
      explorerAddr: 'https://tronscan.org/#/address/',
    },
  },

  COLORS: {
    PRIMARY: 0x5865F2,
    SUCCESS: 0x57F287,
    WARNING: 0xFEE75C,
    DANGER: 0xED4245,
    INFO: 0x00B0F4,
    DARK: 0x2B2D31,
    GOLD: 0xFFD700,
  },

  DEAL_TIMEOUT_HOURS: 48,
  PAYMENT_POLL_INTERVAL_MS: 30000,
  PRICE_ALERT_POLL_INTERVAL_MS: 60000,
};
