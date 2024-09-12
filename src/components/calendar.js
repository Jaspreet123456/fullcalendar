import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

const Calendar = () => {
  const calendarRef = useRef(null);

  const events = [
    {
      id: 1,
      title: 'Event 1',
      start: '2024-09-12T10:00:00',
      end: '2024-09-12T12:00:00',
      resourceId: 'a' 
    },
    {
      id: 2,
      title: 'Event 2',
      start: '2024-09-12T13:00:00',
      end: '2024-09-12T15:00:00',
      resourceId: 'b'
    }
  ];

  const data = [
    {
      "id": "a",
      "title": "Auditorium A"
    },
    {
      "id": "b",
      "title": "Auditorium B",
      "eventColor": "green"
    },
    {
      "id": "c",
      "title": "Auditorium C",
      "eventColor": "orange"
    },
  ]

  return (
    <div className="calendar-container">
      <div className="calendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[resourceTimelinePlugin]}
          initialView='resourceTimelineWeek' 
          headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
          }}
          aspectRatio={1.5}
          resourceAreaHeaderContent='Rooms'
          resources={data}
          events={events}
        />
      </div>
    </div>
  );
};

export default Calendar;
