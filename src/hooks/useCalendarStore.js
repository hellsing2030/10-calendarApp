import { useSelector,useDispatch } from "react-redux/es/exports";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';


export const useCalendarStore = () => {

const dispatch = useDispatch();
  
const { events,activeEvent } = useSelector(state => state.calendar);

const setActiveEvent= ( calendarEvent )=>{

    dispatch( onSetActiveEvent( calendarEvent ) );

}

const startSavingEvent = async ( calendarEvent)=>{
    // TODO:llegar al backend
    
    
    //TODO: bien
    if( calendarEvent._id ){
        // aqui estoy actualizando 
        
        dispatch( onUpdateEvent({...calendarEvent} ));
    }else{
        // aqui estoy Creando
       
        dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
}

const startOnDeleteEvent = ()=>{
    dispatch( onDeleteEvent() );
}
  
    return {
        // propiedades  
        events,
        activeEvent,
        hasEventSelect: !!activeEvent,  
        //metodos
        setActiveEvent,
        startSavingEvent,
        startOnDeleteEvent
    }

}
