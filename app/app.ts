import { student } from './student';
import { school } from './school';
import * as Helpers from './utility';

var sp:school[] = [
    {'name':'sp','age': 5,'stud_class':10,'favourite_subject':'CP','schoolname':'St.Xaviers'},
    {'name' : 'sp2', 'age': 5,'stud_class':10,'favourite_subject':'CP','schoolname':'St.Francics'},
    {'name' : 'sp3', 'age': 5,'stud_class':10,'favourite_subject':'CP','schoolname':'St.Xaviers'},
    {'name' : 'sp4', 'age': 5,'stud_class':10,'favourite_subject':'CP','schoolname':'XYZ'},
    {'name' : 'sp5', 'age': 5,'stud_class':10,'favourite_subject':'CP','schoolname':'St.Xaviers'},
    
] ;
var new_stud:school;
document.getElementById('addstudent')!.addEventListener('click', () => {
  new_stud = new school();
    new_stud.name = Helpers.getValue('studentname');
    new_stud.age = Number(Helpers.getValue('age'));
    new_stud.stud_class = Number(Helpers.getValue('studentclass'));
    new_stud.favourite_subject = Helpers.getValue('studfavsub');
    new_stud.schoolname = Helpers.getValue('schoolname');
  function validate() {

    var regex = /^[a-zA-Z. ]{2,30}$/;
    var regex1 = /^[-9]{1,2}$/;

    if (new_stud.name == "" || new_stud.age == null || new_stud.stud_class == null || new_stud.favourite_subject == "" || new_stud.schoolname == "") {

        alert("Please fill all the fields!!");
        return false;
    }
    else if (regex.test(new_stud.name) == false) {

        alert("Name contains only alphabets and space");
        return false;
    }
    else if (regex1.test(String(new_stud.age)) == null || (new_stud.age < 2 && new_stud.age > 16)  ) {

        alert("Invalid Age!");
        return false;
    }
    else if (regex.test(new_stud.schoolname) == false) {
        alert("Enter valid School Name");
        return false;
    }
    else if (new_stud.stud_class > 12) {
      alert("Enter valid Class of Student");
      return false;
  }
    else {
        return true;
    }
}
if(validate() === true){
    
    console.log(sp);
    sp.push(new_stud);
}
    //var key:string = "Item 1";
    //localStorage.setItem(key,JSON.stringify(new_stud));
   });
  
   document.getElementById('calculate')!.addEventListener('click', ()=>{
    let output: string = '<h2>Student-List</h2>';
        for (let index = 0; index < sp.length; index++) {
          let result = sp[index];  
          output += '<h4>';
          output += " Name: " + result.name + ' Age : ' + result.age + " Class: " + result.stud_class  + " Favourite Subject: " + result.favourite_subject  + " School: " + result.schoolname;
          output += '</h4>';
        }
        const scoresElement: HTMLElement = document.getElementById('scores')!;
        scoresElement.innerHTML = output;
    });

    
    

    document.getElementById('search')!.addEventListener('click', ()=>{
        var searchbysn = Helpers.getValue('seachbyschoolname'); 
       // console.log(searchbysn);
       let output: string = `<h2>Student-List from ${searchbysn} School</h2>`;
         //console.log(values)
         
        for (let index = 0; index < sp.length; index++) {
            var nameofschool=sp[index];
          if(searchbysn===String(nameofschool.schoolname)){
            output += '<h4>';
            output += " Name: " +nameofschool.name + ' Age : ' + nameofschool.age + " Class: " + nameofschool.stud_class  + " Favourite Subject: " + nameofschool.favourite_subject  + " School: " + nameofschool.schoolname;
            output += '</h4>';
            const scoresElement: HTMLElement = document.getElementById('scores')!;
            scoresElement.innerHTML = output;
         }
        }
          
    });