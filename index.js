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

function getSkillsRequest() {
  console.info("get skills from JSON");
  fetch("skills.json")
    .then((r) => {
      r.json().then(showSkillsList);
      return "ready";
    })
    .then((x) => {
      console.info("x", x);
      return 10;
    })
    .then((x) => {
      console.info("x", x);
    });
}

function showSkillsList(skillsList) {
  const ul = $("#skills ul");

  skillsList.sort((a, b) => {
    // return a.name.localeCompare(b.name);
    b.endorcements - a.endorcements;
  });

  const skillsHtml = skillsList.map((skill) => {
    const className = skill.favorite ? "favorite" : "";
    return `<li class="${className}">${skill.name} - <span>${skill.endorcements}</span></li>`;
  });
  skillsHtml.push("<li>...</li>");
  ul.innerHTML = skillsHtml.join("");
}

function clickOnMenu(e) {
  if (e.target.matches("a")) {
    const id = e.target.dataset.page;
    if (id) {
      displayPage(id);
    } else {
      console.warn("Please Use data-page attribute");
    }
  }
}

function initEvents() {
  $("#top-menu-bar").addEventListener("click", clickOnMenu);
}

initEvents();
displayPage(activePage);
getSkillsRequest();
