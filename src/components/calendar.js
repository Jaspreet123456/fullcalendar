// components/Calendar.js
import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import timelinePlugin from '@fullcalendar/timeline';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = () => {
  const calendarRef = useRef(null);

  const events = [
    { id: 1, title: 'Event 1', start: '2024-09-12', end: '2024-09-12' },
    { id: 2, title: 'Event 2', start: '2024-09-14', end: '2024-09-14' },
    { id: 3, title: 'Event 3', start: '2024-09-16', end: '2024-09-16' },
  ];

  return (
    <div className="calendar-container">
      <div className="event-list">
        <h2>Event List</h2>
        <ul>
          {events.map((event) => (
            <li
              key={event.id}
              className="event-item"
              onClick={() => {
                const calendarApi = calendarRef.current.getApi();
                calendarApi.gotoDate(event.start); // Navigate to event's start date
              }}
            >
              <h3>{event.title}</h3>
              <p>{event.start}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="calendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[timelinePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timelineWeek" // Ensure you are using timeline view
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timelineDay,timelineWeek,timelineMonth'
          }}
          editable={true}
          selectable={true}
          events={events}
        />
      </div>
    </div>
  );
};

export default Calendar;
