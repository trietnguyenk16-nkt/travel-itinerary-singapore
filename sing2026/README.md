# Singapore Trip - Image Management

## How to Add Images

To add new images to the gallery, follow these two simple steps:

### Step 1: Add Image to Folder
Place your image file in the `images/` folder. The folder accepts common image formats:
- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.webp`

**Example:** `images/marina-bay.jpg`

### Step 2: Register Image in images.json
Open the `images.json` file and add the image filename to the JSON array.

**Before:**
```json
[
  "img1.jpg",
  "img2.jpg",
  "img3.jpg"
]
```

**After adding `marina-bay.jpg`:**
```json
[
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "marina-bay.jpg"
]
```

> **Important:** Make sure the filename in `images.json` exactly matches the filename in the `images/` folder (including the extension).

## Project Structure
```
sing2026/
├── images/                 # Store all image files here
├── images.json            # List of image filenames (JSON array)
├── index.html             # Main HTML file
├── script.js              # JavaScript logic
├── style.css              # Styling
└── README.md              # This file
```

## Quick Reference
1. ✅ Save image to `images/` folder
2. ✅ Add filename to `images.json`
3. ✅ Done!
