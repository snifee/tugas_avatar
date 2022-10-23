import "./component/add-room.js";
import "./component/side-navbar.js";


const sideNav = document.getElementById("side-nav");

const sideNavCom = document.createElement("side-navbar");

sideNav.appendChild(sideNavCom);




const sideMain = document.getElementById("side-main");

const addRoomElement = document.createElement("add-room");

sideMain.appendChild(addRoomElement);
