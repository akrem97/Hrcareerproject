import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Admin } from 'src/app/models/admin';
import { AdminsService } from 'src/app/services/admins.service';
import { ModalDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom','prenom','email', 'articles','actions'];
  dataSource: MatTableDataSource<Admin>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('delete', { static: true }) delete: ModalDirective;
  admins: Admin[];
  allowaccess: boolean;
  constructor(private adminsService: AdminsService) {
    const tokenloc = localStorage.getItem('access_token');
    var token : any = tokenloc;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var tokenInfo = JSON.parse(window.atob(base64));
    this.allowaccess = tokenInfo.role == 'admin';
  }

  ngOnInit() {
    this.getAdmins();
  }


  getAdmins(): void{
  this.adminsService.getAllAdmins().subscribe(
    (data: Admin[]) => {
      this.admins = data;
      this.dataSource = new MatTableDataSource(this.admins);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  );
  }

  onDelete(id :string): void{
    this.adminsService.deleteAdmin(id).subscribe(
      ()=> {
        this.delete.show();
        setTimeout (() => {
          this.delete.hide();
       }, 3000);
        this.getAdmins();
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
