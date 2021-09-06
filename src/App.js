import "./App.css";
import EnrollmentForm from "./Components/EnrollmentForm";
import { Theme, ThemeProvider } from '@chakra-ui/react';

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <div className="App">
      <EnrollmentForm />
    </div>
    </ThemeProvider>
  );
}

export default App;
