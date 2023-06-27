import { jobsLoader} from './job-loader.js'
import { searchByTitle } from './query-helper.js';

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
    search.addEventListener("click", searchByTitle)
})