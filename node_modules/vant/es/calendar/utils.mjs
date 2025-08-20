import { createNamespace } from "../utils/index.mjs";
const [name, bem, t] = createNamespace("calendar");
const formatMonthTitle = (date) => t("monthTitle", date.getFullYear(), date.getMonth() + 1);
function compareMonth(date1, date2) {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  if (year1 === year2) {
    const month1 = date1.getMonth();
    const month2 = date2.getMonth();
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }
  return year1 > year2 ? 1 : -1;
}
function compareDay(day1, day2) {
  const compareMonthResult = compareMonth(day1, day2);
  if (compareMonthResult === 0) {
    const date1 = day1.getDate();
    const date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }
  return compareMonthResult;
}
const cloneDate = (date) => new Date(date);
const cloneDates = (dates) => Array.isArray(dates) ? dates.map(cloneDate) : cloneDate(dates);
function getDayByOffset(date, offset) {
  const cloned = cloneDate(date);
  cloned.setDate(cloned.getDate() + offset);
  return cloned;
}
function getMonthByOffset(date, offset) {
  const cloned = cloneDate(date);
  cloned.setMonth(cloned.getMonth() + offset);
  if (cloned.getDate() !== date.getDate()) {
    cloned.setDate(0);
  }
  return cloned;
}
function getYearByOffset(date, offset) {
  const cloned = cloneDate(date);
  cloned.setFullYear(cloned.getFullYear() + offset);
  if (cloned.getDate() !== date.getDate()) {
    cloned.setDate(0);
  }
  return cloned;
}
const getPrevDay = (date) => getDayByOffset(date, -1);
const getNextDay = (date) => getDayByOffset(date, 1);
const getPrevMonth = (date) => getMonthByOffset(date, -1);
const getNextMonth = (date) => getMonthByOffset(date, 1);
const getPrevYear = (date) => getYearByOffset(date, -1);
const getNextYear = (date) => getYearByOffset(date, 1);
const getToday = () => {
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};
function calcDateNum(date) {
  const day1 = date[0].getTime();
  const day2 = date[1].getTime();
  return (day2 - day1) / (1e3 * 60 * 60 * 24) + 1;
}
function isLastRowInMonth(date, offset = 0) {
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const currentPos = offset + date.getDate() - 1;
  const lastDayPos = offset + lastDay.getDate() - 1;
  return Math.floor(currentPos / 7) === Math.floor(lastDayPos / 7);
}
export {
  bem,
  calcDateNum,
  cloneDate,
  cloneDates,
  compareDay,
  compareMonth,
  formatMonthTitle,
  getDayByOffset,
  getMonthByOffset,
  getNextDay,
  getNextMonth,
  getNextYear,
  getPrevDay,
  getPrevMonth,
  getPrevYear,
  getToday,
  getYearByOffset,
  isLastRowInMonth,
  name,
  t
};
