import * as types from "./actionTypes";
const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const appreducer = (state = initialState,action) => {
  const {type,payload}=action;
  switch(type){
    case types.GET_SHOES_DATA_REQUEST:
        return {...state,isLoading:true};
    case types.GET_SHOES_DATA_SUCCESS:
      console.log("hi")
      // var shoe=[[...payload]]
      var newshoes=[]
      for(var key in payload)
      {
        newshoes.push(key)
      }
        return {...state,
        
         
          shoes:newshoes,
          isLoading:false,
          isError:false
        
         };
        
       
    case  types.GET_SHOES_DATA_FAILURE:
        return {...state,
       
         
          isLoading:false,
          isError:payload
        };
    

        default:
          return state;    
};
}
export default appreducer