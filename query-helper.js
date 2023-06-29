import { jobsLoader} from './job-loader.js'


export const filterByTitle = ()=>{
    const filterInput = document.getElementById('filter-title').value.toLowerCase();
    const jobCards = document.querySelectorAll('.job-card')

    if( filterInput === ''){
        return jobsLoader(defaultLoad)
    }

    Array.from(jobCards).forEach(jobCard => {
        const jobTitle = jobCard.querySelector('h2').textContent.toLowerCase();
        if( jobTitle.includes(filterInput)){
            jobCard.style.display = 'flex';
            jobCard.classList.add('flex-col','pl-8','bg-[#fff]','gap-y-9','pb-6' ,'rounded-[0.8rem]','job-card')
        }else{
            jobCard.style.display = 'none';
        }
    })
}

export const filterByLocation = ()=>{
    const filterInput = document.querySelector('#filter-location').value.toLowerCase();
    const fullTimeChecked = document.querySelector('#filter-fulltime')

    const isFullTime = fullTimeChecked.checked ? 'Full time' : ''; 
    
    const jobCards = document.querySelectorAll('.job-card')

    Array.from(jobCards).forEach((jobCard)=>{
        const contractTime = jobCard.querySelector('.contract').textContent.toLowerCase();
        const jobLocation = jobCard.querySelector('p').textContent.toLowerCase();

        console.log(isFullTime + " =" + contractTime)
        console.log(filterInput + " =" + jobLocation)

        if( contractTime === isFullTime.toLowerCase() || jobLocation === filterInput){
            jobCard.style.display = 'flex';
            jobCard.classList.add('flex-col','pl-8','bg-[#fff]','gap-y-9','pb-6' ,'rounded-[0.8rem]','job-card')
        }else{
            jobCard.style.display = 'none';
        }

    })
}
