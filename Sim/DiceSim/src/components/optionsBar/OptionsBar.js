import { theme1 } from "../../theme/theme";
import NoOfDiceOptions from "./options/NoOfDiceOptions";
import RollButton from "./rollButton/RollButton";
function OptionsBar() {
  return (
    <div
      style={{
        backgroundColor: theme1.optionsColor,
        height: "100vh",
        width: "20vw",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <NoOfDiceOptions></NoOfDiceOptions>
      <RollButton></RollButton>
    </div>
  );
}

export default OptionsBar;
