'use client';

import { DateRange, Range } from "react-date-range";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface CalendarProps {
  value: Range;
  onChange: (value: Range) => void;
  disabledDates?: Date[]
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  disabledDates
}) => {
  return (
    <DateRange
      rangeColors={['#262626']}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  )
}

export default Calendar