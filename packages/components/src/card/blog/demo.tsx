import { BlogCard1, BlogCard2, BlogCard3 } from '..';
import { DemoLayout } from '../../utils/layout';

const Demo = () => {
  const data = [
    { title: 'bloc card1', component: <BlogCard1 /> },

    { title: 'blog card2', component: <BlogCard2 /> },
    { title: 'blog card3', component: <BlogCard3 /> },
  ];

  return <DemoLayout  data={data} />;
};

export default Demo;
