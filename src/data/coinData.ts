export const coinData= [
  {
      "status": 1,
      "data": [
          {
              "btc": {
                  "coinId": 0,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/btc.png",
                  "coinName": "Bitcoin",
                  "floatPlaces": 8,
                  "tradeFloatPlaces": 8,
                  "minTradeAmt": 0.00001,
                  "minMTradeAmt": 0.02,
                  "usdtDecimals": 4,
                  "withdrawalFee": 0.0005,
                  "minimumWithdrawal": 0.001,
                  "minDeposit": 0.0001,
                  "confirmations": 2,
                  "hashLink": "https://www.blockchain.com/en/btc/tx/",
                  "address": {
                      "startingLetter": [
                          "1",
                          "3",
                          "bc"
                      ],
                      "hasChanged": 1
                  },
                  "hlne": 1,
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ],
                  "tradeNotes": [
                      {
                          "type": 0,
                          "text": "Offer: Buy your Bitcoin T-shirt here",
                          "link": "https://bit.ly/3MYpvP1",
                          "linkText": "Buy Now"
                      },
                      {
                          "type": 0,
                          "text": "Guess BTC's price & win guaranteed rewards upto 4000x",
                          "link": "/predict-and-win/",
                          "linkText": "Participate Now"
                      }
                  ]
              },
              "xrp": {
                  "coinId": 1,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/xrp.png",
                  "coinName": "Ripple",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.25,
                  "minMTradeAmt": 300,
                  "usdtDecimals": 4,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 0.11,
                  "taggedAddress": 1,
                  "defaultTag": 1,
                  "minDeposit": 0.01,
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ],
                  "hashLink": "https://xrpcharts.ripple.com/#/transactions/",
                  "withdrawalNotes": [
                      "Transfer Minimum of **0.11 XRP** for transfers to an exchange (or) active wallet",
                      "Transfer Minimum of **20.1 XRP** for transfers to an empty wallet"
                  ],
                  "address": {
                      "startingLetter": [
                          "r"
                      ],
                      "hasChanged": 1
                  }
              },
              "neo": {
                  "coinId": 2,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/neo.png",
                  "coinName": "Neo",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.005,
                  "minMTradeAmt": 2,
                  "usdtDecimals": 4,
                  "withdrawalFee": 0,
                  "minimumWithdrawal": 1,
                  "minDeposit": 1,
                  "withdNwOn": [
                      7
                  ],
                  "depoNwOn": [
                      7
                  ],
                  "networks": [
                      7
                  ],
                  "hashLink": "https://neoscan.io/transaction/",
                  "coinType": "nep5",
                  "address": {
                      "startingLetter": [
                          "A"
                      ],
                      "hasChanged": 1
                  },
                  "nep5": {
                      "withdrawalFee": 0,
                      "minimumWithdrawal": 1
                  },
                  "tradeNotes": [
                      {
                          "type": 0,
                          "text": "Learn more about GAS distribution",
                          "link": "https://medium.com/bitbns/how-gas-is-distributed-to-neo-holders-on-bitbns-d3102918b1f5",
                          "linkText": "Read Here"
                      }
                  ]
              },
              "gas": {
                  "coinId": 3,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/gas.png",
                  "coinName": "Gas",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.03,
                  "minMTradeAmt": 8,
                  "withdrawalFee": 0,
                  "minimumWithdrawal": 0.01,
                  "minDeposit": 0.001,
                  "hashLink": "https://neoscan.io/transaction/",
                  "coinType": "nep5",
                  "address": {
                      "startingLetter": [
                          "A"
                      ],
                      "hasChanged": 1
                  },
                  "withdNwOn": [
                      7
                  ],
                  "depoNwOn": [
                      7
                  ],
                  "networks": [
                      7
                  ],
                  "nep5": {
                      "withdrawalFee": 0,
                      "minimumWithdrawal": 0.01
                  }
              },
              "xlm": {
                  "coinId": 4,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/xlm.png",
                  "coinName": "Stellar",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "usdtDecimals": 4,
                  "minTradeAmt": 0.5,
                  "minMTradeAmt": 1000,
                  "withdrawalFee": 0.01,
                  "minimumWithdrawal": 2,
                  "minDeposit": 1,
                  "taggedAddress": 2,
                  "defaultTag": "",
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ],
                  "hashLink": "https://stellarchain.io/tx/",
                  "address": {
                      "startingLetter": [
                          "G"
                      ],
                      "hasChanged": 1
                  },
                  "shortTag": 1
              },
              "xem": {
                  "coinId": 5,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/xem.png",
                  "coinName": "NEM",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.5,
                  "minMTradeAmt": 300,
                  "withdrawalFee": 1,
                  "minimumWithdrawal": 5,
                  "minDeposit": 1,
                  "taggedAddress": 3,
                  "defaultTag": 1,
                  "hashLink": "http://explorer.nemtool.com/#/s_tx?hash=",
                  "withdrawalNotes": [
                      "Transfer Minimum of **0.11 XEM** for transfers to an exchange (or) active wallet",
                      "Transfer Minimum of **20.1 XEM** for transfers to an empty wallet"
                  ],
                  "address": {
                      "startingLetter": [
                          "N"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "eth": {
                  "coinId": 6,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/eth.png",
                  "coinName": "Ethereum",
                  "floatPlaces": 8,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "usdtDecimals": 4,
                  "minMTradeAmt": 0.5,
                  "withdrawalFee": 0.01,
                  "minimumWithdrawal": 0.015,
                  "minDeposit": 0.001,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "networks": [
                      0,
                      3
                  ],
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "hlne": 1,
                  "tradeNotes": [
                      {
                          "type": 0,
                          "text": "Guess ETH's price & win guaranteed rewards upto 4000x",
                          "link": "/predict-and-win/",
                          "linkText": "Participate Now"
                      }
                  ],
                  "withdNwOn": [
                      0,
                      3
                  ],
                  "depoNwOn": [
                      0,
                      3
                  ]
              },
              "inr": {
                  "coinId": 7,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/inr.png",
                  "coinName": "INR",
                  "withdrawalFee": 0,
                  "minimumWithdrawal": 100,
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0,
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "phb": {
                  "coinId": 8,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/phx.png",
                  "coinName": "Phoenix",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 5,
                  "minMTradeAmt": 2000,
                  "inrDecimals": 3,
                  "tradeSocket": "phx",
                  "withdrawalFee": 50,
                  "minimumWithdrawal": 55,
                  "hashLink": "https://explorer.binance.org/tx/",
                  "coinType": "bep2",
                  "bep2": {
                      "withdrawalFee": 50,
                      "minimumWithdrawal": 55
                  },
                  "networks": [
                      5
                  ],
                  "minDeposit": 25,
                  "taggedAddress": 2,
                  "defaultTag": "",
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "address": {
                      "startingLetter": [
                          "bnb"
                      ]
                  },
                  "withdNwOn": [
                      5
                  ],
                  "depoNwOn": [
                      5
                  ]
              },
              "dbc": {
                  "coinId": 9,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/dbc.png",
                  "coinName": "DeepBrain Chain",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 10,
                  "inrDecimals": 3,
                  "withdrawalFee": 1,
                  "minimumWithdrawal": 10,
                  "minDeposit": 10,
                  "confirmations": 4,
                  "hashLink": "https://neoscan.io/transaction/",
                  "coinType": "nep5",
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "address": {
                      "startingLetter": [
                          "A"
                      ],
                      "hasChanged": 1
                  },
                  "withdNwOn": [
                      7
                  ],
                  "depoNwOn": [
                      7
                  ],
                  "networks": [
                      7
                  ],
                  "nep5": {
                      "withdrawalFee": 1,
                      "minimumWithdrawal": 10
                  }
              },
              "ltc": {
                  "coinId": 10,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ltc.png",
                  "coinName": "Litecoin",
                  "floatPlaces": 4,
                  "usdtDecimals": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.001,
                  "minMTradeAmt": 1,
                  "withdrawalFee": 0.01,
                  "minimumWithdrawal": 0.02,
                  "minDeposit": 0.01,
                  "confirmations": 4,
                  "hashLink": "https://live.blockcypher.com/ltc/tx/",
                  "address": {
                      "startingLetter": [
                          "L",
                          "3",
                          "M",
                          "ltc"
                      ],
                      "hasChanged": 1
                  },
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ]
              },
              "xmr": {
                  "coinId": 11,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/xmr.png",
                  "coinName": "Monero",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.001,
                  "minDeposit": 0.01,
                  "withdrawalFee": 0.02,
                  "minimumWithdrawal": 0.03,
                  "taggedAddress": 4,
                  "defaultTag": 0,
                  "usdtDecimals": 4,
                  "hashLink": "https://moneroblocks.info/tx/",
                  "address": {
                      "startingLetter": [
                          "4",
                          "8"
                      ],
                      "length": 95,
                      "hasChanged": 1
                  },
                  "confirmations": 10,
                  "optionalDepositTag": 1,
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ]
              },
              "dash": {
                  "coinId": 12,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/dash.png",
                  "coinName": "Dash",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.001,
                  "withdrawalFee": 0.02,
                  "minDeposit": 0.01,
                  "minimumWithdrawal": 0.03,
                  "confirmations": 8,
                  "usdtDecimals": 4,
                  "hashLink": "https://explorer.dash.org/block/",
                  "address": {
                      "startingLetter": [
                          "X"
                      ],
                      "length": 34,
                      "hasChanged": 1
                  },
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ]
              },
              "doge": {
                  "coinId": 13,
                  "inrDecimals": 3,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/doge.png",
                  "coinName": "Doge",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 1,
                  "withdrawalFee": 2,
                  "minimumWithdrawal": 3,
                  "minDeposit": 5,
                  "confirmations": 8,
                  "usdtDecimals": 7,
                  "hashLink": "https://dogechain.info/tx/",
                  "additionalNotes": [
                      "We would only accept integer deposits. Decimal part of deposits would not be credited"
                  ],
                  "address": {
                      "hasChanged": 1
                  },
                  "hlne": 1,
                  "tradeNotes": [
                      {
                          "type": 0,
                          "text": "Guess DOGE's price & win guaranteed rewards upto 4000x",
                          "link": "/predict-and-win/",
                          "linkText": "Participate Now"
                      }
                  ],
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ]
              },
              "bch": {
                  "coinId": 14,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/bch.png",
                  "coinName": "Bitcoin Cash",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0005,
                  "usdtDecimals": 4,
                  "tradeSocket": "bch",
                  "withdrawalFee": 0.001,
                  "minimumWithdrawal": 0.03,
                  "extraAddresses": [
                      "Legacy"
                  ],
                  "minDeposit": 0.01,
                  "confirmations": 5,
                  "hashLink": "https://blockchair.com/bitcoin-cash/transaction/",
                  "depositNotes": [
                      "Please make sure that you deposit only BCH to this address.",
                      "Depositing BCHA is not allowed and will not be recovered"
                  ],
                  "address": {
                      "hasChanged": 1
                  },
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ]
              },
              "bchsv": {
                  "coinId": 66,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/bchsv.png",
                  "coinName": "Bitcoin Cash SV",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.001,
                  "withdrawalFee": 0.001,
                  "minimumWithdrawal": 0.03,
                  "extraAddresses": [
                      "Legacy"
                  ],
                  "minDeposit": 0.01,
                  "confirmations": 20,
                  "hashLink": "https://bchsvexplorer.com/tx/",
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "sia": {
                  "coinId": 15,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/sc.png",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 5,
                  "inrDecimals": 3,
                  "minMTradeAmt": 10000,
                  "coinName": "Sia",
                  "withdrawalFee": 2,
                  "minimumWithdrawal": 5,
                  "minDeposit": 50,
                  "confirmations": 8,
                  "hashLink": "https://explorer.siahub.info/hash/",
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ],
                  "address": {
                      "hasChanged": 1
                  }
              },
              "trx": {
                  "coinId": 16,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/trx.png",
                  "coinName": "Tron",
                  "usdtDecimals": 7,
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 1,
                  "minMTradeAmt": 3000,
                  "withdrawalFee": 5,
                  "coinType": "trc20",
                  "minimumWithdrawal": 80,
                  "minDeposit": 60,
                  "confirmations": 30,
                  "hashLink": "https://tronscan.org/#/transaction/",
                  "address": {
                      "startingLetter": [
                          "T"
                      ]
                  },
                  "withdNwOn": [
                      2
                  ],
                  "networks": [
                      2
                  ],
                  "trc20": {
                      "withdrawalFee": 5,
                      "minimumWithdrawal": 80,
                      "address": {
                          "startingLetter": [
                              "T"
                          ]
                      },
                      "hashLink": "https://tronscan.org/#/transaction/"
                  },
                  "depoNwOn": [
                      2
                  ],
                  "depositNotes": [
                      "We accept TRX deposits only in Whole numbers.",
                      "In case your TRX deposit consists of fractions, only the integer part will be considered as deposit"
                  ]
              },
              "etn": {
                  "coinId": 17,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/etn.png",
                  "coinName": "Electroneum",
                  "floatPlaces": 1,
                  "tradeFloatPlaces": 1,
                  "minTradeAmt": 20,
                  "minMTradeAmt": 5000,
                  "inrDecimals": 3,
                  "withdrawalFee": 5,
                  "minimumWithdrawal": 6,
                  "minDeposit": 5,
                  "confirmations": 100,
                  "taggedAddress": 4,
                  "defaultTag": 1,
                  "hashLink": "https://blockexplorer.electroneum.com/tx/",
                  "address": {
                      "startingLetter": [
                          "etn"
                      ],
                      "hasChanged": 1
                  },
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ]
              },
              "ont": {
                  "coinId": 18,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ont.png",
                  "coinName": "Ontology",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "withdrawalFee": 1,
                  "minimumWithdrawal": 2,
                  "minDeposit": 1,
                  "confirmations": 4,
                  "usdtDecimals": 4,
                  "hashLink": "https://explorer.ont.io/transaction/",
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "address": {
                      "startingLetter": [
                          "A"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "zil": {
                  "coinId": 19,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/zil.png",
                  "coinName": "Zilliqa",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 1,
                  "withdrawalFee": 1,
                  "minimumWithdrawal": 60,
                  "minDeposit": 50,
                  "confirmations": 5,
                  "usdtDecimals": 7,
                  "hashLink": "https://viewblock.io/zilliqa/tx/",
                  "address": {
                      "startingLetter": [
                          "zil"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "eos": {
                  "coinId": 20,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/eos.png",
                  "usdtDecimals": 4,
                  "coinName": "EOS",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.05,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 0.6,
                  "minDeposit": 0.1,
                  "confirmations": 4,
                  "taggedAddress": 2,
                  "defaultTag": "",
                  "hashLink": "https://www.bloks.io/transaction/",
                  "coinType": "eos",
                  "networks": [
                      8
                  ],
                  "withdNwOn": [
                      8
                  ],
                  "depoNwOn": [
                      8
                  ]
              },
              "poly": {
                  "coinId": 21,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/poly.png",
                  "coinName": "Polymath",
                  "floatPlaces": 1,
                  "tradeFloatPlaces": 1,
                  "minTradeAmt": 0.5,
                  "withdrawalFee": 8,
                  "minimumWithdrawal": 10,
                  "minDeposit": 8,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "dgb": {
                  "coinId": 22,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/dgb.png",
                  "coinName": "DigiByte",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 1,
                  "withdrawalFee": 1,
                  "minimumWithdrawal": 5,
                  "minDeposit": 10,
                  "confirmations": 30,
                  "hashLink": "https://digiexplorer.info/tx/",
                  "additionalNotes": [
                      "We would only accept integer deposits. Decimal part of deposits would not be credited"
                  ],
                  "address": {
                      "startingLetter": [
                          "D",
                          "S"
                      ],
                      "hasChanged": 1
                  },
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ]
              },
              "ncash": {
                  "coinId": 23,
                  "inrDecimals": 3,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ncash.png",
                  "coinName": "Nucleus Vision",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 25,
                  "minMTradeAmt": 5000,
                  "withdrawalFee": 220,
                  "minimumWithdrawal": 300,
                  "minDeposit": 200,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "additionalNotes": [
                      "We would only accept integer deposits. Decimal part of deposits would not be credited"
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "ada": {
                  "coinId": 24,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ada.png",
                  "coinName": "Cardano",
                  "usdtDecimals": 4,
                  "floatPlaces": 1,
                  "tradeFloatPlaces": 1,
                  "minTradeAmt": 0.1,
                  "minMTradeAmt": 1000,
                  "withdrawalFee": 1,
                  "minimumWithdrawal": 5,
                  "minDeposit": 1,
                  "confirmations": 30,
                  "hashLink": "https://cardanoexplorer.com/tx/",
                  "additionalNotes": [
                      "We would only accept deposits amounts upto 1 decimal place. Rest would not be credited"
                  ],
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "icx": {
                  "coinId": 26,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/icx.png",
                  "coinName": "ICON",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 2,
                  "minDeposit": 2,
                  "confirmations": 30,
                  "usdtDecimals": 4,
                  "hashLink": "https://tracker.icon.foundation/transaction/",
                  "address": {
                      "startingLetter": [
                          "hx"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "vet": {
                  "coinId": 27,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/vet.png",
                  "coinName": "VeChain",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 1,
                  "inrDecimals": 3,
                  "withdrawalFee": 100,
                  "minimumWithdrawal": 200,
                  "minDeposit": 200,
                  "confirmations": 30,
                  "usdtDecimals": 7,
                  "hashLink": "https://explore.vechain.org/transactions/",
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ],
                  "address": {
                      "hasChanged": 1
                  }
              },
              "omg": {
                  "coinId": 28,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/omg.png",
                  "coinName": "OmiseGo",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.05,
                  "withdrawalFee": 0.4,
                  "minimumWithdrawal": 0.5,
                  "minDeposit": 1,
                  "confirmations": 30,
                  "usdtDecimals": 4,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "req": {
                  "coinId": 29,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/req.png",
                  "coinName": "Request",
                  "floatPlaces": 1,
                  "tradeFloatPlaces": 1,
                  "minTradeAmt": 1,
                  "withdrawalFee": 40,
                  "minimumWithdrawal": 45,
                  "minDeposit": 40,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "dgd": {
                  "coinId": 30,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/dgd.png",
                  "coinName": "DigixDAO",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.001,
                  "withdrawalFee": 0.04,
                  "minimumWithdrawal": 0.05,
                  "minDeposit": 0.04,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "qlc": {
                  "coinId": 31,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/qlc.png",
                  "coinName": "QLC Chain",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 5,
                  "withdrawalFee": 1,
                  "minimumWithdrawal": 2,
                  "minDeposit": 1,
                  "confirmations": 4,
                  "hashLink": "https://neoscan.io/transaction/",
                  "coinType": "nep5",
                  "address": {
                      "startingLetter": [
                          "A"
                      ],
                      "hasChanged": 1
                  },
                  "withdNwOn": [
                      7
                  ],
                  "depoNwOn": [
                      7
                  ],
                  "networks": [
                      7
                  ],
                  "nep5": {
                      "withdrawalFee": 1,
                      "minimumWithdrawal": 10
                  }
              },
              "powr": {
                  "coinId": 32,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/powr.png",
                  "coinName": "Power Ledger",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 1,
                  "withdrawalFee": 12,
                  "minimumWithdrawal": 15,
                  "minDeposit": 12,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "wpr": {
                  "coinId": 33,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/wpr.png",
                  "coinName": "WePower",
                  "floatPlaces": 1,
                  "tradeFloatPlaces": 1,
                  "minTradeAmt": 5,
                  "withdrawalFee": 60,
                  "minimumWithdrawal": 70,
                  "minDeposit": 60,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "confirmations": 30,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "waves": {
                  "coinId": 34,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/waves.png",
                  "coinName": "Waves",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.02,
                  "withdrawalFee": 0.01,
                  "minimumWithdrawal": 0.5,
                  "minDeposit": 0.1,
                  "confirmations": 4,
                  "usdtDecimals": 4,
                  "hashLink": "https://wavesexplorer.com/tx/",
                  "address": {
                      "startingLetter": [
                          "3"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "wan": {
                  "coinId": 35,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/wan.png",
                  "coinName": "Wanchain",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "withdrawalFee": 0.01,
                  "minimumWithdrawal": 0.5,
                  "minDeposit": 0.5,
                  "confirmations": 4,
                  "hashLink": "https://explorer.wanchain.org/block/trans/",
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "eosd": {
                  "coinId": 36,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/eosdac.png",
                  "coinName": "eosDAC",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 10,
                  "hashLink": "https://www.bloks.io/transaction/",
                  "coinType": "eos",
                  "networks": [
                      8
                  ],
                  "withdNwOn": [
                      8
                  ],
                  "depoNwOn": [
                      8
                  ],
                  "withdrawalFee": 25,
                  "minimumWithdrawal": 30,
                  "minDeposit": 50,
                  "confirmations": 30,
                  "taggedAddress": 2,
                  "defaultTag": ""
              },
              "act": {
                  "coinId": 37,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/act.png",
                  "coinName": "Achain",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 20,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 5,
                  "minDeposit": 1,
                  "confirmations": 4,
                  "hashLink": "https://browser.achain.com/index.html#/tradeInfo/",
                  "address": {
                      "startingLetter": [
                          "ACT"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "lsk": {
                  "coinId": 38,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/lsk.png",
                  "coinName": "Lisk",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.05,
                  "withdrawalFee": 0.3,
                  "minimumWithdrawal": 0.5,
                  "minDeposit": 1,
                  "confirmations": 10,
                  "usdtDecimals": 4,
                  "hashLink": "https://explorer.lisk.io/tx/",
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "xvg": {
                  "coinId": 39,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/xvg.png",
                  "coinName": "Verge",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 5,
                  "minMTradeAmt": 10,
                  "inrDecimals": 3,
                  "withdrawalFee": 2,
                  "minimumWithdrawal": 5,
                  "minDeposit": 10,
                  "hashLink": "https://verge-blockchain.info/tx/",
                  "confirmations": 6,
                  "address": {
                      "startingLetter": [
                          "D"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "blz": {
                  "coinId": 40,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/blz.png",
                  "coinName": "Bluzelle",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 1,
                  "withdrawalFee": 10,
                  "minimumWithdrawal": 15,
                  "minDeposit": 10,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "sub": {
                  "coinId": 41,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/sub.png",
                  "coinName": "Substratum",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 1,
                  "withdrawalFee": 10,
                  "minimumWithdrawal": 15,
                  "minDeposit": 10,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": [
                      0
                  ]
              },
              "lrc": {
                  "coinId": 42,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/lrc.png",
                  "coinName": "Loopring",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "withdrawalFee": 10,
                  "minimumWithdrawal": 15,
                  "minDeposit": 10,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "nexo": {
                  "coinId": 43,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/nexo.png",
                  "coinName": "Nexo",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.05,
                  "withdrawalFee": 30,
                  "minimumWithdrawal": 35,
                  "minDeposit": 30,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "efx": {
                  "coinId": 44,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/efx.png",
                  "coinName": "Effect.AI",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 5,
                  "minMTradeAmt": 20,
                  "withdrawalFee": 1,
                  "minimumWithdrawal": 2,
                  "minDeposit": 20,
                  "confirmations": 4,
                  "hashLink": "https://www.bloks.io/transaction/",
                  "coinType": "eos",
                  "networks": [
                      8
                  ],
                  "withdNwOn": [
                      8
                  ],
                  "depoNwOn": [
                      8
                  ],
                  "taggedAddress": 2,
                  "defaultTag": ""
              },
              "zrx": {
                  "coinId": 46,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/zrx.png",
                  "coinName": "0x",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "withdrawalFee": 3,
                  "minimumWithdrawal": 4,
                  "minDeposit": 3,
                  "confirmations": 30,
                  "usdtDecimals": 4,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "rep": {
                  "coinId": 47,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/rep.png",
                  "coinName": "Augur",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 0.2,
                  "minDeposit": 0.1,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "loom": {
                  "coinId": 48,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/loom.png",
                  "coinName": "Loom Network",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 1,
                  "minDeposit": 25,
                  "confirmations": 30,
                  "withdrawalFee": 25,
                  "minimumWithdrawal": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "stmx": {
                  "coinId": 49,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/stmx.png",
                  "coinName": "StormX",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 1,
                  "inrDecimals": 3,
                  "withdrawalFee": 150,
                  "tradeSocket": "storm",
                  "minimumWithdrawal": 200,
                  "minDeposit": 200,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "glm": {
                  "coinId": 50,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/gnt.png",
                  "coinName": "Golem",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.5,
                  "withdrawalFee": 8,
                  "minimumWithdrawal": 10,
                  "minDeposit": 10,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "confirmations": 30,
                  "tradeSocket": "gnt",
                  "tradeNotes": [
                      {
                          "type": 1,
                          "text": "GNT has been renamed to GLM"
                      }
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "qtum": {
                  "coinId": 51,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/qtum.png",
                  "coinName": "Qtum",
                  "floatPlaces": 3,
                  "tradeFloatPlaces": 3,
                  "minTradeAmt": 0.01,
                  "withdrawalFee": 0.01,
                  "minimumWithdrawal": 0.03,
                  "minDeposit": 1,
                  "confirmations": 30,
                  "usdtDecimals": 4,
                  "hashLink": "https://explorer.qtum.org/tx/",
                  "address": {
                      "startingLetter": [
                          "Q"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "qkc": {
                  "coinId": 52,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/qkc.png",
                  "coinName": "Quarkchain",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 5,
                  "withdrawalFee": 20,
                  "minimumWithdrawal": 25,
                  "minDeposit": 25,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "pundix": {
                  "coinId": 53,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/npxs.png",
                  "coinName": "Pundi X",
                  "floatPlaces": 3,
                  "tradeFloatPlaces": 3,
                  "minTradeAmt": 0.05,
                  "inrDecimals": 3,
                  "withdrawalFee": 0.6,
                  "minimumWithdrawal": 0.65,
                  "minDeposit": 0.65,
                  "confirmations": 30,
                  "usdtDecimals": 7,
                  "tradeSocket": "npxs",
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "depositNotes": [
                      "Deposit only PUNDIX to this address. Old contract NPXS tokens are not supported."
                  ],
                  "tradeNotes": [
                      {
                          "type": 1,
                          "text": "NPXS has undergone a 1:1000 swap. Its now renamed to PUNDIX",
                          "link": "https://medium.com/pundix/step-by-step-guide-for-npxs-onchain-swap-to-pundix-26c32dab7a42",
                          "linkText": "Read More"
                      }
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "usdt": {
                  "coinId": 54,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/usdt.png",
                  "coinName": "Tether",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "minP2PAmt": 15,
                  "withdrawalFee": 4,
                  "minimumWithdrawal": 12,
                  "minDeposit": 10,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "networks": [
                      0,
                      1,
                      2,
                      3
                  ],
                  "trc20": {
                      "withdrawalFee": 2,
                      "minimumWithdrawal": 5
                  },
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "hlne": 1,
                  "withdNwOn": [
                      0,
                      1,
                      2,
                      3
                  ],
                  "depoNwOn": [
                      0,
                      1,
                      2,
                      3
                  ]
              },
              "etc": {
                  "coinId": 55,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/etc.png",
                  "coinName": "Ethereum Classic",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.01,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 0.2,
                  "minDeposit": 0.25,
                  "confirmations": 5000,
                  "usdtDecimals": 4,
                  "hashLink": "https://blockscout.com/etc/mainnet/tx/",
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "dent": {
                  "coinId": 56,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/dent.png",
                  "coinName": "Dent",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 10,
                  "inrDecimals": 3,
                  "withdrawalFee": 750,
                  "minimumWithdrawal": 1000,
                  "minDeposit": 1000,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "cloak": {
                  "coinId": 57,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/cloak.png",
                  "coinName": "CloakCoin",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.25,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 1,
                  "minDeposit": 25,
                  "confirmations": 4,
                  "hashLink": "https://chainz.cryptoid.info/cloak/tx.dws?",
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "kmd": {
                  "coinId": 58,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/kmd.png",
                  "coinName": "Komodo",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 1,
                  "minDeposit": 1,
                  "confirmations": 4,
                  "hashLink": "https://kmd.explorer.supernet.org/tx/",
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ],
                  "address": {
                      "hasChanged": 1
                  }
              },
              "grs": {
                  "coinId": 59,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/grs.png",
                  "coinName": "Groestlcoin",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 1,
                  "minDeposit": 2,
                  "confirmations": 4,
                  "hashLink": "https://groestlsight.groestlcoin.org/tx/",
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "ram": {
                  "coinId": 60,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/eosram.png",
                  "coinName": "EOS RAM",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 100,
                  "isExcl": true,
                  "inrDecimals": 3,
                  "hashLink": "https://www.bloks.io/transaction/",
                  "coinType": "eos",
                  "networks": [
                      8
                  ],
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 0.1,
                  "depositNotes": [
                      "Minimum RAM purchase is **0.1 KB** equivalent"
                  ],
                  "tradeNotes": [
                      {
                          "type": 0,
                          "text": "Learn more about EOS RAM",
                          "link": "https://bitbns.com/eos-ram-price-inr-india/",
                          "linkText": "Read Here"
                      }
                  ],
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "let": {
                  "coinId": 61,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/let.png",
                  "coinName": "LinkEye",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 10,
                  "withdrawalFee": 150,
                  "minimumWithdrawal": 200,
                  "minDeposit": 200,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "soul": {
                  "coinId": 62,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/soul.png",
                  "coinName": "Phantasma",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.5,
                  "minDeposit": 2,
                  "withdrawalFee": 1,
                  "minimumWithdrawal": 2,
                  "hashLink": "https://neoscan.io/transaction/",
                  "coinType": "nep5",
                  "confirmations": 4,
                  "address": {
                      "startingLetter": [
                          "A"
                      ],
                      "hasChanged": 1
                  },
                  "withdNwOn": [
                      7
                  ],
                  "depoNwOn": [
                      7
                  ],
                  "networks": [
                      7
                  ],
                  "nep5": {
                      "withdrawalFee": 1,
                      "minimumWithdrawal": 2
                  }
              },
              "ixt": {
                  "coinId": 63,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ixt.png",
                  "coinName": "IXLedger",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 5,
                  "withdrawalFee": 35,
                  "minimumWithdrawal": 40,
                  "minDeposit": 40,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "sky": {
                  "coinId": 64,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/sky.png",
                  "coinName": "Skycoin",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.05,
                  "usdtDecimals": 4,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 2,
                  "minDeposit": 5,
                  "confirmations": 3,
                  "hashLink": "https://explorer.skycoin.net/app/transaction/",
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "ode": {
                  "coinId": 65,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/odem.png",
                  "coinName": "ODEM",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 5,
                  "withdrawalFee": 8,
                  "minimumWithdrawal": 25,
                  "minDeposit": 20,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": [
                      0
                  ]
              },
              "rfr": {
                  "coinId": 67,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/rfr.png",
                  "coinName": "Refereum",
                  "floatPlaces": 1,
                  "tradeFloatPlaces": 1,
                  "minTradeAmt": 10,
                  "inrDecimals": 3,
                  "withdrawalFee": 2000,
                  "minimumWithdrawal": 3000,
                  "minDeposit": 1000,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "confirmations": 30,
                  "withdNwOn": [],
                  "depoNwOn": [
                      0
                  ]
              },
              "bttold": {
                  "coinId": 68,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/btt.png",
                  "inrDecimals": 4,
                  "coinName": "BitTorrent Token (Old)",
                  "usdtDecimals": 7,
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 10,
                  "minMTradeAmt": 10000,
                  "withdrawalFee": 100,
                  "minimumWithdrawal": 2000,
                  "minDeposit": 2000,
                  "hashLink": "https://tronscan.org/#/transaction/",
                  "coinType": "trc20",
                  "networks": [
                      2
                  ],
                  "confirmations": 30,
                  "address": {
                      "startingLetter": [
                          "T"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "fet": {
                  "coinId": 69,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/fet.png",
                  "inrDecimals": 2,
                  "coinName": "Fetch.ai",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.5,
                  "withdrawalFee": 8,
                  "minimumWithdrawal": 20,
                  "usdtDecimals": 7,
                  "minDeposit": 20,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "confirmations": 30,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "tel": {
                  "coinId": 70,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/tel.png",
                  "inrDecimals": 3,
                  "coinName": "Telcoin",
                  "usdtDecimals": 6,
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 10,
                  "withdrawalFee": 2500,
                  "minimumWithdrawal": 3000,
                  "minDeposit": 2500,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "confirmations": 30,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "zebi": {
                  "coinId": 71,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/zco.png",
                  "inrDecimals": 3,
                  "coinName": "Zebi",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 1,
                  "minTradeAmt": 10,
                  "tradeSocket": "zco",
                  "withdrawalFee": 10,
                  "minimumWithdrawal": 200,
                  "minDeposit": 200,
                  "defaultTag": 1,
                  "hashLink": "https://zpb.zebi.io/transaction/",
                  "address": {
                      "startingLetter": [
                          "zebi"
                      ]
                  },
                  "taggedAddress": 2,
                  "confirmations": 20,
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "bnb": {
                  "coinId": 72,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/bnb.png",
                  "coinName": "Binance Coin",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "withdrawalFee": 0.01,
                  "minimumWithdrawal": 0.05,
                  "minDeposit": 0.5,
                  "hashLink": "https://explorer.binance.org/tx/",
                  "coinType": "bep2",
                  "taggedAddress": 2,
                  "bep2": {
                      "withdrawalFee": 0.01,
                      "minimumWithdrawal": 0.5
                  },
                  "networks": [
                      1,
                      5
                  ],
                  "usdtDecimals": 4,
                  "defaultTag": "",
                  "address": {
                      "startingLetter": [
                          "bnb"
                      ]
                  },
                  "withdNwOn": [
                      1,
                      5
                  ],
                  "depoNwOn": [
                      1,
                      5
                  ]
              },
              "nrg": {
                  "coinId": 73,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/nrg.png",
                  "coinName": "Energi",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 0.5,
                  "minDeposit": 0.5,
                  "confirmations": 5000,
                  "hashLink": "https://explorer.energi.network/tx/",
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "depositNotes": [
                      "Address has changed recently. Please double check before depositing"
                  ],
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "part": {
                  "coinId": 74,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/part.png",
                  "coinName": "Particl",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "withdrawalFee": 0.01,
                  "minimumWithdrawal": 1,
                  "minDeposit": 1,
                  "confirmations": 5,
                  "hashLink": "https://explorer.particl.io/tx/",
                  "address": {
                      "startingLetter": [
                          "P"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "fun": {
                  "coinId": 76,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/fun.png",
                  "coinName": "FunFair",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "inrDecimals": 3,
                  "minTradeAmt": 10,
                  "withdrawalFee": 200,
                  "usdtDecimals": 7,
                  "minimumWithdrawal": 600,
                  "minDeposit": 500,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [],
                  "depoNwOn": [
                      0
                  ]
              },
              "bns": {
                  "coinId": 77,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/bns.png",
                  "inrDecimals": 4,
                  "coinName": "Bitbns Token",
                  "usdtDecimals": 7,
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 1,
                  "minDeposit": 100,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "coinType": "erc20",
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "hashLink": "https://etherscan.io/tx/",
                  "confirmations": 30,
                  "poolSaleMinStake": 100,
                  "networks": [
                      0,
                      1
                  ],
                  "hlne": 1,
                  "tradeNotes": [
                      {
                          "type": 0,
                          "text": "BNS has been migrated to a v3 contract. Users on bitbns and on their private wallets have received tokens in 1:100 ratio",
                          "link": "https://medium.com/@bitbns/bns-token-v3-migration-complete-dbab2d09e931",
                          "linkText": "Read More"
                      },
                      {
                          "type": 0,
                          "text": "Now get more rewards with our new and exciting BNS/BNSD utility called \"Prediction Game\"",
                          "link": "/predict-and-win/",
                          "linkText": "Participate Now"
                      }
                  ],
                  "withdNwOn": [
                      0,
                      1
                  ],
                  "depoNwOn": [
                      0,
                      1
                  ]
              },
              "cvt": {
                  "coinId": 78,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/cvt.png",
                  "coinName": "CyberVein",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "inrDecimals": 3,
                  "minTradeAmt": 1,
                  "minDeposit": 200,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "sero": {
                  "coinId": 79,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/sero.png",
                  "coinName": "Super Zero",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 15,
                  "withdrawalFee": 0.5,
                  "minimumWithdrawal": 50,
                  "minDeposit": 50,
                  "confirmations": 32,
                  "hashLink": "https://explorer.sero.cash/txsInfo.html?hash=",
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ]
              },
              "att": {
                  "coinId": 80,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/att.png",
                  "coinName": "Attila",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.5,
                  "withdrawalFee": 0.5,
                  "minimumWithdrawal": 50,
                  "minDeposit": 50,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "comp": {
                  "coinId": 81,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/comp.png",
                  "coinName": "Compound",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.001,
                  "minDeposit": 0.05,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "sylo": {
                  "coinId": 82,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/sylo.png",
                  "coinName": "Sylo",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 10,
                  "minDeposit": 875,
                  "confirmations": 30,
                  "inrDecimals": 3,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "matic": {
                  "coinId": 83,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/matic.png",
                  "coinName": "Matic Network",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "minDeposit": 200,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "networks": [
                      0,
                      3
                  ],
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "tradeNotes": [
                      {
                          "type": 0,
                          "text": "Guess MATIC's price & win guaranteed rewards upto 4000x",
                          "link": "/predict-and-win/",
                          "linkText": "Participate Now"
                      }
                  ],
                  "withdNwOn": [
                      0,
                      3
                  ],
                  "depoNwOn": [
                      0,
                      3
                  ]
              },
              "snx": {
                  "coinId": 84,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/snx.png",
                  "coinName": "Synthetix Network Token",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 1.21,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "bat": {
                  "coinId": 85,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/bat.png",
                  "coinName": "Basic Attention Token",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "minDeposit": 14,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "bal": {
                  "coinId": 86,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/bal.png",
                  "coinName": "Balancer",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 1,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "bnt": {
                  "coinId": 87,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/bnt.png",
                  "coinName": "Bancor Network Token",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 12.8,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "chr": {
                  "coinId": 88,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/chr.png",
                  "coinName": "Chromia",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "minDeposit": 200,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "link": {
                  "coinId": 89,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/link.png",
                  "coinName": "Chainlink",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 0.71,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "networks": [
                      0,
                      3
                  ],
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0,
                      3
                  ],
                  "depoNwOn": [
                      0,
                      3
                  ]
              },
              "wbtc": {
                  "coinId": 90,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/wbtc.png",
                  "coinName": "Wrapped Bitcoin",
                  "floatPlaces": 8,
                  "tradeFloatPlaces": 8,
                  "minTradeAmt": 0.00001,
                  "minDeposit": 0.00048611,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "bnsd": {
                  "coinId": 91,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/bnsd.png",
                  "coinName": "BNSD Finance",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 5,
                  "minDeposit": 100,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 3,
                  "usdtDecimals": 7,
                  "poolSaleMinStake": 100,
                  "networks": [
                      0,
                      1
                  ],
                  "hlne": 1,
                  "tradeNotes": [
                      {
                          "type": 0,
                          "text": "Now get more rewards with our new and exciting BNS/BNSD utility called \"Prediction Game\"",
                          "link": "/predict-and-win/",
                          "linkText": "Participate Now"
                      }
                  ],
                  "withdNwOn": [
                      0,
                      1
                  ],
                  "depoNwOn": [
                      0,
                      1
                  ]
              },
              "uni": {
                  "coinId": 92,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/uni.png",
                  "coinName": "Uniswap Token",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 2,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 2,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "yfv": {
                  "coinId": 93,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/yfv.png",
                  "coinName": "YFValue",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.2,
                  "minDeposit": 0.5,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 2,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "yfi": {
                  "coinId": 94,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/yfi.png",
                  "coinName": "yearn.finance",
                  "floatPlaces": 6,
                  "tradeFloatPlaces": 6,
                  "minTradeAmt": 0.00001,
                  "minDeposit": 0.001,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 2,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "yfii": {
                  "coinId": 95,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/yfii.png",
                  "coinName": "DFI.money",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 0.01,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 2,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "uma": {
                  "coinId": 96,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/uma.png",
                  "coinName": "UMA",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.25,
                  "minDeposit": 1,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 2,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "aave": {
                  "coinId": 97,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/aave.png",
                  "coinName": "Aave",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 0.05,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "networks": [
                      0,
                      3
                  ],
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 2,
                  "withdNwOn": [
                      0,
                      3
                  ],
                  "depoNwOn": [
                      0,
                      3
                  ]
              },
              "wnxm": {
                  "coinId": 98,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/wnxm.png",
                  "coinName": "Wrapped NXM",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "minDeposit": 0.2,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 2,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "ren": {
                  "coinId": 100,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ren.png",
                  "coinName": "REN",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 15,
                  "minDeposit": 60,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 2,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "srm": {
                  "coinId": 101,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/srm.png",
                  "coinName": "Serum",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 2,
                  "minDeposit": 10,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 2,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "ampl": {
                  "coinId": 102,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ampl.png",
                  "coinName": "Ampleforth",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 5,
                  "minDeposit": 20,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 2,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "rfuel": {
                  "coinId": 103,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/rfuel.png",
                  "coinName": "RioDeFi",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 1,
                  "minDeposit": 100,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "om": {
                  "coinId": 104,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/om.png",
                  "coinName": "Mantra DAO",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.5,
                  "minDeposit": 100,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "bnsdeth": {
                  "coinId": 105,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/bnsdeth.png",
                  "coinName": "BNSD-ETH Uniswap V2 Liquidity Token",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minDeposit": 5,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "inrDecimals": 3,
                  "usdtDecimals": 7,
                  "poolSaleMinStake": 5,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "bnsg": {
                  "coinId": 106,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/bnsg.png",
                  "coinName": "BNS Governance",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 10,
                  "minDeposit": 50,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "hasMint": true,
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "oro": {
                  "coinId": 107,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/oro.png",
                  "coinName": "OroPocket",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 5,
                  "minDeposit": 20,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "cas": {
                  "coinId": 108,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/cas.png",
                  "coinName": "Cashaa Token",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 1,
                  "withdrawalFee": 10,
                  "minimumWithdrawal": 11,
                  "minDeposit": 100,
                  "hashLink": "https://explorer.binance.org/tx/",
                  "coinType": "bep2",
                  "networks": [
                      5
                  ],
                  "taggedAddress": 2,
                  "defaultTag": "",
                  "address": {
                      "startingLetter": [
                          "bnb"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      5
                  ],
                  "depoNwOn": [
                      5
                  ]
              },
              "dot": {
                  "coinId": 110,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/dot.png",
                  "coinName": "Polkadot",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.1,
                  "minDeposit": 2,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "sprink": {
                  "coinId": 113,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/sprink.png",
                  "coinName": "Sprink",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 1,
                  "minDeposit": 20,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "tradeNotes": [
                      {
                          "type": 0,
                          "text": "Get Sprink Vouchers at 15% off",
                          "link": "/sprink-vouchers/",
                          "linkText": "Purchase Now"
                      }
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "pcnt": {
                  "coinId": 114,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/pcnt.png",
                  "coinName": "Playcent",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "minDeposit": 10,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "poc": {
                  "coinId": 115,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/poc.png",
                  "coinName": "POC Chain",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "minDeposit": 2,
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 20,
                  "confirmations": 20,
                  "hashLink": "https://explorer.pocblockchain.io/txs/",
                  "address": {
                      "startingLetter": [
                          "poc"
                      ]
                  },
                  "taggedAddress": 2,
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ]
              },
              "usdc": {
                  "coinId": 116,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/usdc.png",
                  "coinName": "USD Coin",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.2,
                  "minDeposit": 10,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1,
                      3
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1,
                      3
                  ],
                  "depoNwOn": [
                      1,
                      3
                  ]
              },
              "fil": {
                  "coinId": 117,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/fil.png",
                  "coinName": "Filecoin",
                  "floatPlaces": 3,
                  "tradeFloatPlaces": 3,
                  "minTradeAmt": 0.001,
                  "minDeposit": 0.1,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "xtz": {
                  "coinId": 118,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/xtz.png",
                  "coinName": "Tezos",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.05,
                  "minDeposit": 3,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "egld": {
                  "coinId": 119,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/egld.png",
                  "coinName": "Elrond",
                  "floatPlaces": 3,
                  "tradeFloatPlaces": 3,
                  "minTradeAmt": 0.001,
                  "minDeposit": 0.1,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "enj": {
                  "coinId": 120,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/enj.png",
                  "coinName": "Enjin Coin",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 5,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "cake": {
                  "coinId": 121,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/cake.png",
                  "coinName": "PancakeSwap",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 0.5,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "grt": {
                  "coinId": 122,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/grt.png",
                  "coinName": "The Graph",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 5,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "rune": {
                  "coinId": 123,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/rune.png",
                  "coinName": "THORChain",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 2,
                  "hashLink": "https://explorer.binance.org/tx/",
                  "coinType": "bep2",
                  "networks": [
                      5
                  ],
                  "taggedAddress": 2,
                  "defaultTag": "",
                  "address": {
                      "startingLetter": [
                          "bnb"
                      ]
                  },
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 0.2,
                  "withdNwOn": [
                      5
                  ],
                  "depoNwOn": [
                      5
                  ]
              },
              "near": {
                  "coinId": 124,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/near.png",
                  "coinName": "NEAR Protocol",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 2,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "1inch": {
                  "coinId": 125,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/1inch.png",
                  "coinName": "1inch",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 3,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "ava": {
                  "coinId": 126,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ava.png",
                  "coinName": "Travala",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 2,
                  "hashLink": "https://explorer.binance.org/tx/",
                  "coinType": "bep2",
                  "networks": [
                      5
                  ],
                  "taggedAddress": 2,
                  "defaultTag": "",
                  "address": {
                      "startingLetter": [
                          "bnb"
                      ]
                  },
                  "withdrawalFee": 0.1,
                  "minimumWithdrawal": 0.2,
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      5
                  ],
                  "depoNwOn": [
                      5
                  ]
              },
              "atom": {
                  "coinId": 127,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/atom.png",
                  "coinName": "Cosmos",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 0.5,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "band": {
                  "coinId": 128,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/band.png",
                  "coinName": "Band Protocol",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 0.5,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "twt": {
                  "coinId": 129,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/twt.png",
                  "coinName": "Trust Wallet Token",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "minDeposit": 10,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "alpha": {
                  "coinId": 130,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/alpha.png",
                  "coinName": "Alpha Finance Lab",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 5,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "zec": {
                  "coinId": 131,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/zec.png",
                  "coinName": "Zcash",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 0.1,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "chz": {
                  "coinId": 132,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/chz.png",
                  "coinName": "Chiliz",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 1,
                  "withdrawalFee": 1,
                  "minimumWithdrawal": 2,
                  "hashLink": "https://explorer.binance.org/tx/",
                  "networks": [
                      5
                  ],
                  "coinType": "bep2",
                  "taggedAddress": 2,
                  "defaultTag": "",
                  "address": {
                      "startingLetter": [
                          "bnb"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      5
                  ],
                  "depoNwOn": [
                      5
                  ]
              },
              "algo": {
                  "coinId": 134,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/algo.png",
                  "coinName": "Algorand",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.01,
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "theta": {
                  "coinId": 135,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/theta.png",
                  "coinName": "Theta",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.01,
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "lunc": {
                  "coinId": 136,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/lunc.png",
                  "coinName": "Terra Classic",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.01,
                  "withdNwOn": [],
                  "depoNwOn": [],
                  "inrDecimals": 8,
                  "tradeNotes": [
                      {
                          "type": -1,
                          "text": "Buying LUNA might be extremely risky. Risk management is very crucial"
                      }
                  ]
              },
              "win": {
                  "coinId": 137,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/win.png",
                  "coinName": "WINkLink",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "inrDecimals": 4,
                  "minTradeAmt": 20,
                  "minDeposit": 100,
                  "confirmations": 30,
                  "withdrawalFee": 5000,
                  "minimumWithdrawal": 5100,
                  "address": {
                      "startingLetter": [
                          "T"
                      ]
                  },
                  "hashLink": "https://tronscan.org/#/transaction/",
                  "coinType": "trc20",
                  "networks": [
                      2
                  ],
                  "trc20": {
                      "withdrawalFee": 5000,
                      "minimumWithdrawal": 5100
                  },
                  "withdNwOn": [
                      2
                  ],
                  "depoNwOn": [
                      2
                  ]
              },
              "sol": {
                  "coinId": 138,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/sol.png",
                  "coinName": "Solana",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.001,
                  "minDeposit": 0.5,
                  "withdrawalFee": 0.01,
                  "minimumWithdrawal": 0.2,
                  "networks": [
                      4
                  ],
                  "coinType": "spl",
                  "hashLink": "https://explorer.solana.com/tx/",
                  "withdNwOn": [
                      4
                  ],
                  "depoNwOn": [
                      4
                  ]
              },
              "mkr": {
                  "coinId": 139,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/mkr.png",
                  "coinName": "MakerDAO",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 0.01,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "ftt": {
                  "coinId": 140,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ftt.png",
                  "coinName": "FTX Token",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.001,
                  "minDeposit": 1,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "mana": {
                  "coinId": 141,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/mana.png",
                  "coinName": "Decentraland",
                  "floatPlaces": 3,
                  "tradeFloatPlaces": 3,
                  "minTradeAmt": 0.01,
                  "minDeposit": 50,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "crv": {
                  "coinId": 142,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/crv.png",
                  "coinName": "Curve DAO",
                  "floatPlaces": 3,
                  "tradeFloatPlaces": 3,
                  "minTradeAmt": 0.01,
                  "minDeposit": 50,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "sand": {
                  "coinId": 143,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/sand.png",
                  "coinName": "The Sandbox",
                  "floatPlaces": 3,
                  "tradeFloatPlaces": 3,
                  "minTradeAmt": 0.01,
                  "minDeposit": 100,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "tradeNotes": [
                      {
                          "type": 0,
                          "text": "Read our research report on The Sandbox",
                          "link": "https://learn.bitbns.com/tokens-info/what-is-the-sandbox/",
                          "linkText": "Read Now"
                      }
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "busd": {
                  "coinId": 144,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/busd.png",
                  "coinName": "Binance USD",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.01,
                  "minDeposit": 50,
                  "confirmations": 30,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "icp": {
                  "coinId": 145,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/icp.png",
                  "coinName": "Internet Computer",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 10,
                  "withdrawalFee": 0.05,
                  "minimumWithdrawal": 0.1,
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "shib": {
                  "coinId": 146,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/shib.png",
                  "coinName": "Shiba Inu",
                  "floatPlaces": 0,
                  "inrDecimals": 6,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 1000,
                  "minDeposit": 10000000,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "tradeNotes": [
                      {
                          "type": -1,
                          "text": "Please do your risk management properly. Such meme tokens can be much volatile and risky."
                      },
                      {
                          "type": 0,
                          "text": "Offer: Buy your Shiba T-shirt here",
                          "link": "https://bit.ly/3MYpvP1",
                          "linkText": "Buy Now"
                      },
                      {
                          "type": 0,
                          "text": "Guess SHIB's price & win guaranteed rewards upto 4000x",
                          "link": "/predict-and-win/",
                          "linkText": "Participate Now"
                      }
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "bake": {
                  "coinId": 147,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/bake.png",
                  "coinName": "BakerySwap",
                  "floatPlaces": 3,
                  "tradeFloatPlaces": 3,
                  "minTradeAmt": 0.01,
                  "minDeposit": 1,
                  "confirmations": 30,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "safemoon": {
                  "coinId": 148,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/safemoon.png",
                  "coinName": "SAFEMOON V1",
                  "floatPlaces": 0,
                  "inrDecimals": 6,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 5000,
                  "minDeposit": 2000000,
                  "confirmations": 30,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 6,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Withdrawal Fee is 10% of your transaction amount or network fee, whichever is higher",
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "tradeNotes": [
                      {
                          "type": -1,
                          "text": "Please do your risk management properly. Such meme tokens can be much volatile and risky."
                      },
                      {
                          "type": 0,
                          "text": "BitBns is supporting SAFEMOON’s tokenomics policy",
                          "link": "https://medium.com/bitbns/safemoon-deposit-and-airdrop-update-7b7020deb560",
                          "linkText": "Read More"
                      }
                  ],
                  "depositWarningNotes": [
                      "**Deposit Transaction Fee:** 10% of the amount of tokens transferred.",
                      "i.e. **Actual amount of tokens deposited into your Bitbns account** = Amount of Tokens transferred - Deposit Transaction Fee",
                      "This **fee goes to SAFEMOON blockchain** as per their tokenomics, not to Bitbns",
                      "Why the additional 10% apart from the transaction's? 10% is deducted to move funds from user address to hot wallet."
                  ],
                  "withdrawWarningNotes": [
                      "**Withdraw Transaction Fee:** 10% of the amount of tokens transferred/network fee, whichever is the highest (tokenomics, duh!)"
                  ],
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "dcr": {
                  "coinId": 149,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/dcr.png",
                  "coinName": "Decred",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.001,
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "hbar": {
                  "coinId": 150,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/hbar.png",
                  "coinName": "Hedera Hashgraph",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.1,
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "tlm": {
                  "coinId": 340,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/tlm.png",
                  "coinName": "Alien Worlds",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.1,
                  "inrDecimals": 3,
                  "minDeposit": 100,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0,
                      1
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0,
                      1
                  ],
                  "depoNwOn": [
                      0,
                      1
                  ]
              },
              "kai": {
                  "coinId": 361,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/kai.png",
                  "coinName": "KardiaChain",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 1,
                  "minDeposit": 100,
                  "confirmations": 30,
                  "hashLink": "https://explorer.kardiachain.io/tx/",
                  "networkName": "KardiaChain Mainnet",
                  "coinType": "KardiaChain",
                  "withdrawalFee": 100,
                  "minimumWithdrawal": 150,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      6
                  ],
                  "depoNwOn": [
                      6
                  ]
              },
              "orbs": {
                  "coinId": 362,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/orbs.png",
                  "coinName": "Orbs",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 1,
                  "minDeposit": 100,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "oddz": {
                  "coinId": 363,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/oddz.png",
                  "coinName": "Oddz",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "minTradeAmt": 0.1,
                  "minDeposit": 10,
                  "confirmations": 30,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "foho": {
                  "coinId": 364,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/foho.png",
                  "coinName": "FOHOCOIN",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 100,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0,
                      1
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0,
                      1
                  ],
                  "depoNwOn": [
                      0,
                      1
                  ]
              },
              "c98": {
                  "coinId": 377,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/c98.png",
                  "coinName": "Coin98",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 20,
                  "confirmations": 30,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "juld": {
                  "coinId": 386,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/juld.png",
                  "coinName": "JulSwap",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 200,
                  "confirmations": 30,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "dai": {
                  "coinId": 238,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/dai.png",
                  "coinName": "Dai",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 50,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "crpt": {
                  "coinId": 387,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/crpt.png",
                  "coinName": "Crypterium",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 50,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "cric": {
                  "coinId": 395,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/cric.png",
                  "coinName": "Cricket Token",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "withdrawalFee": 0.01,
                  "minimumWithdrawal": 0.05,
                  "minDeposit": 5,
                  "defaultTag": 1,
                  "hashLink": "https://cpb.cricket.foundation/transaction/",
                  "taggedAddress": 2,
                  "confirmations": 20,
                  "withdNwOn": [],
                  "depoNwOn": []
              },
              "rage": {
                  "coinId": 396,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/rage.png",
                  "coinName": "Rage Fan",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 250,
                  "confirmations": 30,
                  "hashLink": "https://polygonscan.com/tx/",
                  "coinType": "matic20",
                  "networks": [
                      3
                  ],
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "depositNotes": [
                      "This is a MATIC20 (Polygon Mainnet) deposit. Do not deposit via any other netowrk like ERC20 or so."
                  ],
                  "tradeNotes": [
                      {
                          "type": 0,
                          "text": "Collect RAGE PayOut NFTs and rewards every time your team wins",
                          "link": "https://marketplace.rage.fan",
                          "linkText": "Collect Now"
                      }
                  ],
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      3
                  ],
                  "depoNwOn": [
                      3
                  ]
              },
              "push": {
                  "coinId": 397,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/push.png",
                  "coinName": "Ethereum Push Notification Service",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 10,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "hget": {
                  "coinId": 398,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/hget.png",
                  "coinName": "Hedget",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 10,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "axs!": {
                  "coinId": 295,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/axs.png",
                  "coinName": "Axie Infinity price",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 0.5,
                  "confirmations": 30,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "ygg": {
                  "coinId": 399,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ygg.png",
                  "coinName": "Yield Guild Games",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 5,
                  "confirmations": 30,
                  "hashLink": "https://etherscan.io/tx/",
                  "coinType": "erc20",
                  "networks": [
                      0
                  ],
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "becoin": {
                  "coinId": 438,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/becoin.png",
                  "coinName": "beCoin",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 100,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "coinType": "erc20",
                  "networkName": "Ethereum Network",
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 1.1,
                  "hashLink": "https://etherscan.io/tx/",
                  "confirmations": 30,
                  "poolSaleMinStake": 100,
                  "networks": [
                      0,
                      1
                  ],
                  "withdNwOn": [
                      0,
                      1
                  ],
                  "depoNwOn": [
                      0,
                      1
                  ]
              },
              "myne": {
                  "coinId": 447,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/myne.png",
                  "coinName": "ITSMYNE",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 50,
                  "confirmations": 30,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "deto": {
                  "coinId": 448,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/deto.png",
                  "coinName": "Delta Exchange Token",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.0001,
                  "minDeposit": 50,
                  "confirmations": 30,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "minWithMultiplier": 5,
                  "dynamicWithFee": 1,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "btt": {
                  "coinId": 455,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/btt.png",
                  "inrDecimals": 8,
                  "coinName": "BitTorrent Token (New)",
                  "floatPlaces": 0,
                  "tradeFloatPlaces": 0,
                  "minTradeAmt": 1000,
                  "minMTradeAmt": 100000,
                  "withdrawalFee": 500000,
                  "minimumWithdrawal": 510000,
                  "minDeposit": 1000000,
                  "hashLink": "https://tronscan.org/#/transaction/",
                  "coinType": "trc20",
                  "networks": [
                      2
                  ],
                  "confirmations": 30,
                  "address": {
                      "startingLetter": [
                          "T"
                      ]
                  },
                  "trc20": {
                      "withdrawalFee": 500000,
                      "minimumWithdrawal": 510000
                  },
                  "depositWarningNotes": [
                      "This is swapped BTT Token (also known as BTTC). Please make sure that you are using the correct version of BTT for deposits"
                  ],
                  "withdrawWarningNotes": [
                      "This is swapped BTT Token (also known as BTTC). Please make sure that you are using the correct version of BTT for withdrawal"
                  ],
                  "withdNwOn": [
                      2
                  ],
                  "depoNwOn": [
                      2
                  ]
              },
              "sfm": {
                  "coinId": 456,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/safemoon.png",
                  "coinName": "SafeMoon V2",
                  "floatPlaces": 3,
                  "inrDecimals": 6,
                  "tradeFloatPlaces": 3,
                  "minTradeAmt": 10,
                  "minDeposit": 1000,
                  "confirmations": 30,
                  "hashLink": "https://bscscan.com/tx/",
                  "coinType": "bep20",
                  "networks": [
                      1
                  ],
                  "dynamicWithFee": 1,
                  "minWithMultiplier": 6,
                  "address": {
                      "startingLetter": [
                          "0x"
                      ]
                  },
                  "withdrawalNotes": [
                      "This is SFM (SAFEMOON v2), which has been recently migrated. Please make sure that you are using the right version of SafeMoon for transfer",
                      "Withdrawal Fee is 10% of your transaction amount or network fee, whichever is higher",
                      "Do not withdraw directly to a ICO. We will not credit your account with tokens from that sale"
                  ],
                  "tradeNotes": [
                      {
                          "type": -1,
                          "text": "Please do your risk management properly. Such meme tokens can be much volatile and risky."
                      }
                  ],
                  "depositWarningNotes": [
                      "This is SFM (SAFEMOON v2), which has been recently migrated. Please make sure that you are using the right version of SafeMoon for transfer",
                      "Depositing SAFEMOON V1 into V2 addresses will burn your entire deposit. So please swap it to V2 before depositing.",
                      "**Deposit Transaction Fee:** 10% of the amount of tokens transferred.",
                      "i.e. **Actual amount of tokens deposited into your Bitbns account** = Amount of Tokens transferred - Deposit Transaction Fee",
                      "This **fee goes to SAFEMOON blockchain** as per their tokenomics, not to Bitbns",
                      "Why the additional 10% apart from the transaction's? 10% is deducted to move funds from user address to hot wallet."
                  ],
                  "withdrawWarningNotes": [
                      "This is SFM (SAFEMOON v2), which has been recently migrated. Please make sure that you are using the right version of SafeMoon for transfer",
                      "**Withdraw Transaction Fee:** 10% of the amount of tokens transferred/network fee, whichever is the highest (tokenomics, duh!)"
                  ],
                  "withdNwOn": [
                      1
                  ],
                  "depoNwOn": [
                      1
                  ]
              },
              "gari": {
                  "coinId": 460,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/gari.png",
                  "coinName": "Gari Network",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.01,
                  "minDeposit": 10,
                  "withdrawalFee": 1,
                  "minimumWithdrawal": 1.5,
                  "hashLink": "https://explorer.solana.com/tx/",
                  "coinType": "spl",
                  "networks": [
                      4
                  ],
                  "confirmations": 100,
                  "withdNwOn": [
                      4
                  ],
                  "depoNwOn": [
                      4
                  ],
                  "spl": {
                      "withdrawalFee": 1,
                      "minimumWithdrawal": 5
                  }
              },
              "cnw": {
                  "coinId": 473,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/cnw.png",
                  "coinName": "CoinWealth",
                  "floatPlaces": 2,
                  "tradeFloatPlaces": 2,
                  "inrDecimals": 3,
                  "minTradeAmt": 1,
                  "minDeposit": 10,
                  "networks": [
                      1,
                      3
                  ],
                  "withdNwOn": [
                      1,
                      3
                  ],
                  "depoNwOn": [
                      1,
                      3
                  ],
                  "coinType": "bep20"
              },
              "ape": {
                  "coinId": 476,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ape.png",
                  "coinName": "ApeCoin",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.001,
                  "minDeposit": 10,
                  "networks": [
                      0
                  ],
                  "withdNwOn": [
                      0
                  ],
                  "depoNwOn": [
                      0
                  ]
              },
              "ic15": {
                  "coinId": 477,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ic15.png",
                  "coinName": "IC15",
                  "floatPlaces": 8,
                  "tradeFloatPlaces": 8,
                  "minTradeAmt": 0.0001,
                  "usdtDecimals": 0,
                  "inrDecimals": 0
              },
              "ufarm": {
                  "coinId": 478,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/ufarm.png",
                  "coinName": "UniFarm",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "inrDecimals": 4,
                  "minTradeAmt": 1,
                  "minDeposit": 10,
                  "networks": [
                      0,
                      1,
                      3
                  ],
                  "withdNwOn": [
                      0,
                      1,
                      3
                  ],
                  "depoNwOn": [
                      0,
                      1,
                      3
                  ]
              },
              "rfox": {
                  "coinId": 479,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/rfox.png",
                  "coinName": "RFOX",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "inrDecimals": 3,
                  "minTradeAmt": 1,
                  "minDeposit": 10,
                  "networks": [
                      0,
                      1
                  ],
                  "withdNwOn": [
                      0,
                      1
                  ],
                  "depoNwOn": [
                      0,
                      1
                  ],
                  "coinType": "erc20"
              },
              "dep": {
                  "coinId": 480,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/dep.png",
                  "coinName": "DEAPcoin",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "inrDecimals": 3,
                  "minTradeAmt": 1,
                  "minDeposit": 10,
                  "networks": [
                      0,
                      1
                  ],
                  "withdNwOn": [
                      0,
                      1
                  ],
                  "depoNwOn": [
                      0,
                      1
                  ],
                  "coinType": "erc20"
              },
              "trace": {
                  "coinId": 485,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/trace.png",
                  "coinName": "Trace Network Labs",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 1,
                  "minDeposit": 50,
                  "networks": [
                      0,
                      3
                  ],
                  "withdNwOn": [
                      0,
                      3
                  ],
                  "depoNwOn": [
                      0,
                      3
                  ],
                  "coinType": "erc20",
                  "ordersStart": 1650897000000
              },
              "luna": {
                  "coinId": 491,
                  "coinIcon": "https://bitbns.com/assets/img/coinIcons/luna.png?",
                  "coinName": "Terra 2.0",
                  "floatPlaces": 4,
                  "tradeFloatPlaces": 4,
                  "minTradeAmt": 0.01,
                  "withdNwOn": [],
                  "depoNwOn": [],
                  "tradeNotes": [
                      {
                          "type": -1,
                          "text": "Buying LUNA might be extremely risky. Risk management is very crucial"
                      }
                  ]
              }
          }
      ]
  }
];
