import jobs from './data'

// console.log(jobs[0].logo)
let defaultLoad
// const 

export const jobsLoader = ()=>{
    defaultLoad = jobs.slice(0,6)
    
    defaultLoad.forEach((job,index)=>{
        const jobCard = document.createElement('div');
        jobCard.setAttribute('data-index',index)

        const jobIcon = document.createElement('div')
        jobIcon.innerHTML = job.logo
        
        const postedContractTime = document.createElement('h3')
        postedContractTime.innerHTML = job.postedAt + '<div class="w-2 h-2 bg-[#6f809b] rounded-full"></div>' + job.contract;
        postedContractTime.classList.add('text-[#6f809b]','flex','items-center','gap-2')
        
        const jobRole = document.createElement('h2')
        jobRole.innerHTML = job.position
        jobRole.classList.add('text-[1.3rem]','text-[#121721]','hover:text-[#9dcdff]');
        
        const companyName = document.createElement('h3')
        companyName.textContent = job.company;
        companyName.classList.add('text-[#6f809b]')
        
        const jobDetails = document.createElement('div')
        jobDetails.appendChild(postedContractTime);
        jobDetails.appendChild(jobRole);
        jobDetails.appendChild(companyName);
        jobDetails.classList.add('flex','flex-col','gap-y-2')

        const companyLocation = document.createElement('p')
        companyLocation.textContent = job.location
        companyLocation.classList.add('text-[#5964e0]','text-[0.8rem]','font-semibold')

        jobCard.appendChild(jobIcon)
        jobCard.appendChild(jobDetails)
        jobCard.appendChild(companyLocation)
        jobCard.classList.add('flex','flex-col','pl-8','bg-[#fff]','gap-y-6','py-6' ,'rounded-[0.65rem]')

        const jobContainer = document.getElementById('job-container')
        jobContainer.appendChild(jobCard)
    })
}

