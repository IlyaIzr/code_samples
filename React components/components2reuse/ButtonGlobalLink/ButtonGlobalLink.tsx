import * as React from 'react';

import { Props } from './typings';

// Style
import './ButtonGlobalLink.scss';

/**
 * Общая кнопка, принимающая текст(string) через props. Имеет три внешних вида
 * @author [Ilyaizr](https://gitlab.com/IlyaIzr)
 */

const ButtonGlobalLink: React.FunctionComponent<Props> = ({
  text = 'задайте текст',
  href = '/',
  background = 'light',
}) => (
  <a href={href} className={`globalLink globalLink__${background} `}>
    <button type="button">{text}</button>
  </a>
);

export default ButtonGlobalLink;
