const mentorsList = document.querySelector('#middle-container ul');
const forms = document.forms;

// filter a specific mentor
const searchBar = forms['search-article'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const mentors = mentorsList.getElementsByTagName('li');
    Array.from(mentors).forEach((mentor) => {
        const title = mentor.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(e.target.value) != -1) {
            mentor.style.display = 'block';
        } else {
            mentor.style.display = 'none';
        }
    });
});