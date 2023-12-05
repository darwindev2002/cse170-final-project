function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

function createPost() {
  document.getElementById('create-post-form').addEventListener('submit', function(event){
    event.preventDefault();
    
    // Gather data from the form
    var title = document.getElementById('post-title').value;
    var content = document.getElementById('post-content').value;
    var tagsSports = document.getElementById('post-tags-sports').value;
    var tagsLocations = document.getElementById('post-tags-locations').value;

    // Process the form data (e.g., send to a server or log to the console)
    console.log('Post Created:', title, content, tagsSports, tagsLocations);

    // Here you would normally send the data to the server.
    // For the purpose of this example, we'll just clear the form
    document.getElementById('create-post-form').reset();
});
}

function backHome() {

}