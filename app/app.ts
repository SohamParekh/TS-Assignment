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
    console.log(sp);
    sp.push(new_stud);
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