function performSearch() {
    // Get the search query from the input field
    var searchQuery = document.getElementById('search').value.toLowerCase();
    // Get all the elements with the teacher_name class
    var teacherNames = document.getElementsByClassName('teacher_name');
    // Hide the searchResults div initially
    var searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.style.display = 'none';
    // Clear the previous search results
    var searchResultsTableBody = document.querySelector('#searchResultsGroupsTable tbody');
    searchResultsTableBody.innerHTML = '';
    // Loop through the teacherNames and check if the search query matches
    for (var i = 0; i < teacherNames.length; i++) {
      var teacherName = teacherNames[i].textContent.toLowerCase();
      // If the search query matches, add the row to the search results table
      if (teacherName.includes(searchQuery)) {
        var group = teacherNames[i].parentNode.parentNode.querySelector('.cp_col, .design_col, .ui_col, .sr_col, .W4_c_col').textContent;
        var classroom = teacherNames[i].parentNode.parentNode.querySelector('.cp_col, .design_col, .ui_col, .sr_col, .W4_c_col').textContent;
        var schedule = teacherNames[i].parentNode.parentNode.querySelector('.text_time.start').textContent;
        var newRow = document.createElement('tr');
        newRow.innerHTML = '<td>' + group + '</td><td>' + classroom + '</td><td>' + schedule + '</td>';
        searchResultsTableBody.appendChild(newRow);
      }
    }
    // Display the searchResults div if there are search results
    if (searchResultsTableBody.children.length > 0) {
      searchResultsDiv.style.display = 'block';
    }
  }
  function cleanSearchResults() {
    // Hide the searchResults div
    var searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.style.display = 'none';
    // Clear the search results table
    var searchResultsTableBody = document.querySelector('#searchResultsGroupsTable tbody');
    searchResultsTableBody.innerHTML = '';
  }