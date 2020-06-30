import { PartnerCompany } from '../../../redux/sharedInformation/sharedInformationTypings';

export type MapStateToPropsType = {
  partnerInfo: Array<PartnerCompany>;
};

export type MapDispatchToPropsType = {};

export type OwnPropsType = {};

export type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;
