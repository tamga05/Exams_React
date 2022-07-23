const Monday_2 = () => {

    return (
        <div>

        </div>
    );
};

export default Monday_2;


//==============================================================================================================================================================
// Экзамены. Понедельник 2-неделя.
//==============================================================================================================================================================

//1.

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const results = useState<Array<string>>(['Bob', 'Alex', 'Ann'])
//     const users = results[0]
//     const setUsers = results[1]
//
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Какой тип правильнее указать вместо "any" при типизации стэйта?

//2.

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     return (
//         <p>Тут будет список пользователей!</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList />, document.getElementById('root')
// );

// Что вернёт выражение: typeof useState?

//3.

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     const users = results[0]
//     const setUsers = results[1]
//
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Чему равно results.length?

//4.

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Что вернёт выражение: Array.isArray(users)?

//5.

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Что вернёт выражение: typeof setUsers?

//6.

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { users.map(user => <li>{user}</li> )}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Что надо вставить вместо ХХХ, чтобы код заработал?

//7.

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(getUser)
//
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {usersList}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Что надо вставить вместо XXX, чтобы код заработал?

//8.

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(getUser)
//
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {usersList}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Что вернёт выражение: Array.isArray(usersList)?

//9.

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(getUser)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Что вернёт выражение: typeof getUser?

//10.

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type UserType = {
    id: number
    name: string
    age: number
}

function User(props: UserType) {
    return (
        <li>User {props.name}: {props.age} y.o.</li>
    )
}

function UsersList() {
    const state = [
        {id: 1, name: "Bob", age: 34},
        {id: 2, name: "Alex", age: 25},
        {id: 3, name: "Ann", age: 30},
        {id: 4, name: "John", age: 23},
    ]
    const users = [
        {id: 1, userName: "Bob", age: 34},
        {id: 2, userName: "Alex", age: 25},
        {id: 3, userName: "Ann", age: 30},
        {id: 4, userName: "John", age: 23},
    ]

    const [usersList, setUsersList] = useState<Array<UserType>>(state)
    return (
        <main>
            <h5>User list:</h5>
            <p>Тут будет список пользователей</p>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);

// Что надо написать вместо XXX, чтобы код работал?
