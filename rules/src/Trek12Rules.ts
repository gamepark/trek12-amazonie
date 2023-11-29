import {
  CompetitiveScore,
  HidingStrategy,
  MaterialGame,
  MaterialItem,
  MaterialMove,
  PositiveSequenceStrategy,
  SecretMaterialRules,
  TimeLimit
} from '@gamepark/rules-api'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { ChooseResultRule } from './rules/ChooseResultRule'
import { DiscoverRule } from './rules/DiscoverRule'
import { EndOfGameRule } from './rules/EndOfGameRule'
import { Score } from './rules/helper/Score'
import { RollDiceRule } from './rules/RollDiceRule'
import { RuleId } from './rules/RuleId'
import { PlayerId } from './Trek12Options'

export const hideIdWhenNotRotated: HidingStrategy = (
  item: MaterialItem, player?: PlayerId
) => {
  return !item.location.rotation ? [] : ['id']
}

export class Trek12Rules extends SecretMaterialRules<PlayerId, MaterialType, LocationType>
  implements CompetitiveScore<MaterialGame<PlayerId, MaterialType, LocationType>, MaterialMove<PlayerId, MaterialType, LocationType>, PlayerId>,
    TimeLimit<MaterialGame<PlayerId, MaterialType, LocationType>, MaterialMove<PlayerId, MaterialType, LocationType>, PlayerId> {

  getScore(playerId: PlayerId): number {
    return new Score(this.game, playerId).total
  }

  giveTime(): number {
    return 20
  }

  rules = {
    [RuleId.RollDice]: RollDiceRule,
    [RuleId.ChooseResult]: ChooseResultRule,
    [RuleId.EndOfGameRule]: EndOfGameRule,
    [RuleId.Discover]: DiscoverRule
  }

  hidingStrategies = {
    [MaterialType.ObservationCard]: {
      [LocationType.Observations]: hideIdWhenNotRotated
    }
  }

  locationsStrategies = {
    [MaterialType.NumberCard]: {
      [LocationType.Numbers]: new PositiveSequenceStrategy()
    },
    [MaterialType.ObservationCard]: {
      [LocationType.Observations]: new PositiveSequenceStrategy(),
    },
    [MaterialType.Cross]: {
      [LocationType.OperatorChoice]: new PositiveSequenceStrategy()
    }
  }
}
