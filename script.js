// let data = [];

// const saveContacts = document.getElementById("saveContact");
// let tableElement = document.getElementById("tableElement");
// showData()
// function showData(){
//     for(let i=0; i<data.length;i++){
//         let contact = data[i];
//         console.log("contact")
//         let childData = document.createElement("tr");
//         let nameData = document.createElement("td");
//         let emailData = document.createElement("td");
//         let passData = document.createElement("td");
//         nameData.innerHTML = contact.name;
//         emailData.innerHTML = contact.email;
//         passData.innerHTML = contact.password;
//         childData.append(nameData,emailData,passData)
//         tableElement.appendChild(childData)
//     }
// }

// saveContacts.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let childrens = saveContacts.children;
//     console.log(childrens);
//     let name_123 = childrens[0].value;
//     let email_123 = childrens[1].value;
//     let pass_123 = childrens[2].value;
//     let obj = {
//         name:name_123,
//         email:email_123,
//         password:pass_123
//     };
//     data.push(obj);
//     // removeFirst()
//     showData()
// })


// function removeFirst(){
//     tableElement.innerHTML = 
//         `<tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Telephone</th>
//         </tr>`;
// }











let data = [];

const tableElement = document.getElementById("tableElement");
const saveContact = document.getElementById("saveContact");

function showData(){
    
for(let i = 0; i<data.length;i++){
    let contact = data[i];
    let tableRow = document.createElement("tr");
    let nameData = document.createElement("td");
    let emailData = document.createElement("td");
    let passData = document.createElement("td");
    nameData.innerHTML = contact.name;
    emailData.innerHTML = contact.email;
    passData.innerHTML = contact.password;
    tableRow.append(nameData,emailData,passData);
    tableElement.appendChild(tableRow);
}
}

saveContact.addEventListener("submit",(e)=>{
    e.preventDefault()
    let childData = saveContact.children;
    // console.log("sandeep");
    let name_123 = childData[0].value;
    let email_123 = childData[1].value;
    let pass_123 = childData[2].value;
    let obj = {
        name:name_123,
        email:email_123,
        password:pass_123
    };
    data.push(obj);
    removeFirst();
    showData();
});

function removeFirst(){
    tableElement.innerHTML = 
        `<tr>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
        </tr>`;
}