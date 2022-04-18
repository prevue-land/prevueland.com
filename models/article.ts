export interface Article {
  id: number;
  status: 'Published';
  date_published: Date | string;
  title: string;
  slug: string;
  cover: string;
  description: string;
  content: string;
}
