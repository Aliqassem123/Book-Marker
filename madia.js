var siteName = document.getElementById('siteName')
var urlInput = document.getElementById('urlInput')
var addBtn = document.getElementById('addBtn')
var errBox = document.getElementById('errBox')
var webTable = document.getElementById('webTable')
var closebtn = document.getElementById('closebtn')
var webArr;

if (localStorage.getItem('list') == null)
   webArr = []

else {

   webArr = JSON.parse(localStorage.getItem('list'))
   display()
}





addBtn.onclick = function () {
   addweb()
   //clearweb()
   display()
}




function addweb() {
   if (validation(urlInput) == true && validation(siteName) == true) {

      var webObj = {
         pName: siteName.value,
         pURL: urlInput.value
      }
      webArr.push(webObj)
      localStorage.setItem('list', JSON.stringify(webArr))
      display()

   }
   else {
      errBox.classList.remove('d-none')
      errBox.classList.add('d-flex')
   }



}

closebtn.onclick = function () {

   errBox.classList.add('d-none')
   errBox.classList.remove('d-flex')
}


function clearweb() {
   siteName.value = null
   urlInput.value = null
}

function display() {
   var box = ''
   for (var i = 0; i < webArr.length; i++) {
      box += ` 
               <table>
                     <tr>
                            <td  colspan="1">${i + 1}</td>
                            <td  colspan="3">${webArr[i].pName}</td>
                            

                            <td colspan="3"><button type="button" class="btn btn-outline-warning " id="btn-visit" onclick=openUrl(${i})><i class="fa-regular fa-eye"></i> visit</button></td>
                            <td colspan="3"><button type="button" class="btn btn-outline-warning  "   onclick="deleteFun(${i})"><i class="fa-solid fa-trash"></i> Delete</button></td>
                    </tr>
              </table>
            `
   }
   webTable.innerHTML = box
}




function deleteFun(index) {
   webArr.splice(index, 1)
   localStorage.setItem('list', JSON.stringify(webArr))
   display()

}

function openUrl(index) {

   var url = webArr[index].pURL
   window.open(url, '-blank')
}


// var url;
// var isValidUrl;
// function validateUrl() {
//    url = urlInput.value;
//    isValidUrl = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g.test(url);

//    if (!isValidUrl) {
//       urlInput.nextElementSibling.classList.replace('d-none','d-block')
//       urlInput.classList.add('is-invalid')
//       urlInput.classList.remove('is-valid')

//    } else {
//       urlInput.nextElementSibling.classList.replace('d-block','d-none')
//       urlInput.classList.add('is-valid')
//       urlInput.classList.remove('is-invalid')
//        return true
//    }
//    return isValidUrl;

// }



// var name
// var nameRegex;
// function validateName() {
//    var name = siteName.value;
//    nameRegex = /^[A-Za-z\u0621-\u064A\u0660-\u0669 ]+$/.test(name);

//    if (!nameRegex) {

//       siteName.nextElementSibling.classList.replace('d-none','d-block')
//       siteName.classList.add('is-invalid')
//       siteName.classList.remove('is-valid')
//       return false
//    }

//    else {
//       siteName.nextElementSibling.classList.replace('d-block','d-none')
//       siteName.classList.add('is-valid')
//       siteName.classList.remove('is-invalid')
//        return true
//    }

// }



function validation(ele) {

   var Regex = {
      siteName: /^[A-Za-z\u0621-\u064A\u0660-\u0669 ]{3,}$/,
      urlInput: /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)[a-zA-Z]{2,}([a-zA-Z]{2,})([a-zA-Z]{2,})?[a-zA-Z0-9]{2,}/g
   };

   if (Regex[ele.id].test(ele.value)) {
      ele.nextElementSibling.classList.replace('d-block', 'd-none')
      ele.classList.add('is-valid')
      ele.classList.remove('is-invalid')
       return true;
   }

   else {


      ele.nextElementSibling.classList.replace('d-none', 'd-block')
      ele.classList.add('is-invalid')
      ele.classList.remove('is-valid')
      return false;
   }


}

