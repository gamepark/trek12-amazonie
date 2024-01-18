/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialTutorial, TutorialStep } from '@gamepark/react-game'
import { isCustomMoveType } from '@gamepark/rules-api/dist/material/moves/CustomMove'
import { isCreateItemType } from '@gamepark/rules-api/dist/material/moves/items/CreateItem'
import { isRoll } from '@gamepark/rules-api/dist/material/moves/items/RollItem'
import { LocationType } from '@gamepark/trek12-amazonie/material/LocationType'
import { MaterialType } from '@gamepark/trek12-amazonie/material/MaterialType'
import { Operator } from '@gamepark/trek12-amazonie/material/Operator'
import { CustomMoveType } from '@gamepark/trek12-amazonie/rules/CustomMoveType'
import { PlayerId } from '@gamepark/trek12-amazonie/Trek12AmazonieOptions'
import range from 'lodash/range'
import { Trans } from 'react-i18next'
import Images from '../images/Images'
import { nodeCoordinates } from '../locator/ExplorationNodeLocator'
import { TutorialSetup } from './TutorialSetup'


export class Tutorial extends MaterialTutorial<PlayerId, MaterialType, LocationType> {
  version = 1
  options = { players: 1 }
  setup = new TutorialSetup()

  players = [{ id: 1 }]

