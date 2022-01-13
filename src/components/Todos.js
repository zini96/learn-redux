import React,{useState} from 'react';

function Todos({todos,onCreate,onToggle,onRemove}) {
    //인풋의 입력되는 값을 관리하는 상태
    const [text,setText] = useState('');
    //인풋의 입력값이 변경될때 실행하는 함수
    const onChange = e => {setText(e.target.value);}
    const onSubmit = e =>{
    e.preventDefault(); //submit 이벤트 발생시 새로고침 방지(기본이벤트 제거)
    onCreate(text)
    setText(''); }   //input.value 초기화
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder='할일을 입력하세요' onChange={onChange} value={text}/>
                <button type="submit">등록</button>
            </form>
            <ul>
                {
                    todos.map(todo=> //style객체로 done 값이 true가 되었을때 밑줄넣기(삼항연산자 활용)
                    <li style={{textDecoration: todo.done ? 'line-through' : 'none'}}key={todo.id} onClick={()=>{onToggle(todo.id)}}>
                        {todo.text}  <button onClick={()=>{onRemove(todo.id)}}>삭제</button>
                    </li>) //클릭했을때 동작설정만 해두고 실제로 동작하는 함수내용은 container에 존재
                }
            </ul>
        </div>
    );
}

export default Todos;