
//Notification objects have a close() method. SOME browser automatically close them.
        //Notification Events - click, error, close, show
        if( 'Notification' in window){
            
          if (Notification.permission === 'granted') {
              // If it's okay let's create a notification
              doNotify();
          }else{
              //notification == denied
              Notification.requestPermission()
                  .then(function(result) {
                      console.log(result);  //granted || denied
                      if( Notification.permission == 'granted'){ 
                          doNotify();
                      }
                  })
                  .catch( (err) => {
                      console.log(err);
                  });
          }
      
      }
      
      function doNotify(){
          let title = "The Title";
          let t = Date.now() + 120000;    //2 mins in future
          let options = {
              body: 'Hello from JavaScript!',
              data: {prop1:123, prop2:"Steve"},
              lang: 'en-CA',
              icon: '/ghost_animation_by_volorf.gif',
              timestamp: t,
              vibrate: [100, 200, 100]
          }
          let n = new Notification(title, options);

          n.addEventListener('show', function(ev){
              console.log('SHOW', ev.currentTarget.data);
          });
          n.addEventListener('close', function(ev){
             console.log('CLOSE', ev.currentTarget.body); 
          });
          setTimeout( n.close.bind(n), 3000); //close notification after 3 seconds
      }
      /*************
      Note about actions param - used with webworkers/serviceworkers
      actions: [
         {action: 'mail', title: 'e-mail', icon: './img/envelope-closed-lg.png'},
         {action: 'blastoff', title: 'Blastoff', icon: './img/rocket-lg.png'}]
     *********************/

    // function notifyMe() {
    //     // Let's check if the browser supports notifications
    //     if (!("Notification" in window)) {
    //       alert("This browser does not support desktop notification");
    //     }
      
    //     // Let's check whether notification permissions have already been granted
    //     else if (Notification.permission === "granted") {
    //       // If it's okay let's create a notification
    //       var notification = new Notification("Hi there!");
    //     }
      
    //     // Otherwise, we need to ask the user for permission
    //     else if (Notification.permission !== "denied") {
    //       Notification.requestPermission().then(function (permission) {
    //         // If the user accepts, let's create a notification
    //         if (permission === "granted") {
    //           var notification = new Notification("Hi there!");
    //         }
    //       });
    //     }
      
    //     // At last, if the user has denied notifications, and you
    //     // want to be respectful there is no need to bother them any more.
    //   }


      
    // function notifyMe() {
    //   // Let's check if the browser supports notifications
    //   if (!("Notification" in window)) {
    //     alert("This browser does not support desktop notification");
    //   }
    
    //   // Let's check whether notification permissions have already been granted
    //   else if (Notification.permission === "granted") {
    //     // If it's okay let's create a notification
    //     var notification = new Notification("Hi there!");
    //   }
    
    //   // Otherwise, we need to ask the user for permission
    //   else if (Notification.permission !== "denied") {
    //     Notification.requestPermission().then(function (permission) {
    //       // If the user accepts, let's create a notification
    //       if (permission === "granted") {
    //         var notification = new Notification("Hi there!");
    //       }
    //     });
    //   }
    
    //   // At last, if the user has denied notifications, and you
    //   // want to be respectful there is no need to bother them any more.
    // }



          // // has default, granted or denied 
    // console.log(Notification.permission);

    // function showNotification(){
    //     // new notification has string, options so string is usually a message for notifcation and body proptery is the options
    //     const notification = new Notification("New message from dcode", {
    //         body:"hello",
    //         icon:"./ghost_animation_by_volorf.gif"
    //         // you can also display an icon when you see notifcation
    //     })
    //     // event will run when you click on notification
    //     notification.onclick = (e) =>{
    //         window.location.href = "https://google.com";
    //     }
    // }


    // if(Notification.permission === "granted"){
    //     showNotification();
    //     // this means if permission is not denied then request for permission 
    // } else if(Notification.permission !== "denied"){
    //     Notification.requestPermission().then(permission =>{
    //         // if permission was granted then show notification
    //         if(permission === "granted"){
    //             showNotification();
    //         }

    //     })
    // }