export function removeFromArray(array, value) {
  return array.filter((item) => {
    return item.id != value.id;
  });
}
