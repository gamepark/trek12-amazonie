import { CompetitiveScore, MaterialGame, MaterialMove, SecretMaterialRules, TimeLimit } from '@gamepark/rules-api'
import { hidingStrategies } from './configuration/HidingStrategies'
import { locationsStrategies } from './configuration/LocationStrategies'
import { rules } from './configuration/RuleDefinitions'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { Score } from './rules/helper/Score'
import { PlayerId } from './Trek12Options'


export class Trek12Rules extends SecretMaterialRules<PlayerId, MaterialType, LocationType>
  implements CompetitiveScore<MaterialGame<PlayerId, MaterialType, LocationType>, MaterialMove<PlayerId, MaterialType, LocationType>, PlayerId>,
    TimeLimit<MaterialGame<PlayerId, MaterialType, LocationType>, MaterialMove<PlayerId, MaterialType, LocationType>, PlayerId> {

  getScore(playerId: PlayerId): number {
    return new Score(this.game, playerId).total
  }

  giveTime(): number {
    return 20
  }

  rules = rules
  hidingStrategies = hidingStrategies
  locationsStrategies = locationsStrategies
}
