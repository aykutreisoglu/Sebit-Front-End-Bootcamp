import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;

  // registerForm = new FormGroup({
  //   firstName: new FormControl(null,[Validators.required]),
  //   lastName:new FormControl(null,[Validators.required]),
  //   email:new FormControl(null,[Validators.required,Validators.email]),
  //   password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  //   repassword:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  //   address:new FormControl(null,[Validators.required])
  // })
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm =this.formBuilder.group({
      firstName: new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(8)]),
    repassword:new FormControl("",[Validators.required,Validators.minLength(8)]),
    address:new FormControl("",[Validators.required]),

    },{
      validators:this.matchingPasswords('password','repassword')
    })
  }
  matchingPasswords(Password:string,ConfirmPassword:string) {
    return (controls:AbstractControl)=>{
      const Password =controls.get('password')!.value;
      const ConfirmPassword =controls.get('repassword')!.value;
      if(Password!==ConfirmPassword){
        controls.get('repassword')?.setErrors({not_the_same:true}) //setError ile hata veriyoruz. hasError ile kontrol ediyoruz
        return {mismatchedPassword:true}
      }
      return null
    }
  }
}
