type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  title: string;
  likes: number;
  categories: Categories[];
  estimatedReadingTime: number;
  body: Blocks[];
  publish: boolean;
  publishedAt: Date;
  comments: Comment[];
  slug: Slug;
  keyword: string;
  mainImage: Image;
  author: Author;
  description: string;
}

interface Author extends Base {
  skills: Skill[];
  image: Image;
  achievements: Achievement[];
  social: Social;
  _rev: string;
  name: string;
  _id: string;
  cv: Cv;
  _createdAt: Date;
  _type: string;
  about: About;
  _updatedAt: Date;
}
interface Project {
  key: any;
  display: any;
  name: any;
  order: number;
  tag: null | string;
  card: Card;
  icons: string[];
  image: Image;
  name: string;
  display: boolean;
}
interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: 'image';
  asset: Reference;
}

interface Title {
  _type: 'string';
  current: string;
}
interface About {
  p1: string;
  p2: string;
  header: string;
}

interface Achievement {
  _key: string;
  title: string;
  value: Cv;
  document: Cv;
}

interface Cv {
  asset: Asset;
  _type: string;
}

interface Asset {
  _type: string;
  _ref: string;
}

interface Skill {
  order?: number;
  altText: string;
  _key: string;
  title: string;
  imgSrc: string;
}

interface Social {
  github: string;
  instagram: string;
  linkedin: string;
}
interface Card {
  description: string;
  tech: string[];
  code: string;
  dev: boolean;
  feature: string[];
  demo?: string;
}
interface Comment {
  _updatedAt: Date;
  post: Asset;
  _rev: string;
  _id: string;
  name: string;
  comment: string;
  email: string;
  approved: boolean;
  _createdAt: Date;
  _type: string;
}
