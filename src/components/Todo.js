import React,{useState} from 'react';

function Todo({todos,onCreate,onToggle}) {
    //인풋의 입력되는 값을 관리하는 상태
    const [text,setText] = useState;
    //인풋의 입력값이 변경될때 실행하는 함수
    const onChange = e => setText(e.target.value)
    return (
        <div>
            <form>
                <input placeholder='할일을 입력하세요' onChange={onChange}/>
                <button>등록</button>
            </form>
            <ul>
                <li>할일</li>
            </ul>
        </div>
    );
}

export default Todo;