//@ts-nocheck
import {
  BlogCard1,
  BlogCard10,
  BlogCard2,
  BlogCard3,
  BlogCard4,
  BlogCard5,
  BlogCard6,
  BlogCard7,
  BlogCard8,
  BlogCard9,
} from 'components-next';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

export default () => {
  const data: IDemoLayout['data'] = [
    { title: 'Bloc Card10', component: <BlogCard10 /> },
    { title: 'Bloc Card9', component: <BlogCard9 /> },
    { title: 'Bloc Card8', component: <BlogCard8 /> },
    { title: 'Bloc Card7', component: <BlogCard7 />, span: '12' },
    { title: 'Bloc Card6', component: <BlogCard6 /> },
    { title: 'Bloc Card5', component: <BlogCard5 /> },
    { title: 'Bloc Card4', component: <BlogCard4 /> },
    { title: 'blog Card3', component: <BlogCard3 /> },
    { title: 'blog Card2', component: <BlogCard2 /> },
    { title: 'bloc Card1', component: <BlogCard1 /> },
  ];

  return <DemoLayout data={data} />;
};
