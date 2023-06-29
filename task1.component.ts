import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  student:any = [];
  i : any;
  firstName:any;
  lastName: any;
  Email1: any;
  age1: any;
  course1: any;
  showUpdate: boolean = false;
  showTable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(frm:any){
    console.log("Data Save Successfully");
    console.log(frm.value);
    this.student.unshift(frm.value);
    if(this.student.length > 0){
      this.showTable = true;
    }
    }

    onresetform(){

    }

onDelete(dlt: any){
console.log("Data Deleted Successfully");
console.log(dlt);
  this.student.forEach((ele: any) => {
    if(dlt.fname == (ele.fname)) {
      this.i = this.student.indexOf(dlt);
      this.student.splice((this.i),1);
    }
  });
}

onEdit(edt: any){
  this.firstName = edt.fname;
  this.lastName = edt.lname;
  this.Email1 = edt.email;
  this.age1 = edt.age;
  this.course1 = edt.course;
  this.i = this.student.indexOf(edt);
  this.showUpdate = true;
}

onUpdateForm(frm: any){
  console.log("Data Updated Successfully");
  console.log(frm.value);
  this.student.splice(this.i,1, frm.value);
  this.showUpdate = false;
}
}
