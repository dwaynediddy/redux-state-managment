import { useDispatch, useSelector } from 'react-redux'
import { EmployeeService } from './services/EmployeeService'
import { updateSelected } from './redux/features/employees.feature'

const EmployeesRedux = () => {

  const dispatch = useDispatch()

  const employeeState = useSelector((store) => {
      return store['employees']
  })

  const {employees} = employeeState

  const selectedEmployee = (empId) => {
    dispatch(updateSelected(empId))
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
                    <input checked={employee.isSelected} onChange={() => selectedEmployee(employee.id)} type="checkbox" className="form-check-input me-2"/>
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