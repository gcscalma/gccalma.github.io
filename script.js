/*index*/
function select(item){
    var a,i,menu;
    a = document.getElementsByClassName('foodItem');
    menu = document.getElementsByClassName('menu');

    if(item === 'all'){
        item = '';
        remove(menu[0], 'show');
    } else {
        add(menu[0], 'show');
    }

    for(i = 0; i < a.length; i++){
        remove(a[i], 'hide');
        if(a[i].className.indexOf(item) > -1){
            add(a[i], 'hide');
        }
    }

    for(i = 1; i < menu.length; i++){
        add(menu[i], 'show');
        if(menu[i].className.indexOf(item) > -1 && item !== ''){
            remove(menu[i], 'show');
        }
    }
}

function remove(el, name){
    var i, arr1, arr2;
    arr1 = el.className.split(' ');
    arr2 = name.split(' ');
    for(i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1){
            el.className += ' ' + arr2[i];
        }
    }
}
function add(el, name){
    var i, arr1, arr2;
    arr1 = el.className.split(' ');
    arr2 = name.split(' ');
    for(i = 0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    el.className = arr1.join(' ');
}
/*side bar*/
function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}
function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0px';
    document.getElementById('main').style.marginLeft = '0px';
}

/*contact*/
function display() {
  var x = document.getElementById('orderNum');
  if (x.style.display === 'none') x.style.display = 'block';
  else x.style.display = 'none';
}
function displayOrderNum2() {
  var x = document.getElementById('orderNum');
  x.style.display = 'none';
}