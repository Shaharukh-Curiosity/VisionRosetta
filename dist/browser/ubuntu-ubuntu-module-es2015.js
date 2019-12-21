(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ubuntu-ubuntu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ubuntu/Tutorials/detecting-openport/detecting-openport.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ubuntu/Tutorials/detecting-openport/detecting-openport.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Merriweather|Montserrat|Open+Sans|Roboto|Source+Sans+Pro&display=swap\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Roboto&display=swap\" rel=\"stylesheet\">\n\n<title>Ubuntu Installation</title>\n\n<div class=\"container\">\n\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n          <li class=\"breadcrumb-item\"><a routerLink=\"/ubuntu_tutorials\">Ubuntu</a></li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Detecting_Open_Port</li>\n        </ol>\n      </nav>\n\n\n    <h2 style=\"color:black;font-family: 'Merriweather', serif;line-height: 45px;color:rgb(50,59,69);font-size: 33px;\">Detecting Open Port On Linux</h2>\n    <br>\n    <span style=\"font-size: 13px;\">\n      Written By <a routerLink=\"#\">Shaharukh Parmar</a> on 9 Dec,2019\n    </span>\n          <hr>\n        <div class=\"row\">\n          <div class=\"col\">\n              <span>\n                  We Will always look at different ways to check which network port currently being listened on network for incoming connection \n                  Security Or Vulnerability has always been concern for us , so we perdiocally check Network Service ,it good practice for us to run only\n                  network service which are needed \n                </span>\n               \n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-10\">\n            <span>\n             \n              <div>\n              <br>\n                <img style=\"width:100%;height:50%\" src=\"assets/images/ubuntu/Tutorials/openport.jpg\" alt=\"error\">\n           <hr>\n              </div>\n            </span>\n          </div>\n      \n        </div>\n      \n        <hr>\n        \n      <hr>\n        <h3 style=\"color:blue;padding-top:2%;\">Detect Local Service</h3>\n        <br>\n      \n       <span>\n         The Netstat utility display information about open port on local system\n       </span>\n      <table>\n        <tr>\n          <td>\n        \n             \n                  \n           \n          </td>\n        </tr>\n        \n        <tr>\n            <td>\n                <b> Step : 1</b><hr>\n                \n               \n\n                <div style=\"background-color:#E6E9EC;width:80%; border-radius: 2%\">\n                  <br>\n                \n                  <p>\n                    $ netstat -tulnp\n    \n                  </p>\n                  \n                </div>\n                Guys, each line of Below program show Process ID and Program Name that is listening or an established connection\n            </td>\n\n          </tr><br>\n          <tr>\n              <img src=\"assets/images/ubuntu/Tutorials/port.jpg\" alr=\"error\">\n          </tr>\n      \n         <br><br>\n     <tr>\n       <td>\n         Stay Tuned To Get updates releated this post in future\n       </td>\n     </tr><br><br>\n      </table>\n      \n      </div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ubuntu/ubuntu-tut-home/ubuntu-tut-home.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ubuntu/ubuntu-tut-home/ubuntu-tut-home.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1,user-scalable=no\">\n\n<div class=\"container-fluid\">\n    <div class=\"row no-gutters\">\n\n      <div class=\"col-sm-3\" style=\"margin:2%;padding-left:0%;padding-right:0%;\">\n\n          <a routerLink=\"/detecting-open-port\" class=\"custom-card\">\n          <div class=\"card\" style=\"width: 18rem;height:28rem;display:inline-block;\">\n             \n                <img class=\"card-img-top\" src=\"assets/images/ubuntu/Tutorials/openport.jpg\" alt=\"Card image cap\">\n\n                <div class=\"card-body\">\n                        <h5 class=\"card-title\">Detect Open Port</h5>\n                        <p class=\"card-text\">We Will always look at different ways to check which network port currently being listened on network for incoming connection Security Or Vulnerability has always been concern for us   </p>\n                        <br><button mat-raised-button color=\"accent\">Read More</button>\n               </div>\n              \n            </div>\n \n          </a>\n\n\n    \n          \n      </div>\n\n      <div class=\"col-sm-3\" style=\"padding-left:0%;padding-right:0%;margin:2%;\">\n            <a routerLink=\"/detecting_openport\" class=\"custom-card\">\n                <div class=\"card\" style=\"width: 18rem;height:28rem;display:inline-block;\">\n                   \n                      <img class=\"card-img-top\" src=\"assets/images/ubuntu/Tutorials/nonrootuser.png\" alt=\"Card image cap\">\n      \n                      <div class=\"card-body\">\n                              <h5 class=\"card-title\">Create Non Root User On KaLi</h5>\n                              <p class=\"card-text\">In the world of linux, most Linux distors ask user to use low level privileges while usin    g operating \n                                  system for security reason   </p>\n                              <br><button mat-raised-button color=\"accent\">Read More</button>\n                     </div>\n                     \n                  </div>\n       </a>\n    \n    </div>\n\n    <div class=\"col-sm-3\" style=\"padding-left:0%;padding-right:0%;margin:2%;\">\n            <a routerLink=\"/detecting_openport\" class=\"custom-card\">\n                <div class=\"card\" style=\"width: 18rem;height:28rem;display:inline-block;\">\n                   \n                      <img class=\"card-img-top\" src=\"assets/images/ubuntu/Tutorials/nonrootuser.png\" alt=\"Card image cap\">\n      \n                      <div class=\"card-body\">\n                              <h5 class=\"card-title\">Create Non Root User On KaLi</h5>\n                              <p class=\"card-text\">In the world of linux, most Linux distors ask user to use low level privileges while usin    g operating \n                                  system for security reason   </p>\n                              <br><button mat-raised-button color=\"accent\">Read More</button>\n                     </div>\n                     \n                  </div>\n       </a>\n    \n    </div>\n\n       \n      </div>\n      </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ubuntu/ubuntuinstalltion/ubuntuinstalltion.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ubuntu/ubuntuinstalltion/ubuntuinstalltion.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<link href=\"https://fonts.googleapis.com/css?family=Hepta+Slab|Roboto+Slab&display=swap\" rel=\"stylesheet\">\n<title>Ubuntu Installation</title>\n<div class=\"container\">\n\n<link href=\"https://fonts.googleapis.com/css?family=Merriweather|Montserrat|Open+Sans|Roboto|Source+Sans+Pro&display=swap\" rel=\"stylesheet\">\n<head>\n    <title>How To Install Ubuntu 19.04</title>  \n    <meta name=\"Ubuntu 19.04\" content=\"How to install ubuntu 19.04 with steps by steps guide with Screenshot\">\n\n</head>\n\n\n\n<div class=\"container\">\n\n  \n<div class=\"row\">\n  <div class=\"col\">\n      <h1>\n      How  to Install ubuntu 19.04(Disco Dingo)</h1>\n      <br>\n      <span style=\"font-size: 13px;\">\n        Written By <a routerLink=\"#\">Shaharukh Parmar</a> on 7 Oct,2019\n      </span>\n      \n      <hr>\n  </div>\n  \n</div><br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n        <span>\n            <b>Finally</b> , Ubuntu 19.04 has been released for Desktop, Cloud , Server and other instances, Ubuntu 19.04 will be supported \n            9 months until january 2020,if you need a long term support , it is recommended you use Ubuntu 18.04 LTS instead.\n        </span>\n        \n    </div>\n  </div> \n  <div class=\"row\">\n    <div class=\"col\">\n      <span>\n       \n        <div> \n          \n          \n              <p><br>Download Ubuntu 19.04 ISO Image from <a style=\"color:red;\" href=\"https://ubuntu.com/download/desktop\" target=\"_blank\"><u>Here</u></a></p>\n \n      \n        </div>\n      </span>\n    </div>\n\n  </div>\n \n  \n \n  <h3 style=\"color:blue;padding-top:2%; font-family: 'Source Sans Pro', sans-serif;\n  \">Installation Guides(Ubuntu 19.04 )</h3>\n  \n\n<table>\n  <tr>\n    <td>\n        <b>Step 1:</b>\n        <p>\n          The First step you need to in order to install Ubuntu 19.04 is to burn an Ubuntu ISO Image with Compatible USB Drive, then insert Bootable Media into your appropriate drive\n  \n  \n        </p>\n  \n    </td>\n  </tr>\n  \n  <tr>\n      <td>\n          <b>Step 2:</b>\n          <p>\n             After Machine Boot Media Press  the ESC to get GRUB Menu Screen\n          </p>\n      </td>\n    </tr><br>\n    <tr>\n        <img src=\"assets/images/ubuntu/grubmenu.png\" alr=\"error\">\n    </tr>\n\n   <br><br>\n    <tr>\n        <b>Step 3:</b>\n    <p>Next Step choose language for your system, and press continue button to go ahead</p>\n   \n    </tr>\n\n    <tr>\n        <img src=\"assets/images/ubuntu/keyboardlayout.jpg\" alr=\"error\">\n    </tr>\n\n    <br><br>\n    <tr>\n\n        <b>Step 4:</b>\n        <p>on next step , you have to go with Install Ubuntu Option , if you go with Try Ubuntu  option ,it will be redirected you system live environment,\n          so be carefull in selecting option other wise you reiterate entire steps\n        </p>\n    </tr>\n\n    <tr>\n        <img src=\"assets/images/ubuntu/first.png\" alr=\"error\">\n    </tr>\n    <br><br>\n    <tr>\n        <b>Step 5:</b>\n  <p>you have to carefully select option here else you messed up with your system, if you go with <b>Erase disk and Install Ubuntu option,</b> it will erase your entire hard drive and installed fresh ubuntu on your hard drive,\n  if you go with <b>Something else </b> option then system will install fresh ubuntu ,but it will not deleterious your personal data or files\n  </p>\n \n    </tr>\n\n    <tr>\n        <img src=\"assets/images/ubuntu/second.png\" alr=\"error\">\n\n    </tr>\n    <br><br>\n    <tr>\n        <b>Step 6:</b>\n        <p>\n          Next, the installer check if your system has internet connectivity and ask you for installation, Select Normal and check tick <b>Download updates while installing ubuntu</b> , actually what this tick do it check and found new packages then installer will install all these packages along with ubuntu installation\n        </p>\n    </tr>\n\n    <tr>\n        <img src=\"assets/images/ubuntu/third.png\" alr=\"error\">\n    </tr>\n    <br><br>\n    <tr>\n        <b>Step 7:</b>\n        <p>\n          now here you have to click on continue button for installation , but if you changed your decision and want to go with other installation type then click on go back button \n          to select other installation type\n        </p>\n      \n    </tr>\n\n    <tr>\n        <img src=\"assets/images/ubuntu/four.png\" alr=\"error\">\n\n    </tr>\n    <br><br>\n    <tr>\n        <b>Step 8:</b>\n        <p>\n          as You can now see Ubuntu 19.04 is installing\n        </p>\n    </tr>\n\n    <tr>\n        <img src=\"assets/images/ubuntu/five.jpg\" alr=\"error\">\n    </tr>\n    <br><br>\n    <tr>\n        <b>step 9:</b>\n        <p>\n          when this screen comes up on your machine screen , that means you have to provide some details related your account,and then click on Continue button for further installation\n        </p>\n    </tr>\n\n    <tr>\n        <img src=\"assets/images/ubuntu/six.png\" alr=\"error\">\n    </tr>\n<br><br>Shared On<br>\n    <tr>\n      <td >\n          <button type=\"button\" class=\"btn btn-primary\">Facebook</button>&nbsp;&nbsp;\n\n          <button type=\"button\" class=\"btn btn-danger\">Pinterest</button>&nbsp;&nbsp;\n   \n          <button type=\"button\" class=\"btn btn-primary\">LinkedIn</button>&nbsp;&nbsp;\n\n      </td>\n    </tr>\n\n    <tr>\n        <p style=\"padding-left:120px;color:blue;padding:2%;margin:2%;\">That's all, you have installed Ubuntu 19.04 on your machine,please stay tuned for next article related Ubuntu 19.04 </p>\n    </tr>\n \n</table>\n\n</div>\n ");

