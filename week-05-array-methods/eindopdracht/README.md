# Eindopdracht Week 5 — Productcatalogus

## Theorie

Gebruik de volgende cheatsheet-pagina's als je ergens niet uitkomt:

- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()`, `map()`, `sort()`
- [String methods](https://meesterjson.nl/cheat-sheet/pages/javascript/string-methods.html) — `includes()`, `toLowerCase()`
- [DOM & Local Storage](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-local-storage.html) — elementen selecteren en tekst tonen
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — `addEventListener`, input event

## Opdracht

Maak een doorzoekbare en op naam sorteerbare productcatalogus.

> De productnamen staan al als strings in de array in `script.js`.

## Stappen

### Stap 1 — Producten tonen (~1 uur)
Schrijf de functie `showProducts(list)` zodat alle productnamen als kaartjes verschijnen op de pagina. Werk ook de teller bij zodat je ziet hoeveel producten er zijn.

### Stap 2 — Zoekbalk (~1,5 uur)
Voeg een event listener toe aan `#search-bar`. Filter de producten live op naam terwijl de gebruiker typt. Gebruik `includes()` en `toLowerCase()` zodat hoofdletters niet uitmaken.

### Stap 3 — Sorteren
Voeg event listeners toe aan de twee sorteerknoppen. Bij klik sorteer je de productnamen met `sort()` van A naar Z of Z naar A. Zoeken en sorteren moeten tegelijk kunnen werken.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas.