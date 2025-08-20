var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => stdin_default
});
module.exports = __toCommonJS(stdin_exports);
var stdin_default = {
  name: "Ime i prezime",
  tel: "Broj telefona",
  save: "Sa\u010Duvaj",
  clear: "Prazno",
  cancel: "Otka\u017Ei",
  confirm: "Potvrdi",
  delete: "Brisanje",
  loading: "U\u010Ditavanje...",
  noCoupon: "Jo\u0161 nema kupona",
  nameEmpty: "Molimo unesite ime",
  addContact: "Dodaj kontakte",
  telInvalid: "Molimo unesite broj telefona",
  vanCalendar: {
    end: "Zavr\u0161etak",
    start: "Po\u010Detak",
    title: "Izaberite Datum",
    weekdays: [
      "Nedelja",
      "Ponedeljak",
      "Utorak",
      "Sreda",
      "\u010Cetvrtak",
      "Petak",
      "Subota"
    ],
    monthTitle: (year, month) => `${year}/${month}`,
    rangePrompt: (maxRange) => `Izaberite do ${maxRange} dana`
  },
  vanCascader: {
    select: "Molimo izaberite "
  },
  vanPagination: {
    prev: "Prethodna strana",
    next: "Sledec\u0301a strana"
  },
  vanPullRefresh: {
    pulling: "Prevucite nadole da osve\u017Eite...",
    loosing: "Otpustite da osve\u017Eite..."
  },
  vanSubmitBar: {
    label: "Ukupno:"
  },
  vanCoupon: {
    unlimited: "No threshold",
    discount: (discount) => `${discount} puta`,
    condition: (condition) => `Dostupno za preko ${condition} juana`
  },
  vanCouponCell: {
    title: "Kupon",
    count: (count) => `Dostupan ${count}`
  },
  vanCouponList: {
    exchange: "Razmeni",
    close: "Ne koristi",
    enable: "Iskoristi",
    disabled: "Nedostupno",
    placeholder: "Unesite promo kod"
  },
  vanAddressEdit: {
    area: "Region",
    areaEmpty: "Molimo odaberite region",
    addressEmpty: "Molimo upi\u0161ite adresu",
    addressDetail: "Adresa",
    defaultAddress: "Postavi kao podrazumevanu adresu za isporuku"
  },
  vanAddressList: {
    add: "Dodaj adresu"
  }
};
