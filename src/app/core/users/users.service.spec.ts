import { TestBed, getTestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersModel } from './interfaces/users.model';

describe('UsersService', () => {
  let injector: TestBed;
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [UsersService]
  });
    injector = getTestBed();
    service = injector.get(UsersService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it('should request to get users from api', () => {
    const users: UsersModel[] = [
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
    ];
    service.getUsers().subscribe((res) => {
      expect(res).toEqual(users);
    });
    const req = httpMock.expectOne('https://api.github.com/users');
    expect(req.request.method).toEqual("GET");
    req.flush(users);
  });
});