  steps: TutorialStep[] = [
    {
      popup: {
        text: () => <Trans defaults="tuto.welcome"><strong/><em/></Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.goal"><strong/><em/></Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.dice"><strong/><em/></Trans>,
        position: { x: 45, y: 5 }
      },
      focus: (game) => [
        this.material(game, MaterialType.YellowDice),
        this.material(game, MaterialType.GreenDice),
      ]
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.operator"><strong/><em/></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: () => [
        ...range(4).map((x) => this.location(LocationType.OperatorChoice).id(Operator.MIN).x(x)),
        ...range(4).map((x) => this.location(LocationType.OperatorChoice).id(Operator.MAX).x(x)),
        ...range(4).map((x) => this.location(LocationType.OperatorChoice).id(Operator.MINUS).x(x)),
        ...range(4).map((x) => this.location(LocationType.OperatorChoice).id(Operator.PLUS).x(x)),
        ...range(4).map((x) => this.location(LocationType.OperatorChoice).id(Operator.MULTIPLY).x(x))

      ]
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.choose.op.1"><strong/><em/></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: (game) => [
        this.location(LocationType.OperatorChoice).player(1).id(Operator.MIN).x(0),
        this.material(game, MaterialType.YellowDice),
        this.material(game, MaterialType.GreenDice),
      ],
      move: {
        filter: (move) => {
          return isCreateItemType(MaterialType.Cross)(move) && move.item.location.id === Operator.MIN
        }
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.operator.exp"><strong/><em/></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: () => [
        this.location(LocationType.OperatorChoice).player(1).id(Operator.MIN).x(0)
      ],
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.choose.value.1"><strong/><em/></Trans>,
        position: { x: -40, y: 20 }
      },
      focus: () => [
        this.location(LocationType.ExpeditionNode).player(1).id(15)
      ],
      move: {
        filter: (move) => isCreateItemType(MaterialType.ExpeditionNodeValue)(move) && move.item.location.id === 15,
        randomize: (move) => {
          if (isRoll(move)) {
            move.location.rotation = 1
          }

          return move;
        }
      },
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.obs.exp"><strong/><em/></Trans>,
        position: { x: -45, y: 0 }
      },
      focus: (game) => [
        this.material(game, MaterialType.ObservationCard),
        this.material(game, MaterialType.NumberCard)
      ],
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.obs.choose"><strong/><em/></Trans>,
        position: { x: -50, y: -10 }
      },
      focus: () => [
        ...range(6).map((c) => this.location(LocationType.ObservationScores).id(0).player(1).x(c)),
        ...range(6).map((c) => this.location(LocationType.ObservationScores).id(1).player(1).x(c )),
        ...range(6).map((c) => this.location(LocationType.ObservationScores).id(2).player(1).x(c))
      ],
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.obs.score"><strong/><em/></Trans>,
        position: { x: -50, y: -10 }
      },
      focus: () => [
        ...range(6).map((c) => this.location(LocationType.ObservationScores).id(0).player(1).x(c)),
        ...range(6).map((c) => this.location(LocationType.ObservationScores).id(1).player(1).x(c )),
        ...range(6).map((c) => this.location(LocationType.ObservationScores).id(2).player(1).x(c))
      ],
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.choose.op.2"><strong/><em/></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: (game) => [
        this.location(LocationType.OperatorChoice).player(1).id(Operator.MAX).x(0),
        this.material(game, MaterialType.GreenDice),
      ],
      move: {
        filter: (move) => isCreateItemType(MaterialType.Cross)(move) && move.item.location.id === Operator.MAX
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.pirogue"><strong/><em/></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: (game) => [
        this.location(LocationType.OperatorChoice).player(1).id(Operator.MAX).x(0),
        this.material(game, MaterialType.GreenDice),
      ],
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.choose.value.2"><strong/><em/></Trans>,
        position: { x: -40, y: 20 }
      },
      focus: () => [
        this.location(LocationType.ExpeditionNode).player(1).id(16)
      ],
      move: {
        filter: (move) => isCreateItemType(MaterialType.ExpeditionNodeValue)(move) && move.item.location.id === 16,
        randomize: (move) => {
          if (isRoll(move)) {
            move.location.rotation = move.itemType === MaterialType.GreenDice? 4: 3
          }

          return move;
        }
      },
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.path"><strong/><em/></Trans>
      },
      focus: () => [
        this.location(LocationType.Path).player(1).id([15,16])
      ]
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.path.exp"><strong/><em/></Trans>
      },
      focus: () => [
        this.location(LocationType.Path).player(1).id([15,16])
      ]
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.path.score"><strong/><em/></Trans>
      },
      focus: () => [
        this.location(LocationType.Path).player(1).id([15,16])
      ]
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.choose.op.3"><strong/><em/><span css={iconStyle(Images.MinusIcon)} /></Trans>,
        position: { x: -20, y: -15 }
      },
      focus: (game) => [
        this.location(LocationType.OperatorChoice).player(1).id(Operator.MINUS).x(0),
        this.material(game, MaterialType.YellowDice),
        this.material(game, MaterialType.GreenDice),
      ],
      move: {
        filter: (move) => isCreateItemType(MaterialType.Cross)(move) && move.item.location.id === Operator.MINUS
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.choose.value.2"><strong/><em/></Trans>,
        position: { x: -40, y: 15 }
      },
      focus: () => [
        this.location(LocationType.ExpeditionNode).player(1).id(17)
      ],
      move: {
        filter: (move) => isCreateItemType(MaterialType.ExpeditionNodeValue)(move) && move.item.location.id === 17,
        randomize: (move) => {
          if (isRoll(move)) {
            move.location.rotation = 1
          }

          return move;
        }
      },
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.area"><strong/><em/></Trans>,
        position: { x: 15, y: -10}
      },
      focus: (game) => [
        this.material(game, MaterialType.AreaNode),
        this.location(LocationType.ExpeditionNode).player(1).id(16),
        this.location(LocationType.ExpeditionNode).player(1).id(17)
      ],
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.area.exp"><strong/><em/></Trans>,
        position: { x: 15, y: -10}
      },
      focus: (game) => [
        this.material(game, MaterialType.AreaNode),
        this.location(LocationType.ExpeditionNode).player(1).id(16),
        this.location(LocationType.ExpeditionNode).player(1).id(17)
      ],
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.area.score"><strong/><em/></Trans>,
        position: { x: 15, y: -10}
      },
      focus: (game) => [
        this.material(game, MaterialType.AreaNode),
        this.location(LocationType.ExpeditionNode).player(1).id(16),
        this.location(LocationType.ExpeditionNode).player(1).id(17)
      ],
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.end.1"><strong/><em/></Trans>,
        position: { x: -15, y: -15}
      },
      focus: (game) => [
        ...range(4).map((x) => this.location(LocationType.OperatorChoice).id(Operator.MIN).x(x)),
        ...range(4).map((x) => this.location(LocationType.OperatorChoice).id(Operator.MAX).x(x)),
        ...range(4).map((x) => this.location(LocationType.OperatorChoice).id(Operator.MINUS).x(x)),
        ...range(4).map((x) => this.location(LocationType.OperatorChoice).id(Operator.PLUS).x(x)),
        ...range(4).map((x) => this.location(LocationType.OperatorChoice).id(Operator.MULTIPLY).x(x))
      ],
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.end.2"><strong/><em/></Trans>,
        position: { x: 30, y: -15}
      },
      focus: (game) => [
        this.location(LocationType.DangerTick).player(1),
        ...nodeCoordinates
          .flatMap((c, index) => [15, 16, 17].includes(index)? []: this.location(LocationType.ExpeditionNode).id(index).player(1)),
      ],
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.go"><strong/><em/></Trans>
      }
    },
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
  display:inline-block;
`
