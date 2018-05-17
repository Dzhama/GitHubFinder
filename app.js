//init GitHub
const github = new Github;
//init ui

const ui = new UI;
// Search input
const searchUser = document.querySelector('#searchUser');

// Search input event Listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text 
    const userText = e.target.value;

    if(userText !== "") {
        // make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === "Not Found"){
                // show alert
                ui.showAlert('User not found', 'alert alert-danger');
                ui.clearProfile();
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else {
        // clear profile
        ui.clearProfile();
    }
})
