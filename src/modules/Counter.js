// action 정의
const INCREASE = "counterReducer/INCREASE";
const DECREASE = "counterReducer/DECREASE";
// action 생성 함수 정의
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
// 상태 데이터 정의
const initialState = {
    number: 0
}

//reducer function 정의 (상태 변경 함수)
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE: return { ...state, number: state.number + 1 };
        case DECREASE: return { ...state, number: state.number - 1 };
        default : return state;
    }
}

export default counterReducer;
