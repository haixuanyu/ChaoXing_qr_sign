var stdin_default = {
  name: "Nazwisko",
  tel: "Telefon",
  save: "Zapisz",
  clear: "Wyczy\u015B\u0107",
  cancel: "Anuluj",
  confirm: "Potwierd\u017A",
  delete: "Usu\u0144",
  loading: "\u0141adowanie...",
  noCoupon: "Brak kupon\xF3w",
  nameEmpty: "Wprowad\u017A nazwisko",
  addContact: "Dodaj kontakt",
  telInvalid: "Nieprawid\u0142owy numer telefonu",
  vanCalendar: {
    end: "Koniec",
    start: "Start",
    title: "Kalendarz",
    weekdays: ["Nie", "Pon", "Wto", "\u015Aro", "Czw", "Pi\u0105", "Sob"],
    monthTitle: (year, month) => `${year}/${month}`,
    rangePrompt: (maxRange) => `Wybierz nie wi\u0119cej ni\u017C ${maxRange} dni`
  },
  vanCascader: {
    select: "Wybierz"
  },
  vanPagination: {
    prev: "Poprzednia",
    next: "Nast\u0119pna"
  },
  vanPullRefresh: {
    pulling: "Poci\u0105gnij aby od\u015Bwie\u017Cy\u0107...",
    loosing: "Pu\u015B\u0107 aby od\u015Bwie\u017Cy\u0107..."
  },
  vanSubmitBar: {
    label: "Suma:"
  },
  vanCoupon: {
    unlimited: "Unlimited",
    discount: (discount) => `${discount * 10}% zni\u017Cki`,
    condition: (condition) => `Przynajmniej ${condition}`
  },
  vanCouponCell: {
    title: "Kupon",
    count: (count) => `Aktywnych kupon\xF3w: ${count}`
  },
  vanCouponList: {
    exchange: "U\u017Cyj",
    close: "Zamknij",
    enable: "Dost\u0119pne",
    disabled: "Niedost\u0119pne",
    placeholder: "Kod kuponu"
  },
  vanAddressEdit: {
    area: "Obszar",
    areaEmpty: "Wybierz obszar",
    addressEmpty: "Adres nie mo\u017Ce by\u0107 pusty",
    addressDetail: "Adres",
    defaultAddress: "Ustaw jako domy\u015Blny adres"
  },
  vanAddressList: {
    add: "Dodaj nowy adres"
  }
};
export {
  stdin_default as default
};
