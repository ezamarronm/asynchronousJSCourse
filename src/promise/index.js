const somethingWillHappen = () => {
  return new Promise((resolve, reject) =>{
    if(true){
      resolve('Promised resolved');
    }else{
      reject('Promise rejected');
    }
  })
};