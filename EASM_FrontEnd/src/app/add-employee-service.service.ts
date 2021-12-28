import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeData } from './EmployeeData';
import { adminDetails } from './adminDetails';
import { EmployeeScore } from './EmployeeScore';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeServiceService {

  constructor(private http:HttpClient) { }

  public addEmployee(data: EmployeeData){
    //
    //data.empid=Number(data.empid)
    //
    return this.http.post("http://localhost:8080/insert",data,{responseType:"text" as "json"})
  }

  public getAllEmployees(){
    return this.http.get("http://localhost:8080/allemps")
  }

  public searchEmployee(empid: number)
  {
    return this.http.get("http://localhost:8080/search/"+empid)
  }

  public deleteEmp(empid:number)
  {
    return this.http.delete("http://localhost:8080/delete/"+empid)
  }

  public updateEmployee(data: EmployeeData){
    return this.http.put("http://localhost:8080/update",data,{responseType:"text" as "json"})
  }

  //function to hit insertadmin api in backend
  public addAdmin(adminData:adminDetails)
  {
    return this.http.post("http://localhost:8080/insertadmin",adminData,{responseType:"text" as "json"})
  }

  //function to hit login/id/password api in backend
  public authenticateAdmin(adminId:number,password:string)
  {
    return this.http.get("http://localhost:8080/login/"+adminId+"/"+password,{responseType:"text" as "json"})
  }
  public addAssesmentScore(score: EmployeeScore){
    return this.http.post("http://localhost:8080/addscore",score,{responseType:"text" as "json"})
  }

  public ShowScore()
  {
    return this.http.get("http://localhost:8080/course-score")
  }

  public Updatescore(score: EmployeeScore){
    return this.http.put("http://localhost:8080/updatescore",score,{responseType:"text" as "json"})
  }
}
