var activePage = "skills";

function $(selector) {
  return document, document.querySelector(selector);
}

function displayPage(id) {
  hide(activePage);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.remove(activePage);
  show(id);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.add("active");
  activePage = id;
}

function show(id) {
  $("#" + id).style.display = "block";
}

function hide(id) {
  $("#" + id).style.display = "none";
}

function showSkillsList() {
  var ul = $("#skills ul");
  var skillsList = [
    { name: "JS", favorite: true },
    { name: "HTML", favorite: true },
    { name: "CSS" },
  ];
  var skillsHtml = skillsList.map(function (skill) {
    var className = skill.favorite ? "favorite" : "";
    return `<li class="${className}">${skill.name}</li>`;
  });
  ul.innerHTML = skillsHtml.join("");
}

displayPage(activePage);
$("#top-menu-bar").addEventListener("click", function clickOnMenu(e) {
  if (e.target.matches("a")) {
    var id = e.target.dataset.page;
    if (id) {
      displayPage(id);
    } else {
      console.warn("Please Use data-page attribute");
    }
  }
});
showSkillsList();
