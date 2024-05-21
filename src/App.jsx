import React, { Suspense } from "react";
import routes from "./Routes/AllRoutes";
import { PublicRoute } from "./Routes/PublicRoutes";
import { PrivateRoute } from "./Routes/PrivateRoutes";
import GeneralLayout from "./Layout/GeneralLayout/index";
import "./Assets/scss/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Component = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={
                  <>
                    <GeneralLayout
                      isPublic={route.isPublic}
                      isGuest={route.isGuest}
                      isPrivate={route.isPrivate}
                      isAuth={route.isAuth}
                      theme={route.theme ?? "black"}
                    >
                      <Suspense fallback={<div>loading...</div>}>
                        {!route.isPublic ? (
                          <PrivateRoute
                            props={route}
                            role={route?.role}
                            Component={Component}
                          />
                        ) : (
                          <PublicRoute
                            props={route}
                            role={route?.role}
                            Component={Component}
                          />
                        )}
                      </Suspense>
                    </GeneralLayout>
                  </>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
