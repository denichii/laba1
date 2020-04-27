window.addEventListener("load",function(){
    var button = document.getElementById("add_tr");
    var table = document.getElementById('table');
    var delete_tr = document.getElementsByClassName("delete_tr");
    var diagrama = document.getElementById("diagrama");
    var block_for_diagrama = document.getElementsByClassName("block");

    button.addEventListener('click',function(){
        var obl = prompt("Введіть обласний центр");
        var km = +prompt("Введіть відстань");

        var tr = document.createElement('tr');
        table.appendChild(tr);
        tr.classList.add("tr");
        tr.classList.add("tr:nth-child(2n)");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        tr.appendChild(td1);
        td1.classList.add("td");
        td1.innerHTML = "<button class='delete_tr'>Видалити</button>";

        tr.appendChild(td2);
        td2.classList.add("td");
        td2.innerHTML = obl;

        tr.appendChild(td3);
        td3.classList.add("td");
        td3.innerHTML = km;



        var block = document.createElement("div");
        diagrama.appendChild(block);
        block.classList.add("block");
        block.style.height = km*100/540 + "%";
        block.setAttribute("title",km*100/540 + "%");

        var p = document.createElement("p");
        block.appendChild(p);
        p.innerText = obl;
        p.classList.add("rotate");

        for(let k=0;k<delete_tr.length;k++){
            delete_tr[k].addEventListener("click", function(){
                var row = delete_tr[k].parentNode.parentNode;
                row.parentNode.removeChild(row);
                diagrama.removeChild(block_for_diagrama[k]);
            })
        }
    })

    for(let i=0;i<delete_tr.length;i++){
        delete_tr[i].addEventListener("click", function(){
            var row = delete_tr[i].parentNode.parentNode;
            row.parentNode.removeChild(row);
            diagrama.removeChild(block_for_diagrama[i]);
        })
    }

})
