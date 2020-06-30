import { ProfileSearchState, SearchResult } from 'redux/profileSearch/profileSearchTypes';

export type MapStateToPropsType = {
  searchData: ProfileSearchState;
  results?: Array<SearchResult>;
};

export type MapDispatchToPropsType = {};

export type OwnPropsType = {};

export type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;
