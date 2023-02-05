import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { of } from 'rxjs';
import { convertAmount } from '../../helper/amout';
import { ProductService, Property } from '../../service/product.service';
import { User, UserService } from '../../service/user.service';

export interface PropertyDetailDisplay {
  propertyId: string | null;
  typeId: string | null;
  typeName: string | null;
  createUserId: string | null;
  createUserName: string | null;
  createDatetime: string | null;
  lastupUserId: string | null;
  lastupUserName: string | null;
  lastupDatetime: string | null;
  title: string | null;
  address: string | null;
  lat: number;
  lng: number;
  amount: string | null;
  area: string | null;
  description: string | null;
  approveStatus: string | null;
  propertyImg: string[];
}

export interface UserDetailDisplay {
  userName: string;
  createDatetime: string;
  phone: string;
  email: string;
  portrait: string | null;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  private map!: google.maps.Map;

  id: number;

  propertyDetail: PropertyDetailDisplay;

  userOwners: UserDetailDisplay;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService
  ) {
    this.id = 0;
    this.propertyDetail = {
      propertyId: null,
      typeId: null,
      typeName: null,
      createUserId: null,
      createUserName: null,
      createDatetime: null,
      lastupDatetime: null,
      lastupUserId: null,
      lastupUserName: null,
      title: null,
      address: null,
      lat: 0,
      lng: 0,
      amount: null,
      area: null,
      description: null,
      approveStatus: null,
      propertyImg: [],
    };

    this.userOwners = {
      userName: '',
      createDatetime: "",
      phone: '',
      email: '',
      portrait: null,
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.getProperty(this.id);
  }

  getProperty(id: number) {
    this.productService.getDetails(id).subscribe((data) => {
      this.genPropertyDetail(data.results[0]);
    });
  }

  getOwners(id: number) {
    this.userService.getDetails(id).subscribe((data) => {
      this.genUserDetail(data.results[0]);
    });
  }

  genUserDetail(user: User) {
    this.userOwners.userName = user.userName;
    this.userOwners.createDatetime = user.createDatetime;
    this.userOwners.phone = user.phone;
    this.userOwners.email = user.email;
    this.userOwners.portrait = user.portrait;
  }

  genPropertyDetail(property: Property) {
    this.propertyDetail.propertyId = property.propertyId;
    this.propertyDetail.typeId = property.typeId;
    this.propertyDetail.typeName = property.typeName;
    this.propertyDetail.createUserId = property.createUserId;
    this.propertyDetail.createUserName = property.createUserName;
    this.propertyDetail.createDatetime = property.createDatetime;
    this.propertyDetail.lastupDatetime = property.lastupDatetime;
    this.propertyDetail.lastupUserId = property.lastupUserId;
    this.propertyDetail.lastupUserName = property.lastupUserName;
    this.propertyDetail.title = property.title;
    this.propertyDetail.address = property.address;
    this.propertyDetail.lat = parseFloat(property.lat);
    this.propertyDetail.lng = parseFloat(property.lng);
    this.propertyDetail.amount = convertAmount(property.amount);
    this.propertyDetail.area = property.area;
    this.propertyDetail.description = property.description;
    this.propertyDetail.approveStatus = property.approveStatus;
    this.propertyDetail.propertyImg = property.propertyImg;

    this.initMap(this.propertyDetail.lat, this.propertyDetail.lng);

    this.getOwners(parseInt(this.propertyDetail.createUserId));
  }

  initMap(lat: number, lng: number) {
    let loader = new Loader({
      apiKey: 'AIzaSyDPrPfk_0HIYzAii6lMd0BDLzGTtff80oE',
    });

    loader.load().then(() => {
      const location = { lat: lat, lng: lng };

      this.map = new google.maps.Map(document.getElementById('map')!, {
        center: location,
        zoom: 15,
        scaleControl: true,
        mapTypeControl: false,
      });

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    });
  }
}
