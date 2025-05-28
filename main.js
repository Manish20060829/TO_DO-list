
document.getElementById("submit").addEventListener("click", Myfunction);

window.addEventListener("unload", () => {
    const checkboxes = document.getElementsByClassName("checkbox");
    const check = [];
    for(i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            check.push(true);
        }
        else{
            check.push(false);
        }
    }

    localStorage.setItem(`check`, JSON.stringify(check));


});


document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById("list-container");

    items   = JSON.parse(localStorage.getItem("items")) || [];
    storage = JSON.parse(localStorage.getItem("storage")) || [];
    check = JSON.parse(localStorage.getItem("check")) || [];
    


    for(i = 0; i < storage.length; i++){
        

        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const box = document.createElement('span');
        const button = document.createElement("input");


        input.type = "checkbox";
        input.classList.add("checkbox");
        div.classList.add("item");

        button.type = "image";
        button.src =  "trash.png";
        button.classList.add("button");


        form.append(div);
        div.append(label);
        label.append(input);
        label.append(box);
        box.append(storage[i]);
        label.append(button); 

        if(check[i] === true){
            input.checked = true;
        }
        else{
            input.checked = false;
        }

        

        button.addEventListener("click", function (){
        items.splice(items.indexOf(box.innerHTML.toLowerCase()), 1);
        storage.splice(storage.indexOf(box.innerHTML), 1);
        localStorage.setItem(`storage`, JSON.stringify(storage));
        localStorage.setItem(`items`, JSON.stringify(items));
        div.remove();


        

        });

        
    

    }

    
    localStorage.setItem(`storage`, JSON.stringify(storage));
    localStorage.setItem(`items`, JSON.stringify(items));
    
    
    

    });





function Myfunction(e){
    e.preventDefault();

    items   = JSON.parse(localStorage.getItem("items")) ||[];
    storage = JSON.parse(localStorage.getItem("storage")) ||[];
   


    const x = document.getElementById("text");
    const form = document.getElementById("list-container");
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const box = document.createElement('span');
    const button = document.createElement("input");
    const msg = document.getElementById("message");

    
    input.type = "checkbox";
    input.classList.add("checkbox");
    div.classList.add("item");

    button.type = "image";
    button.src =  "trash.png";
    button.classList.add("button");

    if(x.value.length === 0){
        msg.innerHTML = "Enter your text";
        setTimeout(() => {msg.innerHTML = "";} ,3000);

    }
    
    else if(items.includes(x.value.toLowerCase().trim()) == true){
        msg.innerHTML = "Task is already Added";
        setTimeout(() => {msg.innerHTML = "";} ,3000); 
    

    }

    else if(x.value.length > 25) {
    
    msg.innerHTML = "Message is too long"; 
    setTimeout(() => {msg.innerHTML = "";} ,3000);

 
    
    }

    else{ 
    form.append(div);
    div.append(label);
    label.append(input);
    label.append(box);
    box.append(x.value);
    label.append(button);
    items.push(x.value.toLowerCase().trim());
    storage.push(x.value.trim());
    msg.innerHTML = "";
    x.value = "";
    

    button.addEventListener("click", function (){
        items.splice(items.indexOf(box.innerHTML.toLowerCase()), 1);
        storage.splice(storage.indexOf(box.innerHTML), 1);
        localStorage.setItem(`storage`, JSON.stringify(storage));
        localStorage.setItem(`items`, JSON.stringify(items));
        div.remove();
    });

    
    }



    localStorage.setItem(`storage`, JSON.stringify(storage));
    localStorage.setItem(`items`, JSON.stringify(items)); 
    
    }





    

    

    

    

    









