let initialState ={
    count:0,
}

export const reducer = (state = initialState,action) =>{
    console.log(state,action)

    switch (action.type)
    {
        case "add":{
            state.count++;
            return {...state};
        }
        case "substract":{
            state.count--;
            return {...state};
        }
        case "multby3":{
            state.count=state.count*3;
            return {...state};
        }
        case "divideby3":{
            state.count=state.count/3;
            return {...state};
        }
        case "add100":{
            state.count=state.count+100;
            return {...state};
        }
        default :{
            return state;
        }
    }
    
};