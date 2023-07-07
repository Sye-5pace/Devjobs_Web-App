//Theme-Switcher EventListener:
//Persisting the theme with LocalStorage
export const saveTheme = (darkModeEnabled) => {
    localStorage.setItem('darkModeEnabled', darkModeEnabled)
}


//Load theme from localStorage:
export const loadTheme = ()=> {
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    toggleTheme(darkModeEnabled)
}


export const toggleTheme = (darkModeEnabled)=>{
    const navbar = document.querySelector('nav');
    const body = document.querySelector('body');
    const jobsCards = document.querySelectorAll('.job-card');
    const sortTitle = document.querySelector('#sort-title');
    const sortLocation = document.querySelector('#sort-location');
    const jobs = Array.from(jobsCards)
    const fullTimeLabel = document.querySelector('#fulltime-label');
    const switchMode = document.getElementById('switch');

    if(darkModeEnabled) {
        //css transition/animation for the mode-node/icon
        switchMode.classList.add("switch-dark");
        body.style.backgroundColor= '#131621';
        navbar.style.backgroundColor= '#19212c';
        fullTimeLabel.style.color='#fffffc'
        sortTitle.style.backgroundColor= '#19212c';
        sortTitle.style.color= '#fffffc';
        sortLocation.style.backgroundColor= '#19212c';
        sortLocation.style.color= '#fffffc';
        switchMode.classList.add("switch-dark");
        
        jobs.forEach((jobCard)=>{
            jobCard.style.backgroundColor= "#19212c";
            const role = jobCard.querySelector('h2');
            role.style.color = "#fffffc";
        })
        saveTheme(true);
    }else{
        switchMode.classList.remove("switch-dark");
        body.style.backgroundColor= '#f4f6f8';
        navbar.style.backgroundColor= '#fff';
        fullTimeLabel.style.color='#6e8096'
        sortTitle.style.backgroundColor= '#fff';
        sortTitle.style.color= '#6e8096';
        sortLocation.style.backgroundColor= '#fff';
        sortLocation.style.color= '#6e8096';

        jobs.forEach((jobCard)=>{
            jobCard.style.backgroundColor= "#fff";
            const role = jobCard.querySelector('h2');
            role.style.color = "#121721";
        })
        saveTheme(false);
    }
}
