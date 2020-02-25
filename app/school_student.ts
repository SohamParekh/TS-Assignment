import { student } from './student';
import { school } from './school';
import { Result} from './result';

export class school_student{
    private school: school[] = [];

    constructor(public School:school){
        this.school = [
            {'name':'soham','age': 5,'stud_class':10,'favourite_subject':'CP','schoolname':''},
            {'name' : 'soham', 'age': 5,'stud_class':10,'favourite_subject':'CP','schoolname':''},
            {'name' : 'soham', 'age': 5,'stud_class':10,'favourite_subject':'CP','schoolname':''},
            {'name' : 'soham', 'age': 5,'stud_class':10,'favourite_subject':'CP','schoolname':''},
            
        ] 
    }
    add_student(newResult:school):void {    
        const result: Result = {
                name: this.School.name,
                age: this.School.age,
                stud_class: this.School.stud_class,
                favourite_subject: this.School.favourite_subject,
                schoolname:this.School.schoolname
          };  
        this.school.push(result);
    }
    studentlist():void {
        let output: string = '<h2>Student-List</h2>';
    
        for (let index = 0; index < this.school.length; index++) {
          const result: school = this.school[index];
          output += '<h4>';
          output += result.name + ': ' + result.age + result.stud_class + result.favourite_subject + result.schoolname;
          output += '</h4>';
        }
    
        const scoresElement: HTMLElement = document.getElementById('scores')!;
        scoresElement.innerHTML = output;
    }
    searchbyschool():void{
        let School:school;
        const scoresElement: HTMLElement = document.getElementById('seachbyschoolname')!;
        
    }
    
}   