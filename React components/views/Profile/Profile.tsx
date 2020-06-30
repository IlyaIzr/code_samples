import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Props } from './typings';

// Style
import './Profile.scss';

// Components
import LoaderAbsolute from 'components/auxiliary-things/LoaderAbsolute';

// Other
import { MapStateToPropsType, MapDispatchToPropsType, OwnPropsType } from './typings';
import {
  ProfileSearchRouter,
  ProfileAddPhotoRouter,
  ProfileEditRouter,
  ProfileIncreaseRouter,
} from 'settings/settingRoutes';

export const Profile: React.FunctionComponent<Props> = () => (
  <div className="profile_right_container">
    <Suspense fallback={LoaderAbsolute}>
      <Switch>
        <Route path={ProfileSearchRouter.path} component={ProfileSearchRouter.component} />
        <Route path={ProfileIncreaseRouter.path} component={ProfileIncreaseRouter.component} />
        <Route path={ProfileEditRouter.path} component={ProfileEditRouter.component} />
        <Route path={ProfileAddPhotoRouter.path} component={ProfileAddPhotoRouter.component} />
        <Route path="/profile/*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Suspense>
  </div>
);

const mapStateToProps = (): MapStateToPropsType => ({});

const mapDispatchToProps: MapDispatchToPropsType = {};

export const connector = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType>(
  mapStateToProps,
  mapDispatchToProps,
);