/***/ }),

/***/ "./src/app/ubuntu/Tutorials/detecting-openport/detecting-openport.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/ubuntu/Tutorials/detecting-openport/detecting-openport.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\n    padding-top:110px;\n   \n    }\n    body{\n        padding:0%;\n        margin:0%;\n    }\n    img{\n        width:100%;\n        height:80%;\n    }\n    .breadcrumb{\n        background-color:white;\n    }\n    mat-card{\n    \n    font-family: 'Roboto Slab', serif;\n     \n    }\n    h2{\n        padding-top:45px;\n        \n        color:blue;\n        font-family: 'Poppins', sans-serif;\n\n    \n    }\n    span,p{\n        font-family: 'Roboto', sans-serif;\n        font-family: 'Source Sans Pro', sans-serif;\n        font-family: 'Montserrat', sans-serif;\n        font-family: 'Open Sans', sans-serif;\n        \n        \n    \n        Font-weight: 400;\n    \n        font-size: 18px;\n        \n\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJ1bnR1L1R1dG9yaWFscy9kZXRlY3Rpbmctb3BlbnBvcnQvZGV0ZWN0aW5nLW9wZW5wb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsU0FBUztJQUNiO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTs7SUFFQSxpQ0FBaUM7O0lBRWpDO0lBQ0E7UUFDSSxnQkFBZ0I7O1FBRWhCLFVBQVU7UUFDVixrQ0FBa0M7OztJQUd0QztJQUVBO1FBQ0ksaUNBQWlDO1FBQ2pDLDBDQUEwQztRQUMxQyxxQ0FBcUM7UUFDckMsb0NBQW9DOzs7O1FBSXBDLGdCQUFnQjs7UUFFaEIsZUFBZTs7O0lBR25CIiwiZmlsZSI6InNyYy9hcHAvdWJ1bnR1L1R1dG9yaWFscy9kZXRlY3Rpbmctb3BlbnBvcnQvZGV0ZWN0aW5nLW9wZW5wb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOjExMHB4O1xuICAgXG4gICAgfVxuICAgIGJvZHl7XG4gICAgICAgIHBhZGRpbmc6MCU7XG4gICAgICAgIG1hcmdpbjowJTtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6ODAlO1xuICAgIH1cbiAgXG4gICAgLmJyZWFkY3J1bWJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgfVxuICAgIG1hdC1jYXJke1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcbiAgICAgXG4gICAgfVxuICAgIGgye1xuICAgICAgICBwYWRkaW5nLXRvcDo0NXB4O1xuICAgICAgICBcbiAgICAgICAgY29sb3I6Ymx1ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcblxuICAgIFxuICAgIH1cbiAgICBcbiAgICBzcGFuLHB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgIFxuICAgICAgICBcbiAgICBcbiAgICAgICAgRm9udC13ZWlnaHQ6IDQwMDtcbiAgICBcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBcblxuICAgIH1cbiAgICAiXX0= */");

