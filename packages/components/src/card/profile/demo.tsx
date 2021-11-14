import { ProfileCard1 } from './profile1';
import { ProfileCard2 } from './profile2';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const data = [
    { title: 'Profile Card1', component: <ProfileCard1 /> },
    { title: 'Profile Card2', component: <ProfileCard2 /> },
  ];

  return <DemoLayout data={data} />;
};
