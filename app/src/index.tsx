import { GameProvider, setupTranslation } from '@gamepark/react-game'
import { Trek12AmazonieOptionsSpec } from '@gamepark/trek12-amazonie/Trek12AmazonieOptions'
import { Trek12AmazonieRules } from '@gamepark/trek12-amazonie/Trek12AmazonieRules'
import { Trek12AmazonieSetup } from '@gamepark/trek12-amazonie/Trek12AmazonieSetup'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { trek12AmazoniaAnimations } from './animations/Trek12AmazoniaAnimations'
import App from './App'
import { locators } from './locator/Locators'
import { material } from './material/Material'
import translations from './translations.json'
import { Tutorial } from './tutorial/Tutorial'

setupTranslation(translations, { debug: false })

ReactDOM.render(
  <StrictMode>
    <GameProvider game="trek12-amazonie"
                  GameSetup={Trek12AmazonieSetup}
                  Rules={Trek12AmazonieRules}
                  optionsSpec={Trek12AmazonieOptionsSpec}
                  material={material}
                  locators={locators}
                  animations={trek12AmazoniaAnimations}
                  tutorial={new Tutorial()}
                  theme={{
                    root: {
                      background: {
                        image: process.env.PUBLIC_URL + '/cover-1920.jpg',
                        overlay: 'rgba(0, 0, 0, 0.7)'
                      }
                    },
                    dialog: {
                      color: '#6B4135',
                      backgroundColor: '#FEF9F5'
                    }
                  }}
    >
      <App/>
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)

