import "./component/add-room.js";
import "./component/side-navbar.js";
import "./component/breadcrumb-component.js";
import "./component/rooms-element.js"
import "./component/edit-room.js"


function removeAllChild(node) {
    while (node.lastElementChild) {
        node.removeChild(node.lastElementChild);
      }
}


const sideNav = document.getElementById("sideNavigation");
const sideNavCom = document.createElement("side-navbar");
sideNav.appendChild(sideNavCom);


const breadcrumb = document.getElementById('breadcrumbDiv');
const breadcrumbElement = document.createElement('breadcrumb-component');
breadcrumb.appendChild(breadcrumbElement);


const sideMain = document.getElementById("mainContent");

const addRoomElement = document.createElement("add-room");

const editRoomElement = document.createElement("edit-room");

const rooms = document.createElement("rooms-element");



location.hash = "#rooms";

window.addEventListener("hashchange", function() {
    if (location.hash === "#rooms") {

        removeAllChild(sideMain)
        sideMain.appendChild(rooms);
    
    }else if (location.hash === "#add-room") {
        
        removeAllChild(sideMain);
        sideMain.appendChild(addRoomElement);
    
    }else if (location.hash === "#edit-room") {

        removeAllChild(sideMain);
        sideMain.appendChild(editRoomElement);
    
    }
});