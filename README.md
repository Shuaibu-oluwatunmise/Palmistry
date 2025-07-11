# ✋ Palmistry App

A palm reading mobile app built with **React Native** using **Expo** and **expo-router**.  
Users can sign up, upload a palm image (from camera or gallery), and receive a dummy palm reading.

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Shuaibu-oluwatunmise/Palmistry.git
cd Palmistry
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npx expo start
```

---

## 📁 Folder Structure

```
Palmistry/
├── app/
│   ├── index.tsx              # Landing Screen
│   ├── _layout.tsx            # Global layout with fonts + background
│   └── screens/
│       ├── sign-in.tsx
│       ├── sign-up.tsx
│       ├── image-picker.tsx
│       └── reading.tsx
├── components/
│   ├── Header.tsx
│   ├── BackgroundWrapper.tsx (optional)
│   └── ScreenWrapper.tsx (optional)
├── assets/
│   ├── fonts/
│   │   ├── CinzelDecorative-Regular.ttf
│   │   └── Lora-Regular.ttf
│   └── images/
│       ├── palmistry_logo.png
│       ├── background.jpg
│       └── sample-palm.jpg
├── hooks/
│   ├── useAppAssets.ts
│   └── useCustomFonts.ts
```

---

## ✅ Features Implemented

* ✨ Navigation via `expo-router`
* ✨ Global background & font loading via layout
* ✨ Palm image selection (gallery & camera)
* ✨ Reusable `Header` with logo and back button
* ✨ Dummy palm reading screen (to be replaced with API)
* ✨ Styled UI with custom fonts (`CinzelDecorative`, `Lora`)

---

## 🔜 Features To Be Added

* 🔐 User authentication backend (e.g. Firebase)
* 🧠 GPT-4 Vision API integration for palm analysis
* 📤 Image upload to backend
* 💾 Store palm readings locally or in cloud
* 🧪 Replace dummy data in `reading.tsx` with real data

---

## 🧠 Tech Stack

* [Expo](https://expo.dev/)
* [React Native](https://reactnative.dev/)
* [expo-router](https://expo.github.io/router/)
* [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
* [expo-font](https://docs.expo.dev/versions/latest/sdk/font/)

---

## 👤 Developer

**GitHub:** [@Shuaibu-oluwatunmise](https://github.com/Shuaibu-oluwatunmise)

---

## 💬 Community

* [Expo GitHub](https://github.com/expo/expo)
* [Expo Discord](https://chat.expo.dev)



