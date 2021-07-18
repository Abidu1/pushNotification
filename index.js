if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("SW Registered");
        console.log(registration)
    }).catch(error =>{
        console.log('sw Registration failed');
        console.log(error)
    })
}