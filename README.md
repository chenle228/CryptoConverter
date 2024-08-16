# Crypto Converter 🚀💱

## Overview

The **Crypto Converter** is a React-based application that lets you convert amounts from various currencies into the fake WUC (Wildly Unstable Coin) cryptocurrency. The app features real-time conversion and interactive functionalities to enhance user experience.

## Features 🌟

- **Real-Time Conversion**: Fetches the latest conversion rate every 10 seconds or whenever the user updates the input amount or currency selection. ⏲️
- **Debounced Input**: Reduces API strain by making requests only after the user stops typing for 500ms. ⏳
- **Price Change Indicator**: Shows the price change of WUC since the last update. The change is highlighted with a green up arrow if the price increased 📈 or a red down arrow if the price decreased 📉.
- **Formatted Output**: Auto-formats the converted WUC amount to include commas and two decimal places for better readability. 💵
- **User-Friendly Form**: Features input fields for the amount and a dropdown menu for selecting currencies. Labels are positioned above the fields for clarity. ✍️
- **Accessibility**: Enhanced for screen readers with appropriate ARIA labels and live regions to ensure an inclusive experience. ♿

## Supported Currencies 🌍

- USD - US Dollar 💵
- EUR - Euro 💶
- GBP - British Pound 💷
- JPY - Japanese Yen 💴
- AUD - Australian Dollar 💰
- CNY - Chinese Yuan 🀄
- SGD - Singapore Dollar 🇸🇬
- CAD - Canadian Dollar 🇨🇦
- CHF - Swiss Franc 🇨🇭
- INR - Indian Rupee 🇮🇳
- RUB - Russian Ruble 🇷🇺
- BRL - Brazilian Real 🇧🇷

## Tech Stack ⚙️

- **React**: JavaScript library for building user interfaces. 🧩
- **JavaScript (ES6+)**: Programming language used for app logic. 🖥️
- **CSS**: Styling for layout and appearance. 🎨
- **Fetch API**: For making HTTP requests to fetch conversion rates. 🌐
- **Debounce Technique**: To limit the frequency of API calls. 🔄

## How to Run 🏃‍♀️
To get started with the Crypto Converter, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chenle228/CryptoConverter.git
2. **Navigate to the Project Directory**:
   ```bash
   cd CryptoConverter
3. **Install Dependencies**:
   ```bash
   npm install
4. **Run the Application**:
   ```bash
   npm start
5. **Open your browser and navigate to the link below to see the app in action!** 🚀
   ```bash
   http://localhost:3000
