import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleReset() {
        setFirstName('');
        setLastName('');
    }
    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="First name"                
                value={firstName}
                onChange={e => (setFirstName(e.target.value))}
            />
            <input
                className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Last name"
                value={lastName}
                onChange={e=> (setLastName(e.target.value))}
            />
            <div className='w-full text-start'>
                <button onClick={handleReset}
                    className='bg-pink-600 px-5 py-2 text-white rounded-full'><FontAwesomeIcon icon={faArrowsRotate} className='me-2' />
                    Reset</button>
            </div>
            <div className='bg-neutral-900 mt-5 p-4 rounded'>
                <h1 className='text-white'>Hi, {firstName} {lastName}</h1>
            </div>
        </form>
    );
}
