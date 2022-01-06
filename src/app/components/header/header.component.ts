import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Quotes App';
  showAddQuote: boolean = true;
  subscription!: Subscription;



  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddQuote = value)
  }

  ngOnInit(): void {
  }
  toggleAddQuote(){
    this.uiService.toggleAddQuote()
    }
    hasRoute(route:string){
      return this.router.url === route;
    }

}
