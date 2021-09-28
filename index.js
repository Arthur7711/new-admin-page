// graph 1
const dataForGraph1 = [
  { date: "2021-09-08", s158: 120, s155: 0, s154: 7 },
  { date: "2021-09-09", s158: 33, s155: 0, s154: 9 },
  { date: "2021-09-10", s158: 21, s155: 0, s154: 21 },
  { date: "2021-09-11", s158: 7, s155: 0, s154: 31 },
  { date: "2021-09-12", s158: 2, s155: 0, s154: 32 },
  { date: "2021-09-13", s158: 13, s155: 0, s154: 5 },
  { date: "2021-09-14", s158: 31, s155: 0, s154: 2 },
  { date: "2021-09-15", s158: 10, s155: 0, s154: 4 },
  { date: "2021-09-16", s158: 15, s155: 0, s154: 4 },
  { date: "2021-09-17", s158: 41, s155: 0, s154: 1 },
  { date: "2021-09-18", s158: 21, s155: 0, s154: 2 },
  { date: "2021-09-19", s158: 21, s155: 0, s154: 10 },
];

const ctx = document.getElementById("myChart").getContext("2d");
let data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Prev",
      backgroundColor: "#BFDBFE",
      data: dataForGraph1.map((el) => el.s158),
    },
    {
      label: "Now",
      backgroundColor: "#2664EC",
      data: dataForGraph1.map((el) => el.s154),
    },
  ],
};

const myBarChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: {
    barValueSpacing: 20,
    // responsive: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
});

// graph 2
const dataForGraph2 = [
  { label: "Student/ Senior", value: 9 },
  { label: "Faculty", value: 2 },
  { label: "Adult StreamPass", value: 4 },
];
const ctt = document.getElementById("mySecChart");
let myPieChart = new Chart(ctt, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "Points",
        backgroundColor: ["#60A5FA", "#2664EC", "#BFDBFE"],
        data: dataForGraph2.map((el) => el.value),
      },
    ],
  },
  options: {
    animation: {
      animationScale: true,
    },
    // rotation: Math.PI * 30,
    responsive: false,
  },
});

// making a navigation menu hide and unhide
const nav = document.querySelector(".navigationMenu");
const unhidingEl = document.querySelector(".unhidingMenu");
const burgerMenu = document.querySelector(".unhidingBurgerMenu");

document.querySelector(".hidingMenu").addEventListener("click", () => {
  nav.style.display = "none";
  unhidingEl.style.display = "flex";
});

document.querySelector(".unhidingMenu").addEventListener("click", () => {
  // open
  nav.style.display = "block";
  unhidingEl.style.display = "none";

  underPartTopSvg.style.display = "none";
  showPart.style.display = "none";
  topPartTopSvg.style.display = "block";

  openUser.style.display = "block";
  userPart.style.display = "none";
  closeUser.style.display = "none";

  openMainPart.style.display = "block";
  mainShowPart.style.display = "none";
  closeMainPart.style.display = "none";
});

document.querySelector(".unhidingBurgerMenu").addEventListener("click", () => {
  //open
  nav.style.display = "block";
  burgerMenu.style.display = "none";

  underPartTopSvg.style.display = "none";
  showPart.style.display = "none";
  topPartTopSvg.style.display = "block";

  openUser.style.display = "block";
  userPart.style.display = "none";
  closeUser.style.display = "none";

  openMainPart.style.display = "block";
  mainShowPart.style.display = "none";
  closeMainPart.style.display = "none";
});

document.querySelector(".hidingBurgerMenu").addEventListener("click", () => {
  nav.style.display = "none";
  burgerMenu.style.display = "flex";
});

// making top Content
const showPart = document.querySelector(".doesShow");
const topPartTopSvg = document.querySelector(".topSvgPart");
const underPartTopSvg = document.querySelector(".underSvgPart");

topPartTopSvg.addEventListener("click", () => {
  // open
  topPartTopSvg.style.display = "none";
  showPart.style.display = "block";
  underPartTopSvg.style.display = "block";

  nav.style.display = "none";
  unhidingEl.style.display = "flex";

  openMainPart.style.display = "block";
  mainShowPart.style.display = "none";
  closeMainPart.style.display = "none";

  openUser.style.display = "block";
  userPart.style.display = "none";
  closeUser.style.display = "none";

  burgerMenu.style.display = "flex";
});

underPartTopSvg.addEventListener("click", () => {
  underPartTopSvg.style.display = "none";
  showPart.style.display = "none";
  topPartTopSvg.style.display = "block";
});

// making user part functions
const closeUser = document.querySelector(".closeUserInfo");
const openUser = document.querySelector(".openUserInfo");
const userPart = document.querySelector(".userPart");

closeUser.addEventListener("click", () => {
  openUser.style.display = "block";
  userPart.style.display = "none";
  closeUser.style.display = "none";
});

