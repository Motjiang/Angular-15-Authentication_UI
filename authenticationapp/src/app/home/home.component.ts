import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recentActivities: string[] = [];
  statistics = {
    totalUsers: 0,
    ordersPlaced: 0,
    visitsScheduled: 0,
    newMessages: 0
  };

  constructor() {}

  ngOnInit(): void {
    // Simulate fetching recent activities
    this.recentActivities = [
      'User John Doe updated profile',
      'New order placed by user Jane Smith',
      'Appointment scheduled for Dr. Brown',
      'System update applied'
    ];

    // Simulate fetching statistics data
    this.statistics = {
      totalUsers: 120,
      ordersPlaced: 350,
      visitsScheduled: 75,
      newMessages: 10
    };
  }
}
