function calculateAge(name, birthYear, currentYear) {
    const age = currentYear - birthYear;
    return `${name}, Ваш возраст ${age}`;
}


const name = prompt("Введите ваше имя:");
const birthYear = parseInt(prompt("Введите ваш год рождения:"), 10);
const currentYear = parseInt(prompt("Введите текущий год:"), 10);


if (!isNaN(birthYear) && !isNaN(currentYear)) {
    const result = calculateAge(name, birthYear, currentYear);
    alert(result);
} else {
    alert("Вы ввели некорректные данные. Пожалуйста, введите числа.");
}
