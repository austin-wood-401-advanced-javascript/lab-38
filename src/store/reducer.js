const initialState = {
  {
  },
  {
  maxVisible: 3,
  showCompleted: true,
  },
};

export default (state = initialState,action) => {
  const {payload,type} =action;

  switch(type){

  case 'TOGGLE': 
    return payload;
  default: return state;
  }

};

// 55:15