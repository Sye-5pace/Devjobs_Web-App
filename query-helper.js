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

    Array.from(jobCards).forEach((jobCard) => {
        const contractTime = jobCard.querySelector('.contract').textContent.toLowerCase();
        const jobLocation = jobCard.querySelector('p').textContent.toLowerCase();

        if( contractTime === isFullTime.toLowerCase() || jobLocation === filterInput){
            jobCard.style.display = 'flex';
            jobCard.classList.add('flex-col','pl-8','bg-[#fff]','gap-y-9','pb-6' ,'rounded-[0.8rem]','job-card')
        }else{
            jobCard.style.display = 'none';
        }

    })
}


//filter for all inputs
export const sortAll =(event)=>{
    const titleValue = document.getElementById('sort-title').value.toLowerCase();
    const locationValue = document.getElementById('sort-location').value.toLowerCase();
    const fullTimeChecked = document.querySelector('#fulltime-checked')

    const fullChecked = fullTimeChecked.checked ? 'Full Time' : '';
    const fullTime = fullChecked.toLowerCase()
    
    // console.log(titleValue,locationValue,fullChecked)

    //when sort is clicked and with sort option
    /* if( titleValue === '' && fullTime === '' && locationValue === '' ){
         jobsLoader();
         return;
    } */

    const jobCards = document.querySelectorAll('.job-card')
    // console.log(titleValue)
    
    Array.from(jobCards).forEach((jobCard)=>{
        const contractTime = jobCard.querySelector('.contract').textContent.toLowerCase();
        const jobLocation = jobCard.querySelector('p').textContent.toLowerCase();
        const role = jobCard.querySelector('h2').textContent.toLowerCase();
        // console.log(role)
        
        if( contractTime === fullTime || jobLocation === locationValue || role.includes(titleValue)) {
            jobCard.style.display = 'flex';
            jobCard.classList.add('flex-col','pl-8','bg-[#fff]','gap-y-9','pb-6' ,'rounded-[0.8rem]','job-card')
        }else{
            jobCard.style.display = 'none';
        }
        
    })
}
//color note:
//#E0BA2D-golden-grass
//#E6C033-tulip tree
// #905C5A

