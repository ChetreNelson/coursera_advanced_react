import { useTheme } from "../utils/contexts";
import "./Styles.css";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        onChange={toggleTheme}
        type="checkbox"
        checked={theme === "light"}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
