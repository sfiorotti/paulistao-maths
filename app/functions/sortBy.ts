export function sortBy (list: any[], key: string): any {
  return list.sort(function compare (a, b) {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
}
