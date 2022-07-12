import { useCalendarStore, useUiStore } from '../../hooks'


export const FabDelete = () => {
    
    
    const { startOnDeleteEvent, hasEventSelect  } = useCalendarStore();
     
    const handleDelete = ()=>{
        startOnDeleteEvent();
    }

    return (

    <button 
        className='btn btn-danger fab-danger'
        style={{ 
            display : hasEventSelect ? '' : 'none'
         }}
        onClick={ handleDelete }
    >
        <i className='fas fa-trash-alt'></i>
    </button>
  )
}
