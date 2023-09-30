// function gp()
// {
//     console.log("grand-parent");
// }
// function p()
// {
//     console.log("parent");
// }
// function c()
// {
//     console.log("child");
// }
// function gc()
// {
//     console.log("grand-child");
// }

// ^ Using MAP

let students=
[
    {
        sname:"Walter White",
        age:21,
        imgurl:"https://bootstrapmade.com/demo/templates/Append/assets/img/team/team-1.jpg"
    },
    {
        sname:"Sara",
        age:23,
        imgurl:"https://bootstrapmade.com/demo/templates/Append/assets/img/team/team-2.jpg"
    },
    {
        sname:"William Anderson",
        age:29,
        imgurl:"https://bootstrapmade.com/demo/templates/Append/assets/img/team/team-3.jpg"
    },
    {
        sname:"Amanda Jepson",
        age:32,
        imgurl:"https://bootstrapmade.com/demo/templates/Append/assets/img/team/team-4.jpg"
    },
    {
        sname:"Brian Doe",
        age:36,
        imgurl:"https://bootstrapmade.com/demo/templates/Append/assets/img/team/team-5.jpg"
    }
];


let studentDetails=document.getElementById("studentDetails")

students.map(({sname, age, imgurl},index)=>
{
    studentDetails.innerHTML+=`
    <tr>
        <td>${Number(index)+1}</td> 
        <td>${sname}</td> 
        <td>${age}</td>
        <td>
        <img hight="200px" width="200px" src=${imgurl} alt=""> 
        </td>
    </tr>
    `      
})

function search()
{
    students.filter(({slno,sname,age,imgurl},index)=>
    {
        if(sname.includes(document.getElementById("abc").value)){
            studentDetails.innerHTML=`
            <tr>
            <td>${index}</td> 
            <td>${sname}</td> 
            <td>${age}</td>
            <td>
            <img hight="200px" width="200px" src=${imgurl} alt=""> 
            </td>
        </tr> `
        }
    })
}