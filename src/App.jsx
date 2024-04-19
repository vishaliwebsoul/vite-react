import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
import { tangeWala } from './Show';
import './App.css'
import Form from './Form';
import FeedbackForm from './FeedbackForm';

function App() {
  const [Index, setIndex] = useState(0);
  function handleClickIncr() {
    setIndex(Index + 1);
  }
  function handleClick() {
    setIndex(Index - 1);
  }
  let alltanga = tangeWala[Index];
  const totallength = tangeWala.length;
  return (
    <>
      <div className='grid grid-cols-3 gap-5'>
        <div className='col-span-2 '>
          <div className='card border-2 rounded-lg border-cyan-200 shadow-lg '>
            <div className="flex gap-5 ">
              <div className=''>
                <img class=" mb-4 w-40 h-40 max-w-40 max-h-40 rounded-full" src={alltanga.url} alt={alltanga.al} />
                <h1 className="text-md font-bold">
                  {alltanga.name}
                </h1>
              </div>
              <div className='flex-1 flex-col flex items-start	text-left'>
                <div className='mb-5'>
                  <h3 className='font-bold text-xl italic  hover:text-slate-600'>
                    {alltanga.artist}
                  </h3>
                  <p className='text-slate-600 text-sm'>{alltanga.description}</p>
                </div>

              </div>
            </div>
          </div>
          <div className="flex w-full justify-between mt-4">
            <button className='bg-cyan-500 px-8 py-3 text-white rounded-full disabled:opacity-35 disabled:cursor-not-allowed'
              onClick={handleClick}
              disabled={Index == 0}>
              <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Prev
            </button>
            <p className='self-center'>{Index + 1} of {totallength} </p>
            <button className='bg-cyan-500 px-8 py-3 text-white rounded-full disabled:opacity-35 disabled:cursor-not-allowed'
              onClick={handleClickIncr}
              disabled={Index == totallength - 1}>Next
              <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
            </button>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='card border-2 rounded-lg border-cyan-200 shadow-lg '>
            <Form />
          </div>
          <div className='grid grid-cols-1 mt-4'>
            <div className='col-span-1'>
              <div className='card border-2 rounded-lg border-cyan-200 shadow-lg '>
                <FeedbackForm />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )

}

export default App;


// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [Like, setLike] = useState(2);
//   function handleClick() {
//     setLike(Like + 1);
//   }

//   return (
//     <>
//       <h1>bhupendra jogi</h1>
//       <button onClick={handleClick}>Likes {Like} </button>
//     </>
//   );

// }

// export default App



// import './App.css'

// function App() {
//   function handleClick() {
//     alert("ram ram ji")
//   }
//   return (
//     <>
//       <h1>bhupendra jogi</h1>
//       <button onClick={handleClick}>dabao</button>
//     </>
//   )

//   // function App() {

//   //   return (
//   //     <>
//   //       <h1>bhupendra jogi</h1>
//   //       <button onClick={() => {
//   //         alert("ram ram ji")
//   //       }}>dabao</button>
//   //     </>
//   //   )
//   // }
// }

// export default App




// import './App.css'

// function App() {
//   const nam = ['bhupendra jogi', 'jagdish bhagat', 'rahul gandhi'];
//   return (
//     <>
//       <ul>
//         {nam.map((na) => (
//           <li key={na}>{na}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default App






// import MainComponent from './File'


// function App() {

//   return (
//     <>
//       <MainComponent audience="beginner" />
//       <MainComponent audience="pro" />
//     </>
//   )
// }

// export default App
