import * as React from 'react';
import { Props } from './typings';

// Style
import './IconsComposer.scss';
import RECTANGLE_FILLER from 'assets/images/icons/rectangle48.svg';

/**
 * Собирает иконки (например соцсетей), принимает их в кач-ве пропс
 * @author [Ilyaizr](https://gitlab.com/IlyaIzr)
 */

const IconsComposer: React.FunctionComponent<Props> = ({
  first_children,
  second_children,
  third_children,
}) => {
  return (
    <div className="iconsComposer">
      <img src={RECTANGLE_FILLER} alt="" className="iconsComposer__filler" />

      <div className="iconsComposer__icon">{first_children}</div>
      <div className="iconsComposer__icon">{second_children}</div>
      <div className="iconsComposer__icon">{third_children}</div>
    </div>
  );
};

export default IconsComposer;
