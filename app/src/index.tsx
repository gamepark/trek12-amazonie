import { GameProvider, MaterialGameAnimations, setupTranslation } from '@gamepark/react-game'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import translations from './translations.json'
import { Trek12Setup } from '@gamepark/trek12/Trek12Setup'
import { Trek12Rules } from '@gamepark/trek12/Trek12Rules'
import { Trek12OptionsSpec } from '@gamepark/trek12/Trek12Options'
import { locators } from './locator/Locators'
import { material } from './material/Material'

setupTranslation(translations, { debug: false })

ReactDOM.render(
  <StrictMode>
    <GameProvider game="trek12"
                  GameSetup={Trek12Setup}
                  Rules={Trek12Rules}
                  optionsSpec={Trek12OptionsSpec}
                  material={material}
                  locators={locators}
                  animations={new MaterialGameAnimations()}
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

