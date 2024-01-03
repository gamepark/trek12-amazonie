import { LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location, Coordinates } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { explorationMapDescription } from '../../material/ExplorationMapDescription'
import { PlayerReminder } from './PlayerReminder'

export class ExplorationMapDescription extends LocationDescription {
  
  borderRadius = 1
  alwaysVisible = true

  getSize(){
    return {width:6.5, height:2}
  }

  getLocations(context: MaterialContext): Location[] {
    return context.rules.players.map((player) => ({
      type: LocationType.ExplorationMap,
      player
    }))
  }

  getCoordinates(location: Location, context: LocationContext): Coordinates {
    const base = getBaseCoordinates(context.rules.game.players.length)

    return {
      ...base,
      x: (base.x + ((explorationMapDescription.width + 0.9) * ((location.player!-1) % 3))),
      y: base.y + (location.player! < 4 ? 0 : 20),
      z: 10
    }
  }

  content = PlayerReminder
}

function getBaseCoordinates(players:number):Coordinates{
  switch(players){
    case 1:
      return {x:-25.3,y:-3.5,z:0}
    case 2:
    case 3:
      return {x:-25.3,y:6.5,z:0}
    case 4:
    case 5:
    case 6:
    default:
      return {x:-25.3,y:-3.5,z:0}
  }
}