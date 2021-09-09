import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "@components";
import PageMain from "./pages/pageMain";
import "@/assets/css/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageMain />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
