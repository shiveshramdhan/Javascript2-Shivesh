const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

// Filter: toon alleen scores boven de 50 in #result-filtered
const filteredScores = scores.filter((score) => score > 50);
// Map: verdubbel alle scores en toon in #result-map
const doubledScores = scores.map((score) => score * 2);
// Sort: sorteer van laag naar hoog en toon in #result-sorted
const sortedScores = [...scores].sort((a, b) => a - b);

function showScores(elementId, scoresToShow) {
  const list = document.getElementById(elementId);

  scoresToShow.forEach((score) => {
    const item = document.createElement('li');
    item.textContent = score;
    list.appendChild(item);
  });
}

showScores('result-filtered', filteredScores);
showScores('result-map', doubledScores);
showScores('result-sorted', sortedScores);
