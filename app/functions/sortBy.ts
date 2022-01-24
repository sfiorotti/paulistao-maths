import { Team } from '../models/teams'
import './string.extensions'

function compare (a: any, b: any, key: string): number {
  if (typeof a[key] === 'string' && a[key].toRemoveSpecialCharacter() < b[key].toRemoveSpecialCharacter()) return -1
  if (typeof a[key] === 'string' && a[key].toRemoveSpecialCharacter() > b[key].toRemoveSpecialCharacter()) return 1
  if (typeof a[key] === 'number' && a[key] > b[key]) return -1
  if (typeof a[key] === 'number' && a[key] < b[key]) return 1
  return 0
}

export function sortBy (list: Team[], key: string): Team[] {
  return list.sort(function (a, b) {
    return compare(a, b, key)
  })
}

export function sequenceSortBy (list: Team[]): Team[] {
  return list.sort(function (a, b) {
    const comparePoints = compare(a, b, 'points')
    if (comparePoints !== 0) return comparePoints

    const compareWon = compare(a, b, 'won')
    if (compareWon !== 0) return compareWon

    const compareDifference = compare(a, b, 'goalsDifference')
    if (compareDifference !== 0) return compareDifference

    const compareGoalsFor = compare(a, b, 'goalsFor')
    if (compareGoalsFor !== 0) return compareGoalsFor

    const compareName = compare(a, b, 'name')
    if (compareName !== 0) return compareName

    return 0
  })
}
