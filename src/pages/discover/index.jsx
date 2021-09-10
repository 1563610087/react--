import { NavBar } from "@/components";
import { renderRoutes } from "react-router-config";
function Discover(props) {
  const { route } = props;
  return (
    <div>
      <NavBar />
      {renderRoutes(route.routes)}
    </div>
  );
}

export default Discover;
