import {createStore} from 'redux';
//리덕스에서 관리 할 상태 정의
const initialState = {
    counter:0,
    text:'',
    list:[]
}



//02.액션 타입 정의
const INCREASE=  INPCREASE;
const DELETE = DElETE;
const CHANGE_TEXT= CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

//03 액션 생성함수 정의
const increase = ()=>({
    type:"INCREASE"
})
const decrease = () =>({
    type:"DECREASE"
})
const changeText = text => ({
    type:CHANGE_TEXT,
    text:text
})
const addToList = item => ({
    type:ADD_TO_LIST,
    item:item
})
//04 리슈서 작성
//state 초기 상태가 필요함 state undifined명 초기상태를 만들어 줘야함
function reducer(state = initialState,action){
    switch (action.type){
        case INCREASE :
            return{
                ...state,
                counter: state.counter -1,
            }
            case CHANGE_TEXT:
                return{
                    ...state,
                    text:action.text,
                }
                case ADD_TO_LIST:
                    return{
                        ...state,
                        list:state.list.concat(action.item)
                    }
                    default: 
                    return state;
    }
}

//05스토어 생성
const store = createStore(reducer);
console.log(store.getState());

//스토어안에 들어있는 상태가 변경될때마다 호추로디는 listener함수
const listener = () => {
    const state = store.getState();
    console.log(state);
}

//06리스터 함수를 스토어에 구독
const unsubscribe= store.subscribe(listener);

//액션들을 디스패치 해보기
store.dispatch(increase());
store.dispatch(decrease());
store.ADD_TO_LIST(changeText('안녕하세요'));
store.dispatch(addToList({id:1,text :'하하'}))