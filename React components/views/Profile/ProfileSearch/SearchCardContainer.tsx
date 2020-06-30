import * as React from 'react';
import { SearchResult } from 'redux/profileSearch/profileSearchTypes';
import ProfileSearchCard from 'components/cards/ProfileSearchCard';

/**
 * Принимает результаты поиска и выдаёт карточки поиска. Для удачного поиска.
 * @author [Ilyaizr](https://gitlab.com/IlyaIzr)
 */

interface Props {
  users?: Array<SearchResult>;
}

const SearchCardContainer: React.FunctionComponent<Props> = ({ users }) => {
  return (
    <div className="profileSearch__results">
      {users &&
        users.map((user) => {
          return (
            <ProfileSearchCard
              avatar={user.avatar}
              name={user.firstName + ' ' + user.lastName}
              location={user.location}
              age={user.age}
              fieldOfExpertise={user.fieldOfExpertise}
              description={user.description}
              key={user.id}
            />
          );
        })}
    </div>
  );
};

export default SearchCardContainer;
