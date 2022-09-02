import React from 'react';

const Tuesday_1 = () => {
    return (
        <div>

        </div>
    );
};

export default Tuesday_1;


//==============================================================================================================================================================
// Экзамены. Вторник 1-неделя.
//==============================================================================================================================================================

//1.

import React, {useState, MouseEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function ColorButton() {
    const [isColored, setIsColored] = useState<boolean>(false)

    return (
        <button
            style={{backgroundColor: `${isColored ? 'red' : ''}`}}                       // isColored
            onClick={() => setIsColored(true)}
        >
            Меняю цвет по клику
        </button>
    )
}


ReactDOM.render(
    <ColorButton/>, document.getElementById('root')
);

// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?

//2.

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
//
// function UsersList() {
//
//     const [users, setUsers] = useState<Array<string>>(['Bob', 'Alex', 'Ann'])
//
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>
//
//     const usersList = (XXX === 0) ? <p>List is empty</p> : <ul>{users.map(getUser)}</ul>
//
//     return (
//         <main>
//             <button onClick={() => setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//             {usersList}
//         </main>
//     )
// }
//
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Что надо вставить вместо XXX, чтобы код корректно работал со списком пользователей?

//3.

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
//
// function PasswordChecker() {
//     const [password, setPassword] = useState<string>("")
//
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={e => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {XXX < 9 && <p style={{color: "red"}}>The password is too short!</p>}
//         </main>
//     )
// }
//
//
// ReactDOM.render(
//     <PasswordChecker/>, document.getElementById('root')
// );

// Что надо вставить вместо XXX, чтобы код работал нормально?

//4.

// import React, { ChangeEvent, useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
//
// function LongCommentChecker() {
//     const minSizeComment = 5
//     const [isCommentReady, setIsCommentReady] = useState<boolean>(false)
//     const [comment, setComment] = useState<string>('')
//
//     const onClickSendComment = () => {
//         if (comment.length > minSizeComment) {
//             setComment('')
//         }
//     }
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         const newComment = e.currentTarget.value
//         if (newComment.length > minSizeComment) {
//             setIsCommentReady(true)
//         } else {
//             setIsCommentReady(false)
//         }
//         setComment(newComment)
//     }
//
//     return (
//         <main>
//             <textarea
//                 placeholder={'Your comment must have more than 5 charters'}
//                 value={comment}
//                 onChange={onChangeHandler}
//             />
//             <div>
//                 <button
//                     disabled={XXX}
//                     onClick={onClickSendComment}>
//                     Send comment
//                 </button>
//             </div>
//         </main>
//     )
// }
//
//
// ReactDOM.render(<LongCommentChecker/>, document.getElementById('root'));

// Что нужно написать вместо XXX, чтобы кнопка отправки комментария отрабатывала верно:
// первоначально кнопка должна быть в состоянии disable, а после успешного выполнения условия
// (проверка на длину комментария) должна раздизаблиться.
// ❗ Ответ необходимо дать на основании данных (переменных), которые уже есть в коде

//5.

// import React, {ChangeEvent, useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
//
// function Colorize() {
//
//     const [color, setColor] = useState<string>("black")
//     const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"]
//
//     const styles = {
//         width: "100px",
//         height: "100px",
//         borderRadius: "50%",
//         backgroundColor: "black"
//     }
//
//     const getColor = (colors: string[]) => {
//         const nextColor = colors[Math.floor(Math.random() * colors.length)]
//         return nextColor
//     }
//
//     return (
//         <main>
//             <div style={{...styles, backgroundColor: color}}/>
//             <div>
//                 <button
//                     onClick={() => setColor(XXX)}
//                 >
//                     Get random color
//                 </button>
//             </div>
//         </main>
//     )
// }
//
//
// ReactDOM.render(
//     <Colorize/>, document.getElementById('root')
// );

// Что надо вставить вместо XXX, чтобы круг менял цвет по клику?

//6.

// import React, { ChangeEvent, useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
//
// type UserType = {
//     id: number
//     name: string
//     personalData: PersonalDataType
// }
// type PersonalDataType = {
//     gender: string
//     age: number
//     technologies: Array<TechnologiesType>
// }
// type TechnologiesType = 'HTML' | 'CSS' | 'React' | 'JS/TS' | 'Redux'
//
//
// function UsersList() {
//
//     const [users, setUsers] = useState<Array<UserType>>([
//         {
//             id: 1,
//             name: 'Bob',
//             personalData: {
//                 gender: 'male',
//                 age: 23,
//                 technologies: ['HTML', 'CSS', 'React', 'JS/TS', 'Redux']
//             }
//         },
//         {
//             id: 2,
//             name: 'Alex',
//             personalData: {
//                 gender: 'male',
//                 age: 21,
//                 technologies: ['HTML', 'CSS', 'React']
//             }
//         },
//         {
//             id: 3,
//             name: 'Ann',
//             personalData: {
//                 gender: 'female',
//                 age: 26,
//                 technologies: ['HTML', 'CSS', 'JS/TS']
//             }
//         },
//         {
//             id: 4,
//             name: 'Helen',
//             personalData: {
//                 gender: 'female',
//                 age: 31,
//                 technologies: ['HTML', 'CSS']
//             }
//         },
//         {
//             id: 5,
//             name: 'Donald',
//             personalData: {
//                 gender: 'male',
//                 age: 28,
//                 technologies: ['React', 'JS/TS', 'Redux']
//             }
//         },
//     ])
//
//
//     return <ul>
//         {users.map(u => {
//             return (
//                 u.personalData.technologies.length >= 5
//                     ? <li key={u.id}>
//                         {`User ${u.name}. ${u.personalData.age}. Ready to work.`}
//                     </li>
//                     : <li key={u.id}>
//                         {`User ${u.name}. ${u.personalData.age}. `}
//                     </li>)
//         })}
//     </ul>
// }
//
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Те пользователи, у которых в стэке пять и более технологий, должны в списке
// быть отмечены, как готовые к работе.
// Что надо вставить вместо XXX, чтобы код работал нормально?

