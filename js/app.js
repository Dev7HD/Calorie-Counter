/**
 * Retrieves the HTML element with the specified ID.
 * @param {string} id - The ID of the HTML element.
 * @returns {HTMLElement} - The HTML element with the specified ID.
 */
const getElementById = (id) => document.getElementById(id);

// Initialize variables with HTML elements
const calorieCounter = getElementById('calorie-counter');
const budgetNumberInput = getElementById('budget');
const entryDropdown = getElementById('entry-dropdown');
const addEntryButton = getElementById('add-entry');
const clearButton = getElementById('clear');
const output = getElementById('output');
let isError = false;

/**
 * Removes unwanted characters from the input string.
 * @param {string} str - The input string.
 * @returns {string} - The cleaned input string.
 */
const cleanInputString = (str) => {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

/**
 * Checks if the input string is in invalid format (e.g., scientific notation).
 * @param {string} str - The input string.
 * @returns {RegExpMatchArray} - True if the input is invalid, false otherwise.
 */
const isInvalidInput = (str) => {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

/**
 * Adds a new entry input section to the selected container.
 */
const addEntry = () => {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input
            type="number"
            min="0"
            id="${entryDropdown.value}-${entryNumber}-calories"
            placeholder="Calories"
        />`;
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

/**
 * Calculates and displays the remaining calories based on user input.
 * @param {Event} e - The form submit event.
 */
const calculateCalories = (e) => {
    e.preventDefault();
    isError = false;

    // Selects input elements for each meal and exercise
    const mealNumberInputs = ['#breakfast', '#lunch', '#dinner', '#snacks'].map(
        (meal) => document.querySelectorAll(`${meal} input[type=number]`)
    );
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

    // Calculates calories for each meal and exercise
    const mealCalories = mealNumberInputs.map(getCaloriesFromInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if (isError) {
        return;
    }

    // Calculates total consumed and remaining calories
    const consumedCalories = mealCalories.reduce((total, calories) => total + calories, 0);
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;

    // Determines surplus or deficit and updates output HTML
    const surplusOrDeficit = remainingCalories >= 0 ? 'Surplus' : 'Deficit';
    output.innerHTML = `
        <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
        <hr>
        <p>${budgetCalories} Calories Budgeted</p>
        <p>${consumedCalories} Calories Consumed</p>
        <p>${exerciseCalories} Calories Burned</p>
    `;

    output.classList.remove('hide');
}

/**
 * Retrieves total calories from a list of input elements.
 * @param {NodeList} list - List of input elements.
 * @returns {number} - Total calories.
 */
const getCaloriesFromInputs = (list) => {
    let calories = 0;

    for (let i = 0; i < list.length; i++) {
        const currVal = cleanInputString(list[i].value);
        const invalidInputMatch = isInvalidInput(currVal);

        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
        calories += Number(currVal);
    }
    return calories;
}

/**
 * Clears the form by removing all input containers and resetting values.
 */
const clearForm = () => {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));

    for (let i = 0; i < inputContainers.length; i++) {
        inputContainers[i].innerHTML = '';
    }

    budgetNumberInput.value = '';
    output.innerText = '';
    output.classList.add('hide');
}

// Event listeners
addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener('click', clearForm);
