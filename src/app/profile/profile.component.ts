import { Component } from '@angular/core';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isSidebarVisible: boolean = false; // Boolean to track the visibility of the sidebar

  // Method to toggle the sidebar visibility
  toggleSidebar() {
    // Toggle the boolean value to show/hide the sidebar
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
