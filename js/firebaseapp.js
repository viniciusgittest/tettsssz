(function(){
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBADFlbwkywhUjWehhz2BmSFo2Bs9zJIKQ",
    authDomain: "bapp-bfec7.firebaseapp.com",
    databaseURL: "https://bapp-bfec7.firebaseio.com",
    projectId: "bapp-bfec7",
    storageBucket: "bapp-bfec7.appspot.com",
    messagingSenderId: "863669432016"
  };
  firebase.initializeApp(config);
    
    
    
   
    
    const buttonG = document.getElementById('btngplus');
    
    buttonG.addEventListener('click', e => {
        
             
        var provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('https://www.googleapis.com/auth/plus.login');

        firebase.auth().signInWithRedirect(provider);

        firebase.auth().getRedirectResult().then(function(authData) {
            console.log(authData);
        }).catch(function(error) {
            console.log(error);
        });
        
  
    });
    

        

    
    
}());