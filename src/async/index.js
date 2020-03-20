const doSomethingAsync = () => {
  return new Promise((resolve,reject) =>{
    (true)
      ? setTimeout( () => resolve('Doing Something Async'), 2000)
      : reject (new Error('Test Error'));
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
  console.log('simon')
}

console.log('Before the async function')
doSomething();
console.log('After the async function')

const anotherFunction = async () =>{
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
}

console.log('Before the async function')
anotherFunction();
console.log('After the async function')
