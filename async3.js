
function a(){
    return new Promise((resolve,reject)=>{
    n=false
    if (n){
        resolve("yes")
    }
    else{
        reject("no")
    }
})
}
async function f(){
    b=await a()
    console.log(b);
}f().catch(j=>console.log(j))