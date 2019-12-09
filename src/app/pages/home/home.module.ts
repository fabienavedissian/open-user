import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

/** Components */
import { HomeComponent } from './components/home.component';

/** Ngx Pagination */
import { NgxPaginationModule } from 'ngx-pagination';

/** Effects Module */
import { EffectsModule } from '@ngrx/effects';

/** Users Effects */
import { UsersEffects } from 'src/app/store/effects/users.effects';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPaginationModule,
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class HomeModule { }
