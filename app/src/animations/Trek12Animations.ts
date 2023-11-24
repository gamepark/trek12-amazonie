import { AnimationStep } from '@gamepark/react-client'
import { MaterialAnimationContext, MaterialGameAnimations } from '@gamepark/react-game'
import { isCreateItemType, isDeleteItemType, MaterialMove } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/trek12/material/MaterialType'

export class Trek12Animations extends MaterialGameAnimations {

  override getDuration(move: MaterialMove, context: MaterialAnimationContext): number {
    if (
      (isCreateItemType(MaterialType.Path)(move))
      || isCreateItemType(MaterialType.AreaNode)(move)
      || isCreateItemType(MaterialType.ExpeditionNodeValue)(move)
      || isDeleteItemType(MaterialType.AreaNode)(move)
    ) {
      console.log(JSON.parse(JSON.stringify(move)))
      return 0
    }

    return super.getDuration(move, context);
  }
}
