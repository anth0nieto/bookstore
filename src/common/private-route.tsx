import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import routes from "common/routes";

interface PrivateRouteProps extends RouteProps {
  component: any;
  isSignedIn: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isSignedIn, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isSignedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: routes.LOGIN_MODULE,
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
