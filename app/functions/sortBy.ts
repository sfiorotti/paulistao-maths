import './string.extensions'

export function sortBy (list: any[], key: string): any {
  return list.sort(function compare (a, b) {
    if (typeof a[key] === 'string' && a[key].toRemoveSpecialCharacter() < b[key].toRemoveSpecialCharacter()) return -1
    if (typeof a[key] === 'string' && a[key].toRemoveSpecialCharacter() > b[key].toRemoveSpecialCharacter()) return 1
    if (typeof a[key] === 'number' && a[key] > b[key]) return -1
    if (typeof a[key] === 'number' && a[key] < b[key]) return 1
    return 0
  })
}