openUser.addEventListener("click", () => {
  // open
  openUser.style.display = "none";
  userPart.style.display = "block";
  closeUser.style.display = "block";

  topPartTopSvg.style.display = "block";
  showPart.style.display = "none";
  underPartTopSvg.style.display = "none";

  nav.style.display = "none";
  unhidingEl.style.display = "flex";

  openMainPart.style.display = "block";
  mainShowPart.style.display = "none";
  closeMainPart.style.display = "none";

  burgerMenu.style.display = "flex";
});

//under open-close logic
const openMainPart = document.querySelector(".openMainPart");
const closeMainPart = document.querySelector(".closeMainPart");
const mainShowPart = document.querySelector(".mainShowPart");

openMainPart.addEventListener("click", () => {
  // open
  openMainPart.style.display = "none";
  mainShowPart.style.display = "block";
  closeMainPart.style.display = "block";

  openUser.style.display = "block";
  userPart.style.display = "none";
  closeUser.style.display = "none";

  topPartTopSvg.style.display = "block";
  showPart.style.display = "none";
  underPartTopSvg.style.display = "none";

  nav.style.display = "none";
  unhidingEl.style.display = "flex";

  burgerMenu.style.display = "flex";
});

closeMainPart.addEventListener("click", () => {
  openMainPart.style.display = "block";
  mainShowPart.style.display = "none";
  closeMainPart.style.display = "none";
});

// iconsAreaFullScreen selected part
const iconsArr = Array.from(document.querySelectorAll(".iconsAreaFullScreen"));
iconsArr.map((el) => {
  el.addEventListener("click", () => {
    iconsArr.map((item) => item.removeAttribute("style"));
    el.style.borderLeft = "3px solid #BE185D";
  });
});

// iconsAreaMobileScreen selected part
const iconsMobileArr = Array.from(
  document.querySelectorAll(".iconsAreaMobileScreen")
);
iconsMobileArr.map((el) => {
  el.addEventListener("click", () => {
    iconsMobileArr.map((item) => item.removeAttribute("style"));
    el.style.borderBottom = "3px solid #BE185D";
  });
});

// menu build
const menu = {
  text: "Menu",
  icon: "href",
  children: [
    { icon: "href", text: "Works of George Macdonald" },
    {
      text: "Books",
      icon: "href",
      children: [
        {
          text: "Sir Gibbie",
          icon: "href",
        },
        {
          text: "At the Back of the North Wind",
          icon: "href",
        },
        {
          text: "The Princess and the Goblin",
          icon: "href",
        },
      ],
    },
    { text: "Poems", icon: "href" },
    {
      text: "Essays",
      icon: "href",
      children: [
        {
          text: "The Fantastic Imagination",
          icon: "href",
        },
        {
          text: "The New Name",
          icon: "href",
        },
      ],
    },
    { text: "Our Community", icon: "href" },
    {
      text: "About us",
      icon: "href",
      children: [
        {
          text: "Community membership",
          icon: "href",
        },
        {
          text: "Community sponsorship",
          icon: "href",
          children: [
            {
              text: "Our Patreon",
              icon: "href",
              children: [
                {
                  text: "Ourmmm",
                  icon: "href",
                },
              ],
            },
            {
              text: "Endowments",
              icon: "href",
            },
          ],
        },
      ],
    },
    { text: "Forum", icon: "href" },
    {
      text: "Facebook Group",
      icon: "href",
    },
  ],
};

function binaryTree(container, obj) {
  const ul = document.createElement("ul");
  let att = document.createAttribute("class");
  att.value = "hiddingElem";
  ul.setAttributeNode(att);
  ul.style.cursor = "pointer";
  for (const { text, children } of obj) {
    const li = document.createElement("li");
    li.innerText = text;
    if (children) {
      binaryTree(li, children, true);
    }
    ul.appendChild(li);
  }
  container.appendChild(ul);
}

function createMenu(menu, container) {
  let newLi = document.createElement("li");
  newLi.innerText = menu.text;
  newLi.style.cursor = "pointer";
  addingMenus.appendChild(newLi);
  binaryTree(addingMenus, menu.children);
}
const addingMenus = document.getElementById("addHere");

createMenu(menu, addingMenus);

// menu part click
document.querySelector(".navigationMenu").addEventListener("click", (event) => {
  if (event.target.nodeName === "svg") {
    event.target.classList.toggle("rotateSVG");
  }
  if (event.target.parentElement?.nextElementSibling?.nodeName === "UL") {
    event.target.parentElement.nextElementSibling.classList.toggle(
      "subMenuItem"
    );
  }
});

// submenus parts
document
  .querySelector(".subMenuOpenClose")
  .addEventListener("click", (event) => {
    if (event.target?.nextElementSibling?.nodeName === "UL") {
      console.log(true);
      console.log(event);
      event.target.nextElementSibling.classList.toggle("subMenuItem");
    }
    if (event.target?.children.length > 0) {
      event.target.children[0].classList.toggle("subMenuItem");
    }
  });
