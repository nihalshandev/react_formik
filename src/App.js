import "./App.css";
// import EnrollmentForm from "./Components/EnrollmentForm";
import { ThemeProvider, Theme } from "@chakra-ui/react";
// import { Theme } from "@chakra-ui/react";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
