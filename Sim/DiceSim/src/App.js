import HistoryBar from "./components/historyBar/HistoryBar";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <HistoryBar></HistoryBar>
        <DiceBox></DiceBox>
      </div>
    </div>
  );
}

export default App;
