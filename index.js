import { jobsLoader} from './job-loader.js'
import { filterByTitle,filterByLocation,filterFullTime,filterTitle ,filterLocation } from './query-helper.js';
import { loadTheme,toggleTheme} from "./theme_switcher.js";

document.addEventListener('DOMContentLoaded', ()=>{
    jobsLoader();

    loadTheme();
    //default refresher for the page
    const defaultRefresher = document.getElementById('default-refresher');
    defaultRefresher.addEventListener('click',()=>{
        const jobContainer = document.getElementById('job-container');
        jobContainer.innerHTML = '';
        jobsLoader();
    })

    //Sort,Filter features
    const search = document.querySelector('#search');
    search.addEventListener("click", filterByTitle)

    const filterMobileModal = document.querySelector('#filter-mobile-modal');
    const filterIcon = document.querySelector('#filter');
    filterIcon.addEventListener("click", ()=>{
        filterMobileModal.style.display = 'block';
    })

    const modalSearch = document.querySelector('#query');
    modalSearch.addEventListener("click", ()=>{
        filterMobileModal.style.display = 'none';
        filterByLocation();
    });

    //filter by location for all screens
    // const fullTimeChecked = document.querySelector('#fulltime-checked');
    const fullTime = document.getElementById('sort');
    fullTime.addEventListener("click",filterFullTime);
    
    const titleValue = document.getElementById('sort-title')
    titleValue.addEventListener("input",filterTitle);

    const locationValue = document.getElementById('sort-location')
    locationValue.addEventListener("input",filterLocation);
    
    const close = document.querySelector('#close');
    close.addEventListener("click", ()=>{
        filterMobileModal.style.display = 'none';
    });

    //Theme event listeners
    //Dark mode
    const darkMode = document.querySelector('#dark');
    darkMode.addEventListener("click", ()=>{
        const switchMode = document.querySelector('#switch');
        switchMode.classList.add("switch-dark");
        toggleTheme(true);
        console.log("Dark mode");
    })
    
    //Light mode
    const lightMode = document.querySelector('#light');
    lightMode.addEventListener("click", ()=>{
        const switchMode = document.querySelector('#switch');
        switchMode.classList.remove("switch-dark");
        toggleTheme(false);
        console.log("light mode");
    })
})