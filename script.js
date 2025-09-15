
const datas = [{
        borderTopColor:" blue",
        icon : 'logo/Facebook_Logo_2023.png',
        username : ` @nathanf`,
        num : 1987 ,
        nom : 'Followers',
        count : "&utrif;12 Today",
        countColor:"green"
    },{
        borderTopColor:" blue",
        icon : 'logo/twitter.jpeg',
        username : "@nathanf",
        num : 1044 ,
        nom : 'Followers',
        count : '&utrif;99 Today',
        countColor:"green"
    },{
        borderTopColor:" hotpink",
        icon : 'logo/instagram.jpeg',
        username : '@realnathanf',
        num : 11000 ,
        nom : 'Followers',
        count : '&utrif;1099 Today',
        countColor:"green"
    },{
        borderTopColor:" red",
        icon : 'logo/youtube.jpeg',
        username : 'Nathan F.',
        num : 8239 ,
        nom : 'Followers',
        count : '&dtrif;144 Today',
        countColor:"red"
    }
]

const result=datas.map(data=>`<div id="cons"  class="con" style ="border-top-color: ${data.borderTopColor};"> 
    <p><img src="${data.icon}" alt="" style = "width:15px; height:14px; padding-right:5px;">${data.username}</p>
    <h4>${data.num} </h4>
    <p>${data.nom} </p>
    <h5 style ="color: ${data.countColor}">${data.count} </h5>
    </div>`).join("")
    //  console.log(result)

document.getElementById("card").innerHTML=result

const data = [{
    name : "Page Views",
    icon : 'logo/Facebook_Logo_2023.png',
    num : 87 ,
    count : "&utrif;3%",
    countColor:"green"
},{
    name : "Likes",
    icon : 'logo/Facebook_Logo_2023.png',
    num : 52 ,
    count : '&dtrif;2%',
    countColor:"red"
},{
    name : 'Likes',
    icon : 'logo/instagram.jpeg',
    num : "52k" ,
    count : '&utrif;2257%',
    countColor:"green"
},{
    name : 'Profile View',
    icon : 'logo/instagram.jpeg',
    num : 8239 ,
    count : '&utrif;1357%',
    countColor:"green"
},{
    name : 'Retweets',
    icon : 'logo/twitter.jpeg',
    num : 117 ,
    count : '&utrif;303%',
    countColor:"green"
},{
    name : `Likes`,
    icon : 'logo/twitter.jpeg',
    num : 507 ,
    count : '&utrif;553%',
    countColor:"green"
},{
    name : 'Likes',
    icon : 'logo/youtube.jpeg',
    num : 107 ,
    count : '&dtrif;19%',
    countColor:"red"
},{
    name : 'Total Views',
    icon : 'logo/youtube.jpeg',
    num : 1407 ,
    count : '&dtrif;12%',
    countColor:"red"
}]
const results=data.map(datas=>`<div id="con"  class="con">
    <span class="beside">
    <p>${datas.name}</p>
    <h5>${datas.num} </h5>
    </span>
    <span class = "besides">
    <img src="${datas.icon}" alt="" style = "width:15px; height:14px;">
    <p class = "move" style ="color: ${datas.countColor}">${datas.count} </p></span>
    </div>`).join("")
    
    document.getElementById("cards").innerHTML=results
    
    const toggle = document.querySelector(".toggle")
    const body =  document.querySelector('body')
    const cars = document.querySelectorAll(".con")
    const mode = document.querySelector("#mode")

    function toggleBg(){
       body.classList.toggle('change')
       for (let car of cars) {
           car.classList.add('changes')
       }
    }
    toggle.addEventListener('click', ()=>{
        toggleBg()  
        if (body.classList.contains('change')) {
          mode.innerHTML =  "Dark Mode"
        } else{
            mode.innerHTML =  "Light Mode"
        }
    })