import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { IClothing } from '../clothing';

@Component({
  templateUrl: './detail-dialog-overview.component.html',
  styleUrls: ['./detail-dialog-overview.component.css']
})

export class DetailDialogOverviewComponent {

	constructor(@Inject(MD_DIALOG_DATA) public data: IClothing) { }

}
