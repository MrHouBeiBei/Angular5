import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiResult } from "../models/apiResult";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  get(url: string, options?: any) {
    if (options) {
      options.headers = this.getTokenHeaders();
    } else {
      options = { headers: this.getTokenHeaders() };
    }

    // return this.http.request("GET", url, options).toPromise()
    return this.http.request("GET", url, options).toPromise()
    .then( rt => rt )
  }

  post(url: string, options: any) {
    return this.http.request("POST", url, options).toPromise().then( rt => rt)
  }

  private getTokenHeaders(): any {

    return new HttpHeaders({
      'token': 'RtQHHuB9IKysi9CP5LSMxQLCY5cP8pljx8pDZopWLcmWNqaAx_TzhtLnvaFW9PNhlMmkuRYNXFEYsC3Gra7zXu0jmrfXyRlZbPQDxApp5zpfmfYAme2yR-dYyghjgh7E1sSCOzW5zM0AjDhdHD_buPusHZgQU0_oY4CUIMp4SKHgwMJixvQ4uRhD4iBrAwEbEuse_khxgbxV2rIzYZ2iqv-HfS5RArvF398X3lFvnWazNnLojgVqsnYwQKD6ME17IkFFeyy5eHicvxCcmdHWYFaI7LwbHK0w2ArsMtkVIacsv1LxuhwSxq1ccXCqhjt893HAGupTdJmFvJe9w0gu9Q'
      // 'Content-Type':  'application/json',
      // 'Authorization': 'my-auth-token'
    })

    // let a = {
    //   token:
    //     "RtQHHuB9IKysi9CP5LSMxQLCY5cP8pljx8pDZopWLcmWNqaAx_TzhtLnvaFW9PNhlMmkuRYNXFEYsC3Gra7zXu0jmrfXyRlZbPQDxApp5zpfmfYAme2yR-dYyghjgh7E1sSCOzW5zM0AjDhdHD_buPusHZgQU0_oY4CUIMp4SKHgwMJixvQ4uRhD4iBrAwEbEuse_khxgbxV2rIzYZ2iqv-HfS5RArvF398X3lFvnWazNnLojgVqsnYwQKD6ME17IkFFeyy5eHicvxCcmdHWYFaI7LwbHK0w2ArsMtkVIacsv1LxuhwSxq1ccXCqhjt893HAGupTdJmFvJe9w0gu9Q"
    // };
    // return a;
  }

  // private getTokenHeaders(): Headers {
  //   // let token = this.storageService.getToken();
  //   if (token) {
  //     return new Headers({ Authorization: `Bearer ${token}` });
  //   }
  //   return null;
  // }

 
}
