const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabsContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 1) => {
  tabsContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("tabheader__item")){
      tabs.forEach((item, i)=>{
          if(target === item){
              console.log(i);
              hideTabContent(i);
              showTabContent(i);
          }
      })
  }
});

