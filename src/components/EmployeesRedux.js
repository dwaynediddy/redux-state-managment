import {useState} from 'react'
import { EmployeeService } from './services/EmployeeService'

const EmployeesRedux = () => {
  const [ state, setState ] = useState({
    employees: EmployeeService.getAllEmployees()
  })

  const {employees} = state

  const updateSelected = (empId) => {
    const selectedEmployees = employees.map(employee => {
      if (employee.id === empId) {
        return {
          ...employee,
          isSelected: !employee.isSelected
        }
      } else {
        return employee
      }
    })
    setState({
      ...state,
      employees: selectedEmployees
    })
  }

  return (
    <>
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
              employees.length > 0 && employees.map(employee => {
                return (
                  <li key={employee.id} className="list-group-item">
                    <input onChange={() => updateSelected(employee.id)} type="checkbox" className="form-check-input me-2"/>
                    {employee.name}
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="col-md-6">
            {
              employees.length > 0 && employees.map(employee => {
                return (
                  <div key={employee.id}>
                    {
                      employee.isSelected &&
                      <div className="card my-2">
                        <div className="card-body">
                          <ul className="list-group">
                            <li className="list-group-item">
                              Name: <span className="fw-bold">{employee.name}</span>
                            </li>
                            <li className="list-group-item">
                              Email: <span className="fw-bold">{employee.email}</span>
                            </li>
                          </ul>
                        </div>
                      </div>  
                    }
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  </>
  )
}

export default EmployeesRedux