import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { convertAmount } from '../../helper/amout';
import {
  ProductService,
  Property,
  SearchRequest,
} from '../../service/product.service';
import { PropertyDisplay } from '../property/property.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchRequest: SearchRequest;
  propertiesDis: PropertyDisplay[];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.propertiesDis = [];
    this.searchRequest = {
      userId: null,
      userName: null,
      typeId: null,
      title: null,
      address: null,
      districtCode: null,
      wardCode: null,
      createDatetimeFrom: null,
      createDatetimeTo: null,
      amountFrom: null,
      amountTo: null,
      areaFrom: null,
      areaTo: null,
      offset: 1,
      limit: 8,
    };
  }

  ngOnInit(): void {
    this.refreshProperty(this.searchRequest);
  }

  refreshProperty(searchRequest: SearchRequest) {
    this.productService.getAll(searchRequest).subscribe((data) => {
      this.genProperty(data.results.properties);
    });
  }

  genProperty(property: Property[]) {
    for (let index = 0; index < property.length; index++) {
      let propertyDisplay: PropertyDisplay = {
        propertyId: property[index].propertyId,
        typeId: property[index].typeId,
        typeName: property[index].typeName,
        createUserId: property[index].createUserId,
        createUserName: property[index].createUserName,
        createDatetime: property[index].createDatetime,
        lastupDateTime: property[index].lastupDatetime,
        lastupUserId: property[index].lastupUserId,
        lastupUserName: property[index].lastupUserName,
        title: property[index].title,
        address: property[index].address,
        amount: convertAmount(property[index].amount),
        area: property[index].area,
        description: property[index].description,
        approveStatus: property[index].approveStatus,
        propertyImg: property[index].propertyImg,
      };
      this.propertiesDis.push(propertyDisplay);
    }
  }
}
