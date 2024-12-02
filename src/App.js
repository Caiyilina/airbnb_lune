import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "@/router";
import AppFooter from "@/components/app-footer";
import { useScrollTop } from "./hooks";

const App = memo(() => {
  useScrollTop();
  return (
    <div className="app">
      {/* <div className="header"><AppHeader /></div> */}
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer">
        <AppFooter />
      </div>
    </div>
  );
});

export default App;
