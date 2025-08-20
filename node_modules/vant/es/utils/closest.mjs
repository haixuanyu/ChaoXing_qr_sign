function closest(arr, target) {
  return arr.reduce(
    (pre, cur) => Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur
  );
}
export {
  closest
};
