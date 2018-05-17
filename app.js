// Search input
const searchUser = document.querySelector('#searchUser');

// Search input event Listener
searchUser.addEventListener('submit', (e) => {
    //Get input text 
    const userText = e.target.value;

    if(userText !== "") {
        console.log(userText);
    }
})
