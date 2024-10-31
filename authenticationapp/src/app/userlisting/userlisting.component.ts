import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {

  constructor( private service: AuthService) { 
    this.LoadUserList();

  }

  userlist:any;
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  LoadUserList(){
    this.service.GetAllUsers().subscribe(res=>{
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
    });
  }
  
  displayedColumns: string[] = ['role', 'name', 'email', 'status', 'action'];
  editUser(code:any){}

}
