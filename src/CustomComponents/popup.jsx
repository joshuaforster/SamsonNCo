import React from 'react'
import '../App.css'; // Adjust the relative path as necessary

export default function Popup(props){

    const [popUp, setPopUp] = React.useState(false);

    function toggle() {
        setPopUp(prevPopUp => !prevPopUp);
    }
    
 console.log(popUp)

    return (
        <section>
            <div className='cursor-pointer border border-gray-300 rounded p-7 text-center' onClick={toggle}>
                <h3 className='text-gray-900'>{props.title}</h3>
                <img className="w-full h-full object-cover rounded" src={props.image}/>
            </div>


            {popUp && 
            <div className="popup">
                <button className="popup-close" onClick={toggle}>&times;</button>
                {props.title}
                <br/>
                <p className='text-gray-600'>{props.description}</p>
            </div>
            }

        </section>

    );   
}