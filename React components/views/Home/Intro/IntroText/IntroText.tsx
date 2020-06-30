import * as React from 'react';

// Style
import './IntroText.scss';
import { INTRO_TITLE, INTRO_SUBTITLE } from './staticData';

/**
 * Текст для блока intro. Текст хранится в статическом файле
 * @author IlyaIzr
 */

const IntroText: React.FunctionComponent = () => {
  return (
    <div className="introText">
      <h2 className="introText__title">{INTRO_TITLE}</h2>
      <h4 className="introText__subtitle">{INTRO_SUBTITLE}</h4>
    </div>
  );
};

export default IntroText;
