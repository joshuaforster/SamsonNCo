// import React from 'react'


// export default function Gallery(props){

//     const [isClicked, setIsClicked] = React.useState(false)

//     function toggle(){
//         setIsClicked(prevState => !prevState)
//     }

//     return(
//             <div>
//                 <img className='cursor-pointer w-full h-full object-cover' onClick={toggle} src={props.image}></img>
//                 {isClicked && (
//                     <div>
//                         <img className="w-full h-full object-cover" src={props.image}/>
//                         <button onClick={toggle}>&times;</button>
//                     </div>
//                 )}
//             </div>
//         );
// }

import React from 'react';

export default function Gallery(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    function toggle() {
        setIsClicked(prevState => !prevState);
    }

    return (
        <div className="relative">
            <img 
                className="cursor-pointer w-full h-full object-cover" 
                onClick={toggle} 
                src={props.image} 
                alt="Gallery Image"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex justify-center items-center transition-opacity duration-300 cursor-pointer" onClick={toggle}>
                <p className="text-white text-xl hidden hover:block">View Image</p>
            </div>
            {isClicked && (
                <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-75 flex justify-center items-center">
                    <img 
                        className="w-full h-full max-w-3xl max-h-3xl object-contain" 
                        src={props.image} 
                        alt="Full Screen Gallery Image"
                    />
                    <button 
                        onClick={toggle} 
                        className="absolute top-5 right-5 text-white text-4xl leading-none z-50"
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
            }