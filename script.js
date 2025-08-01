// ==UserScript==
// @name         Crunchyroll Subtitle Resizer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adjusts the subtitle size on Crunchyroll's
// @author       Bitodette
// @match        *://*.crunchyroll.com/*
// @match        *://static.crunchyroll.com/vilos-v2/web/vilos/player.html*
// @grant        GM_addStyle
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // =================================================================================
    // --- USER SETTINGS: Adjust the values below to customize your subtitles ---
    // =================================================================================

    // 1. SUBTITLE SIZE
    // Controls the overall size of the subtitles.
    // Use values less than 1.0 to make them smaller, and greater than 1.0 to make them larger.
    // Examples:
    // 0.8 = 80% size (Smaller)
    // 0.7 = 70% size (Even smaller)
    // 1.0 = 100% size (Default)
    // 1.2 = 120% size (Larger)
    const SUBTITLE_SCALE = 0.8;


    // 2. VERTICAL POSITION
    // Adjust this if the subtitles are too high or too low after resizing.
    // It moves the subtitle block up or down from the bottom of the screen.
    // Examples:
    // "1%"  (Default - slightly raised from the very bottom)
    // "0%"  (At the very bottom edge)
    // "-2%" (Slightly lower, potentially cutting into the controls area)
    // "5%"  (Higher up on the screen)
    const VERTICAL_POSITION = "1%";


    // =================================================================================
    // --- SCRIPT LOGIC: No need to edit below this line ---
    // =================================================================================

    const cssCanvasResize = `
        #velocity-canvas {
            /* * This scales the canvas element where subtitles are rendered.
             * It's the core of how the size is changed.
            */
            transform: scale(${SUBTITLE_SCALE}) !important;

            /* * This sets the anchor point for scaling to the bottom-center of the canvas.
             * This ensures subtitles scale towards the middle instead of flying off-screen.
            */
            transform-origin: bottom center !important;

            /* * Adjusts the final vertical position after scaling.
            */
            bottom: ${VERTICAL_POSITION} !important;

            /* * These rules ensure the canvas doesn't get clipped or distorted after scaling.
            */
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
        }
    `;

    GM_addStyle(cssCanvasResize);

})();