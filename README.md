# Calorie Counter 🍏📊

A simple web application for tracking daily calorie intake and exercise, helping users manage their nutrition and fitness goals.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [How it Works](#how-it-works)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Calorie Counter is a web application that allows users to set a daily calorie budget, track their meals, snacks, and exercise, and provides real-time feedback on their remaining calories. The application emphasizes usability, accessibility, and a clean user interface for a seamless experience.

## Features

- **Dynamic Entry Creation**: Easily add meals, snacks, or exercise entries with an intuitive interface.
- **Real-time Calculations**: Receive instant feedback on remaining calories as you input your daily consumption and exercise.
- **Error Handling**: Invalid inputs are flagged, providing users with a clear indication of errors.
- **Clear and Reset**: Quickly reset the form and start fresh with a single click.
- **Responsive Design**: Enjoy a seamless experience on various devices.

## Getting Started

To get started with the Calorie Counter, follow these steps:

### For local usage:
1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Dev7HD/Calorie-Counter.git
   ```

2. Open the `index.html` file in your web browser.

3. Start tracking your daily calories and exercise!

### For online usage:
**Online link** - [Click here](https://dev7hd.github.io/Calorie-Counter/)

## How it Works

### HTML Structure

The application is built using HTML with a main form (`calorie-counter`) containing input fields for daily budget, meal/snack/exercise entries, and output display.

### JavaScript Logic

1. **Event Listeners**: The application utilizes event listeners to trigger functions when buttons are clicked or the form is submitted.

2. **Entry Creation**: The `addEntry` function dynamically adds input fields for a new meal/snack/exercise entry based on user selection.

3. **Calorie Calculation**: The `calculateCalories` function computes the total consumed and remaining calories, considering the user's input and exercise.

4. **Error Handling**: The `getCaloriesFromInputs` function validates input, providing feedback on invalid entries.

5. **Clear Form**: The `clearForm` function resets the form, removing all input containers and resetting values.

## Usage

1. Open the `index.html` file in your web browser.

2. Enter your daily calorie budget, add meals, snacks, and exercise.

3. Click "Add Entry" to include additional items.

4. Click "Calculate Remaining Calories" to see real-time feedback.

5. Use the "Clear" button to reset the form.

## Contributing

Contributions are welcome! Feel free to open issues, suggest improvements, or submit pull requests.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize this README.md based on your project's specific details and preferences.