// ==UserScript==
// @name         Crunchyroll Subtitle Resizer
// @namespace    http://tampermonkey.net/
// @version      2
// @description  Adjusts the subtitle size on Crunchyroll's video player (Use + and - keys)
// @author       Bitodette
// @homepageURL  https://github.com/Bitodette/crunchyroll-subtitle-resizer
// @supportURL   https://github.com/Bitodette/crunchyroll-subtitle-resizer/issues
// @match        *://*.crunchyroll.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // =================================================================================
    // --- USER SETTINGS: Adjust the values below to customize your subtitles ---
    // =================================================================================

    // 1. DEFAULT SUBTITLE SIZE
    // Controls the initial size of the subtitles before any keyboard adjustments.
    // You can now use the '+' (or '=') and '-' (or '_') keys on your keyboard
    // to dynamically resize subtitles while watching. Your last used size will be saved!
    //
    // Examples for default size:
    // 0.7 = 70% size (Even smaller)
    // 0.8 = 80% size (Smaller)
    // 1.0 = 100% size (Default)
    // 1.2 = 120% size (Larger)
    const DEFAULT_SUBTITLE_SCALE = 0.5;


    // 2. VERTICAL POSITION
    // Adjust this if the subtitles are too high or too low after resizing.
    // It moves the subtitle block up from the bottom of the screen.
    // Examples:
    // "1%"  (Default - slightly raised from the very bottom)
    // "0%"  (At the very bottom edge)
    // "-2%" (Slightly lower, potentially cutting into the controls area)
    // "5%"  (Higher up on the screen)
    const VERTICAL_POSITION = "1%";


    // NOTE: Only soft subtitles (CC) can be resized. Some audio tracks (e.g. Japanese
    // audio) use hardsubs, where the text is burned into the video
    // itself, so no script can change their size.

    // =================================================================================
    // --- SCRIPT LOGIC: No need to edit below this line ---
    // =================================================================================

    // Retrieve the last saved scale from browser storage, or use the default above
    let currentScale = parseFloat(localStorage.getItem('cr_subtitle_scale')) || DEFAULT_SUBTITLE_SCALE;

    // Create a dynamic style element
    let styleElement = document.createElement('style');
    document.head.appendChild(styleElement);

    // Function to update the CSS whenever the size changes
    const updateStyle = () => {
        // Round to 1 decimal place to avoid floating point anomalies (e.g., 0.899999)
        currentScale = Math.round(currentScale * 10) / 10;

        styleElement.innerHTML = `
            /* Current Bitmovin player (subtitle wrapper that holds the text-shadow) */
            .bitmovinplayer-container > div[style*="pointer-events"] > div {
                transform: translateY(calc(-1 * ${VERTICAL_POSITION})) scale(${currentScale}) !important;
                transform-origin: bottom center !important;
            }

            /* Fallback: native WebVTT rendering */
            ::cue {
                font-size: ${currentScale * 100}% !important;
            }
        `;

        // Save the new scale to browser storage
        localStorage.setItem('cr_subtitle_scale', currentScale);
    };

    // Apply styles on initial load
    updateStyle();

    // Listen for + and - key presses
    document.addEventListener('keydown', (e) => {
        // Ignore key presses if typing in an input field or textarea (e.g., search bar)
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key === '-' || e.key === '_') {
            currentScale = Math.max(0.2, currentScale - 0.1); // Minimum scale limit: 20%
            updateStyle();
        } else if (e.key === '+' || e.key === '=') {
            currentScale = Math.min(3.0, currentScale + 0.1); // Maximum scale limit: 300%
            updateStyle();
        }
    });

})();