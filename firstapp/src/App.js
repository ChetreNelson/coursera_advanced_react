import "./App.css";
import { Header, Page } from "./Context";
import { useTheme } from "./Context/utils/contexts";
import DessertsList from "./DessertList";
import StudentForm from "./Form/StudentForm";
import CustomConsoleLogHook from "./Hooks/custom";
import CustomHookAssignment from "./Hooks/custom/assignment";
import RandomUser from "./Hooks/fetchData";
import ReducerHook from "./Hooks/useReducer";
import RefHook from "./Hooks/useRef";
import GiftCard from "./Hooks/useState/GiftCard";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  const { theme } = useTheme();

  return (
    <>
      {/* <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      {/* <h2>List of low calorie desserts:</h2>
      <ul>
        <DessertsList props={desserts} />
      </ul> */}
      {/* <StudentForm/>
       */}

      {/* <Header />
      <Page />
      <GiftCard/> */}
      {/* </div> */}

      {/* <RandomUser/> */}
      {/* <ReducerHook/> */}
      {/* <RefHook /> */}
      {/* <CustomConsoleLogHook /> */}
      <CustomHookAssignment/>
    </>
  );
}

export default App;
