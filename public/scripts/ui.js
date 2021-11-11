// ui.js
const initUI = () => {
    const nameMessage = document.getElementById("logText");
    console.log('You are logged in as ' + randomName)
    nameMessage.setAttribute('value', 'You are logged in as ' + randomName);

    let conferenceAlias = 'Dolby Virtual World';

     /*
        1. Create a conference room with an alias
        2. Join the conference with its id
        */
        VoxeetSDK.conference.create({ alias: conferenceAlias })
            .then((conference) => VoxeetSDK.conference.join(conference, {}))
            .then(() => {
                joinButton.disabled = true;
            })
            .catch((err) => console.error(err));
  };