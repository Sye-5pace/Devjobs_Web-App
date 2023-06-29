import { jobsLoader} from './job-loader.js'
import { filterByTitle,filterByLocation } from './query-helper.js';

document.addEventListener('DOMContentLoaded', ()=>{
    jobsLoader();

    //default refresher for the page
    const defaultRefresher = document.getElementById('default-refresher');
    defaultRefresher.addEventListener('click',()=>{
        const jobContainer = document.getElementById('job-container');
        jobContainer.innerHTML = '';
        jobsLoader();
    })

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
})