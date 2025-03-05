// Music Playlist Controller
//  Take a command ("Play", "Pause", "Next", "Previous").
//  Use switch to perform the correct action.

function playlistController(action) {
  switch (action) {
    case "Play":
      console.log("Playing...");
      break;
    case "Pause":
      console.log("Pause");
      break;
    case "Next":
      console.log("Next");
      break;
    case "Previous":
      console.log("Previous");
      break;
    default:
      console.log("Wrong action!");
  }
}

playlistController("Play");
