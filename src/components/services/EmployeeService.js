export class EmployeeService {
    static employeesList = [
        {
            id: '1',
            name: 'Liv Evelyn Mosby',
            username: 'boyle',
            email: 'yigetdomed@gmail.com',
            isSelected: false
        },
        {
            id: '2',
            name: 'Hank Hill',
            username: 'Hank',
            email: 'Propaine@gmail.com',
            isSelected: false
        },
        {
            id: '3',
            name: 'Homer Simpson',
            username: 'Hommy',
            email: 'mmmdonuts@hotmail.com',
            isSelected: false
        },
        {
            id: '4',
            name: 'Charles Boyle',
            username: 'the duece',
            email: 'bestfriendnumber2@gmail.com',
            isSelected: false
        },
        {
            id: '5',
            name: 'Michael Scott',
            username: '#1Boss',
            email: 'michaelscarne@dundermifflen.com',
            isSelected: false
        },
    ]

    static getAllEmployees() {
        return this.employeesList
    }
}