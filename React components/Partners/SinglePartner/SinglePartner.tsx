import * as React from 'react';

// Style
import './SinglePartner.scss';

/**
 * Компонент отображающий партнерскую компанию.
 * Принимает ссылку на изображение и название в качестве props
 * @author [Ilyaizr](https://gitlab.com/IlyaIzr)
 */

interface Props {
  img: string;
  name: string;
}

const SinglePartner: React.FunctionComponent<Props> = ({ img, name }) => {
  return (
    <div className="singlePartner">
      <img src={img} alt={name} className="singlePartner__img" title={name} />
    </div>
  );
};

export default SinglePartner;
