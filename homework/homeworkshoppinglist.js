let state = {
    list:[
      {
        item:"cafea",
      },
      {
        item:"zahar",
      },
     
    ],
   
    
  }

  function draw(){
    let table= document.querySelector("#list tbody");
    let str ="";
    for (let i = 0; i < state.list.length; i++) {
    let elem = state.list[i];
      str +=`
      <tr>
          <td>${elem.item}</td>
          <td>
          <button onclick="strikethrough(${i})">Mark as buyed</button>
          <button onclick="del(${i})">Delete</button>
          </td>
      </tr> 
      `;
    }
    table.innerHTML = str;
  }
  

  function del(idx){
    if(
      confirm(`Esti sigur ca vrei sa stergi ${state.list[idx].item}?`)
      ){
    state.list.splice(idx,1);
    draw();
    }
  }

  function adauga(event){
    event.preventDefault();
   let item=document.querySelector("[name='item']").value.trim();
   
   if(state.item !== null){
      state.list.push({
      item:item,
    });
    
  }
  
   document.querySelector("form").reset();
   draw();
  }
  
 
  function sortTableAsc(item){
    
    state.list.sort(function (a,b){
      if (a.item < b.item){
        return - 1;
      }else if (a.item >b.item){
         return 1;
      }else{
        return 0;
      }
    });
   draw();
 }

 function sortTableDesc(item){
    
  state.list.sort(function (a,b){
    if (a.item > b.item){
      return - 1;
    }else if (a.item < b.item){
       return 1;
    }else{
      return 0;
    }
  });
 draw();
}
  