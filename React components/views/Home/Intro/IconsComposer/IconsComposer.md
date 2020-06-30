### Собиратель иконок
Принимает компоненты в качестве пропс
<br/>
Количество принимаемых компонентов можно легко переписать вручную


```tsx static
import IconSmall from '../../../../components/social-icon/IconSmall';
const ICON_SRC_FB = 'assets/images/icons/facebook.svg';
const ICON_SRC_IG = 'assets/images/icons/instagram.svg';
  <IconsComposer
    first_children={<IconSmall href={'/'} img_src={ICON_SRC_FB} alt={'our facebook'} />}
    second_children={<IconSmall href={'/'} img_src={ICON_SRC_IG} alt={'our insta'} />}
  />
```