import { LocationType } from '../material/LocationType'
import { LocationStrategy, PositiveSequenceStrategy } from '@gamepark/rules-api'
import { MaterialType } from '../material/MaterialType'
import { PlayerId } from '../Trek12Options'

export const locationsStrategies:  Partial<Record<MaterialType, Partial<Record<LocationType, LocationStrategy<PlayerId, MaterialType, LocationType>>>>> = {
  [MaterialType.NumberCard]: {
    [LocationType.Numbers]: new PositiveSequenceStrategy()
  },
  [MaterialType.ObservationCard]: {
    [LocationType.Observations]: new PositiveSequenceStrategy(),
  }
}
