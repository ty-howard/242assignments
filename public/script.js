const getCrafts = async() => {
    try {
        return (await fetch("/api/crafts")).json();
    } catch(error){
        console.log("error retrieving data");
        return "";
    }
};
  
  const showCrafts = async() => {
    const crafts = await getCrafts();
  
    crafts.forEach((craft) => {
      document.getElementById("gallery").append(getCraftFigure(craft));
    });
  };
  
  const getCraftFigure = (craft) => {
    const result = document.createElement("figure");
    result.setAttribute("id","result");
    result.onclick = () => openModal(craft);
  
    const img = document.createElement("img");
    img.src = "./images/" + craft.image;
    result.append(img);
  
    return result;
  }
  
  const openModal = (craft) => {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modal-content");

    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = () => modal.style.display = "none";

    modal.style.display = "block";

    const cont = document.getElementById("mod-body");
    cont.innerHTML="";

    const picSec = document.createElement("section");
    picSec.setAttribute("class","one");
    cont.append(picSec);
    
    const pic = document.createElement("img");
    pic.src = "./images/" + craft.image;
    picSec.append(pic);

    const txtSec = document.createElement("section");
    txtSec.setAttribute("class","two");
    cont.append(txtSec);
    
    const name = document.createElement("h2");
    name.innerHTML = craft.name;
    txtSec.append(name);

    const desc = document.createElement("p");
    desc.innerHTML = craft.description;
    txtSec.append(desc);

    const sup = document.createElement("h3");
    sup.innerHTML = "Supplies:";
    txtSec.append(sup);

    const slist = document.createElement("ul");
    craft.supplies.forEach((supply)=>{
        const item = document.createElement("li");
        item.innerHTML = supply;
        slist.append(item);
    })
    txtSec.append(slist);

    modalContent.append(cont);
};



showCrafts();