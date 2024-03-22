const getCrafts = async() => {
    try {
        return (await fetch("http://localhost:3000/api/crafts")).json();
    } catch(error){
        console.log("error retrieving data");
        return "";
    }
};

const showCrafts = async() => {
    const craftsJSON = await getCrafts();
    const craftsDiv = document.getElementById("gallery");

    if(craftsJSON == ""){
        craftsDiv.innerHTML = "Sorry, no crafts";
        return;
    }

    //now loop through the json
    craftsJSON.forEach((craft)=>{

        const fig = document.createElement("figure");
        craftsDiv.append(fig);
        const img = document.createElement("img");
        img.src = "./images/" + craft.image;
        fig.append(img);
        fig.onclick = () => openModal(craft);
    });
};

const openModal = (craft) => {
        const modal = document.getElementById("myModal");
        const modalContent = document.getElementById("modal-content");
        modalContent.innerHTML="";
        
        const closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.onclick = () => modal.style.display = "none";
    
        modal.style.display = "block";
        
        const columnsContainer = document.createElement("div");
        columnsContainer.classList.add("columns");
        
        const dataColumn = document.createElement("div");
        dataColumn.classList.add("one");
        
        const test = document.createElement("h3");
        test.innerHTML = "test";
        dataColumn.append(test);
    
        const imageColumn = document.createElement("div");
        imageColumn.classList.add("one");
    
        const image = document.createElement("img");
        image.src = "images/" + craft.image;
        image.style.width = "100%";
        imageColumn.append(image);
    
        columnsContainer.append(dataColumn);
        columnsContainer.append(imageColumn);
    
        modalContent.append(columnsContainer);
    }

showCrafts();