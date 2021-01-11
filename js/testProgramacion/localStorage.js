function contadorTest() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("contadorTestBasico").innerHTML = "Has iniciado el Test de Programación " + localStorage.clickcount + " vez.";
        document.getElementById("contadorTestMedio").innerHTML = "Has iniciado el Test de Programación " + localStorage.clickcount + " vez.";
        document.getElementById("contadorTestAvanzado").innerHTML = "Has iniciado el Test de Programación " + localStorage.clickcount + " vez.";

        if (localStorage.clickcount > 1) {
            document.getElementById("contadorTestBasico").innerHTML = "Has Iniciado los Test de Programación " + localStorage.clickcount + " veces.";
            document.getElementById("contadorTestMedio").innerHTML = "Has Iniciado los Test de Programación " + localStorage.clickcount + " veces.";
            document.getElementById("contadorTestAvanzado").innerHTML = "Has Iniciado los Test de Programación " + localStorage.clickcount + " veces.";
        }
    } else {
        document.getElementById("contadorTestBasico").innerHTML = "Lamentablemente no se puede contabilizar las veces que iniciaste este Test a causa de la version de tu navegador...";
        document.getElementById("contadorTestMedio").innerHTML = "Lamentablemente no se puede contabilizar las veces que iniciaste este Test a causa de la version de tu navegador...";
        document.getElementById("contadorTestAvanzado").innerHTML = "Lamentablemente no se puede contabilizar las veces que iniciaste este Test a causa de la version de tu navegador...";
    }
}