import CustomForm from "./components/Form";
import RenderList from "./components/RenderList";

function App() {
  return (
    <div className="my-5">
      <h3 className="text-center font-mono font-bold text-2xl">
        Zustand Todo App
      </h3>
      <CustomForm />
      <RenderList />
    </div>
  );
}

export default App;
