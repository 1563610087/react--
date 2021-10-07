import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "@components";
import PageMain from "./pages/pageMain";
import Player from "./pages/player";
import "@/assets/css/index.scss";
import { Provider } from "react-redux"; //引入Provider
import store from "./store"; //引入数据仓库

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <PageMain />
        <Footer />
        <Player />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
