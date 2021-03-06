import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Logitn } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoguinUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoguinUserProvider>
        <Route exact path="/">
          <Logitn />
        </Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout> {route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoguinUserProvider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
