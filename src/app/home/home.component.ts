import { Component, OnInit } from '@angular/core';
import * as data from './data.json';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcInput from 'wijmo/wijmo.input';
import * as wijmo from 'wijmo/wijmo';
import { CustomGridEditor } from './app.customEditor';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }
    private abc = null;
    private products: any = (data as any).default;
    private nameList: any = [];
    ngOnInit() {
        this.products.forEach(item => {
            item.date = this.convertDate(item.date);
            let abc = "";
            let b1;
        });
    }
    initializeGrid(flex: wjcGrid.FlexGrid) {
        new CustomGridEditor(flex, 'date', wjcInput.InputDate, {
            format: 'd'
        });
        flex.hostElement.addEventListener('click', function (e) {
            var hti = flex.hitTest(e);
            if (hti.cellType == wjcGrid.CellType.Cell) {
                flex.startEditing(true, hti.row, hti.col);
            }
        })
    };
    convertDate(str) {
        let yy = str.substring(0, 4);
        let mm = str.substring(4, 6);
        let dd = str.substring(6, 8);
        return new Date(yy, mm, dd);
    }
}
