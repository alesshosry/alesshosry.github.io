/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostsVideosComponent } from './posts-videos.component';

describe('PostsVideosComponent', () => {
    let component: PostsVideosComponent;
    let fixture: ComponentFixture<PostsVideosComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PostsVideosComponent],
            imports: [HttpClientTestingModule]
        });
        fixture = TestBed.createComponent(PostsVideosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
