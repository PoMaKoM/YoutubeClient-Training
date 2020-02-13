export interface ResponseYT {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<Item>;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    commentCount: string;
  };
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
  };
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard: Thumbnail;
  maxres: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
