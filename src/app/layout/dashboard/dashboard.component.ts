import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg'
        }, {
            imagePath: 'assets/images/slider2.jpg'
        }, {
            imagePath: 'assets/images/slider3.jpg'
            // label: 'Slide label three',
            // text: 'Third image for slider'
        });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `This is an alert message`
        }, {
            id: 2,
            type: 'warning',
            message: `This is another alert message`
        });
    }

    ngOnInit() {
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
