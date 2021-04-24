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

const Search = lazy(() => import('client/ui/page/Search'));

export const Routers = () => {

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Test work
        </title>
      </Helmet>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/card" component={Search} />
            <Route path="*" component={Search} />
            <Route path="/404" />
            <Redirect to="/404" />
          </Switch>
        </Suspense>
    </React.Fragment>
  );
};
