import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'sba-footer',
  styleUrls: ['./footer.component.scss'],
  // template: `
  //   <span class="created-by">Created with ♥ by <b><a href="https://maheshbohara.com" target="_blank">Mahesh</a></b> 2019</span>
  //   <div class="socials">
  //     <a href="#" target="_blank" class="ion ion-social-github"></a>
  //     <a href="#" target="_blank" class="ion ion-social-facebook"></a>
  //     <a href="#" target="_blank" class="ion ion-social-twitter"></a>
  //     <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
  //   </div>
  // `,
  template: `
  <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2019</span>
          </div>
        </div>
  </footer>
  `,
})
export class FooterComponent implements OnInit {
  
  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    let topbar = this.document.querySelector('sba-footer')
    topbar.setAttribute("id", "sbFooter");
    // topbar.classList.add('fixed-top');
    this.document.getElementById("sbFooter").style.position = "fixed";
    this.document.getElementById("sbFooter").style.width = "86%";
    this.document.getElementById("sbFooter").style.bottom = "0";
    // this.document.getElementById("sbFooter").style.padding = "1.3rem";
    // this.document.getElementById("sbFooter").style.marginLeft = "14rem";
    // let topbar = this.document.getElementsByTagName('sba-topbar')
    // topbar.classList.add('fixed-top');

  }
}