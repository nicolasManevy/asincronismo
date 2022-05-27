const somethimesWillHappen= () =>{
return new Promise((resolve,reject)=>{
    if(true){
        resolve("Hey!");
    } else{
        reject("Ops!");
    }
});
};
somethimesWillHappen()
.then (response=>console.log(response))
.catch(err=>console.log(err));

const somethimesWillHappen2=()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve("true");
            },2000)
        }else{
            const error= new Error('whoops!');
            reject(error);
        }
    });
}
somethimesWillHappen2()
.then(response=>console.log(response))
.catch(err=>console.log(err));
Promise.all([somethimesWillHappen(),somethimesWillHappen2()])
.then(response=>{
    console.log('Array of results',response);
})
.catch(err=>console.log(err));