/***/ }),

/***/ "./src/app/ubuntu/Tutorials/detecting-openport/detecting-openport.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ubuntu/Tutorials/detecting-openport/detecting-openport.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DetectingOpenportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectingOpenportComponent", function() { return DetectingOpenportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DetectingOpenportComponent = class DetectingOpenportComponent {
    constructor() { }
    ngOnInit() {
    }
};
DetectingOpenportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detecting-openport',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detecting-openport.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ubuntu/Tutorials/detecting-openport/detecting-openport.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detecting-openport.component.css */ "./src/app/ubuntu/Tutorials/detecting-openport/detecting-openport.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DetectingOpenportComponent);



/***/ }),

/***/ "./src/app/ubuntu/ubuntu-tut-home/ubuntu-tut-home.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/ubuntu/ubuntu-tut-home/ubuntu-tut-home.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \nbody{\n    padding:0%;\n    margin:0%;\n    \n   \n  }  \n  .card {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    height:100%;\n  \n  \n  }  \n  .card:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n  \n  }  \n  span,p{\n    font-family: 'Roboto', sans-serif;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-family: 'Montserrat', sans-serif;\n  font-family: 'Open Sans', sans-serif;\n  Font-weight: 400;\n    font-size: 15px;\n   \n  }  \n  h4{\n    font-family: 'Roboto Slab', serif;\n    font-size: 23px;\n  \n  \n  }  \n  h6{\n    font-family: 'Roboto', sans-serif;\n    font-family: 'Source Sans Pro', sans-serif;\n    font-family: 'Montserrat', sans-serif;\n    font-family: 'Open Sans', sans-serif;\n    padding:22%\n    \n  }  \n  a{\n    padding:2%;\n    margin:2%;\n  }  \n  a.custom-card,\n  a.custom-card:hover {\n    color: inherit;\n  }  \n  .container-fluid{\n    padding-top:80px;\n    width:100%;\n    background-color:#DCDCDC;\n     \n  }  \n  p{\n    padding:2%;\n    margin:2%;\n  }  \n  table{\n    padding:2%;\n    margin:25;\n  }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJ1bnR1L3VidW50dS10dXQtaG9tZS91YnVudHUtdHV0LWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUzs7O0VBR1g7RUFDQTtJQUNFLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsV0FBVzs7O0VBR2I7RUFFQTtJQUNFLHdDQUF3Qzs7RUFFMUM7RUFFQTtJQUNFLGlDQUFpQztFQUNuQywwQ0FBMEM7RUFDMUMscUNBQXFDO0VBQ3JDLG9DQUFvQztFQUNwQyxnQkFBZ0I7SUFDZCxlQUFlOztFQUVqQjtFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGVBQWU7OztFQUdqQjtFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLDBDQUEwQztJQUMxQyxxQ0FBcUM7SUFDckMsb0NBQW9DO0lBQ3BDOztFQUVGO0VBR0E7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYO0VBQ0E7O0lBRUUsY0FBYztFQUNoQjtFQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVix3QkFBd0I7O0VBRTFCO0VBRUE7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYIiwiZmlsZSI6InNyYy9hcHAvdWJ1bnR1L3VidW50dS10dXQtaG9tZS91YnVudHUtdHV0LWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcbmJvZHl7XG4gICAgcGFkZGluZzowJTtcbiAgICBtYXJnaW46MCU7XG4gICAgXG4gICBcbiAgfSAgXG4gIC5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBoZWlnaHQ6MTAwJTtcbiAgXG4gIFxuICB9XG4gIFxuICAuY2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgXG4gIH1cbiAgXG4gIHNwYW4scHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBGb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgIFxuICB9XG4gIFxuICBoNHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICBcbiAgXG4gIH0gXG4gIGg2e1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzoyMiVcbiAgICBcbiAgfVxuICBcbiAgXG4gIGF7XG4gICAgcGFkZGluZzoyJTtcbiAgICBtYXJnaW46MiU7XG4gIH1cbiAgYS5jdXN0b20tY2FyZCxcbiAgYS5jdXN0b20tY2FyZDpob3ZlciB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH0gXG4gIFxuICBcbiAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICBwYWRkaW5nLXRvcDo4MHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRENEQ0RDO1xuICAgICBcbiAgfVxuICBcbiAgcHtcbiAgICBwYWRkaW5nOjIlO1xuICAgIG1hcmdpbjoyJTtcbiAgfSBcbiAgdGFibGV7XG4gICAgcGFkZGluZzoyJTtcbiAgICBtYXJnaW46MjU7XG4gIH1cbiAgXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/ubuntu/ubuntu-tut-home/ubuntu-tut-home.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ubuntu/ubuntu-tut-home/ubuntu-tut-home.component.ts ***!
  \*********************************************************************/
