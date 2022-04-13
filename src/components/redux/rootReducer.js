import counterReducer from './features/counter.feature'
import employeeReducer from './features/employees.feature'

const rootReducer = {
    counter: counterReducer,
    employees: employeeReducer
}

export default rootReducer