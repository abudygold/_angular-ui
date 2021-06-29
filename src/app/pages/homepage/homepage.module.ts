import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './page/homepage';

@NgModule({
	declarations: [HomepageComponent],
	imports: [CommonModule, HomepageRoutingModule],
})
export class HomepageModule {}
