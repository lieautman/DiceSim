import { theme1 } from "../../theme/theme";
import NoOfDiceOptions from "./options/NoOfDiceOptions";
import RerollButtons from "./rerollButtons/RerollButtons";
import RollButton from "./rollButton/RollButton";
function OptionsBar() {
  return (
    <div
      style={{
        backgroundColor: theme1.optionsColor,
        height: "100vh",
        width: "20vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <NoOfDiceOptions></NoOfDiceOptions>
      <RerollButtons></RerollButtons>
      <RollButton></RollButton>
    </div>
  );
}

export default OptionsBar;
