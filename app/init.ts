import { TableBuild } from './models/table'
import { Teams } from './initTeams'
import { Round as Round1 } from './rounds/1'
import { Round as Round2 } from './rounds/2'
import { Round as Round3 } from './rounds/3'
import { Round as Round4 } from './rounds/4'
import { Round as Round5 } from './rounds/5'
import { Round as Round6 } from './rounds/6'
import { Round as Round7 } from './rounds/7'
import { Round as Round8 } from './rounds/8'
import { Round as Round9 } from './rounds/9'
import { Round as Round10 } from './rounds/10'
import { Round as Round11 } from './rounds/11'
import { Round as Round12 } from './rounds/12'

const Table = new TableBuild(Teams, [
  Round1,
  Round2,
  Round3,
  Round4,
  Round5,
  Round6,
  Round7,
  Round8,
  Round9,
  Round10,
  Round11,
  Round12
])
Table.showTableGroup()
Table.showTableComplete()
