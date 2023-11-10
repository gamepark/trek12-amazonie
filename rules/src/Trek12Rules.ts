import { isCustomMoveType, MaterialMove, RollItem, SecretMaterialRules } from '@gamepark/rules-api'
import { MaterialType } from './material/MaterialType'
import { LocationType } from './material/LocationType'
import { rules } from './configuration/RuleDefinitions'
import { hidingStrategies } from './configuration/HidingStrategies'
import { locationsStrategies } from './configuration/LocationStrategies'
import sample from 'lodash/sample'
import { PlayerId } from './Trek12Options'


export class Trek12Rules extends SecretMaterialRules<PlayerId, MaterialType, LocationType> {

  rules = rules
  hidingStrategies = hidingStrategies
  locationsStrategies = locationsStrategies

  roll(move: RollItem): number {
    if (move.itemType === MaterialType.GreenDice) {
      return super.roll(move) + 1
    }
    return super.roll(move)
  }
}
