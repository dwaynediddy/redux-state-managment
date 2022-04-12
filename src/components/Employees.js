import {useState} from 'react'
import { EmployeeService } from './services/EmployeeService'

const Employees = () => {
  const [ state, setState ] = useState({
    employees: EmployeeService.getAllEmployees()
  })

  const {employees} = state
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <p className="h3 text primary">Employees</p>
          <p>lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ul>

            {
              employees.length > 0 && employees.map(employees => {
                return (
                  <li key={employees.id} className="list-group-item">
                    {employees.name}
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="col-md-6">

        </div>
      </div>
    </div>
  )
}

export default Employees