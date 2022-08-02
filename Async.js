// // There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

// // or

// // "async and await make promises easier to write"
// // async makes a function return a Promise
// // await makes a function wait for a Promise ``

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
  }
  
  asyncCall();

////////////////////////////////////////////////////////////////////////////////////////////////////////

function a(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("yes")
        },2000)
    })
}
async function n(){
    console.log("c");
    res=await a()
    console.log(res);
}
n()
