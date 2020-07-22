import * as React from 'react';
import { connect } from 'react-redux';

// Style
import './Calendar.scss';

// Components
import { MapStateToPropsType, MapDispatchToPropsType, OwnPropsType } from './typings';

//Static
import { weekDayNames, monthsNames, monthsNamesGenetive } from './staticData';
import arrow_left_icon from 'assets/images/buttons-icons/arrow-left.svg';
import arrow_right_icon from 'assets/images/buttons-icons/arrow-right.svg';

/**
 * Интерактивный календарь
 * @author [Ilyaizr](https://gitlab.com/IlyaIzr) - tsx
 * @author [kirill_omarov](https://gitlab.com/kirill_omarov) - scss
 */

/* eslint-disable */
// Тайпскрипт считает, что нельзя вычесть дату из даты. Но это работает. Поэтому тип any.
function getDates(startDate: any, endDate: any) {
  /* eslint-enable */
  const dayInterval: number = 1000 * 60 * 60 * 24; // 1 day
  const duration = endDate - startDate;
  const steps = duration / dayInterval;
  return Array.from(
    { length: steps + 1 },
    (v, i) => new Date(startDate.valueOf() + dayInterval * i),
  );
}

type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

export const Calendar: React.FunctionComponent<Props> = () => {
  const [monthsDays, setMonthsDays] = React.useState<Array<Date>>();
  const [monthNum, setmonthNum] = React.useState(0);

  const today = new Date();
  const stateDay = new Date(today.getFullYear(), today.getMonth() + monthNum);
  const startDate = new Date(stateDay.getFullYear(), stateDay.getMonth(), -5);
  const endDate = new Date(stateDay.getFullYear(), stateDay.getMonth() + 1, 7);

  React.useEffect(() => {
    const datesToShow: Date[] = getDates(startDate, endDate);

    // Отрезаем всё, что до первого понедельника
    for (let i = 0; i < 7; i += 1) {
      const day = datesToShow[i];
      if (day.getDay() === 1) {
        // дни имеют цифровые значения. 1 === 'Monday'
        break;
      } else {
        datesToShow.shift();
        i -= 1;
      }
    }
    // Отрезаем последнюю неделю (возможно частично)
    for (let i = 1; i < 7; i += 1) {
      const day = datesToShow[datesToShow.length - i];
      if (day.getDay() === 1) {
        datesToShow.pop();
        break;
      } else {
        datesToShow.pop();
        i -= 1;
      }
    }

    setMonthsDays(datesToShow);
    /* eslint-disable */
    // Здесь Линт добавляет для слежки ещё 2 переменные и ломает компонент
  }, [monthNum]);
  /* eslint-enable */

  return (
    <>
      <div className="calendar">
        <div className="calendar-header">
          <span className="calendar-title">
            {monthNum === 0
              ? today.getDate() +
                ' ' +
                monthsNamesGenetive[today.getMonth()] +
                ', ' +
                today.getFullYear()
              : monthsNames[stateDay.getMonth()] + ', ' + stateDay.getFullYear()}
          </span>
          <div className="calendar__arrow">
            <button
              className="calendar__arrow-prev"
              type="button"
              onClick={() => {
                setmonthNum(monthNum - 1);
              }}>
              <img src={arrow_left_icon} alt="#" />
            </button>
            <button
              className="calendar__arrow-next"
              type="button"
              onClick={() => {
                setmonthNum(monthNum + 1);
              }}>
              <img src={arrow_right_icon} alt="#" />
            </button>
          </div>
        </div>
        <div className="calendar__day">
          {weekDayNames &&
            weekDayNames.map((dayName) => {
              return <span key={dayName + 'dayName'}>{dayName}</span>;
            })}
        </div>
        <div className="calendar__number-wrapper">
          {monthsDays &&
            monthsDays.map((day) => {
              return (
                <div
                  key={`${Math.floor(Math.random() * 1000)}cal${day.getMonth() + day.getDate()}`}
                  className={`calendar__number ${
                    stateDay.getMonth() !== day.getMonth() && 'calendar__number--grey'
                  }`}>
                  <span>{day.getDate()}</span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (): MapStateToPropsType => ({});

const mapDispatchToProps: MapDispatchToPropsType = {};

export const connector = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType>(
  mapStateToProps,
  mapDispatchToProps,
);
