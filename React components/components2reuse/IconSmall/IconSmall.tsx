import * as React from 'react';
import { Props } from './typings';

// Style
import './IconSmall.scss';

/**
 * Отрисовывает иконку и ссылку на неё
 * @author [Ilyaizr](https://gitlab.com/IlyaIzr)
 */

const IconSmall: React.FunctionComponent<Props> = ({
  img_src,
  href = '#',
  alt = 'иконка соцсетей',
}) => {
  return (
    <a href={href} className="IconSmall">
      <img src={img_src} alt={alt} className="IconSmall__img" />
    </a>
  );
};

export default IconSmall;
