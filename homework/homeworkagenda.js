let state = {
  list:[
    {
      nume:"Popescu Ioan",
      telefon:"0742226689",
    },
  ],
  idxEdit :null,
  
}
function draw(){
  let table= document.querySelector("#list tbody");
  let str ="";
  for (let i = 0; i < state.list.length; i++) {
  let elem = state.list[i];
    str +=`
    <tr>
        <td>${elem.nume}</td>
        <td>${elem.telefon}</td>
        <td>
        <button onclick="del(${i})">Sterge</button>
        <button onclick="edit(${i})">Modifica</button>
        </td>
    </tr> 
    `;
  }
  table.innerHTML = str;
}
function edit(idx){
   let elem = state.list[idx];
   document.querySelector("[name='nume']").value = elem.nume;
   document.querySelector("[name='telefon']").value = elem.telefon;
   state.idxEdit = idx;
}


function del(idx){
  if(
    confirm(`Esti sigur ca vrei sa stergi ${state.list[idx].nume}?`)
    ){
  state.list.splice(idx,1);
  draw();
  }
}


function adauga(event){
  event.preventDefault();
 let nume=document.querySelector("[name='nume']").value.trim();
 let telefon=document.querySelector("[name='telefon']").value.trim();

 if(state.idxEdit === null){
    state.list.push({
    nume:nume,
    telefon:telefon,
  });
}else {
  state.list[state.idxEdit] = {
    nume:nume,
    telefon:telefon,

  };
  state.idxEdit = null;
}
 document.querySelector("form").reset();
 draw();
}

