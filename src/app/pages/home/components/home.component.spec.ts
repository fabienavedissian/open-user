import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersService } from 'src/app/core/users/users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { reducersMap } from 'src/app/store';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [NgxPaginationModule, RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot(reducersMap)],
      providers: [UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sign out user', async() => {
    fixture.whenStable().then(() => {
      const usersService = TestBed.get(UsersService);
      usersService.isLogged = true;
      expect(usersService).toBeDefined();

      const button = fixture.debugElement.query(By.css('.btn-signout'));
      expect(button).toBeDefined();
      button.nativeElement.click();

      fixture.whenStable().then(() => {
        expect(usersService.isLogged).toBeFalsy();
      });
    });
  });

  it('should redirect user to details user', async() => {
    component.users$ = of({
      loading: false,
      loaded: true,
      error: null,
      data: [
      {
        "login": "mojombo",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mojombo",
        "html_url": "https://github.com/mojombo",
        "followers_url": "https://api.github.com/users/mojombo/followers",
        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
        "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
        "organizations_url": "https://api.github.com/users/mojombo/orgs",
        "repos_url": "https://api.github.com/users/mojombo/repos",
        "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mojombo/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "defunkt",
        "id": 2,
        "node_id": "MDQ6VXNlcjI=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/defunkt",
        "html_url": "https://github.com/defunkt",
        "followers_url": "https://api.github.com/users/defunkt/followers",
        "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
        "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
        "organizations_url": "https://api.github.com/users/defunkt/orgs",
        "repos_url": "https://api.github.com/users/defunkt/repos",
        "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
        "received_events_url": "https://api.github.com/users/defunkt/received_events",
        "type": "User",
        "site_admin": false
      }
    ]});
    component.users$.subscribe(() => {
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css('.list-group-item-action'));
      expect(button).toBeDefined();
      const routerLink = button.nativeElement.getAttribute('ng-reflect-router-link');
      expect(routerLink).toEqual('/details,1');
    });
  });

});
