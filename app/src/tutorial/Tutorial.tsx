import { css } from '@emotion/react'
import { MaterialTutorial, TutorialStep } from '@gamepark/react-game'
import { MaterialContext } from '@gamepark/react-game/dist/locators'
import { isCreateItemType, isRoll, MaterialGame } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { Operator } from '@gamepark/trek12-amazonie/material/Operator'
import { PlayerId } from '@gamepark/trek12-amazonie/Trek12AmazonieOptions'
import { range } from 'es-toolkit'
import { Trans } from 'react-i18next'
import Images from '../images/Images'
import { TutorialSetup } from './TutorialSetup'


export class Tutorial extends MaterialTutorial<PlayerId, MaterialType, LocationType> {
  version = 2
  options = { players: 1 }
  setup = new TutorialSetup()

  players = [{ id: 1 }]

  steps: TutorialStep[] = [
    {
      popup: {
        text: () => <Trans i18nKey="tuto.welcome"><strong/><em/></Trans>
      }
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.goal"><strong/><em/></Trans>
      }
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.dice"><strong/><em/></Trans>,
        position: { x: 45, y: 5 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.YellowDice),
          this.material(game, MaterialType.GreenDice)
        ]
      })
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.operator"><strong/><em/></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: () => ({
        locations: [
          ...range(4).map(x => ({ type: LocationType.OperatorChoice, id: Operator.MIN, x })),
          ...range(4).map(x => ({ type: LocationType.OperatorChoice, id: Operator.MAX, x })),
          ...range(4).map(x => ({ type: LocationType.OperatorChoice, id: Operator.MINUS, x })),
          ...range(4).map(x => ({ type: LocationType.OperatorChoice, id: Operator.PLUS, x })),
          ...range(4).map(x => ({ type: LocationType.OperatorChoice, id: Operator.MULTIPLY, x }))
        ]
      })
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.choose.op.1"><strong/><em/><span css={iconStyle(Images.MinIcon)}/></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: (game) => ({
        locations: [{ type: LocationType.OperatorChoice, id: Operator.MIN, x: 0 }],
        materials: [this.material(game, MaterialType.YellowDice)]
      }),
      move: {
        filter: (move) => {
          return isCreateItemType(MaterialType.Cross)(move) && move.item.location.id === Operator.MIN
        }
      }
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.operator.exp"><strong/><em/></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: () => ({
        locations: [{ type: LocationType.OperatorChoice, id: Operator.MIN, x: 0 }]
      })
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.choose.value.1"><strong/><em/></Trans>,
        position: { x: -40, y: 15 }
      },
      focus: () => ({
        locations: [{ type: LocationType.ExpeditionNode, id: 15 }]
      }),
      move: {
        filter: (move) => isCreateItemType(MaterialType.ExpeditionNodeValue)(move) && move.item.location.id === 15,
        interrupt: (move) => isRoll(move)
      }
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.obs.exp"><strong/><em/></Trans>,
        position: { x: -45, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.ObservationCard),
          this.material(game, MaterialType.NumberCard)
        ]
      })
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.obs.choose"><strong/><em/></Trans>,
        position: { x: -45, y: -10 }
      },
      focus: () => ({
        locations: [
          ...range(6).map(x => ({ type: LocationType.ObservationScores, id: 0, x })),
          ...range(6).map(x => ({ type: LocationType.ObservationScores, id: 1, x })),
          ...range(6).map(x => ({ type: LocationType.ObservationScores, id: 2, x }))
        ]
      })
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.obs.score"><strong/><em/></Trans>,
        position: { x: -45, y: -10 }
      },
      focus: (game: MaterialGame, context: MaterialContext) => this.steps[game.tutorial!.step - 1].focus!(game, context),
      move: {
        randomize: (move) => {
          if (isRoll(move)) {
            move.location.rotation = 1
          }
          return move
        }
      }
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.choose.op.2"><strong/><em/><span css={iconStyle(Images.MaxIcon)}/></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: (game) => ({
        locations: [{ type: LocationType.OperatorChoice, id: Operator.MAX, x: 0 }],
        materials: [this.material(game, MaterialType.GreenDice)]
      }),
      move: {
        filter: (move) => isCreateItemType(MaterialType.Cross)(move) && move.item.location.id === Operator.MAX
      }
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.pirogue"><strong/><em/></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: (game: MaterialGame, context: MaterialContext) => this.steps[game.tutorial!.step - 1].focus!(game, context)
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.choose.value.2"><strong/><em/></Trans>,
        position: { x: -40, y: 20 }
      },
      focus: () => ({
        locations: [{ type: LocationType.ExpeditionNode, id: 16 }]
      }),
      move: {
        filter: (move) => isCreateItemType(MaterialType.ExpeditionNodeValue)(move) && move.item.location.id === 16,
        randomize: (move) => {
          if (isRoll(move)) {
            move.location.rotation = move.itemType === MaterialType.GreenDice ? 4 : 3
          }

          return move
        }
      }
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.path"><strong/><em/></Trans>
      },
      focus: () => ({
        locations: [{ type: LocationType.Path, id: [15, 16] }]
      })
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.path.exp"><strong/><em/></Trans>
      },
      focus: (game: MaterialGame, context: MaterialContext) => this.steps[game.tutorial!.step - 1].focus!(game, context)
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.path.score"><strong/><em/></Trans>
      },
      focus: (game: MaterialGame, context: MaterialContext) => this.steps[game.tutorial!.step - 2].focus!(game, context)
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.choose.op.3"><strong/><em/><span css={iconStyle(Images.MinusIcon)}/></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: (game) => ({
        locations: [{ type: LocationType.OperatorChoice, id: Operator.MINUS, x: 0 }],
        materials: [this.material(game, MaterialType.YellowDice), this.material(game, MaterialType.GreenDice)]
      }),
      move: {
        filter: (move) => isCreateItemType(MaterialType.Cross)(move) && move.item.location.id === Operator.MINUS
      }
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.choose.value.2"><strong/><em/></Trans>,
        position: { x: -40, y: 15 }
      },
      focus: () => ({
        locations: [{ type: LocationType.ExpeditionNode, id: 17 }]
      }),
      move: {
        filter: (move) => isCreateItemType(MaterialType.ExpeditionNodeValue)(move) && move.item.location.id === 17,
        randomize: (move) => {
          if (isRoll(move)) {
            move.location.rotation = 1
          }

          return move
        }
      }
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.area"><strong/><em/></Trans>,
        position: { x: 15, y: -10 }
      },
      focus: (game) => ({
        materials: [this.material(game, MaterialType.AreaNode)],
        locations: [
          { type: LocationType.ExpeditionNode, id: 16 },
          { type: LocationType.ExpeditionNode, id: 17 }
        ]
      })
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.area.exp"><strong/><em/></Trans>,
        position: { x: 15, y: -10 }
      },
      focus: (game: MaterialGame, context: MaterialContext) => this.steps[game.tutorial!.step - 1].focus!(game, context)
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.area.score"><strong/><em/></Trans>,
        position: { x: 15, y: -10 }
      },
      focus: (game: MaterialGame, context: MaterialContext) => this.steps[game.tutorial!.step - 2].focus!(game, context)
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.end.1"><strong/><em/></Trans>,
        position: { x: -15, y: -15 }
      },
      focus: () => ({
        locations: [
          ...range(4).map(x => ({ type: LocationType.OperatorChoice, id: Operator.MIN, x })),
          ...range(4).map(x => ({ type: LocationType.OperatorChoice, id: Operator.MAX, x })),
          ...range(4).map(x => ({ type: LocationType.OperatorChoice, id: Operator.MINUS, x })),
          ...range(4).map(x => ({ type: LocationType.OperatorChoice, id: Operator.PLUS, x })),
          ...range(4).map(x => ({ type: LocationType.OperatorChoice, id: Operator.MULTIPLY, x }))
        ]
      })
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.end.2"><strong/><em/></Trans>,
        position: { x: 30, y: -15 }
      },
      focus: () => ({
        locations: [
          { type: LocationType.DangerTick },
          { type: LocationType.ExpeditionNode, id: 15 },
          { type: LocationType.ExpeditionNode, id: 16 },
          { type: LocationType.ExpeditionNode, id: 17 }
        ]
      })
    },
    {
      popup: {
        text: () => <Trans i18nKey="tuto.go"><strong/><em/></Trans>
      }
    }
  ]
}

export const iconStyle = (image: string) => css`
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 1.7em;
  height: 1.7em;
  border-radius: 0.5em;
  margin-bottom: -0.5em;
  filter: drop-shadow(0.1em 0.1em 0.2em gray);
  display: inline-block;
`
