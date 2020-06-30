import * as React from 'react';

// компоненты
import Header from '../../components/headers';
import Footer from '../../components/footers';
import Intro from './Intro';
import About from './About';
import Partners from './Partners';
import Shop from './Shop';
import News from './News';
import Service from './Service/Service';

// TODO by Ilya to Anton добавь индексы эти компоненты, чтобы импорты были как у всех
import Chat from './Chat/Chat';

// библиотеки
import './Home.scss';

// остальное

/**
 * Домашняя страница
 */
const Home: React.FunctionComponent = () => (
  <>
    <Header />
    <Intro />
    <About />
    <div className="home__flex_wrapper">
      <div className="home__flex_wrapper_left">
        <Shop />
        <Partners />
      </div>
      <div className="home__flex_wrapper_right">
        <News />
      </div>
    </div>
    <div className="service_chat__flex_wrapper">
      <Service />
      <Chat />
    </div>
    <Footer />
  </>
);

export default Home;
