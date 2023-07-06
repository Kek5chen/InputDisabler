# Input Disabler Chrome Extension
This Chrome extension allows you to toggle the 'disabled' attribute of an input field by using a key combination (Ctrl + Q) on the fly. When an input field is disabled, it gets a light grey background color. The background color is cleared when the input field is enabled. This extension works for both web pages and local HTML files loaded in Chrome.

## Features
- Toggle the 'disabled' attribute of an input field by pressing 'Ctrl + Q'.
- Change the background color of an input field when it's disabled.
- Works with local files loaded in the browser under file://.

## Getting Started
### Prerequisites
You need to have a Chromium based client installed on your computer to load this extension. It was tested with Brave.

### Installation
1. Clone the repo:
```bash
git clone https://github.com/Kek5chen/InputDisabler
```

2. Open Chrome and go to the Extensions page (chrome://extensions).

3. Enable "Developer mode".

4. Click "Load unpacked" and select the directory of this extension.

5. Find this extension in the list, click on "Details", and enable "Allow access to file URLs".

### Usage

1. Hover over an input field on a web page or a local HTML file.

2. Press 'Ctrl + Q' to disable the input field. The background color of the input field will be changed to light grey. If the input field is already disabled and has the custom background color, it will be enabled and the background color will be cleared.

The usage is also documented in the popup that opens when clicking on the extension icon.

## Contributing
If you have suggestions for how this could be improved, have a question, or want to report a bug, open an issue! Contributions of all kinds are welcomed!

## License
Distributed under the MIT License. See LICENSE for more information.
