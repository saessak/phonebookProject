let initialState= {
    contactList : []
}

function reducer (state=initialState, action) {
    const {type, payload} = action
    switch(type){ //행동을 가져온다
        case "ADD_CONTACT" :
            return{ //return된 값을 store는 적용한다.
                ...state,
                contactList:[
                    ...state.contactList,
                    {
                        name:payload.name,
                        phoneNumber:payload.phoneNumber
                    }
                ]
            };
            default:
                return {...state};
    }
}

export default reducer;