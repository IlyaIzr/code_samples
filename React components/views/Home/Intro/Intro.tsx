import React from 'react';
import { connect } from 'react-redux';
import { Props, MapStateToPropsType, MapDispatchToPropsType, OwnPropsType } from './typings';
import AppStateType from '../../../redux/rootTypings';

// Style
import './Intro.scss';

// Components
import ButtonGlobalLink from '../../../components/buttons/ButtonGlobalLink';
import ButtonRegister from '../../../components/buttons/ButtonRegister';
import IntroText from './IntroText';
import IconsComposer from './IconsComposer';
import IconSmall from '../../../components/social-icon/IconSmall';

// Other
import { LOG_IN_BUTTON_TEXT } from './staticData';
import ICON_SRC_FB from 'assets/images/icons/facebook.svg';
import ICON_SRC_IG from 'assets/images/icons/instagram.svg';
import ButtonScrollDown from '../../../components/buttons/ButtonScrollDown';

/**
 * Секция вступления
 * @author [Ilyaizr](https://gitlab.com/IlyaIzr)
 */

export const Intro: React.FunctionComponent<Props> = ({ isLogged }) => {
  return (
    <section className="intro">
      <IntroText />
      <IconsComposer
        first_children={<IconSmall href="/" img_src={ICON_SRC_FB} alt="our facebook" />}
        second_children={<IconSmall href="/" img_src={ICON_SRC_IG} alt="our insta" />}
      />
      {!isLogged && (
        <>
          <div className="buttonGlobalLink__container">
            <ButtonGlobalLink background="dark" href="/" text={LOG_IN_BUTTON_TEXT} />
          </div>
          <ButtonRegister />
        </>
      )}
      <div className="buttonScrollDown__container">
        <ButtonScrollDown />
      </div>
    </section>
  );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isLogged: state.user.settings.isLogged,
});

export const connector = connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, null);
