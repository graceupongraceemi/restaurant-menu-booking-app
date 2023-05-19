import { FC, useState } from 'react';
import ReactCalendar from 'react-calendar';

interface indexProps {}

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

const index: FC<indexProps> = () => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null
  });
  return (
    <div className='flex h-screen flex-col justify-center'>
      <ReactCalendar
        minDate={new Date()}
        className='REACT-CALENDAR P-2'
        view='month'
        onClickDay={(date) => console.log(date)}
      />
    </div>
  );
};

export default index;
