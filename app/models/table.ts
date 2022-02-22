import { groupBy } from '../functions/groupBy'
import { sequenceSortBy, sortBy } from '../functions/sortBy'
import { Round } from './rounds'
import { Team } from './teams'

const columns = ['name', 'points', 'games', 'won', 'drawn', 'lost', 'goalsFor', 'goalsAgainst', 'goalsDifference']

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
    sequenceSortBy(table.A)
    console.table(table.A, columns)

    sequenceSortBy(table.B)
    console.table(table.B, columns)

    sequenceSortBy(table.C)
    console.table(table.C, columns)

    sequenceSortBy(table.D)
    console.table(table.D, columns)
  }

  showTableComplete (): void {
    const sortTeams = sequenceSortBy(this.teams)
    console.table(sortTeams, columns)
  }
}
