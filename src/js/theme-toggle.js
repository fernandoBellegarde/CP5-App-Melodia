const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const applyTheme = (theme) => {
    if (theme === 'theme-linkin-park') {
        body.classList.add('theme-linkin-park');
        } else {
            body.classList.remove('theme-linkin-park');
        }
    };

const savedTheme = localStorage.getItem('theme') || 'theme-default';

applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const isLinkinParkTheme = body.classList.contains('theme-linkin-park');
            if (isLinkinParkTheme) {
                body.classList.remove('theme-linkin-park');
                localStorage.setItem('theme', 'theme-default');
            } else {
                body.classList.add('theme-linkin-park');
                localStorage.setItem('theme', 'theme-linkin-park');
            }
        });