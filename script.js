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

        // Zjistíme výslednou známku na základě součtu bodů
        var grade;
        if (totalScore >= 65) {
            grade = 'A';
        } else if (totalScore >= 52) {
            grade = 'B';
        } else if (totalScore >= 39) {
            grade = 'C';
        } else if (totalScore >= 26) {
            grade = 'D';
        } else if (totalScore >= 13) {
            grade = 'E';
        } else {
            grade = 'F';
        }

        // Zobrazíme výslednou známku
        var resultElement = document.getElementById("result");
        resultElement.textContent = "Vaše výsledná známka je: " + grade;

        // Vyprázdníme hodnoty posuvníků
        sliders.forEach(function(slider) {
            slider.value = 0;
            updateSliderValue(slider, slider.nextElementSibling);
        });
    });
});
