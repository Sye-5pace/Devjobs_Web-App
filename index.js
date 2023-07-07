import { jobsLoader} from './job-loader.js'
import { filterByTitle,filterByLocation,sortAll } from './query-helper.js';
// import { loadTheme,toggleTheme} from "./theme_switcher.js";

document.addEventListener('DOMContentLoaded', ()=>{
    jobsLoader();

    // loadTheme();
    //default refresher for the page
    const defaultRefresher = document.getElementById('default-refresher');
    defaultRefresher.addEventListener('click',()=>{
        const jobContainer = document.getElementById('job-container');
        jobContainer.innerHTML = '';
        jobsLoader();
    })

    //Sort,Filter features
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
    const sort = document.getElementById('sort');
    sort.addEventListener("click", sortAll);

    const close = document.querySelector('#close');
    close.addEventListener("click", ()=>{
        filterMobileModal.style.display = 'none';
    });

    //Theme event listeners
    //Dark mode
    const darkMode = document.querySelector('#dark');
    const switchMode = document.querySelector('#switch');
    darkMode.addEventListener("click", ()=>{
        switchMode.classList.add("switch-dark");
        // toggleTheme(true);
        console.log("Dark mode");
    })
    
    //Light mode
    const lightMode = document.querySelector('#light');
    lightMode.addEventListener("click", ()=>{
        switchMode.classList.remove("switch-dark");
        console.log("light mode");
    })
})