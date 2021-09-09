import React, { Suspense } from "react";
import { renderRoutes } from "react-router-config";
import routes from "../../router/index";

function PageMain() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {renderRoutes(routes)}
      </Suspense>
    </div>
  );
}

export default PageMain;
