export interface Post {
  _id?: string;
  banner: { data: any; caption: string };
  heading: { title: string; subtitle: string };

  body: {
    image?: { data: any; caption: string };
    quote?: string;
    paragraph: string;
  }[];
}
