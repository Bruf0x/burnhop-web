function saveProfileEmail(){
  $(document).on('click', '[data-tracker]', function() {
  var emailProfile = $(this).attr('data-tracker');
  console.log(emailProfile)
  localStorage.setItem('emailProfile',emailProfile);

});
}

const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.data_nasc.toLowerCase().includes(searchString) ||
            character.login.email.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://burnhop-backend.herokuapp.com/users/get-all');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2><a onClick ="saveProfileEmail()" data-tracker="${character.login.email}" href= "../search/profileView.html">${character.name}</a></h2>
                <p class = "mt-2">Data Nascimento: ${character.data_nasc}</p>
                <img src="${character.image_path}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
