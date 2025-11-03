import "./App.css";
import { FormBuilderProvider } from "./context/FormBuilderContext";
import FormBuilderLayout from "./FormBuilderLayout";

function App() {

  return (
      <FormBuilderProvider>
        <FormBuilderLayout />
      </FormBuilderProvider>
  );
}

export default App;
