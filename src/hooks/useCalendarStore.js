import { useSelector,useDispatch } from "react-redux/es/exports";
import { onAddNewEvent, onSetActiveEvent } from '../store';


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
        console.log(" estoy aqui")
        
    }else{
        

        dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
    }
}
  
    return {
        // propiedades  
        events,
        activeEvent,
        //metodos
        setActiveEvent,
        startSavingEvent,
    }

}
