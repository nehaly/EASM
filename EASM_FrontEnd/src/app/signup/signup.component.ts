import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployeeServiceService } from '../add-employee-service.service';
import { adminDetails } from '../adminDetails';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  adminData :  adminDetails = new adminDetails(null,"","","","")
  message: any
  constructor(private service:AddEmployeeServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  public registerAdmin(){
    let response=this.service.addAdmin(this.adminData)
    response.subscribe(msg=>{
      this.message=msg
      alert(this.message)
    })
  }
  public authenticateAdmin(){
    this.router.navigateByUrl('/login')
  }
}