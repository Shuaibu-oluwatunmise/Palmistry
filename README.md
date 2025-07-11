# ✋ Welcome to the Palmistry App 👋

This is a [React Native](https://reactnative.dev) app powered by [Expo](https://expo.dev), created using [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) and structured with [`expo-router`](https://expo.github.io/router/).

---

## 📲 Get started

1. **Install dependencies**

   ```bash
   npm install
Start the app

bash
Copy
Edit
npx expo start
In the output, you'll find options to open the app in a:

development build

Android emulator

iOS simulator

Expo Go

📂 Current Structure
This project uses expo-router for file-based navigation. Key files live inside the /app directory.

pgsql
Copy
Edit
Palmistry/
├── app/
│   ├── index.tsx              # Landing screen
│   ├── _layout.tsx            # Global layout: fonts, background
│   └── screens/
│       ├── sign-in.tsx
│       ├── sign-up.tsx
│       ├── image-picker.tsx
│       └── reading.tsx
├── components/
│   ├── Header.tsx             # Shared logo + back button
│   ├── BackgroundWrapper.tsx  # Optional custom background
│   └── ScreenWrapper.tsx      # Optional layout wrapper
├── assets/
│   ├── fonts/
│   │   ├── CinzelDecorative-Regular.ttf
│   │   └── Lora-Regular.ttf
│   └── images/
│       ├── palmistry_logo.png
│       ├── background.jpg
│       └── sample-palm.jpg
├── hooks/
│   ├── useAppAssets.ts        # Preloads fonts + images
│   └── useCustomFonts.ts      # Optional manual font loading
🛠 Get a fresh project
Run the following to reset and generate a clean /app directory (if needed):

bash
Copy
Edit
npm run reset-project
✨ Features Implemented
Custom font loading with expo-font

Global background image managed in _layout.tsx

Palm image picker (via gallery or camera)

Dummy palm reading screen using uploaded image

Simple onboarding: Sign-in and Sign-up (no backend yet)

🚀 Planned Features
🔐 Connect Sign-in/Sign-up to backend or Firebase

🤖 Send palm image to GPT-4 Vision API

🖼️ Display real user image and reading in reading.tsx

📜 Store reading history (optional)

📚 Learn more
To explore more about developing with Expo:

Expo Docs

expo-router Overview

Expo Font Loading

Expo Image Picker

💬 Join the community
Expo GitHub

Expo Discord

👤 Author
Built by @Shuaibu-oluwatunmise
