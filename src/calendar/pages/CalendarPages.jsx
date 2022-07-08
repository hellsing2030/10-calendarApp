import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { NavBar, CalendarEvent, CalendarModal, FabAddNew} from "../";
import { localizer, getMessagesEs } from '../../helpers';
import { useState } from 'react';
import { useUiStore, useCalendarStore } from '../../hooks';





export const CalendarPages = () => {

  const {events, setActiveEvent,} = useCalendarStore();

  
  

  const { openDateModal } = useUiStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = ( event, start, end, isSelecter ) => {

    

  }
  const onDoubleClick = ( event ) => {
    console.log({doubleClick: event });
    openDateModal();
  }
  
  const onSelect  = ( event ) => {
    setActiveEvent( event );
  }

const onViewChanged = ( event )=>{
  localStorage.setItem('lastView', event);
  setLastView( event );

}

  return (
    <>
        <NavBar/>
        
        <Calendar
        culture='es'
          localizer={localizer}
          events={events}
          defaultView={ lastView }
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc( 100vh - 80px' }}
          messages={ getMessagesEs() }
          eventPropGetter={ eventStyleGetter }
          components={{
            event: CalendarEvent
          }}
          onDoubleClickEvent={ onDoubleClick }
          onSelectEvent={ onSelect }
          onView={ onViewChanged }

        />

        <CalendarModal/>
        <FabAddNew />

    </>
  )
}
