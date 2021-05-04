import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl='https://localhost:44334/api/';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl +"cars/getall";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getbycolor?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetail(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getcardetails?carId="+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }



}