"use strict";var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Navigation=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.menuId,r=void 0===n?"am-main-menu":n,a=t.click,u=void 0!==a&&a;_classCallCheck(this,e),this.hasNestedSubmenu=!1,this.menu=null,this.menuId=r,this.click=u,this.currentItem=null}return _createClass(e,[{key:"hoverHandler",value:function(e){var t=e.type,n=e.target,r=this.createCustomEvt();"mouseout"===t&&"true"===n.getAttribute("aria-haspopup")?n.setAttribute("aria-expanded","false"):"mouseover"===t&&"false"===n.getAttribute("aria-haspopup")&&n.setAttribute("aria-expanded","true"),n.dispatchEvent(r)}},{key:"clickHandler",value:function(e){var t=this,n=e.target,r=null;if(this.menu.contains(n)||"mousedown"!==e.type&&"keydown"!==e.type?this.menu.contains(n)&&"keydown"!==e.type&&e.preventDefault():this.clearAll(),"span"===n.localName&&(n=n.parentElement),document.querySelectorAll(".am-submenu-list-open").length>0&&!document.querySelectorAll(".am-submenu-list-open")[0].contains(n)){var a=Array.from(document.querySelectorAll(".am-submenu-list-open"));if(n.nextSibling&&"ul"===n.nextSibling.localName)n.nextSibling.classList.add("am-submenu-list-open");a.forEach(function(e){t.toggleSubmenuMenuClass(e)}),this.toggleButtonAria(n)}else{var u=n.nextElementSibling;null!==u&&"ul"===u.localName&&((r=u).getElementsByTagName("ul").length?this.hasNestedSubmenu=!0:this.hasNestedSubmenu=!1,this.toggleSubmenuMenuClass(r),this.toggleButtonAria(n))}var i=this.getCurrentItem();i&&"undefined"!==i&&this.setCurrentItem(i)}},{key:"focusInHandler",value:function(e){var t=this,n=e.target,r=e.target.offsetParent.parentNode,a=Array.from(this.menu.querySelectorAll('[aria-expanded="true"]')),u=Array.from(this.menu.querySelectorAll(".am-submenu-list-open"));!this.menu.contains(n)&&a.length?this.clearAll():this.menu.contains(n)&&u.length>1?u.forEach(function(e){e.contains(n)||(t.toggleSubmenuMenuClass(e),t.toggleButtonAria(e.previousElementSibling))}):(a=Array.from(r.querySelectorAll('[aria-expanded="true"]')),u=Array.from(r.querySelectorAll(".am-submenu-list-open")),r.id===this.menuId&&(this.toggleButtonAria(a[0]),this.toggleSubmenuMenuClass(u[0]),this.clearCurrent()))}},{key:"toggleSubmenuMenuClass",value:function(e){null!=e?e.classList.toggle("am-submenu-list-open"):this.clearMenus()}},{key:"toggleButtonAria",value:function(e){Array.from(document.querySelectorAll(".am-submenu-toggle")).forEach(function(t){var n=t.parentElement.parentElement.previousElementSibling;t.isSameNode(e)&&"false"===t.getAttribute("aria-expanded")&&n?(n.setAttribute("aria-expanded","true"),t.setAttribute("aria-expanded","true")):t.isSameNode(e)&&"true"===t.getAttribute("aria-expanded")&&n?(n.setAttribute("aria-expanded","true"),t.setAttribute("aria-expanded","false")):t.isSameNode(e)&&"false"===t.getAttribute("aria-expanded")?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false")})}},{key:"clearMenus",value:function(){var e=Array.from(this.menu.querySelectorAll(".am-submenu-list-open"));e.length>0&&e.forEach(function(e){e.classList.toggle("am-submenu-list-open")})}},{key:"clearButtons",value:function(){Array.from(this.menu.querySelectorAll(".am-submenu-toggle")).forEach(function(e){e.setAttribute("aria-expanded","false")})}},{key:"clearCurrent",value:function(){var e=this.menu.querySelector(".am-current-item");e&&e.classList.remove("am-current-item")}},{key:"clearAll",value:function(){this.clearMenus(),this.clearButtons(),this.clearCurrent()}},{key:"getCurrentItem",value:function(){var e=this.menu.querySelector('[aria-expanded="true"]');if(e)return e.parentElement}},{key:"setCurrentItem",value:function(e){Array.from(this.menu.querySelectorAll("li")).forEach(function(e){e.classList.remove("am-current-item")}),e&&(this.currentItem=e,this.currentItem.classList.add("am-current-item"))}},{key:"eventDispatcher",value:function(e){switch(e.type){case"focusin":this.focusInHandler(e);break;case"keydown":if(13===e.keyCode)this.clickHandler(e);else{if(27!==e.keyCode)return;this.clearAll()}break;case"mousedown":this.clickHandler(e);break;default:return}}},{key:"setEventListeners",value:function(){var e=this;Array.from(this.menu.querySelectorAll(".no-js")).forEach(function(e){e.classList.remove("no-js")});var t=["focusin","keydown","mouseover"];this.click?(t.push("mousedown"),Array.from(this.menu.querySelectorAll(".am-submenu-list")).forEach(function(e){return e.classList.add("am-click-menu")})):t.push("mouseout");for(var n=0;n<t.length;n++)document.addEventListener(t[n],function(t){e.eventDispatcher(t)})}},{key:"init",value:function(){this.menu=document.getElementById(this.menuId),this.setEventListeners()}}]),e}();
//# sourceMappingURL=Navigation.js.map
