import { useState } from 'react';

export default function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');
    if (isSent) {
        return <h1>Thank you!</h1>;
    } else {
        return (
            <form onSubmit={e => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
                <textarea
                    className='mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                    placeholder='Write Your Feedback'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button type="submit" className='bg-emerald-700 px-5 py-2 text-white rounded-full'>Send</button>
            </form>
        );
    }
}
