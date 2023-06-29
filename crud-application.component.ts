import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my.service.service';

@Component({
  selector: 'app-crud-application',
  templateUrl: './crud-application.component.html',
  styleUrls: ['./crud-application.component.css']
})
export class CrudApplicationComponent implements OnInit {

  data: any;
  postData: any;
  showData: boolean = false;
  myform: any;
  editIndex: any;
  showButton: boolean = false;
  submitButton: boolean = true;
  id1:any;
  fn: any;
  phn: any;
  userId: any;


  constructor(private mySer : MyServiceService) { }

  ngOnInit(): void {
    this.getService();
    this.sendDataForm();
  }

  getService() {
    this.mySer.getData().subscribe(
      (res: any) => {
        console.log(res);
        this.data = res;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
  
  sendDataForm() {
    this.postData =
    {
      Id:this.myform,
      Name: this.myform,
      Phone: this.myform,
  
    }
    this.mySer.sendData(this.postData).subscribe(
      (res: any) => {
        console.log(res);
      }
    )
  }
  
  onSubmitForm(frm: any) {
    console.log(frm.value);
    this.data.push(frm.value);
    
  }
  
  // Delete section
  deletedData(dat:any) {
    this.mySer.deleteData(this.userId).subscribe(
      (res: any) => {
        console.log(res);
        this.data.forEach((element: any) => {
          if (dat.name == element.name) {
            this.data.splice(this.data.indexOf(dat), 1)
          }
        })
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
  
  // Edit
  onEdit(x: any) {
    this.id1 = x.id
    this.fn = x.name
    this.phn = x.phone
    this.editIndex = this.data.indexOf(x)
    
  }
  
  // Update
  updateData(myForm1:any) {
    let obj = {
      Id:this.myform,
      Name: this.myform,
      Phone: this.myform,
    }
    var userId = this.data.id
    this.mySer.updateRecordData(this.userId, obj).subscribe(
      (res: any) => {
        console.log(res);
        this.data.splice(this.editIndex, 1, myForm1.value)
        
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
}
