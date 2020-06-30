import React from 'react';

// Style
import './ProfileAddAddPhoto.scss';

// Components
import ButtonGoBack from '../../../components/buttons/ButtonGoBack/ButtonGoBack';
import {
  AddPhoto_title,
  AddPhoto_rule_1,
  AddPhoto_rule_2,
  AddPhoto_rule_3,
} from './staticData';
// Other

/**
 * Компонент для добавления фотографий профиль
 */

export const ProfileAddAddPhoto: React.FunctionComponent = () => {
  return (
    <section className="profileAddAddPhoto">
      <ButtonGoBack />
      <div className="profileAddAddPhoto__condition">{AddPhoto_title}</div>
      <div className="profileAddAddPhoto__AddPhoto_rule">{AddPhoto_rule_1}</div>
      <div className="profileAddAddPhoto__AddPhoto_rule">{AddPhoto_rule_2}</div>
      <div className="profileAddAddPhoto__AddPhoto_rule">{AddPhoto_rule_3}</div>
    </section>
  );
};
