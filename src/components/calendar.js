// components/Calendar.js
import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import timelinePlugin from '@fullcalendar/timeline';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { formatDate } from '@fullcalendar/core';

const Calendar = () => {
  const calendarRef = useRef(null);

  const events = [
    {
      id: 1,
      title: 'Event 1',
      start: '2024-09-12T10:00:00',
      end: '2024-09-12T12:00:00',
      backgroundColor: '#ff9f40',
    },
    {
      id: 2,
      title: 'Event 2',
      start: '2024-09-12T13:00:00',
      end: '2024-09-12T15:00:00',
      backgroundColor: '#007bff',
    },
    {
      id: 3,
      title: 'Event 3',
      start: '2024-09-12T09:00:00',
      end: '2024-09-12T11:00:00',
      backgroundColor: '#28a745',
    },
  ];

  const handleEventClick = (event) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(event.start);
  };

  return (
    <div className="calendar-container">
      <div className="event-list">
        <h2>Event List</h2>
        <ul>
          {events.map((event) => (
            <li
              key={event.id}
              className="event-item"
              onClick={() => handleEventClick(event)}
            >
              <h3>{event.title}</h3>
              <p>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', meridiem: 'short' })}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="calendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[timelinePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timelineWeek"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timelineDay,timelineWeek,timelineMonth'
          }}
          editable={true}
          selectable={true}
          events={events}
          eventContent={(info) => (
            <div style={{ backgroundColor: info.event.backgroundColor, color: 'white', padding: '2px 5px', borderRadius: '5px' }}>
              {info.event.title}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Calendar;
