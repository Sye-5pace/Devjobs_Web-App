import { jobsLoader} from './job-loader.js'


export const searchByTitle = ()=>{
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

    /* const jobList = document.querySelectorAll('.job-card')
    Array.from(jobList).forEach((jobItem)=>{
        jobItem.cla
    }) */
    // jobList.classList.add('mobile:gap-y-16')



    // const headerDiv = document.querySelector('header div')
    // headerDiv.classList.add('mobile:mt-[4.38rem]')
}