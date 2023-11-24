import { hideItemId, HidingStrategy, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { PlayerId } from '../Trek12Options'


export const hideIdWhenNotRotated: HidingStrategy = (
  item: MaterialItem, player?: PlayerId
) => {
  return !item.location.rotation ? [] : ['id']
}


export const hidingStrategies: Partial<Record<MaterialType, Partial<Record<LocationType, HidingStrategy<PlayerId, LocationType>>>>> = {
  [MaterialType.ObservationCard]: {
    [LocationType.Observations]: hideIdWhenNotRotated
  }
}
