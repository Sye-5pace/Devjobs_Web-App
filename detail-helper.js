document.addEventListener("DOMContentLoaded",()=>{

    //UrlParams Interpreter
    const urlInterpreter = (paramName,url) => {
        if(!url) url = window.location.href;
        paramName = paramName.replace(/[[\]]/g,"\\$&")
        const regex = new RegExp("[/&]" + paramName + "(=([^&#]*)|&|#|$)")
        let results  = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURI(results[2].replace(/\+/g, ""));
    };

    //Extract params from the url
    const detailUpdater = () =>{
        const logo = urlInterpreter('redirectLogo');
        const name = urlInterpreter('redirectName');
        const link = urlInterpreter('redirectLink');
        const postedTime = urlInterpreter('redirectPostedTime');
        const contractTime = urlInterpreter('redirectContractTime');
        const role = urlInterpreter('redirectRole');
        const location = urlInterpreter('redirectLocation');
        const jobDesc = urlInterpreter('redirectDesc');
        const reqTitle = urlInterpreter('redirectReqTitle');
        const reqPt1 = urlInterpreter('redirectReqPt1');
        const reqPt2 = urlInterpreter('redirectReqPt2');
        const reqPt3 = urlInterpreter('redirectReqPt3');
        const reqPt4 = urlInterpreter('redirectReqPt4');
        const resTitle = urlInterpreter('redirectResTitle');
        const resPt1 = urlInterpreter('redirectResPt1');
        const resPt2 = urlInterpreter('redirectResPt2');
        const resPt3 = urlInterpreter('redirectResPt3');
        const resPt4 = urlInterpreter('redirectResPt4');

        //logo
        const companyLogo = document.createElement('img')
        companyLogo.src = logo
        companyLogo.classList.add('w-[4rem]','h-[4rem]')
        document.querySelector('#logo').appendChild(companyLogo); 

        document.querySelector('#company-name').textContent = name;
        document.querySelector('#company-site').textContent = link;
        const contractDetails = document.querySelector("#contract-details")
        contractDetails.classList.add('flex','flex-col');
        const postContractTime = document.createElement('h3')
        postContractTime.innerHTML = postedTime + '<div class="w-1 h-1 bg-[#6f809b] rounded-full"></div>' + contractTime;
        postContractTime.classList.add('text-[#6f809b]','flex','items-center','gap-2')
        
        const roleTitle = document.createElement('h1')
        roleTitle.textContent = role;

        roleTitle.classList.add('text-[1.35rem]','text-vulcan','font-semibold')

        const companyLocation = document.createElement('p')
        companyLocation.textContent = location
        companyLocation.classList.add("text-royal-blue",'font-semibold')

        //details for contract
        contractDetails.appendChild(postContractTime);
        contractDetails.appendChild(roleTitle);
        contractDetails.appendChild(companyLocation);   

        //Company desc and requirements details
        document.querySelector('#company-desc').textContent = jobDesc;
        document.querySelector('#requirements-desc').textContent = reqTitle;

        const li1 = document.createElement('li')
        li1.textContent = reqPt1;
        // li1.classList.add('')

        const li2 = document.createElement('li')
        li2.textContent = reqPt2;
        const li3 = document.createElement('li')
        li3.textContent = reqPt3;
        const li4 = document.createElement('li')
        li4.textContent = reqPt4;
        document.querySelector('#req-list').appendChild(li1)
        document.querySelector('#req-list').appendChild(li2)
        document.querySelector('#req-list').appendChild(li3)
        document.querySelector('#req-list').appendChild(li4)

        //role description
        document.querySelector('#role-desc').textContent = resTitle;

        const resLi1 = document.createElement('li');
        resLi1.textContent = resPt1;

        const resLi2 = document.createElement('li')
        resLi2.textContent = resPt2;

        const resLi3 = document.createElement('li')
        resLi3.textContent = resPt3;

        const resLi4 = document.createElement('li')
        resLi4.textContent = resPt4;

        document.querySelector("ol").appendChild(resLi1)
        document.querySelector("ol").appendChild(resLi2)
        document.querySelector("ol").appendChild(resLi3)
        document.querySelector("ol").appendChild(resLi4)


        //red

    }

    detailUpdater();
})