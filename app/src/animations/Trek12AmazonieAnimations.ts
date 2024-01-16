import { MaterialGameAnimations } from '@gamepark/react-game'
import { isCreateItem } from '@gamepark/rules-api'

export const trek12AmazonieAnimations = new MaterialGameAnimations()
trek12AmazonieAnimations.when().move(isCreateItem).none()
