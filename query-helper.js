//QUERY hELPERS
//all filtering
export const filterLocation = ()=>{
    const locationValue = document.getElementById('sort-location').value.toLowerCase();
    const jobCards = document.querySelectorAll('.job-card');


    Array.from(jobCards).forEach(jobCard => {
        const jobLocation = jobCard.querySelector('p').textContent.toLowerCase();
        if( jobLocation.includes(locationValue) ){
            jobCard.style.display = 'flex';
            jobCard.classList.add('flex-col','pl-8','bg-[#fff]','gap-y-9','pb-6' ,'rounded-[0.8rem]','job-card')
        }else{
            jobCard.style.display = 'none';
        }
    });
}

// //All filtering
export const filterFullTime =()=>{
   const fullTimeChecked = document.querySelector('#fulltime-checked');
   const fullChecked = fullTimeChecked.checked ? 'Full Time' : '';
   const fullTime = fullChecked.toLowerCase();
   const jobCards = document.querySelectorAll('.job-card');
    
    
    Array.from(jobCards).forEach(jobCard => {
        const contractTime = jobCard.querySelector('.contract').textContent.toLowerCase();
        if( contractTime === fullTime ){
            jobCard.style.display = 'flex';
            jobCard.classList.add('flex-col','pl-8','bg-[#fff]','gap-y-9','pb-6' ,'rounded-[0.8rem]','job-card')
        }else{
            jobCard.style.display = 'none';
        }
    });
}

// //All Filtering
export const filterTitle = ()=>{
     const titleValue = document.getElementById('sort-title').value.toLowerCase();
     const jobCards = document.querySelectorAll('.job-card')

     Array.from(jobCards).forEach(jobCard => {
         const jobTitle = jobCard.querySelector('h2').textContent.toLowerCase();
       if( jobTitle.includes(titleValue)){
             jobCard.style.display = 'flex';
             jobCard.classList.add('flex-col','pl-8','bg-[#fff]','gap-y-9','pb-6' ,'rounded-[0.8rem]','job-card')
         }else{
             jobCard.style.display = 'none';
         }
     });
}


///for mobile screen
export const filterByTitle = ()=>{
    const filterInput = document.getElementById('filter-title').value.toLowerCase();
    const jobCards = document.querySelectorAll('.job-card')

    Array.from(jobCards).forEach(jobCard => {
        const jobTitle = jobCard.querySelector('h2').textContent.toLowerCase();
        if( jobTitle.includes(filterInput)){
            jobCard.style.display = 'flex';
            jobCard.classList.add('flex-col','pl-8','bg-[#fff]','gap-y-9','pb-6' ,'rounded-[0.8rem]','job-card')
        }else{
            jobCard.style.display = 'none';
        }
    });
}


//for mobile screen
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

  
