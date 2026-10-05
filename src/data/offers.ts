export interface OfferItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  price: string;
  priceSubtitle: string;
  financeHighlight: string;
  image: string;
  immediateDelivery: boolean;
  page: number;
}

export const FEATURED_OFFERS: OfferItem[] = [
  // Página 1
  {
    id: 'polo-comfortline-1',
    name: 'Polo Comfortline',
    category: 'Hatchback',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 34.500.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $20.000.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-vNCepMmYkGpNqmkIR3Qb6BsCDUIYmiBuhwRaANghsd5yQYjxisSe1DyjKczita33h3W1X2mvqxvP4wCLGpNVX54QXuGUln1_xjhZq0gFIePJ00nQKmk4NrZr1Br_d2Slx3y-feyoDj0N7FX4ihQ-3UGd4UMZPRagJ3pMOUrg5lvog6hcrD9AQgrm6Vd0VPwMaCuZnkPWBVYQDkufH8U-VfS84tFl7DEjpmS94Cw1Jt42GCt5j-aG5XFL3Kjl-fPnk7bc9uw-5o0PdY0',
    immediateDelivery: true,
    page: 1
  },
  {
    id: 'polo-highline-1',
    name: 'Polo Highline',
    category: 'Hatchback',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 36.800.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $20.000.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAssawHG2EN_wi7jUnLeyOOvoldj5kETRwUPbbWevNodCtWWGEInOsLS6FggGYOOO40eifXMmsgQGXVYnllpKt1fyzFuCjejbo9mSi5gbbYcEiWPLXCpCMYroxmdqGgn-_cT58uouSlqXWBTKG2YmK3-viqP7cjOxdQAj11P8OeRUakX-yseYvVt0s5clyP8f5x5uvKdxHL502_UaSVmf6siJSRi1_DsrjWR3BtOGjeh7pnutAdvoOkeHsxUkYbp4zFmco4PIuZg8A-X_A',
    immediateDelivery: true,
    page: 1
  },
  {
    id: 'nivus-comfortline-1',
    name: 'Nuevo Nivus Comfortline',
    category: 'Crossover Coupé',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 38.500.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $23.000.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKHIPEX6mSNp7WZBQ3E1ApAviaO0N2hguD7IyGyk-SlJweAkef_XpFr03ttFRYylSmpMwrUk4xuO-xEneAfwHdXlZkzdILbs7X2387V2fkKKvq_9OhsRXJ8FRIR_7A9EelPGxgVeIlLfynGWhVL9jwyEpeiSpqZNkkYXNKPgWoPFKvcIGAkH08RklpAT_LhpaYDVKV2Ssxwa6gz4F8I1_AnnlTW6HiE3-JMyQtkikcZn7AcKIHlapbAVxbbNaYGKxXqUYAraBjRHllwl0',
    immediateDelivery: true,
    page: 1
  },

  // Página 2
  {
    id: 'tera-trend-2',
    name: 'Tera Trend',
    category: 'SUV Compacto',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 31.200.000',
    priceSubtitle: 'Precio Preventa',
    financeHighlight: 'Financiá hasta $15.500.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDhht95JFPSsNgTf3Nl06ABP3QrhuqaXvdvBIYhrdejiTlT45boC64utt6UvZrucHRCDQqMSIqQpwU84BykseA9rqiF3ZF1AIYWW6stypvKnKsOmNlDUxeWbswUKviErPU1zGA7IZgLgAtXSD6sevVzDSrpcPaXqpvwjooQ0jZzdcPMpnbxRMDiuoXsPWhhh3X6TYW2orKrfg7_ruccvCjtZbDttCLxOLpaWt0ZGoju6_iH6PzgJbRYQ',
    immediateDelivery: false,
    page: 2
  },
  {
    id: 'tera-comfort-2',
    name: 'Tera Comfort',
    category: 'SUV Compacto',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 34.500.000',
    priceSubtitle: 'Precio Preventa',
    financeHighlight: 'Financiá hasta $23.000.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrurXf9_QiD8m1AWPaAXTUXu_ZjQZ3VbwMotIFCb1O_yYT_9u2Erk6_7XN_h6MsXP-pmpAiAz0aRXCIsOsmlTq2YWaj_nVa4zXz5qG4-88F_G7o8NIqyyyJDU03JdMGa8gfHCEKS9ck0TsGVHivs0lPcw_BkcOwSy1mHEfV-SX6BTpxUToHdfRbJeGyWtMnnMWMmFqeCdxIBREVcl-Q_ws5bb7niuU0ewyaRMx1T5YdvCH6fAOw8u-ww',
    immediateDelivery: false,
    page: 2
  },
  {
    id: 'tera-high-2',
    name: 'Tera High',
    category: 'SUV Compacto',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 38.600.000',
    priceSubtitle: 'Precio Preventa',
    financeHighlight: 'Financiá hasta $15.500.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDhht95JFPSsNgTf3Nl06ABP3QrhuqaXvdvBIYhrdejiTlT45boC64utt6UvZrucHRCDQqMSIqQpwU84BykseA9rqiF3ZF1AIYWW6stypvKnKsOmNlDUxeWbswUKviErPU1zGA7IZgLgAtXSD6sevVzDSrpcPaXqpvwjooQ0jZzdcPMpnbxRMDiuoXsPWhhh3X6TYW2orKrfg7_ruccvCjtZbDttCLxOLpaWt0ZGoju6_iH6PzgJbRYQ',
    immediateDelivery: false,
    page: 2
  },

  // Página 3
  {
    id: 't-cross-trendline-3',
    name: 'T-Cross Trendline',
    category: 'SUVW Urbano',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 37.400.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $15.500.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_zdxT1oYFVkTq8qdSZW0s_Nqdrk_WOyCa8nbZZDftjd-wdWE54OiQoLrF9W6TX4dPxUcG_k871I2xgUp3QHVhsQ_kREuY1lEmdzOJYXowGowCb8t_oT66GUP6UjRPGc5HSLoK9TvYryv6kwlccPUOSmT1qzToDqOOEsZM431zA2M9aVCw96fOTjHGykHZHq_L1udHEenxOsjzcE2NYYAiLZC1AZdTWaYUh48kjHv9VY1LLW710ePs1g',
    immediateDelivery: true,
    page: 3
  },
  {
    id: 'taos-highline-3',
    name: 'Taos Highline',
    category: 'SUVW Mediano',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 53.100.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $20.000.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcPP4cD76FNc-mThMvkKHSTvaesjReCSVvpuV8TjZ2srqSsw0C8NZXBuDr3IbUm3m7mRikk8m-xEeAxIB2LFuLouwXipBhiYrbruMpEIN2rHBLUNq2-bM6cNMqaACagE4jJTek2hNESyGqN60naR7OSpl1JQ7R-jvBBqsz6z3fj_orhndj9fHBpAkhgOUi8EKH1THQQxtbnryCUFJzo5lMv7tVYNMER4aKX1gZVGU4i6kMbDtiPuvzrR5gFylCzM0srlHE38u8-zLeorw',
    immediateDelivery: true,
    page: 3
  },
  {
    id: 'vento-gli-3',
    name: 'Vento GLI 350 TSI DSG',
    category: 'Sedán Deportivo',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 60.000.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $15.500.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCasxs8WgzCyghRX5CJhz9ppfG3kA2s87eQXzuamPYkQY1Bjov9dFZC-RDuLdrujlAzoN1A23ncBRif0jb_CIteRvGHsU3tXv56BxAAKa_fxJX0UOmOf78dJlQ6bcV-wut1WdLPWDLy5bRGSyw3H2OZePvfZLTnaGS9cQ7Gwh42WjxsFDkDn8Z5SL2KwG3yVFE_uFzzeZDP_e5OZP_uUQdeV_aPJayayU-01gW9blAT-AXYLB1hcyVU4g',
    immediateDelivery: true,
    page: 3
  },

  // Página 4
  {
    id: 'amarok-trendline-4',
    name: 'Amarok Trendline TDI MT 4x2',
    category: 'Pick-Up',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 45.000.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $26.000.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWIOlNXT8SXAz4b4F3LddQJz1DPOco-w730W_viuiT8n0ddPTBWMLH5eMICcc6k0k66-x70vn3aZ8VgYbOubhqSBV_no3yeqvJ-aCeLDsybtbybF08nwzU1AjhkWRJZNlZTQQUO1mlaDv5DLTH0M7WY_MMv7ljjsnv1KfcgbrHVrg5_Us7-lKBZrTu7NPfe3XRvy_9GWfsFpuGsWIJDHHyjFzFw8N4p-XCnoSFQcI5-bAtrk1NUCdSgQ',
    immediateDelivery: true,
    page: 4
  },
  {
    id: 'amarok-comfortline-v6-4',
    name: 'Amarok Comfortline V6 AT 4x4',
    category: 'Pick-Up V6 4x4',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 57.900.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $24.500.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxZ576evQOh4Z-UgADudH49_kdk9ZhbqKvuszxX8gBMte2DLwz5YOkRY4X1NSgiF2WCSX81WkUnaK_oieLgCFPsO41YK0H4OKKbtRrBGkB11JR9OBtfPH4LR5Q-4QwNeb-3ZX5MPnEbKcNXMJjV702rmmvJ3VmotFRu_PrI8CFAMxm_WbaMIOtf3rFnfQg0ugJTXSM6xxonlMfap_h8KbKZ974suKIt7Dx75wzE3doAu73lSFCnlkCnw',
    immediateDelivery: true,
    page: 4
  },
  {
    id: 'saveiro-cd-4',
    name: 'Saveiro Cabina Doble',
    category: 'Pick-Up Compacta',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 33.000.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $15.500.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAdr1C4Mp2fbSB9YUYgijjo3rX7FFq9xOtwYIWzAMaMWXeemAAwylWf3enRX7uIAmsVGsR4u-DI0L6MFSLJ330Q_GVnAF6l21dxz6caY4PljN3S3WeTyyMwN8HaMXQqoiDfiBah2cW4_GLPFn7R3fGGEaujFu6v5pTiS5Ez2v6mbTNuqYaB3oS2EPOhONEhI9ZAISVHZZkG6Fj-s3zy5w_vpWlKZ3xzUKN7STRE9gTs3g8GP8G8NYeIg',
    immediateDelivery: true,
    page: 4
  },

  // Página 5
  {
    id: 'amarok-highline-v6-5',
    name: 'Amarok Highline V6 AT',
    category: 'Pick-Up V6 4x4',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 66.700.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $24.500.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjZqbwqBrVynklxAlV41qo11oP61q53_nG5DwF9sCBI1gfPquX5SsTqJQNQMOofXVpTTbTAUn6tAbLackt01zQuDwL8-FFloidLszPyC04DWm3RxSYkEaZlnKI922dv2K_Hy4JkoA6bbZpDhEGA2xMNm46yWqC--J23XgPe15b-Zj2eluHrOYVFmLnVF2wDC_LthYxmtbCoRs8JZnoLte_Emq1BbQ21jkZ1xEpFNRR1FRMFJyRQGc9M49EpzaSF8L5Nhw',
    immediateDelivery: true,
    page: 5
  },
  {
    id: 'amarok-extreme-v6-5',
    name: 'Amarok Extreme V6 AT',
    category: 'Tope de Gama',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 76.000.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $24.500.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkZoZYDJ8wpW_EXmmkCXsnHgu8CAEJunmgWN0a72YTQOS_h0dR7qQUUFyjI6B_2-8wKcSmThZM3X7qug4PuboKHYYWcDJSxuAkaiJcUl683QQ_w9Zp4XsfjHKGnFe0dG8dwjYmmcfYEmK-SHhL6ubSYy5XzuJUzscZxn_540cNue4AZeNhOVK7N0Ory_qur3TEhy-P2wSTbSWJIxUCcj_Yfoii-P7PnIWkDnKlOrJi0AbI64e_ntWRFSc3_9ZGY4kVaB8',
    immediateDelivery: true,
    page: 5
  },
  {
    id: 'tera-outfit-5',
    name: 'Tera Outfit Special Edition',
    category: 'SUV Edición Especial',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 41.100.000',
    priceSubtitle: 'Precio Preventa',
    financeHighlight: 'Financiá hasta $15.500.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBycvu0s4S1fdk5Vq5-twqelLYJnPFIl0AyNE8gLRtdPBn6RFivHqAaNuxxYY6HOr09cBxrmwXxN6Oo8tV87y_LM-hoHcK5zlk8dOArEnN8SPSsnmliYz1w9u7gJHYJRJj90UdJ366Y3Z3zzXcD_qGiPhX4cYBcMXMnZZARJSyIUwFrRZzDLgRDVaga3DMoCBzVokegNpxoHVU-OwSLiKEqzB3nQalT6KBAIlw-PCVdcneQScNG37-C_Bp9IHjIqEJ_aZI',
    immediateDelivery: false,
    page: 5
  },

  // Página 6
  {
    id: 't-cross-comfortline-6',
    name: 'T-Cross Comfortline',
    category: 'SUVW Urbano',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 42.500.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $15.500.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNnQhLesRdIfN3sadF3BP8Hqm3g9har8zDtrUlG81bNiMaEZvfZZcRogtlZul3vszRjt0b8cp0fVlGwhANKRUBDiOENNDAG-HPk-sMRXotVLnuOhyUzHInZ0MiqxA6FQxHDBcDP5pfdMjNE99_GDq0OsVTq7yKQgSCjPkp6LzBscG2xa2L9N8BL502iJ2WTD7bho1-Ldon36OT_NDFgGuGTEQqEIt9GejtwoXKj1kpWCRsjMPx6uL1KyqKSynpbSwrtHY',
    immediateDelivery: true,
    page: 6
  },
  {
    id: 'taos-bitono-6',
    name: 'Taos Highline Bitono',
    category: 'SUVW Mediano',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 54.700.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $20.000.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOv9HiDuaBSoRMd2PZp23KlWALqL43TyU6vHjzU4xXXdQ2JI923Gb7iXEVgYa5dY5_vKSaJtMYHL_BCs3d1ra5Bl3AzIg0BMFXNO0W-fp1_Fkw1S3Li4U7kQtRpp1uVpI4OdexWOlTGSOa7JK3f6O9BpMfhi_TmDnfG7GEeJoAL-E5Qkm_aGERL1XfFx0YD0UEeHzxGZWuLOwZ1NvC9qiCJ5ze22SLsTGQVx5JCnZaX1g9YG6racqXcMO5PemRAhF_h84',
    immediateDelivery: true,
    page: 6
  },
  {
    id: 'amarok-comfortline-at-6',
    name: 'Amarok Comfortline AT 4x2',
    category: 'Pick-Up Automática',
    badge: 'Tasa 0% en 18 meses',
    price: '$ 54.000.000',
    priceSubtitle: 'Precio de Lista',
    financeHighlight: 'Financiá hasta $26.000.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYy8WPQmNQMD6amg-TtOk8Dcr6dew_Y7kqlrDF7MMEy4xAfOloS-u7cr9DPuUm3k_24OpAxr08hLgpbTnxRqn6f9tyfdJlP2JZblr67KCgoPzG7HCYEVo0wVYBh2TzsFBrBgot8QZAoB5noNlIHErHKnrR-DGVT_ykhVYhVW-yVmALw6-R-s3YYyUDr-eQvoHNiwdEzvh0dxGbOROwbvYbR_qSi1Q1lINwa2GLQ99UdW8AyWuWD31uQjup0SMLPLFcCgI',
    immediateDelivery: true,
    page: 6
  }
];
