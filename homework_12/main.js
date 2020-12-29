const getHeroes = document.getElementById('getHeroes');
const getPlanets = document.getElementById('getPlanets');
const listHeroes = document.getElementById('listHeroes');
const listPlanets = document.getElementById('listPlanets');
getHeroes.addEventListener('click', () => {
    fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((data) => 
        data.results.filter((hero) =>
            hero.films.includes('http://swapi.dev/api/films/2/')
        ).map((hero) =>
            listHeroes.innerHTML += `Ім'я:${hero?.name}, Дата народження: ${hero?.birth_year}, Стать: ${hero?.gender}</br>`
        )
    )
})
getPlanets.addEventListener('click', () => window.location.href = 'listPlanets.html')