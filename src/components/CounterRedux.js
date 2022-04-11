
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './redux/features/counter.feature'
const CounterRedux = () => {

const dispatch = useDispatch()
    
const counterState = useSelector((state) => {
    return state['counter']
})

const {count} = counterState

const handleIncrement = () => {
    dispatch(increment())
}

const handleDecrement = () => {
    dispatch(decrement())
}

const handleIncrementby = () => {
    dispatch(incrementBy(5))
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
                <button onClick={handleIncrementby} className="btn btn-danger m-1">increment by 5</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterRedux