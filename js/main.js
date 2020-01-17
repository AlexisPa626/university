const targets = document.querySelectorAll('[data-target]');
let modal_backdrop = document.createElement('div');
let btn_target_now = null;
let toggles = document.querySelectorAll('[data-toggle]');

for (let i = 0; i < targets.length; i++) {

  let btn_target =  targets[i];
  let data_target = targets[i].getAttribute('data-target');
  let toggle = targets[i].getAttribute('data-toggle');
  let menu =  document.querySelector(data_target);

  btn_target.addEventListener('click',()=>{

    if (toggle == 'menu-left') {
      menu.classList.add('menu-left__active');
    }

  })


  if (toggle=='menu-left') {
    window.addEventListener('click', (e)=>{

      if (e.target.getAttribute('class')!=null) {
        if (!e.target.getAttribute('class').includes('menu-open') &&
            menu.getAttribute('class').includes('menu-left__active'))
        {
          if (e.target.offsetParent==null) {
              let menus_close = Array.from(document.querySelectorAll('[class="menu-left__submenu menu-left__active'));
              menus_close.forEach((el)=>{
                el.classList.remove('menu-left__active');
              })

              menu.classList.remove('menu-left__active');
          }
        }
      }

      if (e.target.getAttribute('data-target')==='menu-left__submenu') {
          const submenu = document.querySelector(e.target.getAttribute('data-toggle'))
          submenu.classList.add('menu-left__active')
      }

      if (e.target.getAttribute('class')!=null && e.target.getAttribute('class').includes('menu-close__icon')) {
        let close_menu =  e.target.parentElement.parentElement;
        if (close_menu.getAttribute('class').includes('menu-left__list--small')) {
          menu.classList.remove('menu-left__active');
        }
        close_menu.classList.remove('menu-left__active');
      }


    })
  }

}
