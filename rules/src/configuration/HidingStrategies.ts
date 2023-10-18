import { HidingStrategy, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { PlayerId } from '../Trek12Options'


export const hideCoinWhenNotRotated: HidingStrategy = (
  item: MaterialItem, player?: PlayerId
) => {
  return item.rotation?.y ? [] : ['id']
}


export const hidingStrategies: Partial<Record<MaterialType, Partial<Record<LocationType, HidingStrategy<PlayerId, LocationType>>>>> = {
  [MaterialType.ObservationCard]: {
    [LocationType.Observations]: hideCoinWhenNotRotated
  }
}