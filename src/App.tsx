import { useVehicles } from "./api";
import viteLogo from "/vite.svg";

function App() {
  const { data } = useVehicles();

  console.log(data);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Hello Baby</h1>
    </>
  );
}

export default App;
