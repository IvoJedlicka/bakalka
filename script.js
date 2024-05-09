// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Funkce pro aktualizaci zobrazené hodnoty posuvníku
    function updateSliderValue(slider, display) {
        display.textContent = slider.value;
    }

    // Seznam všech posuvníků
    var sliders = document.querySelectorAll("input[type='range']");
    // Seznam všech textových políček pro zobrazení hodnot posuvníků
    var valueDisplays = document.querySelectorAll("span[id^='value']");

    // Aktualizujeme výchozí zobrazené hodnoty
    sliders.forEach(function(slider, index) {
        updateSliderValue(slider, valueDisplays[index]);
    });

    // Přidáme posluchači události změny hodnoty posuvníku
    sliders.forEach(function(slider, index) {
        slider.addEventListener("input", function() {
            updateSliderValue(this, valueDisplays[index]);
        });
    });

    // Přidáme posluchače události odeslání formuláře
    var form = document.getElementById("questionnaire");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Zabraňujeme výchozímu chování formuláře

        var totalScore = 0;

        // Sečteme body ze všech posuvníků
        sliders.forEach(function(slider) {
            totalScore += parseInt(slider.value);
        });

        // Vypočítáme průměrný bodový zisk
        var averageScore = totalScore / sliders.length;

        // Zjistíme výslednou známku na základě průměrného bodového zisku
        var grade;
        if (averageScore >= 65) {
            grade = 'A';
        } else if (averageScore >= 52) {
            grade = 'B';
        } else if (averageScore >= 39) {
            grade = 'C';
        } else if (averageScore >= 26) {
            grade = 'D';
        } else if (averageScore >= 13) {
            grade = 'E';
        } else {
            grade = 'F';
        }

        // Zobrazíme výslednou známku
        var resultElement = document.createElement("div");
        resultElement.id = "result";
        resultElement.textContent = "Vaše výsledná známka je: " + grade;
        form.appendChild(resultElement);
    });
});
