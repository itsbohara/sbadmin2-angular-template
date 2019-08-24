import { Component } from '@angular/core';

@Component({
  selector: 'sba-layout',
  // styleUrls: ['./sba-main.layout.scss'],
  template: `
  <!--
    <ah-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>
      -->
      <!--
      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </ah-layout>
    -->

    <!-- Page Wrapper -->
    <div id="wrapper">
    
    <!-- Sidebar -->
    <sba-sidebar></sba-sidebar>
    <!-- End of Sidebar -->
    
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

    <!-- Main Content -->
    <div id="content">
    
    <!-- Topbar -->
    <sba-topbar></sba-topbar>
    <!-- End of Topbar -->

    <!-- Begin Page Content -->
    <div class="container-fluid" id="sbaContainer">

    <ng-content select="router-outlet"></ng-content>
    
    </div>
    <!-- /.container-fluid -->

    </div>
    <!-- End of Main Content -->

    <!-- Footer -->
    <sba-footer></sba-footer>
    <!-- End of Footer -->

    </div>
    
    </div>



  `,
})
export class SBAMainLayoutComponent {}
