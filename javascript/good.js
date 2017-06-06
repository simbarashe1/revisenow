var body = document.body;
var formContent = document.querySelectorAll('.content');


body.addEventListener("click",formChange,false);

function formChange(e){
  
  var showFormId = e.target.getAttribute('data-form-value');
  if(showFormId !=null && showFormId === '#login-content' ){
  
    formContent[0].setAttribute('class','content');
  }
  else{

    formContent[1].setAttribute('class','content');
  }
  
  var showForm = document.querySelector(showFormId);
  showForm.setAttribute('class','active');
}

