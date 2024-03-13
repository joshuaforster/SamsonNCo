import React from 'react';

export default function Reveal(props) {
    const [reveal, setReveal] = React.useState(false);

    function toggle() {
        setReveal(prevReveal => !prevReveal);
    }

    return (
        <div className="border-b border-gray-200 py-4">
            <h3 onClick={toggle} className="text-lg font-semibold cursor-pointer text-gray-800 hover:text-blue-600 transition-colors">
                {props.question}
            </h3>
            {reveal && <p className="mt-2 text-gray-600">{props.answer}</p>}
        </div>
    );
}
