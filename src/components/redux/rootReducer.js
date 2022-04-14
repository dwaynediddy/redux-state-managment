import counterReducer from './features/counter.feature'
import employeeReducer from './features/employees.feature'
import userListReducer from './features/users-list.features'

const rootReducer = {
    counter: counterReducer,
    employees: employeeReducer,
    users: userListReducer
}

export default rootReducer