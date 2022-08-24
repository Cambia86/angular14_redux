import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8084/api';

  getcategorys() {
    return this.http.get(this.rootURL + '/category/getcategory');
  }

  addcategory(category: any) {
    return this.http.post(this.rootURL + '/category/createcategory', { category });
  }

  editcategory(category: any) {
    return this.http.post(this.rootURL + '/category/updatecategoryById/' + category.id, { category });
  }

  deletecategory(categoryId: any) {
    console.log('deleting category:::', categoryId);
    return this.http.delete(`${this.rootURL}/category/${categoryId}`);
  }
}
