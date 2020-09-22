function updateAboutClass(item) {
  var header_array = [
    "who-am-i-link",
    "pre-college-life-link",
    "arizona-tempe-mission-link",
    "byu-link",
    "programming-link",
    "personal-life-link"
  ]
  active = item.id;
  console.log(active);
  for (var header of header_array) {
    if (header == active) {
      document.getElementById(header).className = "active";
    } else {
        document.getElementById(header).className = "inactive";
    }
  }
}
function updateResumeClass(item) {
  var header_array = [
    "current-experience-link",
    "byu-dept-of-chemistry-link",
    "edge-tutoring-link",
    "ihc-r1-link",
    "volunteer-developer-programmer-link",
    "volunteer-chemistry-tutor-link",
    "missionary-link"
  ]
  active = item.id;
  console.log(active);
  for (var header of header_array) {
    if (header == active) {
      document.getElementById(header).className = "active";
    } else {
        document.getElementById(header).className = "inactive";
    }
  }
}
