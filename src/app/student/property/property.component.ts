import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { convertAmount } from '../../helper/amout';
import {
  ProductService,
  Property,
  SearchRequest,
} from '../../service/product.service';

export interface PropertyDisplay {
  propertyId: string;
  typeId: string;
  typeName: string;
  createUserId: string;
  createUserName: string;
  createDatetime: string;
  lastupUserId: string;
  lastupUserName: string;
  lastupDateTime: string;
  title: string;
  address: string;
  amount: string;
  area: string;
  description: string;
  approveStatus: string;
  propertyImg: string[];
}

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
  propertiesDis: PropertyDisplay[];
  numbers: number[];
  resultsTotalCount: number;
  searchRequest: SearchRequest;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.propertiesDis = [];
    this.resultsTotalCount = 0;
    this.numbers = [];
    this.searchRequest = {
      userId: null,
      userName: null,
      typeId: null,
      title: null,
      address: null,
      createDatetimeFrom: null,
      createDatetimeTo: null,
      amountFrom: null,
      amountTo: null,
      areaFrom: null,
      areaTo: null,
      offset: 0,
      limit: 0,
    };
  }

  ngOnInit(): void {
    this.searchRequest.offset = 1;
    this.searchRequest.limit = 8;
    this.refreshProperty(this.searchRequest);
  }

  refreshProperty(searchRequest: SearchRequest) {
    this.productService.getAll(searchRequest).subscribe((data) => {
      this.resultsTotalCount = data.results.resultsTotalCount;
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

  goToPage(offset: number) {
    this.searchRequest.offset = offset;
    this.propertiesDis = [];
    this.refreshProperty(this.searchRequest);
  }

  goToDetail(id: string) {
    console.log(id);
    this.router.navigate(['/chi-tiet', { id: id }]);
  }
}
