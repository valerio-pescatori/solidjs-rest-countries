interface NameDetails {
  official: string;
  common: string;
}

interface NativeName {
  spa: NameDetails;
  eng: NameDetails;
  ita: NameDetails;
  khm: NameDetails;
  ara: NameDetails;
  heb: NameDetails;
  ron: NameDetails;
  fra: NameDetails;
  mlg: NameDetails;
  lav: NameDetails;
  nep: NameDetails;
  sqi: NameDetails;
  srp: NameDetails;
  nrf: NameDetails;
  ukr: NameDetails;
  kal: NameDetails;
  dan: NameDetails;
  rus: NameDetails;
  tuk: NameDetails;
  por: NameDetails;
  cha: NameDetails;
  hye: NameDetails;
  tha: NameDetails;
  aze: NameDetails;
  slk: NameDetails;
  zho: NameDetails;
  kat: NameDetails;
  jpn: NameDetails;
  tir: NameDetails;
  fin: NameDetails;
  swe: NameDetails;
  gil: NameDetails;
  grn: NameDetails;
  fil: NameDetails;
  msa: NameDetails;
  sag: NameDetails;
  kir: NameDetails;
  afr: NameDetails;
  deu: NameDetails;
  her: NameDetails;
  hgm: NameDetails;
  kwn: NameDetails;
  loz: NameDetails;
  ndo: NameDetails;
  tsn: NameDetails;
  swa: NameDetails;
  kaz: NameDetails;
  kor: NameDetails;
  urd: NameDetails;
  som: NameDetails;
  nya: NameDetails;
  ber: NameDetails;
  tvl: NameDetails;
  cnr: NameDetails;
  amh: NameDetails;
  mey: NameDetails;
  aym: NameDetails;
  que: NameDetails;
  pol: NameDetails;
  bis: NameDetails;
  bul: NameDetails;
  glv: NameDetails;
  pau: NameDetails;
  nno: NameDetails;
  nob: NameDetails;
  smi: NameDetails;
  nld: NameDetails;
  pap: NameDetails;
  nfr: NameDetails;
  uzb: NameDetails;
  nor: NameDetails;
  tur: NameDetails;
  fij: NameDetails;
  hif: NameDetails;
  bel: NameDetails;
  rar: NameDetails;
  sot: NameDetails;
  tet: NameDetails;
  sin: NameDetails;
  tam: NameDetails;
  mri: NameDetails;
  nzs: NameDetails;
  smo: NameDetails;
  tkl: NameDetails;
  zdj: NameDetails;
  lat: NameDetails;
  hmo: NameDetails;
  tpi: NameDetails;
  ssw: NameDetails;
  vie: NameDetails;
  mon: NameDetails;
  ell: NameDetails;
  lao: NameDetails;
  est: NameDetails;
  mya: NameDetails;
  hrv: NameDetails;
  bjz: NameDetails;
  mkd: NameDetails;
  pih: NameDetails;
  nau: NameDetails;
  gle: NameDetails;
  fas: NameDetails;
  bos: NameDetails;
  tgk: NameDetails;
  gsw: NameDetails;
  roh: NameDetails;
  ces: NameDetails;
  kon: NameDetails;
  lin: NameDetails;
  run: NameDetails;
  mlt: NameDetails;
  hun: NameDetails;
  jam: NameDetails;
  cat: NameDetails;
  pov: NameDetails;
  lit: NameDetails;
  ltz: NameDetails;
  hat: NameDetails;
  hin: NameDetails;
  isl: NameDetails;
  arc: NameDetails;
  ckb: NameDetails;
  bwg: NameDetails;
  kck: NameDetails;
  khi: NameDetails;
  ndc: NameDetails;
  nde: NameDetails;
  sna: NameDetails;
  toi: NameDetails;
  tso: NameDetails;
  ven: NameDetails;
  xho: NameDetails;
  zib: NameDetails;
  mfe: NameDetails;
  ton: NameDetails;
  kin: NameDetails;
  nbl: NameDetails;
  nso: NameDetails;
  zul: NameDetails;
  crs: NameDetails;
  cal: NameDetails;
  slv: NameDetails;
  ind: NameDetails;
  ben: NameDetails;
  mah: NameDetails;
  div: NameDetails;
  lua: NameDetails;
  bar: NameDetails;
  dzo: NameDetails;
  niu: NameDetails;
  prs: NameDetails;
  pus: NameDetails;
  fao: NameDetails;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Currencies {
  DOP: Currency;
  GHS: Currency;
  EUR: Currency;
  KHR: Currency;
  USD: Currency;
  BHD: Currency;
  ILS: Currency;
  QAR: Currency;
  RON: Currency;
  MGA: Currency;
  NPR: Currency;
  GBP: Currency;
  JEP: Currency;
  UAH: Currency;
  DKK: Currency;
  MRU: Currency;
  LYD: Currency;
  TMT: Currency;
  AOA: Currency;
  SHP: Currency;
  AMD: Currency;
  THB: Currency;
  AZN: Currency;
  GNF: Currency;
  KYD: Currency;
  XCD: Currency;
  SLL: Currency;
  CNY: Currency;
  GEL: Currency;
  JPY: Currency;
  FKP: Currency;
  ERN: Currency;
  AUD: Currency;
  KID: Currency;
  ARS: Currency;
  PHP: Currency;
  BND: Currency;
  SGD: Currency;
  XOF: Currency;
  XAF: Currency;
  KGS: Currency;
  NAD: Currency;
  ZAR: Currency;
  KES: Currency;
  GIP: Currency;
  KZT: Currency;
  KRW: Currency;
  PKR: Currency;
  SOS: Currency;
  ZMW: Currency;
  MWK: Currency;
  SSP: Currency;
  MAD: Currency;
  TVD: Currency;
  NGN: Currency;
  ETB: Currency;
  CAD: Currency;
  CVE: Currency;
  DZD: Currency;
  PEN: Currency;
  PLN: Currency;
  VUV: Currency;
  BGN: Currency;
  IMP: Currency;
  TZS: Currency;
  NOK: Currency;
  GGP: Currency;
  UZS: Currency;
  TRY: Currency;
  FJD: Currency;
  BYN: Currency;
  GTQ: Currency;
  UYU: Currency;
  CKD: Currency;
  NZD: Currency;
  TWD: Currency;
  LSL: Currency;
  VES: Currency;
  LKR: Currency;
  LRD: Currency;
  CUC: Currency;
  CUP: Currency;
  KMF: Currency;
  KWD: Currency;
  BMD: Currency;
  EGP: Currency;
  JOD: Currency;
  PGK: Currency;
  SZL: Currency;
  VND: Currency;
  MNT: Currency;
  YER: Currency;
  MOP: Currency;
  BSD: Currency;
  SAR: Currency;
  LAK: Currency;
  MMK: Currency;
  HRK: Currency;
  BZD: Currency;
  MKD: Currency;
  RSD: Currency;
  SBD: Currency;
  LBP: Currency;
  IRR: Currency;
  BAM: Currency;
  HNL: Currency;
  TJS: Currency;
  CRC: Currency;
  MDL: Currency;
  CHF: Currency;
  CZK: Currency;
  BRL: Currency;
  BWP: Currency;
  BIF: Currency;
  GYD: Currency;
  SYP: Currency;
  XPF: Currency;
  HUF: Currency;
  WST: Currency;
  TND: Currency;
  JMD: Currency;
  KPW: Currency;
  COP: Currency;
  OMR: Currency;
  MZN: Currency;
  BOB: Currency;
  UGX: Currency;
  HTG: Currency;
  STN: Currency;
  INR: Currency;
  PYG: Currency;
  ANG: Currency;
  SDG: Currency;
  ISK: Currency;
  DJF: Currency;
  AED: Currency;
  IQD: Currency;
  ZWL: Currency;
  MXN: Currency;
  MUR: Currency;
  RUB: Currency;
  TOP: Currency;
  SRD: Currency;
  PAB: Currency;
  RWF: Currency;
  TTD: Currency;
  MYR: Currency;
  SEK: Currency;
  ALL: Currency;
  SCR: Currency;
  IDR: Currency;
  BDT: Currency;
  BBD: Currency;
  MVR: Currency;
  CDF: Currency;
  AWG: Currency;
  GMD: Currency;
  HKD: Currency;
  BTN: Currency;
  NIO: Currency;
  CLP: Currency;
  AFN: Currency;
  FOK: Currency;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Languages {
  spa: string;
  eng: string;
  ita: string;
  khm: string;
  ara: string;
  heb: string;
  ron: string;
  fra: string;
  mlg: string;
  lav: string;
  nep: string;
  sqi: string;
  srp: string;
  nrf: string;
  ukr: string;
  kal: string;
  dan: string;
  rus: string;
  tuk: string;
  por: string;
  cha: string;
  hye: string;
  tha: string;
  aze: string;
  slk: string;
  zho: string;
  kat: string;
  jpn: string;
  tir: string;
  fin: string;
  swe: string;
  gil: string;
  grn: string;
  fil: string;
  msa: string;
  sag: string;
  kir: string;
  afr: string;
  deu: string;
  her: string;
  hgm: string;
  kwn: string;
  loz: string;
  ndo: string;
  tsn: string;
  swa: string;
  kaz: string;
  kor: string;
  urd: string;
  som: string;
  nya: string;
  ber: string;
  tvl: string;
  cnr: string;
  amh: string;
  mey: string;
  aym: string;
  que: string;
  pol: string;
  bis: string;
  bul: string;
  glv: string;
  pau: string;
  nno: string;
  nob: string;
  smi: string;
  nld: string;
  pap: string;
  nfr: string;
  uzb: string;
  nor: string;
  tur: string;
  fij: string;
  hif: string;
  bel: string;
  rar: string;
  sot: string;
  tet: string;
  sin: string;
  tam: string;
  mri: string;
  nzs: string;
  smo: string;
  tkl: string;
  zdj: string;
  lat: string;
  hmo: string;
  tpi: string;
  ssw: string;
  vie: string;
  mon: string;
  ell: string;
  lao: string;
  est: string;
  mya: string;
  hrv: string;
  bjz: string;
  mkd: string;
  pih: string;
  nau: string;
  gle: string;
  fas: string;
  bos: string;
  tgk: string;
  gsw: string;
  roh: string;
  ces: string;
  kon: string;
  lin: string;
  run: string;
  mlt: string;
  hun: string;
  jam: string;
  cat: string;
  pov: string;
  lit: string;
  ltz: string;
  hat: string;
  hin: string;
  isl: string;
  arc: string;
  ckb: string;
  bwg: string;
  kck: string;
  khi: string;
  ndc: string;
  nde: string;
  sna: string;
  toi: string;
  tso: string;
  ven: string;
  xho: string;
  zib: string;
  mfe: string;
  ton: string;
  kin: string;
  nbl: string;
  nso: string;
  zul: string;
  crs: string;
  cal: string;
  slv: string;
  ind: string;
  ben: string;
  mah: string;
  div: string;
  lua: string;
  bar: string;
  dzo: string;
  niu: string;
  prs: string;
  pus: string;
  fao: string;
}

interface Translations {
  ara: NameDetails;
  ces: NameDetails;
  cym: NameDetails;
  deu: NameDetails;
  est: NameDetails;
  fin: NameDetails;
  fra: NameDetails;
  hrv: NameDetails;
  hun: NameDetails;
  ita: NameDetails;
  jpn: NameDetails;
  kor: NameDetails;
  nld: NameDetails;
  per: NameDetails;
  pol: NameDetails;
  por: NameDetails;
  rus: NameDetails;
  slk: NameDetails;
  spa: NameDetails;
  swe: NameDetails;
  urd: NameDetails;
  zho: NameDetails;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Flags {
  png: string;
  svg: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface PostalCode {
  format: string;
  regex: string;
}

export interface RestCountry {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  flag: string;
  maps: Maps;
  population: number;
  fifa: string;
  timezones: string[];
  continents: string[];
  flags: Flags;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}
