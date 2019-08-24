import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'sba-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    let topbar = this.document.querySelector('sba-topbar nav')
    topbar.setAttribute("id", "sbTopBar");
    topbar.classList.add('fixed-top');
    this.document.getElementById("sbTopBar").style.marginLeft = "14rem";
    // let topbar = this.document.getElementsByTagName('sba-topbar')
    // topbar.classList.add('fixed-top');

    this.document.getElementById("sbaContainer").style.marginTop = "4.375rem";
    this.document.getElementById("sbaContainer").style.paddingTop = "1.5rem";

  }

}
