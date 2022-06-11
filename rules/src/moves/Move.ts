import EndGame from "./EndGame"
import IncrementObservation from "./IncrementObservation"
import RevealNewObservation from "./RevealNewObservation"
import SetupNewRound from "./SetupNewRound"
import WriteNumber from "./WriteNumber"

type Move = WriteNumber | SetupNewRound | RevealNewObservation | IncrementObservation | EndGame

export default Move