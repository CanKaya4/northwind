import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {
    
  }
  redirectToProductAdd() {
    console.log('redirectToProductAdd() fonksiyonu çağrıldı');
    this.router.navigateByUrl('/products/add');
  }
}
