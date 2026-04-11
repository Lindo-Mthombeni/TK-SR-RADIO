import "./App.css";
// import { ThemeProvider, isDarkMode } from "./Themes";
import { toggleTheme } from "./lib/theme";
import { Card } from "./lib/Card";
import { Button } from "./lib/Button";

function App() {
  return (
    <>
      {/* <ThemeProvider> */}
        <h1 className="heading">hello </h1><br />
        <Button variant="primary"
          onClick={toggleTheme}
        >Toggle Theme</Button><br /><br />
        <Card variant="primary" children="Hello"/><br />
        <Card variant="secondary" children="Me sec"/>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
