import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseService } from './service/base.service';

@NgModule({
	imports: [CommonModule],
	providers: [BaseService],
})
export class BaseServiceModule {}
