 let courseName=document.getElementById('courceName');
 let courseCategory=document.getElementById('courceCategory');
 let coursePrice=document.getElementById('courcePrice');
 let courseDescription=document.getElementById('courceDescription');
 let data=document.getElementById('data');
let coursesArray=[];
let error=document.getElementsByClassName('error');
 let search=document.getElementById('search')

function validationCourseName(){
   let cnameREGEX =/^[A-Z][a-z0-9]{3,15}$/;
    if(cnameREGEX.test(courseName.value)){
      error[0].style.display="none";
return true;
    }else{
      error[0].style.display="block";
      return false;
    }
 
}
courseName.addEventListener('blur', validationCourseName);


 function createCourse(){
    if(validationCourseName())
    {let course={
        cName:courseName.value,
        cCategory:courseCategory.value,
        cPrice:coursePrice.value,
        cDescri:courseDescription.value
     }
     coursesArray.push(course);
     
     displayCourse();
     clear1();
     Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
   }
     else{
      Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Something went wrong!',
         footer: '<a href="">Why do I have this issue?</a>'
       })
     }
     
    
 }
 function clear1(){
    courseName.value="";
    courseCategory.value="";
    coursePrice.value="";
    courseDescription.value="";
 }
 function displayCourse(){
     let result=``;
     for(let i=0;i<coursesArray.length;i++){
     result+=`  <tr>
     <td>${i}</td>
     <td>${coursesArray[i].cName} </td> 
     <td>${coursesArray[i].cCategory}</td>
      <td>${coursesArray[i].cPrice} </td>
      <td>${coursesArray[i].cDescri} </td>
      <td><button onclick="updatecourse(${i})"><i class="fas fa-edit"></i></button></td>
      <td><button onclick="deletecourse(${i})"><i class="fas fa-trash"></i></button></td>
       </tr>`;
     }
     data.innerHTML=result;

 }

 function deletecourse( id){
   Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
         coursesArray.splice(id,1);
         displayCourse();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }else{
         Swal.fire(
            
            'Your cansele delete operation.',
            
          )
      }
    })
   
 }
 function updatecourse(i){
   coursesArray[i].cName=courseName.value;
   coursesArray[i].cCategory=courseCategory.value;
   coursesArray[i].cPrice=coursePrice.value;
   coursesArray[i].cDescri= courseDescription.value;
   displayCourse();
   clear1();

 }

 function searchCourse(){
    let searchValue=search.value;
    let result='';
   for (let i = 0; i < coursesArray.length; i++) {
      if(coursesArray[i].cName.toLowerCase().includes(searchValue.toLowerCase()))
     {
      result+=`  <tr>
      <td>${i}</td>
      <td>${coursesArray[i].cName} </td> 
      <td>${coursesArray[i].cCategory}</td>
       <td>${coursesArray[i].cPrice} </td>
       <td>${coursesArray[i].cDescri} </td>
       <td><button onclick="deletecourse(${i})"><i class="fas fa-edit"></i></button></td>
       <td><button onclick="deletecourse(${i})"><i class="fas fa-trash"></i></button></td>
        </tr>`;
      }
      
 
  }
  data.innerHTML=result;
     }
 
 
 