/*! exports provided: UbuntuTutHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbuntuTutHomeComponent", function() { return UbuntuTutHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UbuntuTutHomeComponent = class UbuntuTutHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
UbuntuTutHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ubuntu-tut-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ubuntu-tut-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ubuntu/ubuntu-tut-home/ubuntu-tut-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ubuntu-tut-home.component.css */ "./src/app/ubuntu/ubuntu-tut-home/ubuntu-tut-home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UbuntuTutHomeComponent);



/***/ }),

/***/ "./src/app/ubuntu/ubuntu.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ubuntu/ubuntu.module.ts ***!
  \*****************************************/
/*! exports provided: UbuntuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbuntuModule", function() { return UbuntuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ubuntuinstalltion_ubuntuinstalltion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ubuntuinstalltion/ubuntuinstalltion.component */ "./src/app/ubuntu/ubuntuinstalltion/ubuntuinstalltion.component.ts");
/* harmony import */ var _ubuntu_tut_home_ubuntu_tut_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ubuntu-tut-home/ubuntu-tut-home.component */ "./src/app/ubuntu/ubuntu-tut-home/ubuntu-tut-home.component.ts");
/* harmony import */ var _Tutorials_detecting_openport_detecting_openport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tutorials/detecting-openport/detecting-openport.component */ "./src/app/ubuntu/Tutorials/detecting-openport/detecting-openport.component.ts");







