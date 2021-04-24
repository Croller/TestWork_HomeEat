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
import { Layout } from 'client/ui/components/_block/Layout';

const Search = lazy(() => import('client/ui/page/Search'));

export const Routers = () => (
  <React.Fragment>
    <Helmet>
      <title>
        Test work
      </title>
    </Helmet>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Layout>
          <Route path="/card" component={Search} />
          <Route exact path="*" component={Search} />
        </Layout>
      </Switch>
    </Suspense>
  </React.Fragment>
);
