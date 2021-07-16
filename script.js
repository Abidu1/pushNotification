navigator.serviceWorker.register('sw.js');

    function notifyMe() {
        // Let's check if the browser supports notifications
        // if (!("Notification" in window)) {
        //   alert("This browser does not support desktop notification");
        // }
      
        // Let's check whether notification permissions have already been granted
         if (Notification.permission === "granted") {
          // If it's okay let's create a notification
          var notification = new Notification("Hi there!");
          navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('Notification with ServiceWorker');
          })
        }
      
        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
              var notification = new Notification("Hi there!");
            }
          });
        }
      
        // At last, if the user has denied notifications, and you
        // want to be respectful there is no need to bother them any more.
      }



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