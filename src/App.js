import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Header from "@components/header";
import routes from "./router/index";
import "@/assets/css/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {renderRoutes(routes)}
    </BrowserRouter>
  );
}

export default App;
