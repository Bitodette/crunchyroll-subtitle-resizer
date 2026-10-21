<div align="center">
  <h1 align="center">Crunchyroll Subtitle Resizer 🤏</h1>
  <p align="center">
    <strong>Fixing Crunchyroll's default font size (which is apparently set to 'Grandma's Phone' mode). 👵</strong><br>
    Shrink those subtitles down to a human size so you can actually see the anime.
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

## 🧐 Why did I make this?

Let's be honest: Crunchyroll subtitles are **huge**. Like, "billboard on a highway" huge. It feels like they designed it for people watching on a phone from 10 meters away.

I want to watch the animation, not read a novel that covers 30% of the screen.

Since Crunchyroll decided to render subtitles inside a weird canvas/iframe (making normal CSS useless), I made this script to forcefully shrink them. You're welcome.

---

## ✨ Features

* **Shrink Ray:** Scale subtitles down (or up, if you actually *are* a grandma).
* **Move It:** Adjust the vertical position. Stop the text from covering the important... *plot*.
* **Set & Forget:** Works automatically on the modern Crunchyroll player (Bitmovin).
* **Hotkeys:** Press **+** or **=** to enlarge, **-** to shrink subtitles in real-time.
* **Persistent Preferences:** Your last used size is saved to localStorage and persists across sessions.
* **Lightweight:** No bloat, just a simple resize.

---

## 🚀 Getting Started

To get this running, you need a script manager. It's easy.

### 1. Prerequisites (The Manager)

You need **[Tampermonkey](https://tampermonkey.net/)**.

* [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) · [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) · [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)

### 2. Install the Script

* Click the **[Install from GreasyFork](https://greasyfork.org/en/scripts/544244-crunchyroll-subtitle-resizer)** badge up there.
* Tampermonkey will ask nicely if you want to install it. Click **Install**.

### 3. Watch Anime

* Go to [Crunchyroll](https://www.crunchyroll.com/).
* Open a video.
* Press **+** or **=** to make subtitles larger, **-** to make them smaller.
* Your preferred size is automatically saved and will be used the next time you watch.

---

## ⚙️ Customization (Hacking the Matrix)

Want them smaller? Larger? Higher? Lower? You can edit the settings directly in the script.

1.  Open the **Tampermonkey Dashboard**.
2.  Click the 📝 **Edit** icon next to "Crunchyroll Subtitle Resizer".
3.  Look for the **USER SETTINGS** section at the top:

```javascript
// --- USER SETTINGS: Adjust the values below to customize your subtitles ---

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
const VERTICAL_POSITION = "1%";

// NOTE: Only soft subtitles (CC) can be resized. Some audio tracks (e.g. Japanese
// audio) use hardsubs, where the text is burned into the video
// itself, so no script can change their size.
```

-   **To change the default size**: Modify the number for `DEFAULT_SUBTITLE_SCALE`.
-   **To change the position**: Modify the value in quotes for `VERTICAL_POSITION`.

After editing, press `Ctrl` + `S` to save, then refresh the Crunchyroll video page to see your changes.

---

## 🎹 Hotkeys

While watching a video on Crunchyroll:

* **Press `+` or `=`** to increase subtitle size (up to 300%)
* **Press `-`** to decrease subtitle size (down to 20%)
* Size changes are saved to **localStorage** and persist across sessions
* Pressing the keys while typing in an input/textarea (e.g., search bar) is ignored

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!