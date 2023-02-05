import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { convertAmount, convertAmountRequest } from '../../../helper/amout';
import { convertNum2String } from '../../../helper/string';
import {
  DistrictsResponse,
  DistrictsService,
} from '../../../service/dicsticts.service';
import {
  ProductService,
  PropertyTypeResponse,
  SearchRequest,
} from '../../../service/product.service';
import { WardsResponse, WardsService } from '../../../service/wards.service';

export interface DistrictsDisplay {
  code: number;
  nameWithType: string;
  pathWithType: string;
  lat: number;
  lng: number;
}

export interface WardsDisplay {
  code: number;
  parentCode: number;
  nameWithType: string;
  pathWithType: string;
  lat: number;
  lng: number;
}

export interface PropertyTypeDisplay {
  typeId: number;
  typeName: string;
  totalProperty: number;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public districts: DistrictsDisplay[];
  public wards: WardsDisplay[];
  public propertyType: PropertyTypeDisplay[];
  public districtSelected: number;
  public wardsSelected: number;
  public typeSelected: number;
  public title: string | null;

  public amountFrom: number;
  public amountFromDisplay: string;

  public amountTo: number;
  public amountToDisplay: string;

  public searchRequest: SearchRequest;

  constructor(
    private districtsService: DistrictsService,
    private wardsService: WardsService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.districts = [];
    this.wards = [];
    this.propertyType = [];
    this.districtSelected = 0;
    this.wardsSelected = 0;
    this.typeSelected = 0;
    this.title = null;
    this.amountFromDisplay = '';
    this.amountFrom = 0;
    this.amountTo = 0;
    this.amountToDisplay = '';
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
      offset: null,
      limit: null,
    };
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.searchRequest.title = this.title;
    this.searchRequest.districtCode = convertNum2String(this.districtSelected);
    this.searchRequest.wardCode = convertNum2String(this.wardsSelected);
    this.searchRequest.typeId = convertNum2String(this.typeSelected);

    console.log(this.searchRequest);

    this.router.navigate(['/tim-thue'], {
      state: { data: this.searchRequest },
    });
  }

  public onClickDistrict() {
    if (this.districts.length <= 0) {
      this.districts = [];
      this.getAllDistricts();
    }
  }

  public onClickType() {
    if (this.propertyType.length <= 0) {
      this.propertyType = [];
      this.getAllPropertyType();
    }
  }

  public onSelectDistrict(newObj: any) {
    this.districtSelected = newObj.target.value;
    this.wards = [];
    this.wardsSelected = 0;
    this.getWards(this.districtSelected.toString());
  }

  public onSelectWards(newObj: any) {
    this.wardsSelected = newObj.target.value;
  }

  public onSelectType(newObj: any) {
    this.typeSelected = newObj.target.value;
  }

  public onChangeAmountForm() {
    if (
      this.amountFrom > this.amountTo &&
      this.amountTo != 0 &&
      this.amountTo != 5000000
    ) {
      this.amountFrom = this.amountTo;
    }
    this.amountFrom == 0 || this.amountFrom == 5000000
      ? (this.amountFromDisplay = 'Tất cả')
      : (this.amountFromDisplay = convertAmount(this.amountFrom.toString()));
    this.searchRequest.amountFrom = convertNum2String(this.amountFrom);
  }

  public onChangeAmountTo() {
    if (this.amountTo < this.amountFrom) {
      this.amountTo = this.amountFrom;
    }
    this.amountTo == 0 || this.amountTo == 5000000
      ? (this.amountToDisplay = 'Tất cả')
      : (this.amountToDisplay = convertAmount(this.amountTo.toString()));
    this.searchRequest.amountTo = convertNum2String(this.amountTo);
  }

  private getAllDistricts() {
    this.districtsService.getAllDistricts().subscribe((data) => {
      this.genDistrict(data.results);
    });
  }

  private genDistrict(district: DistrictsResponse[]) {
    this.districts.push({
      code: 0,
      nameWithType: 'Tất cả',
      pathWithType: 'Tất cả',
      lat: 0,
      lng: 0,
    });
    for (let index = 0; index < district.length; index++) {
      let response: DistrictsDisplay = {
        code: parseInt(district[index].code),
        nameWithType: district[index].nameWithType,
        pathWithType: district[index].pathWithType,
        lat: parseFloat(district[index].lat),
        lng: parseFloat(district[index].lng),
      };
      this.districts.push(response);
    }
  }

  private getWards(districtCode: string) {
    this.wardsService.getWards(districtCode).subscribe((data) => {
      this.genWards(data.results);
    });
  }

  private genWards(district: WardsResponse[]) {
    this.wards.push({
      code: 0,
      parentCode: 0,
      nameWithType: 'Tất cả',
      pathWithType: 'Tất cả',
      lat: 0,
      lng: 0,
    });
    for (let index = 0; index < district.length; index++) {
      let response: WardsDisplay = {
        code: parseInt(district[index].code),
        parentCode: parseInt(district[index].parentCode),
        nameWithType: district[index].nameWithType,
        pathWithType: district[index].pathWithType,
        lat: parseFloat(district[index].lat),
        lng: parseFloat(district[index].lng),
      };
      this.wards.push(response);
    }
  }

  private getAllPropertyType() {
    this.productService.getAllPropertyType().subscribe((data) => {
      this.genPropertyType(data.results.typeProperties);
    });
  }

  private genPropertyType(propertyTypes: PropertyTypeResponse[]) {
    this.propertyType.push({
      typeId: 0,
      typeName: 'Tất cả',
      totalProperty: 0,
    });
    for (let index = 0; index < propertyTypes.length; index++) {
      let response: PropertyTypeDisplay = {
        typeId: parseInt(propertyTypes[index].typeId),
        typeName: propertyTypes[index].typeName,
        totalProperty: propertyTypes[index].totalProperty,
      };
      this.propertyType.push(response);
    }
  }
}