const routes = [
    { path: 'ubuntu-19.04-installation', component: _ubuntuinstalltion_ubuntuinstalltion_component__WEBPACK_IMPORTED_MODULE_4__["UbuntuinstalltionComponent"] },
    { path: 'ubuntu-tutorials', component: _ubuntu_tut_home_ubuntu_tut_home_component__WEBPACK_IMPORTED_MODULE_5__["UbuntuTutHomeComponent"] },
    { path: 'detecting-open-port-linux', component: _Tutorials_detecting_openport_detecting_openport_component__WEBPACK_IMPORTED_MODULE_6__["DetectingOpenportComponent"] }
];
let UbuntuModule = class UbuntuModule {
    contructor() {
        console.log('ubuntu module loaded');
    }
};
UbuntuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ubuntu_tut_home_ubuntu_tut_home_component__WEBPACK_IMPORTED_MODULE_5__["UbuntuTutHomeComponent"], _ubuntuinstalltion_ubuntuinstalltion_component__WEBPACK_IMPORTED_MODULE_4__["UbuntuinstalltionComponent"], _Tutorials_detecting_openport_detecting_openport_component__WEBPACK_IMPORTED_MODULE_6__["DetectingOpenportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], UbuntuModule);



/***/ }),

/***/ "./src/app/ubuntu/ubuntuinstalltion/ubuntuinstalltion.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/ubuntu/ubuntuinstalltion/ubuntuinstalltion.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\n\npadding-top:70px;\n\n\n}\n\nbody{\n    padding:0%;\n    margin:0%;\n\n}\n\nimg{\n    width:70%;\n    height:70%;\n}\n\nh1{ \n    color:black; font-family: 'Merriweather', serif;line-height: 45px;color:rgb(50,59,69);font-size: 33px;\n  \n  }\n\nmat-card{\npadding:2%;\nmargin:2%;\nfont-family: 'Roboto Slab', serif;\n \n}\n\nspan,p{\nfont-family: 'Roboto', sans-serif;\nfont-family: 'Source Sans Pro', sans-serif;\nfont-family: 'Montserrat', sans-serif;\nfont-family: 'Open Sans', sans-serif;\nFont-weight: 400;\nfont-size: 18px;\n   \n}\n\ntr{\n    padding:5%;\n    margin:5%;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJ1bnR1L3VidW50dWluc3RhbGx0aW9uL3VidW50dWluc3RhbGx0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsZ0JBQWdCOzs7QUFHaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUzs7QUFFYjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxXQUFXLEVBQUUsa0NBQWtDLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsZUFBZTs7RUFFdkc7O0FBR0Y7QUFDQSxVQUFVO0FBQ1YsU0FBUztBQUNULGlDQUFpQzs7QUFFakM7O0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsMENBQTBDO0FBQzFDLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsZ0JBQWdCO0FBQ2hCLGVBQWU7O0FBRWY7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL3VidW50dS91YnVudHVpbnN0YWxsdGlvbi91YnVudHVpbnN0YWxsdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcblxucGFkZGluZy10b3A6NzBweDtcblxuXG59XG5cbmJvZHl7XG4gICAgcGFkZGluZzowJTtcbiAgICBtYXJnaW46MCU7XG5cbn1cbmltZ3tcbiAgICB3aWR0aDo3MCU7XG4gICAgaGVpZ2h0OjcwJTtcbn1cbmgxeyBcbiAgICBjb2xvcjpibGFjazsgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtsaW5lLWhlaWdodDogNDVweDtjb2xvcjpyZ2IoNTAsNTksNjkpO2ZvbnQtc2l6ZTogMzNweDtcbiAgXG4gIH0gXG5cblxubWF0LWNhcmR7XG5wYWRkaW5nOjIlO1xubWFyZ2luOjIlO1xuZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xuIFxufVxuc3Bhbixwe1xuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbmZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbkZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDE4cHg7XG4gICBcbn1cbiBcbnRye1xuICAgIHBhZGRpbmc6NSU7XG4gICAgbWFyZ2luOjUlO1xuXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/ubuntu/ubuntuinstalltion/ubuntuinstalltion.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ubuntu/ubuntuinstalltion/ubuntuinstalltion.component.ts ***!
  \*************************************************************************/
/*! exports provided: UbuntuinstalltionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbuntuinstalltionComponent", function() { return UbuntuinstalltionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let UbuntuinstalltionComponent = class UbuntuinstalltionComponent {
    constructor(meta, titleservice) {
        this.meta = meta;
        this.titleservice = titleservice;
        console.log('ubuntu installation component loaded');
    }
    ngOnInit() {
        this.titleservice.setTitle('Ubuntu Installation');
        this.meta.addTag({
            name: 'ubuntu',
            content: 'here we were provided ubuntu 1.04 installation tutorials from scratch'
        });
    }
};
UbuntuinstalltionComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
UbuntuinstalltionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ubuntuinstalltion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ubuntuinstalltion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ubuntu/ubuntuinstalltion/ubuntuinstalltion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ubuntuinstalltion.component.css */ "./src/app/ubuntu/ubuntuinstalltion/ubuntuinstalltion.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], UbuntuinstalltionComponent);



/***/ })

}]);