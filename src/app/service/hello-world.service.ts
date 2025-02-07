import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HelloWorldService
{

	constructor(private httpClient: HttpClient) { }

	public getHelloWorld(): Observable<string>
	{
		return this.httpClient.get('/api/hello-world', {
			responseType: 'text'
		});
	}

}
