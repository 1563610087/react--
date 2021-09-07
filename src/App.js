import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import  routes  from './router/index'
import '@/assets/css/index.css'

function App() {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
}

export default App;
