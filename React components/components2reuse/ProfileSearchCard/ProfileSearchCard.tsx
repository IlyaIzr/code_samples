import React from 'react';

// Style
import './ProfileSearchCard.scss';
// Other
import add_friend from 'assets/images/icons/add_friend.svg';
import { add_friend_alt } from './staticData';

/**
 * Карточка для единичного результата поиска авторизованного пользователя
 * @author [Ilyaizr](https://gitlab.com/IlyaIzr)
 */

interface Props {
  avatar: string;
  name: string;
  age: number;
  location: string;
  fieldOfExpertise: string;
  description: string;
}

const ProfileSearchCard: React.FunctionComponent<Props> = ({
  avatar,
  name,
  age,
  fieldOfExpertise,
  location,
  description,
}) => {
  return (
    <div className="profileSearchCard">
      <img src={avatar} alt={name} className="profileSearchCard__avatar" />
      <div className="profileSearchCard__content">
        <div className="profileSearchCard__name_container">
          {age ? (
            <h4 className="profileSearchCard__name">{name + ', ' + age}</h4>
          ) : (
            <h4 className="profileSearchCard__name">{name}</h4>
          )}
          <img src={add_friend} className="profileSearchCard__add_friend" alt={add_friend_alt} />
        </div>
        <p className="profileSearchCard__location">{location}</p>
        <p className="profileSearchCard__fieldOfExpertise">{fieldOfExpertise}</p>
        {description && <p className="profileSearchCard__description">{description}</p>}
      </div>
    </div>
  );
};

export default ProfileSearchCard;
