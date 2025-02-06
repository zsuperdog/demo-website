import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldService } from './service/hello-world.service';

@Component({
	selector: 'app-root',
	imports: [ RouterOutlet ],
	templateUrl: './app.component.html',
	standalone: true,
	styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
	title = 'demo-website';

	constructor(private helloWorldService: HelloWorldService) { }

	ngOnInit(): void
	{
		this.helloWorldService.getHelloWorld().subscribe(data => {
			this.title = data;
		})
	}
}
