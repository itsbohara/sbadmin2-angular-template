import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import * as $ from 'jquery';

@Component({
  selector: 'sba-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    let topbar = this.document.querySelector('sba-sidebar ul')
    // topbar.setAttribute("id", "sbSideBar");


    // topbar.classList.add('fixed-top');
    //height: 4.375rem;
    

    
    $(document).ready(function(){
      (function($) {
        "use strict"; // Start of use strict
      
        // Toggle the side navigation
        $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
          $("body").toggleClass("sidebar-toggled");
          $(".sidebar").toggleClass("toggled");
          if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
          };
        });
      
        // Close any open menu accordions when window is resized below 768px
        $(window).resize(function() {
          if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
          };
        });
      
        // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
        $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
          if ($(window).width() > 768) {
            var e0 = e.originalEvent,
              delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
          }
        });
      
        // Scroll to top button appear
        $(document).on('scroll', function() {
          var scrollDistance = $(this).scrollTop();
          if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
          } else {
            $('.scroll-to-top').fadeOut();
          }
        });
      
        // Smooth scrolling using jQuery easing
        $(document).on('click', 'a.scroll-to-top', function(e) {
          var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
          }, 1000, 'easeInOutExpo');
          e.preventDefault();
        });
      
      })($);
    });

  }
  
  toggleSidebar() {
    // Toggle the side navigation
    // $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    //   $("body").toggleClass("sidebar-toggled");
    //   $(".sidebar").toggleClass("toggled");
    //   if ($(".sidebar").hasClass("toggled")) {
    //     $('.sidebar .collapse').collapse('hide');
    //   };
    // });

    // let topbar = this.document.querySelector('sba-sidebar ul')
    if(this.document.getElementById("accordionSidebar").classList.contains('toggled')) {
    this.document.getElementById("sbTopBar").style.marginLeft = "14rem";
    } else {
      this.document.getElementById("sbTopBar").style.marginLeft = "6.5rem";
    }

    // if( this.document.getElementById("sbSideBar").classList.contains('toggled')) {
    //   this.document.getElementById("sbSideBar").classList.remove('toggled');
    //   this.document.getElementById("sbTopBar").style.marginLeft = "14rem";
    // } else {
    //   this.document.getElementById("sbSideBar").classList.add('toggled');
    //   this.document.getElementById("sbTopBar").style.marginLeft = "6.5rem";
    // }
    // this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

}
