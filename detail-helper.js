import { detailUpdater } from "./template-helper";
import { loadTheme,toggleTheme} from "./theme_switcher.js";

document.addEventListener("DOMContentLoaded",()=>{
    detailUpdater();

    loadTheme();
    //Theme event listeners
    //Dark mode
    const darkMode = document.querySelector('#dark');
    darkMode.addEventListener("click", ()=>{
        const switchMode = document.querySelector('#switch');
        switchMode.classList.add("switch-dark");
        toggleTheme(true);
        console.log("Dark mode");
    })
    
    //Light mode
    const lightMode = document.querySelector('#light');
    lightMode.addEventListener("click", ()=>{
        const switchMode = document.querySelector('#switch');
        switchMode.classList.remove("switch-dark");
        toggleTheme(false);
        console.log("light mode");
    })

})