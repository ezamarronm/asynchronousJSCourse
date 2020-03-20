const somethingWillHappen = () => {
  return new Promise((resolve, reject) =>{
    if(true){
      resolve('Promised resolved');
    }else{
      reject('Promise rejected');
    }
  })
};

somethingWillHappen2 = ()=>{
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True')
      }, 2000);
    }else{
      const error = new Error('Something went wrong')
      reject(error);
    }
  })
}

// somethingWillHappen()
//   .then(response => console.log(response))
//   .catch(err => console.error(err))
// somethingWillHappen2()
//   .then(response => console.log(response))
//   .catch(err => console.error(err))

Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response => console.log('Array of results:',response))
.catch(err => console.error(`${err}`))