import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Logitn } from "../components/pages/Login";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Logitn />
      </Route>
    </Switch>
  );
});
