import { SecretMaterialRules } from '@gamepark/rules-api'
import { hidingStrategies } from './configuration/HidingStrategies'
import { locationsStrategies } from './configuration/LocationStrategies'
import { rules } from './configuration/RuleDefinitions'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerId } from './Trek12Options'


export class Trek12Rules extends SecretMaterialRules<PlayerId, MaterialType, LocationType> {

  rules = rules
  hidingStrategies = hidingStrategies
  locationsStrategies = locationsStrategies
}
