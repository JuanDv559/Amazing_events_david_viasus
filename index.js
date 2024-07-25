
let d = document;
let body = d.querySelector(".container-fluid");

let nav = d.createElement("nav");
body.appendChild(nav);
nav.className="navbar navbar-expand-lg bg-warning  row w-100"
nav.innerHTML= `   
<img src="./Recursos_Amazing_Events_Task_1/amazing_brand.png" alt="" class="w-25 navbar-brand ">
 <ul class=" navbar-nav collapse navbar-collapse offset-lg-3 gap-2" id="navbarNav">

            <li class="nav-item "><a href="#">HOME</a></li>
            <li class="nav-item"><a href="#">UPCOMING EVENTS</a></li>
            <li class="nav-item"><a href="#">PAST EVENTS</a></li>
            <li class="nav-item"><a href="#">CONTACT</a></li>
             <li class="nav-item"><a href="#">STATS</a></li>

        </ul>


         <button class="navbar-toggler w-25" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>`;