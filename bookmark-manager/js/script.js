const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// Tabs Menu Event Listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
  const currentTab = e.target
  const currentPanel = e.target.dataset.target
  console.log(currentPanel)
  
  tabs.forEach((tab) => {
    if (tab.children[0] == currentTab) {
      tab.children[0].classList.add('border-b-4', 'border-softRed')
    } else {
      tab.children[0].classList.remove('border-b-4', 'border-softRed')
    }
  })

  panels.forEach((panel) => {
    if (panel.classList.contains(currentPanel)) {
      panel.classList.remove('hidden')
    } else {
      panel.classList.add('hidden')
    }
  })
}

const hamburgerButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');
const logo = document.getElementById('logo');

hamburgerButton.addEventListener('click', navToggle);
mobileMenu.childNodes.forEach((item) => item.addEventListener('click', navToggle))

function navToggle() {
  console.log(mobileMenu)
  hamburgerButton.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');

  if (mobileMenu.classList.contains('flex')){
    logo.setAttribute('src', '../images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', '../images/logo-bookmark.svg')
  }
}