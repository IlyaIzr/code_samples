//TODO Антон, если тебе это надо, я пока оставлю, потом сам удали, Илья.
export type ProfileEditBody = {
  name: string;
  age: number;
  location: string;
  jobField: string;
  jobTitle: string;
};
export type MapStateToPropsType = {};
export type MapDispatchToPropsType = {};
export type OwnPropsType = {};
export type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;
