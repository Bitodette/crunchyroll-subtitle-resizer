<div align="center">
  <h1 align="center">Crunchyroll Subtitle Resizer</h1>
  <p align="center">
    A userscript to adjust the subtitle size on Crunchyroll's modern video player.
  </p>
  <p align="center">
    <a href="https://greasyfork.org/en/scripts/544244-crunchyroll-subtitle-resizer/feedback">Report Bug</a>
    ·
    <a href="https://greasyfork.org/en/scripts/544244-crunchyroll-subtitle-resizer/feedback">Request Feature</a>
  </p>
  <p align="center">
    <a href="https://greasyfork.org/en/scripts/544244-crunchyroll-subtitle-resizer"><img src="https://img.shields.io/badge/GreasyFork-Install-orange?style=for-the-badge&logo=tampermonkey" alt="Install from GreasyFork"></a>
    <a href="https://greasyfork.org/en/scripts/544244-crunchyroll-subtitle-resizer"><img src="https://img.shields.io/greasyfork/v/544244.svg?style=for-the-badge" alt="Greasy Fork Version"></a>
    <a href="https://greasyfork.org/en/scripts/544244-crunchyroll-subtitle-resizer"><img src="https://img.shields.io/greasyfork/dt/544244.svg?style=for-the-badge" alt="Total Installs"></a>
    <a href="https://github.com/Bitodette/crunchyroll-subtitle-resizer/stargazers"><img src="https://img.shields.io/github/stars/Bitodette/crunchyroll-subtitle-resizer.svg?style=for-the-badge" alt="Stargazers"></a>
  </p>
</div>

---

## About The Project

**Crunchyroll Subtitle Resizer** is a Tampermonkey userscript designed to give you full control over the size and position of subtitles on Crunchyroll.

This script works by scaling the `#velocity-canvas` element within the player's `iframe`. This is necessary because Crunchyroll's current player renders subtitles graphically, making them immune to standard CSS `font-size` modifications. The goal is to improve viewing comfort, especially on screens of varying sizes and resolutions.

---

## Features

-   **Resize Subtitles**: Make subtitles smaller or larger to fit your screen and preference.
-   **Adjust Vertical Position**: Fine-tune the vertical placement of subtitles.
-   **Lightweight & Simple**: No unnecessary features, just focused on subtitle control.
-   **Works on the Latest Player**: Compatible with the modern Crunchyroll video player.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need a user script manager browser extension. [**Tampermonkey**](https://tampermonkey.net/) is highly recommended.

-   [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
-   [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
-   [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)
-   [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### Installation

1.  **Install the Userscript**
    -   Click the "Install from GreasyFork" badge at the top of this README or visit the [**script page on Greasy Fork**](https://greasyfork.org/en/scripts/544244-crunchyroll-subtitle-resizer).
    -   Tampermonkey will open a new tab. Click the `Install` button.

2.  **Enjoy Full Control**
    -   Navigate to any video on [Crunchyroll](https://www.crunchyroll.com/). The script will be active automatically, adjusting subtitles to your configured settings.

---

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

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!
