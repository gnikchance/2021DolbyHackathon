const avengersNames = [
    "Thor",
    "Cap",
    "Tony Stark"
  ];
  let randomName =
    avengersNames[Math.floor(Math.random() * avengersNames.length)];

const main = async () => {
    VoxeetSDK.initialize("ZzbxvSaFjhTu5K-932iMBg==", "I4yLd3V5Shb1X7Be3TTCNh--UkcurqfiO3g6jSNb88Y=");

    try {
        // Open the session here !!!!
        await VoxeetSDK.session.open({ name: randomName });
        initUI();
    } catch (e) {
        alert('Something went wrong : ' + e)
    }
  };
  
  main();