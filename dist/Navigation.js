"use strict";var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Navigation=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.menuId,a=void 0===n?"main-menu":n,u=t.fontFamily,i=void 0===u?"Font Awesome 5 Free":u,l=t.chevronDown,s=void 0===l?"\\f078":l,o=t.chevronUp,r=void 0===o?"\\f077":o,c=t.click,h=void 0!==c&&c;_classCallCheck(this,e),this.chevronDown=s,this.chevronUp=r,this.fontFamilies=["FontAwesome","Font Awesome 5 Free","Glyphicons Halflings"],this.fontFamily=i,this.hasNestedSubmenu=!1,this.menu=null,this.menuId=a,this.click=h}return _createClass(e,[{key:"hoverHandler",value:function(e){var t=e.type,n=e.target;"mouseout"===t&&"true"===n.getAttribute("aria-haspopup")?n.setAttribute("aria-expanded","false"):"mouseover"===t&&"false"===n.getAttribute("aria-haspopup")&&n.setAttribute("aria-expanded","true")}},{key:"clickHandler",value:function(e){var t=this,n=e.target,a=null;if(this.menu.contains(n)&&"a"!==n.localName)if(e.preventDefault(),"span"===n.localName&&(n=n.parentElement),document.querySelectorAll(".submenu-list-open").length>0&&!document.querySelectorAll(".submenu-list-open")[0].contains(n)){var u=document.querySelectorAll(".submenu-list-open");if(n.nextSibling&&"ul"===n.nextSibling.localName)n.nextSibling.classList.add("submenu-list-open");u.forEach(function(e){t.toggleSubmenuMenuClass(e)}),this.toggleButtonAria(n)}else null!==n.nextSibling&&((a=n.nextSibling).getElementsByTagName("ul").length?this.hasNestedSubmenu=!0:this.hasNestedSubmenu=!1,this.toggleSubmenuMenuClass(a),this.toggleButtonAria(n));else this.clearAll()}},{key:"focusInHandler",value:function(e){var t=this,n=e.target,a=e.target.offsetParent.parentNode,u=this.menu.querySelectorAll('[aria-expanded="true"]'),i=this.menu.querySelectorAll(".submenu-list-open");!this.menu.contains(n)&&u.length?this.clearAll():this.menu.contains(n)&&i.length>1?i.forEach(function(e){e.contains(n)||(t.toggleSubmenuMenuClass(e),t.toggleButtonAria(e.previousElementSibling))}):(u=a.querySelectorAll('[aria-expanded="true"]'),i=a.querySelectorAll(".submenu-list-open"),a.id===this.menuId&&(this.toggleButtonAria(u[0]),this.toggleSubmenuMenuClass(i[0])))}},{key:"toggleSubmenuMenuClass",value:function(e){null!=e?e.classList.toggle("submenu-list-open"):this.clearMenus()}},{key:"clearMenus",value:function(){document.querySelectorAll(".submenu-list-open").forEach(function(e){e.classList.toggle("submenu-list-open")})}},{key:"clearButtons",value:function(){document.querySelectorAll(".submenu-toggle").forEach(function(e){e.setAttribute("aria-expanded","false")})}},{key:"toggleButtonAria",value:function(e){document.querySelectorAll(".submenu-toggle").forEach(function(t){var n=t.parentElement.parentElement.previousElementSibling;t.isSameNode(e)&&"false"===t.getAttribute("aria-expanded")&&n?(n.setAttribute("aria-expanded","true"),t.setAttribute("aria-expanded","true")):t.isSameNode(e)&&"true"===t.getAttribute("aria-expanded")&&n?(n.setAttribute("aria-expanded","true"),t.setAttribute("aria-expanded","false")):t.isSameNode(e)&&"false"===t.getAttribute("aria-expanded")?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false")})}},{key:"clearAll",value:function(){this.clearMenus(),this.clearButtons()}},{key:"eventDispatcher",value:function(e){switch(e.type){case"focusin":this.focusInHandler(e);break;case"keydown":if(13===e.keyCode)this.clickHandler(e);else{if(27!==e.keyCode)return;this.clearAll()}break;case"mousedown":this.clickHandler(e);break;default:return}}},{key:"setEventListeners",value:function(){var e=this;Array.prototype.slice.call(this.menu.getElementsByClassName("no-js")).forEach(function(e){e.classList.remove("no-js")});var t=["click","focusin","keydown","mouseover"];this.click?(t.push("mousedown","mouseup"),this.menu.querySelectorAll(".submenu-list").forEach(function(e){return e.classList.add("click-menu")})):t.push("mouseout");for(var n=0;n<t.length;n++)document.addEventListener(t[n],function(t){e.eventDispatcher(t)})}},{key:"setSubmenuIcon",value:function(){var e=this,t=this.fontFamily;this.fontFamilies.includes(t)||(t="");var n=this.menu.querySelectorAll(".submenu-icon"),a="\n            nav ul li span::before {\n                content: '"+this.chevronDown+"';\n                font-family: '"+t+"';\n                font-weight: bold;\n            }\n            nav ul.click-menu li > button[aria-expanded=\"true\"] span::before,\n            nav ul:not(.click-menu) li:hover > button span::before,\n            nav ul li:focus > button span::before { \n                content: '"+this.chevronUp+"';\n                font-family: '"+t+"'; \n                font-weight: bold;\n            }",u=document.createElement("style");u.styleSheet?u.styleSheet.cssText=a:u.appendChild(document.createTextNode(a)),document.getElementsByTagName("head")[0].appendChild(u),n.forEach(function(t){return t.setAttribute("data-before",e.chevronDown)})}},{key:"init",value:function(){this.menu=document.getElementById(this.menuId),this.setEventListeners(),this.setSubmenuIcon()}}]),e}();
//# sourceMappingURL=Navigation.js.map
