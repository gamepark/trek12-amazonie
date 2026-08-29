import { MaterialGameAnimations } from '@gamepark/react-game'
import { isCreateItem } from '@gamepark/rules-api'

export const trek12AmazoniaAnimations = new MaterialGameAnimations()
trek12AmazoniaAnimations.configure(isCreateItem).skip()
