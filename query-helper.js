import { jobsLoader} from './job-loader.js'


export const searchByTitle = ()=>{
    const filterInput = document.getElementById('filter-title').value.toLowerCase();
    const jobCards = document.querySelectorAll('.job-card')

    if( filterInput === ''){
        return jobsLoader()
    }

    Array.from(jobCards).forEach(jobCard => {
        const jobTitle = jobCard.querySelector('h2').textContent.toLowerCase();
        if( jobTitle.includes(filterInput)){
            jobCard.style.display = 'block';
        }else{
            jobCard.style.display = 'none';
        }
    })
}