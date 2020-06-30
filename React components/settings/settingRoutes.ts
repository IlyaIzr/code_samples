import React from 'react';

export const HomeRouter = {
  path: '/',
  component: React.lazy(() => import('../views/Home')),
};

export const SearchRouter = {
  path: '/search',
  component: React.lazy(() => import('../views/Search')),
};

export const MatchRouter = {
  path: '/match',
  component: React.lazy(() => import('../views/Match')),
};

export const ProfileRouter = {
  path: '/profile',
  component: React.lazy(() => import('../views/Profile')),
};

export const ProfileSearchRouter = {
  path: '/profile/search',
  component: React.lazy(() => import('../views/Profile/ProfileSearch')),
};
export const ProfileIncreaseRouter = {
  path: '/profile/increase',
  component: React.lazy(() => import('../views/Profile/ProfileIncrease')),
};
export const ProfileEditRouter = {
  path: '/profile/edit',
  component: React.lazy(() => import('../views/Profile/ProfileEdit')),
};
export const ProfileAddPhotoRouter = {
  path: '/profile/addphoto',
  component: React.lazy(() => import('./../views/Profile/ProfileAddPhoto/')),
};

export const Page404Router = {
  path: '*',
  component: React.lazy(() => import('../views/Page404')),
};
