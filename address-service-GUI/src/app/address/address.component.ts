// address.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  user: { firstName: string; lastName: string; id: string | null } = {
    id: null,
    firstName: '',
    lastName: ''
  };
  addresses: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the user from the route parameters
    const userId = this.route.snapshot.paramMap.get('user');
    if (userId !== null) {
      this.user.id = userId;
    }

    // Invoke the API to get addresses
    this.getAddresses();
  }

  getUserInfo(): void {
    const userApiUrl = 'http://localhost:8080/addresses-service/user';
    // Replace with your actual environment variable or base URL
    this.http.get(userApiUrl).subscribe((response: Object) => {
      this.user = response as { id: string; firstName: string; lastName: string };
      this.getAddresses();
    }, error => {
      console.error('Failed to get user info', error);
    });
  }

  getAddresses(): void {
    const addressesApiUrl = `http://localhost:8080/addresses-service/address/user/${this.user.id}`;
    this.http.get(addressesApiUrl).subscribe(
      (response: Object) => {
        this.addresses = response as any[];
      },
      error => {
        console.error('Error fetching addresses', error);
      }
    );
  }

  editAddress(address: any): void {
    // Logic to edit an address
  }

  deleteAddress(addressId: number): void {
    // Logic to delete an address
  }

  addNewAddress(): void {
    // Logic to add a new address
  }
}
