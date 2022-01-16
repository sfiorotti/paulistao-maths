export function groupBy (list: any[], key: string): any {
  return list.reduce(function (index, next) {
    (index[next[key]] = index[next[key]] || []).push(next)
    return index
  }, {})
}
