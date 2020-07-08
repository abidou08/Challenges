const classArray = [".body_bg", ".top_bg", ".switch_btn", ".switch_bar", ".title", ".overview_title", 
".total_followers", ".mode_name", ".attribution"];
const followersArray = [".card", ".number", ".username", ".count", ".overview_card", ".action_type", "h2"];                    
const toggleBtn = document.querySelector(".switch_btn");

toggleBtn.addEventListener('click', ()=>{
    classArray.forEach(element => document.querySelector(element).classList.toggle("dark"));
});

toggleBtn.addEventListener('click', ()=>{
    for (var i=0; i<followersArray.length; i++){
        let card = document.querySelectorAll(followersArray[i]);
        for(var j=0; j<card.length; j++){
            card[j].classList.toggle("dark");
        }
    }
});
