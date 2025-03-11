// ==UserScript==
// @name         Fullscreen piano
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Script to increase the size of the piano by hiding the chat window
// @author       Hustandant
// @match        *://pianoverse.net/*
// @icon         https://avatars.githubusercontent.com/u/84928386
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', () => {
        const openChat = document.createElement("div");
        const chat = document.querySelector(".chat");
        const toolbar = document.querySelector(".piano pv-toolbar .left");
        const piano = document.querySelector(".piano");

        piano.style.width = "100%";

        openChat.classList.add("open-chat");
        openChat.style.height = "100%"

        toolbar.prepend(openChat);

        document.querySelector(".open-chat").innerHTML = `
                  <div class="background icon" style="display: flex; justify-content: center; align-items: baseline;">
                       <i class="fa-regular fa-message"></i>
                  </div>`;

        openChat.addEventListener("click", function () {
            chat.style.display = chat.style.display == "none" ? "flex" : "none";
            document.querySelector(".bg-canvas").width = piano.offsetWidth;
            document.querySelector(".fg-canvas").width = piano.offsetWidth;
        });
});
})();
