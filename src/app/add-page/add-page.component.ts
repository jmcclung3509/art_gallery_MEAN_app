import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




HttpClient;
@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  addForm!: FormGroup
  artInfo!:any

  http: any;
  form!:any

  

  

constructor(private fb:FormBuilder, http:HttpClient){}
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
  onSubmit(form:FormGroup){
    console.log(form.value)
    var body = form.value
                var headers = new Headers();
                headers.append('Content-Type', 'application/json');
                return this.http.post('http://localhost:3015/art', body, { headers: headers }).map((data: Response) => data.json()).catch(this.handleError);
   
  }
  handleError(error: Response) {
    console.error(error);
    // return Observable.throw(error.json().error || 'Server error');
  }


}
