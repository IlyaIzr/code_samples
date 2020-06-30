// компоненты
import { Switch, Route, withRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import {
  HomeRouter,
  SearchRouter,
  Page404Router,
  MatchRouter,
  ProfileRouter,
} from './settings/settingRoutes';
import LoaderPage from './views/LoaderPage';
// библиотеки

// остальное
import './App.scss';
import { PersonalMenu } from 'components/auxiliary-things/PersonalMenu/PersonalMenu';
import Footer from 'components/footers';
import { MapStateToPropsType } from 'components/headers/HeaderMenu/typings';

type RouterObjectType = {
  path: string;
  component: React.LazyExoticComponent<React.FunctionComponent<MapStateToPropsType>>;
};

// Этот парень оборачивает компонент футером, личным меню
// и флекс-обёрткой, чтобы меню было слева, а сам компонент - справа.
const StaticWraper = (RouterObject: RouterObjectType) => {
  return (
    <Route path={RouterObject.path}>
      <section className="flex_wrapper">
        <PersonalMenu />
        <RouterObject.component />
      </section>
      <Footer />
    </Route>
  );
};

const App: React.FunctionComponent = () => (
  <Suspense fallback={LoaderPage}>
    <Switch>
      <Route exact path={HomeRouter.path} component={HomeRouter.component} />
      <Route path={SearchRouter.path} component={SearchRouter.component} />
      <Route path={MatchRouter.path} component={MatchRouter.component} />
      <StaticWraper path={ProfileRouter.path} component={ProfileRouter.component} />
      {/*404 компонент должен быть последним в списке ОБЯЗАТЕЛЬНО*/}
      <Route path={Page404Router.path} component={Page404Router.component} />
    </Switch>
  </Suspense>
);

export default withRouter(App);
