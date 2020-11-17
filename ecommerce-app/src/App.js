import { React, Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Browse, SignIn, SignUp, Checkout } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import Media from "react-media";

export function App() {
  const { user } = useAuthListener();

  return (
    <Media
      queries={{
        small: "(max-width: 430px)",
        acceptable: "(min-width: 431px)",
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.small && (
            <p style={{ color: "white" }}>
              The screen is too small!!! Please re-size the screen to see the
              APP!
            </p>
          )}
          {matches.acceptable && (
            <Router>
              <Switch>
                <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.BROWSE}
                  path={ROUTES.SIGN_IN}
                >
                  <SignIn />
                </IsUserRedirect>
                <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.BROWSE}
                  path={ROUTES.SIGN_UP}
                >
                  <SignUp />
                </IsUserRedirect>
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                  <Browse />
                </ProtectedRoute>
                <ProtectedRoute user={user} path={ROUTES.CHECKOUT}>
                  <Checkout />
                </ProtectedRoute>
                <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.BROWSE}
                  path={ROUTES.HOME}
                >
                  <Home />
                </IsUserRedirect>
              </Switch>
            </Router>
          )}
        </Fragment>
      )}
    </Media>
  );
}
