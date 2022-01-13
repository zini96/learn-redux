import React from 'react';
import Counter from '../components/Counter'
import {increase,decrease,setDiff} from '../modules/counter';
import {useSelector,useDispatch} from 'react-redux';

function CounterContainer() {
    //useSelector는 리덕스 스토어의 상태를 조회하는 hook
    //state의 값은 store.getState() 함수를 호출했을때 나타나는 결과물과 동일함
    const {number,diff} = useSelector(state=>({ //counter가 들고있는 number와 diff를 가져와서 각각 사용하기 위해 구조분해할당으로 받아오기
        number: state.counter.number,
        diff:state.counter.diff
    }));

    //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할수 있게 해주는 hook
    const dispatch = useDispatch();

    //각 액션을 디스패치하는 함수
    const onSetDiff = diff => dispatch(setDiff(diff));
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    return (
        <Counter
        //상태와
        number={number}
        diff={diff}
        //액션을 디스패치하는 함수들을 props로 넣어주기
        onSetDiff={onSetDiff}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        />
    );
}

export default CounterContainer;