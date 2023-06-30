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
        console.log(link);
    }

    detailUpdater();
})