import React from 'react';
import { connect } from 'react-redux';
import { Props, MapStateToPropsType, MapDispatchToPropsType, OwnPropsType } from './typings';
import AppStateType from '../../../redux/rootTypings';

// Style
import './Partners.scss';

// Components
import SinglePartner from './SinglePartner';

// Other
import { PartnerCompany } from '../../../redux/sharedInformation/sharedInformationTypings';
import PARNTERS_TITLE from './staticData';

/**
 * Секция Партнеров.
 * В случае отсутствия партнеров создаст пробел в 40рх.
 * Можно изменить, если это важный "кейс"
 * @author [Ilyaizr](https://gitlab.com/IlyaIzr)
 */
export const Partners: React.FunctionComponent<Props> = ({ partnerInfo }) => {
  return (
    <section className="partners">
      {partnerInfo.length > 0 ? (
        <>
          <h2 className="partners__title">{PARNTERS_TITLE}</h2>
          <div className="partners__container">
            {partnerInfo.map((partner: PartnerCompany) => {
              return (
                <SinglePartner
                  img={partner.image}
                  name={partner.nameCompany}
                  key={Math.floor(Math.random() * 100) + partner.nameCompany}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </section>
  );
};


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  partnerInfo: state.GlobalInfo.home.data.partnersCompany
});

const mapDispatchToProps: MapDispatchToPropsType = {};
export const connector = connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, mapDispatchToProps);
