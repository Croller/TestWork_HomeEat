import React, {
  Suspense,
  lazy,
} from 'react';
import { Helmet } from 'react-helmet';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Loader } from 'client/ui/components/_block/Loader';

const Cocktail = lazy(() => import('client/ui/page/Cocktail'));

export const Routers = () => (
  <React.Fragment>
    <Helmet>
      <title>
        Test work
      </title>
    </Helmet>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          path={[
            '/cocktail/search',
            '/cocktail/card/:id',
          ]}
          component={Cocktail}
        />
        <Route path="/404" />
        <Redirect to="/cocktail/search" />
      </Switch>
    </Suspense>
  </React.Fragment>
);
