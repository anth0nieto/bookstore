import routes from "common/routes";
import React from "react";
import LoginContainer from "login/components/login-container";
import BookingContainer from "booking/components/booking-container";
import { RootState } from "common/store";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "./private-route";
import _isEmpty from "lodash/isEmpty";

const Content: React.FC = () => {
  const isLogged: boolean = useSelector(
    (root: RootState) => !_isEmpty(root.login.user.userInfo.sessionTokenBck)
  );

  return (
    <Switch>
      <Route path={routes.LOGIN_MODULE}>
        {!isLogged ? (
          <LoginContainer />
        ) : (
          <Redirect to={routes.BOOKING_MODULE} />
        )}
      </Route>
      <PrivateRoute isSignedIn={isLogged} component={BookingContainer} />
    </Switch>
  );
};

export default Content;
