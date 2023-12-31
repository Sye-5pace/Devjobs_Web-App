import jobs from './data'
import { filterFullTime,filterTitle ,filterLocation } from './query-helper.js';

import {loadTheme} from './theme_switcher'

// console.log(jobs[0].logo)
let defaultLoad = [];
let currentIndex = 0;
const loadMore = document.getElementById('load-more')

export const jobsLoader = ()=>{
    defaultLoad = jobs.slice(0,6)
    
    defaultLoad.forEach((job,index)=>{
        const jobCard = createJobCards(job,index)
        const jobContainer = document.getElementById('job-container')
        jobContainer.appendChild(jobCard)
    })
}

const createJobCards = (job,index)=>{
        const jobCard = document.createElement('div');
        jobCard.setAttribute('data-index',index)

        const jobIcon = document.createElement('img')
        jobIcon.src = job.logo
        jobIcon.classList.add('w-[4rem]','h-[4rem]','-mt-7')
        
        const postedTime = document.createElement('h3')
        postedTime.innerHTML = job.postedAt + '<div class="w-2 h-2 bg-[#6f809b] rounded-full"></div>';
        postedTime.classList.add('text-[#6f809b]','flex','items-center','gap-2')
        
        const timeLine = document.createElement('div')
        const contractTime = document.createElement('h3')
        contractTime.textContent = job.contract
        contractTime.classList.add('text-[#6f809b]','contract')
    
        timeLine.appendChild(postedTime)
        timeLine.appendChild(contractTime)
        timeLine.classList.add('flex','flex-row','gap-2')

        const jobRole = document.createElement('h2')
        jobRole.innerHTML = job.position
        jobRole.classList.add('text-[1.3rem]','text-[#121721]','hover:text-[#9dcdff]','cursor-pointer');
        
        const companyName = document.createElement('h3')
        companyName.textContent = job.company;
        companyName.classList.add('text-[#6f809b]')
        
        const jobDetails = document.createElement('div')
        jobDetails.appendChild(timeLine);
        jobDetails.appendChild(jobRole);
        jobDetails.appendChild(companyName);
        jobDetails.classList.add('flex','flex-col','gap-y-2')

        const companyLocation = document.createElement('p')
        companyLocation.textContent = job.location
        companyLocation.classList.add('text-[#5964e0]','text-[0.8rem]','font-semibold')

        jobCard.appendChild(jobIcon)
        jobCard.appendChild(jobDetails)
        jobCard.appendChild(companyLocation)
        jobCard.classList.add('flex','flex-col','pl-8','bg-[#fff]','gap-y-9','pb-6' ,'rounded-[0.25rem]','job-card')

        
        jobCard.addEventListener('click',(event)=>{
            const clickedJob = event.currentTarget
            const jobIndex = clickedJob.dataset.index
            console.log("Job #:",jobIndex)

            const companyLogo = job.logo
            const companyName = job.company
            const link = job.link
            const postedTime = job.postedAt
            const contractTime =  job.contract;
            const role = job.position
            const location = job.location
            const jobDesc = job.desc
            const requirementTitle = job.requirements.reqTitle
            const requirementPoint1 = job.requirements.reqItem[0]
            const requirementPoint2 = job.requirements.reqItem[1]
            const requirementPoint3 = job.requirements.reqItem[2]
            const requirementPoint4 = job.requirements.reqItem[3]

            const responsibilityTitle = job.responsibility.resTitle
            const responsibilityPoint1 = job.responsibility.resItem[0]
            const responsibilityPoint2 = job.responsibility.resItem[1]
            const responsibilityPoint3 = job.responsibility.resItem[2]
            const responsibilityPoint4 = job.responsibility.resItem[3]

            const url = "jobs-detail.html?" + 
            "&redirectLogo=" + encodeURIComponent(companyLogo) +
            "&redirectName=" + encodeURIComponent(companyName) +
            "&redirectLink=" + encodeURIComponent(link) +
            "&redirectPostedTime=" + encodeURIComponent(postedTime) +
            "&redirectContractTime=" + encodeURIComponent(contractTime) +
            "&redirectRole=" + encodeURIComponent(role) +
            "&redirectLocation=" + encodeURIComponent(location) +
            "&redirectDesc=" + encodeURIComponent(jobDesc) +
            "&redirectReqTitle=" + encodeURIComponent(requirementTitle) +
            "&redirectReqPt1=" + encodeURIComponent(requirementPoint1) +
            "&redirectReqPt2=" + encodeURIComponent(requirementPoint2) +
            "&redirectReqPt3=" + encodeURIComponent(requirementPoint3) +
            "&redirectReqPt4=" + encodeURIComponent(requirementPoint4) +
            "&redirectResTitle=" + encodeURIComponent(responsibilityTitle) +
            "&redirectResPt1=" + encodeURIComponent(responsibilityPoint1) +
            "&redirectResPt2=" + encodeURIComponent(responsibilityPoint2) +
            "&redirectResPt3=" + encodeURIComponent(responsibilityPoint3) +
            "&redirectResPt4=" + encodeURIComponent(responsibilityPoint4);
            window.location.href = url;
            // console.log(url)
        })
        return jobCard;
}

loadMore.addEventListener('click', (event)=>{
    
    event.currentTarget.classList.add('opacity-30')
    
    const jobContainer = document.getElementById('job-container')
    jobContainer.innerHTML = '';
    
    const remainingJobs = jobs.slice(currentIndex)
    
    remainingJobs.forEach((job,index)=>{
        const jobCard = createJobCards(job,index)
        jobContainer.appendChild(jobCard)
    });

    loadTheme();
    filterFullTime();
    filterTitle(); 
    filterLocation();
});