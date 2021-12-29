
let initialState = {
  friendsData: [
    {
      id: 1,
      name: "Dima",
      img_src: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cxqxnM-PyVCEhd3gELTF4IQJYf-kmk9qhA&usqp=CAU"
      
    },
    {
      id: 2,
      name: "Sasha",
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFrjdjrgOA0ozkgA6y7FwCw830fuJoccPjQ&usqp=CAU"
       
      
    },
    {
      id: 3,
      name: "Petya",
      img_src: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpFo-yE9V9f6idya5UCXlwvuTf229Z2Sing&usqp=CAU"
       
      
    }
  ],
};

const friendsReducer = (state = initialState, action) => {

  return state;
}

export default friendsReducer;