
import { useDispatch, useSelector } from 'react-redux'

const CounterRedux = () => {
    
let counterState = useSelector((state) => {
    return state['counter']
})

const {count} = counterState

const handleIncrement = () => {
    
}

const handleDecrement = () => {
    
}

const handleIncrementbyFive = () => {
    
}

return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p className="h3 display-3">{count}</p>
                <button onClick={handleIncrement} className="btn btn-success m-1">increment +</button>
                <button onClick={handleDecrement} className="btn btn-warning m-1">decrement-</button>
                <button onClick={handleIncrementbyFive} className="btn btn-danger m-1">increment by 5</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterRedux

// import { useState } from 'react'

//app working with usestate locally
// const CounterRedux = () => {
// state working locally
//   const [state, setState] = useState({
//     count: 0
//   })

//   const handleIncrement = () => {
//     setState({count: state.count + 1})
//   }
//   const handleDecrement = () => {
//     setState({count: state.count - 1})
//   }
//   const handleIncrementbyFive = () => {
//     setState({count: state.count + 5})
//   }

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <p className="h3 display-3">{count}</p>
//               <p className="h3 display-3">{state.count}</p>
//                 <button onClick={handleIncrement} className="btn btn-success m-1">increment +</button>
//                 <button onClick={handleDecrement} className="btn btn-warning m-1">decrement-</button>
//                 <button onClick={handleIncrementbyFive} className="btn btn-danger m-1">increment by 5</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CounterRedux