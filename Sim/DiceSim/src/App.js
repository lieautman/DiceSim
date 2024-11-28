import DiceBox from "./components/diceBox/DiceBox";
import OptionsBar from "./components/optionsBar/OptionsBar";
import { theme1 } from "./theme/theme";

function App() {
  return (
    <div
      style={{
        backgroundColor: theme1.backgroundColor,
        height: "100vh",
        width: "100vw",
        display: "flex"
      }}
    >
      <OptionsBar></OptionsBar>
      <DiceBox></DiceBox>
    </div>
  );
}

export default App;
