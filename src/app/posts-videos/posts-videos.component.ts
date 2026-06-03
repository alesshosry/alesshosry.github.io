import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PostItem {
    title: string;
    date?: string;
    excerpt?: string;
    beginning?: string;
    link: string;
}

interface VideoItem {
    title: string;
    date?: string;
    link: string;
    platform?: string;
}

interface PostsVideosData {
    posts: PostItem[];
    videos: VideoItem[];
}

@Component({
    selector: 'app-posts-videos',
    templateUrl: './posts-videos.component.html',
    styleUrls: ['./posts-videos.component.css']
})
export class PostsVideosComponent implements OnInit {
    posts: PostItem[] = [];
    videos: VideoItem[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<PostsVideosData>('/assets/posts-videos.json').subscribe((data) => {
            this.posts = data?.posts ?? [];
            this.videos = data?.videos ?? [];
        });
    }

    getPostPreview(post: PostItem): string {
        return post.excerpt || post.beginning || '';
    }

    getVideoPlatform(video: VideoItem): string {
        if (video.platform) {
            return video.platform;
        }

        const link = (video.link || '').toLowerCase();
        if (link.includes('youtube.com') || link.includes('youtu.be')) {
            return 'YouTube';
        }

        if (link.includes('linkedin.com')) {
            return 'LinkedIn';
        }

        return 'Video';
    }

    getPostDate(post: PostItem): string {
        return this.formatDate(post.date);
    }

    getVideoDate(video: VideoItem): string {
        return this.formatDate(video.date);
    }

    private formatDate(dateValue?: string): string {
        if (!dateValue) {
            return '';
        }

        const date = new Date(dateValue);
        if (Number.isNaN(date.getTime())) {
            return dateValue;
        }

        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(date);
    }
}
