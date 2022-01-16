import { groupBy } from '../functions/groupBy'
import { sortBy } from '../functions/sortBy'
import { Round } from './rounds'
import { Team } from './teams'

interface Table {
  teams: Team[]
  rounds: Round[]
  showTableGroup(): void
  showTableComplete(): void
}

export class TableBuild implements Table {
  teams: Team[]
  rounds: Round[]

  constructor (teams: Team[], rounds: Round[]) {
    this.teams = teams
    this.rounds = rounds
  }

  showTableGroup (): void {
    const sortTeams = sortBy(this.teams, 'group')
    const table = groupBy(sortTeams, 'group')
    console.log(table)
  }

  showTableComplete (): void {
    const sortTeams = sortBy(this.teams, 'name')
    console.log(sortTeams)
  }
}
