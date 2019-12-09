import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

/** Error Handler */
import { ErrorsHandler } from './core/error-handler/error.handler';

/** Store Module */
import { StoreModule } from '@ngrx/store';

/** Store Devtools Module */
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/** Store Router Module */
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSerialized } from './store/router/router.helper';

/** Reducers Map */
import { reducersMap } from './store';

/** Effects Module */
import { EffectsModule } from '@ngrx/effects';

/** Core Module */
import { CoreModule } from './core/core.module';

/** Toastr Module */
import { ToastrModule } from 'ngx-toastr';

/** Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(reducersMap),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: RouterStateSerialized
    },
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
