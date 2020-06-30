export type MapStateToPropsType = {};

export type MapDispatchToPropsType = {};

export type Background = 'light' | 'dark' | 'default';

export type OwnPropsType = {
  text: string;
  href: string;
  background: Background;
};

export type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;
