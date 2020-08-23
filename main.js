// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!

addHiddenClass(); //call the addHiddenClass function to hide the error message

let articleHearts = document.querySelectorAll(".like") //get all the like hearts on the page
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallBackFunction);
}
//for every heart in articleHearts, listen for click and invoke the callback function


function addHiddenClass() {
  document.getElementById("modal").classList.add("hidden")
};
//The classList property returns the class name(s) of an element, as a DOMTokenList object.
//This property is useful to add, remove and toggle CSS classes on an element.
//The classList property is read-only, however, you can modify it by using the add() and remove() methods.


function likeCallBackFunction(event) {
  let heart = event.target
  //.target event property returns the element that triggered the event.
  //invoke mimicServerCall to simulate making a server request.
  //when the server is successful: change the heart to a full heart, add activated-heart class to make heart red
  mimicServerCall().then(response => {
    heart.innerText = FULL_HEART
    heart.className = "activated-heart"
  }).catch(error => {
    document.getElementById("modal").className = ""
    setTimeout(addHiddenClass, 5000, error)
  })
  //Display the error modal by removing the .hidden class
  //Display the server error message in the modal
  //Use setTimeout to hide the modal after 5 seconds (add the .hidden class)
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
