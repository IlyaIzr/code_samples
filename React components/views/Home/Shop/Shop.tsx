import React from 'react';
import { connect } from 'react-redux';

// Style
import './Shop.scss';

// Components
import ButtonGlobalLink from '../../../components/buttons/ButtonGlobalLink';

// Other
import { MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, Props } from './typings';
import SHOP_IMAGE_SRC from 'assets/images/backgrounds/shop_image.png';
import {
  SHOP_IMAGE_ALT,
  SHOP_INFO_TITLE,
  SHOP_INFO_DESCRIPTION_P1,
  SHOP_INFO_DESCRIPTION_P2,
  SHOP_INFO_BTN_TEXT,
} from './staticData';

/**
 * Секция подарков/магазина
 * @author [Ilyaizr](https://gitlab.com/IlyaIzr)
 */

export const Shop: React.FunctionComponent<Props> = () => {
  return (
    <section className="shop">
      <div className="shop__img_container">
        <img src={SHOP_IMAGE_SRC} alt={SHOP_IMAGE_ALT} className="shop__img" />
        <div className="shop__img_right_shadow" />
      </div>
      <div className="shop__info">
        <h2 className="shop__title">{SHOP_INFO_TITLE}</h2>
        <p className="shop__description">{SHOP_INFO_DESCRIPTION_P1}</p>
        <p className="shop__description">{SHOP_INFO_DESCRIPTION_P2}</p>
        <ButtonGlobalLink background="default" href="/shop" text={SHOP_INFO_BTN_TEXT} />
      </div>
    </section>
  );
};

const mapStateToProps = (): MapStateToPropsType => ({});

const mapDispatchToProps: MapDispatchToPropsType = {};

export const connector = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType>(
  mapStateToProps,
  mapDispatchToProps,
);
