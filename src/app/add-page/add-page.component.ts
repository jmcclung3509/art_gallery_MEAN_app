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
  superInfo!:any
  formvalues!:any
  http: any;
  form!:any

  

  

constructor(private fb:FormBuilder, http:HttpClient){}

  ngOnInit(): void {
    this.addForm = this.fb.group({
    formFile: '',
    name: '',
    aka: '',
    description:'',
    powers:'',
    weakness: '',
    appearance: '',
    gridRadios: ''

    })
    // var body = addForm.values
    //             var headers = new Headers();
    //             headers.append('Content-Type', 'application/json');
    //             return this.http.post(this.urlcategory, body, { headers: headers }).map((data: Response) => data.json()).catch(this.handleError);
    

// formvalues
//     this.http.post('http://localhost:3015/super', {formvalues}).subscribe((res:any)=> {
//       console.log(formvalues)
//       this.superInfo = res?.data
//     })
  }
  onSubmit(form:FormGroup){
    console.log(form.value)
    var body = form.value
                var headers = new Headers();
                headers.append('Content-Type', 'application/json');
                return this.http.post('http://localhost:3015/super', body, { headers: headers }).map((data: Response) => data.json()).catch(this.handleError);
   
  }
  handleError(error: Response) {
    console.error(error);
    // return Observable.throw(error.json().error || 'Server error');
  }


}
