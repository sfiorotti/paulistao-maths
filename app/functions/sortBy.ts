import './string.extensions'

export function sortBy (list: any[], key: string): any {
  return list.sort(function compare (a, b) {
    if (a[key].toRemoveSpecialCharacter() < b[key].toRemoveSpecialCharacter()) return -1
    if (a[key].toRemoveSpecialCharacter() > b[key].toRemoveSpecialCharacter()) return 1
    return 0
  })
}
