import React from 'react';
import { connect } from 'react-redux';
import { Props, MapStateToPropsType, MapDispatchToPropsType, OwnPropsType } from './typings';
import { SearchResult } from 'redux/profileSearch/profileSearchTypes';
import AppStateType from 'redux/rootTypings';

// Style
import './ProfileSearch.scss';

// Components
import SearchCardContainer from './SearchCardContainer';

/**
 * Родительский компонент для поиска в профиле
 * @author [Ilyaizr](https://gitlab.com/IlyaIzr)
 */

const renderSwitch = (searchStatus: string, results?: Array<SearchResult>) => {
  switch (searchStatus) {
    case 'sucesess':
      return <SearchCardContainer users={results} />;
    case 'ongiong':
      return <div>Ищем...</div>;
    case 'error':
      return <div>{searchStatus}</div>;
    default:
      return <div>Начните поиск</div>;
  }
};

export const ProfileSearch: React.FunctionComponent<Props> = ({ searchData, results }) => {
  return (
    <section className="profileSearch">
      <div className="profileSearch__select_bar"></div>
      {renderSwitch(searchData.searchStatus, results)}
    </section>
  );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  searchData: state.profileSearch,
  results: state.profileSearch.searchResult,
});

const mapDispatchToProps: MapDispatchToPropsType = {};

export const connector = connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, mapDispatchToProps);
