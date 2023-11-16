import { Injectable } from '@angular/core';



//this service have the responsabilty of indicate to the listncreate page wich components have to render

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  componentIndicate: string = '';

  constructor() { }
}
