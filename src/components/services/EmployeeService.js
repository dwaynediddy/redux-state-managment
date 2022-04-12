export class EmployeeService {
    static employeesList = [
        {
            id: '1',
            name: 'Liv Evelyn Mosby',
            username: 'boyle',
            email: 'yigetdomed@gmail.com'
        },
        {
            id: '2',
            name: 'Hank Hill',
            username: 'Hank',
            email: 'Propaine@gmail.com'
        },
        {
            id: '3',
            name: 'Homer Simpson',
            username: 'Hommy',
            email: 'mmmdonuts@hotmail.com'
        },
        {
            id: '4',
            name: 'Charles Boyle',
            username: 'bestfriendnumber2@gmail.com'
        },
        {
            id: '5',
            name: 'Michael Scott',
            username: 'michaelscarne@dundermifflen.com'
        },
    ]

    static getAllEmployees() {
        return this.employeesList
    }
}