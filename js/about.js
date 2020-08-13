function updateClass(item) {
  var header_array = ["about-home", "header-1", "header-2", "header-3", "header-4", "header-5", "header-6"];
  active = item.id;
  console.log(active);
  for (var header of header_array) {
    // console.log(header);
    if (header == active) {
      document.getElementById(header).className = "active";
    } else {
        document.getElementById(header).className = "inactive";
    }
  }
}
