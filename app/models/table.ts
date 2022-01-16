import { groupBy } from '../functions/groupBy'
import { sortBy } from '../functions/sortBy'
import { Team } from './teams'

interface Table {
  teams: Team[]
  showTableGroup(): void
  showTableComplete(): void
}

export class TableBuild implements Table {
  teams: Team[]

  constructor (teams: Team[]) {
    this.teams = teams
  }

  showTableGroup (): void {
    const sortTeams = sortBy(this.teams, 'group')
    const table = groupBy(sortTeams, 'group')
    console.log(table)
  }

  showTableComplete (): void {
    const sortTeams = sortBy(this.teams, 'group')
    console.log(sortTeams)
  }
}
