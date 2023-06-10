function resetFilters() {
    // Clear the search input value
    document.getElementById("search").value = "";
    // Show all the rows that were hidden during filtering
    var hiddenRows = document.getElementsByClassName("filtered-row");
    for (var i = 0; i < hiddenRows.length; i++) {
      hiddenRows[i].classList.remove("filtered-row");
    }
    // Clear the section filter selection
    var sectionSelect = document.getElementById("section");
    sectionSelect.selectedIndex = 0;
    // Clear the select filter selection
    var selectFilter = document.getElementById("selectFilter");
    selectFilter.selectedIndex = 0;
    var selectFilter = document.getElementById("selectFilter2");
    selectFilter.selectedIndex = 0;
  }






