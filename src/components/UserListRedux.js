import {useState, useEffect} from 'react'
import axios from 'axios'

const dataUrl = `https://jsonplaceholder.typicode.com/users`

const UserListRedux = () => {
  const [state, setState] = useState({
    loading: false,
    users: [],
    errorMessage: ''
  })

  useEffect(async() => {
    try {
      setState({...state, loading: true})
      const response = await axios.get(dataUrl)
      setState({
        ...state,
        users: response.data,
        loading: false
      })
    } catch(err) {
      setState({
        ...state,
        errorMessage: err,
        loading: false
      })
    }
  },[])

  const {loading, errorMessage, users} = state

  return (
    <div className="container md-3">
      <div className="row">
        <div className="col">
          <p className="h3 text-primary">User List</p>
          <p>lorem ipsum dolor sit</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {
            loading && <h2 className="fw-bold">Loading...</h2>
          }
          {
            !loading && errorMessage.length > 0 && <h3 className="text-danger">{errorMessage}</h3>
          }
          {
            !loading && users.length > 0 &&
            <table className="table table-hover text-center table-striped">
              <thead className="bg-primary text-white">
                <tr>
                  <th>SNO</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>WEBSITE</th>
                  <th>COMPANY</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => {
                  return(
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                      <td>{user.company.name}</td>
                      <td>{user.address.city}</td>
                    </tr>
                                         
                  )                                            
                })}
              </tbody>
            </table>
          }
        </div>
      </div>
    </div>
  )
}

export default UserListRedux