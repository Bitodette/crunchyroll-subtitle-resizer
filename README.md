# Crunchyroll Subtitle Resizer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Greasy Fork Version](https://img.shields.io/greasyfork/v/544244.svg)](https://greasyfork.org/en/scripts/544244-crunchyroll-subtitle-resizer)

A Tampermonkey userscript to adjust the subtitle size on Crunchyroll's modern video player.

This script works by scaling the `#velocity-canvas` element within the player's `iframe`. This is necessary because Crunchyroll's current player renders subtitles graphically, making them immune to standard CSS font-size modifications.

## Features

-   **Resize Subtitles**: Make subtitles smaller or larger to fit your screen.
-   **Adjust Vertical Position**: Fine-tune the vertical placement of subtitles.
-   **Lightweight & Simple**: No unnecessary features, just focused on subtitle control.
-   **Works on the Latest Player**: Compatible with the modern Crunchyroll video player.

## Installation

1.  **Install a Userscript Manager**: You need a browser extension like [**Tampermonkey**](https://www.tampermonkey.net/) or Violentmonkey.

2.  **Install the Script**:
    -   **Click here to install from Greasy Fork**

    A new tab will open in your userscript manager. Just click the **"Install"** button.

## Customization

You can easily change the subtitle size and position by editing the script directly in Tampermonkey.

1.  Open the **Tampermonkey Dashboard**.
2.  Click the **Edit** icon next to the "Crunchyroll Subtitle Resizer" script.
3.  Find the **USER SETTINGS** section at the top of the script.

```javascript
// --- USER SETTINGS: Adjust the values below to customize your subtitles ---

// 1. SUBTITLE SIZE
// 0.8 = 80% size (Smaller)
// 1.0 = 100% size (Default)
// 1.2 = 120% size (Larger)
const SUBTITLE_SCALE = 0.8;

// 2. VERTICAL POSITION
// Adjusts the vertical offset from the bottom of the screen.
// Examples: "1%", "-2%", "5%"
const VERTICAL_POSITION = "1%";
```

-   **To change the size**: Modify the number for `SUBTITLE_SCALE`.
-   **To change the position**: Modify the value in quotes for `VERTICAL_POSITION`.

After editing, press `Ctrl` + `S` to save, then refresh the Crunchyroll video page to see your changes.

## License

This project is licensed under the MIT License.
