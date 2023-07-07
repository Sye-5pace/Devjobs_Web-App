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
    //index.html elements
    const navbar = document.querySelector('nav');
    const body = document.querySelector('body');
    const jobsCards = document.querySelectorAll('.job-card');
    const sortTitle = document.querySelector('#sort-title');
    const sortLocation = document.querySelector('#sort-location');
    const jobs = Array.from(jobsCards)
    const fullTimeLabel = document.querySelector('#fulltime-label');
    const switchMode = document.getElementById('switch');
    
    //job-detail.html elements
    const headerDetails = document.querySelector('#header-details');
    const detailsContainer  = document.querySelector("#details-container");
    const jobDesc = document.querySelector("#job-desc");
    const companyName = document.querySelector("#company-name");
    const companySite = document.querySelector("#company-site");
    const footer = document.querySelector("footer");
    const contractDetailsH1 = document.querySelector("#contract-details h1");
    const mobileApply = document.querySelector("#mobile-apply");



            // Conditional checks to handle elements on different pages
        if (navbar) {
            navbar.style.backgroundColor = darkModeEnabled ? '#19212c' : '#fff';
        }

        if (body) {
            body.style.backgroundColor = darkModeEnabled ? '#131621' : '#f4f6f8';
        }

        if (fullTimeLabel) {
            fullTimeLabel.style.color = darkModeEnabled ? '#fffffc' : '#6e8096';
        }

        if (sortTitle) {
            sortTitle.style.backgroundColor = darkModeEnabled ? '#19212c' : '#fff';
            sortTitle.style.color = darkModeEnabled ? '#fffffc' : '#6e8096';
        }

        if (sortLocation) {
            sortLocation.style.backgroundColor = darkModeEnabled ? '#19212c' : '#fff';
            sortLocation.style.color = darkModeEnabled ? '#fffffc' : '#6e8096';
        }

        if (switchMode) {
            switchMode.classList.toggle('switch-dark', darkModeEnabled);
        }

        jobs.forEach((jobCard) => {
            jobCard.style.backgroundColor = darkModeEnabled ? '#19212c' : '#fff';
            const role = jobCard.querySelector('h2');
            if (role) {
            role.style.color = darkModeEnabled ? '#fffffc' : '#121721';
            }
        });

        //job-details.html
        if(headerDetails) {
            headerDetails.style.backgroundColor = darkModeEnabled ? '#19212c':'#fff';
            headerDetails.querySelector('a').style.backgroundColor = darkModeEnabled ? '#303643' : "#f4f6f8";
            headerDetails.querySelector('a').style.color = darkModeEnabled ? '#fffffc' : "#5864e1";
        }

        if(detailsContainer) {
            detailsContainer.style.backgroundColor = darkModeEnabled ? '#19212c' : '#fff';
            detailsContainer.style.color = darkModeEnabled ? '#fffffc' : '#6e8098';
        }

        if(jobDesc){
            const desc = jobDesc.querySelectorAll('h3')
            Array.from(desc).forEach((item)=>{
                item.style.color = darkModeEnabled ? '#fffffc':'#121721';
            });
        }
        
        if(companyName){
            companyName.style.color = darkModeEnabled ? '#fffffc' : '#121721';
        }

        if(companySite){
             companySite.style.color = darkModeEnabled ? '#6e8098' : '';
        }

        if(footer){
            footer.style.backgroundColor = darkModeEnabled ? "#19212c":"#fff";
            footer.querySelector('h2').style.color = darkModeEnabled ? "#fffffc":"#fff";
        }

        if(contractDetailsH1){
            contractDetailsH1.style.color = darkModeEnabled ? "#fffffc":"#121721";
        }

        if(mobileApply){
            mobileApply.style.backgroundColor = darkModeEnabled ? "#19212c" : "#fff";
        }

    if(darkModeEnabled) {
        saveTheme(true);
    }else{
        saveTheme(false);
    }
}
