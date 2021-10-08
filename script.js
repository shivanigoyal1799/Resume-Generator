function addNewAQField(){
   
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here...");
    
    let insertin=document.getElementById("aq");
    let insertbefore=document.getElementById("aqAddButton")

    insertin.insertBefore(newNode,insertbefore)
}

function addNewskillField(){
   
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillsField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here...");
    
    let insertin=document.getElementById("skills");
    let insertbefore=document.getElementById("skillAddButton")

    insertin.insertBefore(newNode,insertbefore)
}

function addNewProjectField(){
   
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("projectField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here...");
    
    let insertin=document.getElementById("projects");
    let insertbefore=document.getElementById("projectAddButton")

    insertin.insertBefore(newNode,insertbefore)
}

function addNewExperienceField(){
   
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here...");
    
    let insertin=document.getElementById("experiences");
    let insertbefore=document.getElementById("experienceAddButton")

    insertin.insertBefore(newNode,insertbefore)
}


function generateResume(){
    console.log("generate resume")

    // updating name in template
    const nameField=document.getElementById("nameField").value
    let nameTemplate=document.getElementById("nameTemplate")
    
    if(nameField==''){
        alert('You have not entered your Name !!')
        return false        
    }else{
        nameTemplate.innerHTML=nameField        
    }

    //updating email in template
    const emailField=document.getElementById("emailField").value
    let emailTemplate=document.getElementById("emailTemplate")
    
    if(emailField==''){
        alert('You have not entered your Email !!')
        return false
        
    }else{
        emailTemplate.innerHTML= `📧 ${emailField}`
        // const mailformat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // if (emailField.value.match(mailformat)){
            
        // }else{
        //     alert("You have entered an invalid email address!")
        //     return false;
        // }
    }

    //updating contact in template
    const contactField=document.getElementById("contactField").value
    let contactTemplate=document.getElementById("contactTemplate")
    
    if(contactField==''){
        alert('You have not entered your Contact Details !!')
        return false
        
    }else{
        contactTemplate.innerHTML=`📱 ${contactField}`
        
    }

    //updating address in template
    const addressField=document.getElementById("addressField").value
    let addressTemplate=document.getElementById("addressTemplate")
    
    if(addressField==''){
        alert('You have not entered your Address !!')
        return false
        
    }else{
        addressTemplate.innerHTML=`📍 ${addressField}`
        
    }

    //updating linkedIn in template
    const linkedInField=document.getElementById("linkedInField").value
    let linkedInTemplate=document.getElementById("linkedInTemplate")
    if(linkedInField==''){
        alert('You have not entered LinkedIn Link !!')
        return false
        
    }else{
        linkedInTemplate.innerHTML=linkedInField
    }

    //updating github in template
    const githubField=document.getElementById("githubField").value
    let githubTemplate=document.getElementById("githubTemplate")
    if(githubField==''){
        alert('You have not entered GitHub Link !!')
        return false
        
    }else{
        githubTemplate.innerHTML=githubField
      
    }

    //updating fb in template
    const fbField=document.getElementById("fbField").value
    let fbTemplate=document.getElementById("fbTemplate")
    if(fbField==''){
        alert('You have not entered Facebook Link !!')
        return false
        
    }else{
        fbTemplate.innerHTML=fbField
        
    }

    //updating skills in template
    const skillsField=document.getElementsByClassName("skillsField");//it will be an array
    let skillsHTML="";

    for(let elem of skillsField){
        skillsHTML=skillsHTML+`<li> ${elem.value} </li>`;
    }
    if(skillsField==''){
        alert('You have not entered Skills !!')
        return false
        
    }else{
        document.getElementById("skillsTemplate").innerHTML=skillsHTML;
        
    }


    //updating aboutMe in template
    const aboutMeField=document.getElementById("aboutMeField").value
    let aboutMeTemplate=document.getElementById("aboutMeTemplate")
    if(aboutMeField==''){
        alert('You have not entered About Me field !!')
        return false
        
    }else{
        aboutMeTemplate.innerHTML=aboutMeField
    }

    //updating academic qualification in template
    const aqField=document.getElementsByClassName("aqField");//it will be an array
    let aqhtml="";

    for(let elem of aqField){
        aqhtml=aqhtml+`<li> ${elem.value} </li>`;
    }

    if(aqField==''){
        alert('You have not entered Academic Qualifications !!')
        return false
    }else{
        document.getElementById("aqTemplate").innerHTML=aqhtml;
    }

    //updating project in template
    const projectField=document.getElementsByClassName("projectField");//it will be an array
    let projectHTML="";

    for(let elem of projectField){
        projectHTML=projectHTML+`<li> ${elem.value} </li>`;
    }
    
    if(projectField==''){
        document.getElementById("projectCard").style.display='none'
        
    }else{
        document.getElementById("projectTemplate").innerHTML=projectHTML;
        
    }

    //updating work experience in template
    const weField=document.getElementsByClassName("weField");//it will be an array
    let weHTML="";

    for(let elem of weField){
        weHTML=weHTML+`<li> ${elem.value} </li>`;
    }
    if(weField==''){
        document.getElementById("weCard").style.display='none'
        
    }else{
        document.getElementById("weTemplate").innerHTML=weHTML;
        
    }

    // updating the image
    let photoFile = document.getElementById('photoField').files[0]//we can't use .file as 
    //this is an array and we need 0th index file
    console.log(photoFile);//we can see the file type and also then we can
    //perform check and allow only specific type of file

    let reader=new FileReader();
    reader.readAsDataURL(photoFile)//now reader has our data
    
    //now setting the image to template
    // onloadend is an event listner
    reader.onloadend=function(){// this function will be called when loading 
        // is completed 
        console.log(reader.result)//we can get our data using this command
        document.getElementById('photoTemplate').src=reader.result;

    }
    
    //displaying the UI
    document.getElementById('resume-template').style.display='block'
    document.getElementById('resume-form').style.display='none'

}

function printResume(){
    window.print();
}

function backButton(){
    //displaying the UI
    document.getElementById('resume-form').style.display='block'
    document.getElementById('resume-template').style.display='none'

}

