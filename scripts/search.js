function performSearch() {
  var searchTerm = document.getElementById('search-input').value.trim();

  // Perform Search
  if (searchTerm) {
      var searchResults = document.getElementById('search-results');
      
      // Clear previous results
      searchResults.innerHTML = '';

      // Simulated search result
      var resultSummary = document.createElement('div');
      resultSummary.classList.add('search-result-item');
      resultSummary.textContent = 'Result for "' + searchTerm + '"';

      var resultItemDummy = document.createElement('div');
      resultItemDummy.classList.add('search-result-item');

      var resultHTML = `
        <a href="forum-thread.html">
          <div class="forum-post">
            <div class="avatar">🧑</div>
            <div class="post-content">
              <h2>Any golf club suggestions?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.</p>
              <div class="tags">
                <span class="tag">golf</span>
                <span class="tag">facilities</span>
                <span class="tag">La Jolla</span>
              </div>
            </div>
          </div>
        </a>
        `;
      resultItemDummy.innerHTML = resultHTML;
      
      // Append the result item to the results container
      searchResults.append(resultSummary, resultItemDummy, resultItemDummy.cloneNode(true), resultItemDummy.cloneNode(true));
  }
}

function updateBtn() {
  let searchInput = document.getElementById('search-input');
  let searchQuery = searchInput.value.trim();

  let searchBtn = document.getElementById("search-button");

  if (searchQuery.length > 0) {
    searchBtn.disabled = null;
    // searchBtn.style.backgroundColor = "#2d90fa";
  } else {
    searchBtn.disabled = true;
    // searchBtn.style.backgroundColor = "#cccccc";
  }
}

// Add an event listener for the search input field to search when the user presses the "Enter" key
document.getElementById('search-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      performSearch();
  }
});
