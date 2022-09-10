import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AddPageService } from './add-page.service';


@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  addForm!: FormGroup
  artInfo!:any

  form!:any


constructor(private router: Router, private addPage:AddPageService, private fb: FormBuilder){}
get id() { return this.addForm.get('id')!;}
get formFile() { return this.addForm.get('formFile')!;}
get title() { return this.addForm.get('title')!;}
get createdBy(){ return this.addForm.get('createdBy')!;}
get description() {return this.addForm.get('description')!;}
get date(){ return this.addForm.get('date')!;}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      id: '',
    formFile: '',
    title: '',
    createdBy: '',
    description:'',
    date: ''
    })
  }
submit(form: FormGroup) {
  const payload = form.value()
  // {
  //   img: "assets/images/icons8-batman-emoji.gif",
  //   title: "Monster",
  //   createdBy: "Mommy",
  //   description: "Monster drawing",
  //   date: "01/01/2022"

  // }
  this.addPage.addPage(payload).subscribe(res=>{
    console.log(res)
  this.router.navigate(['/'])
});

}

  }
 


