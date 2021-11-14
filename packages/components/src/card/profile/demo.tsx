import {
  ProfileCard1,
  ProfileCard2,
  ProfileCard3,
  ProfileCard4,
  ProfileCard5,
  ProfileCard6,
  ProfileCard7,
  ProfileCard8,
} from 'components-next';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

export default () => {
  const data: IDemoLayout['data'] = [
    { title: 'Profile Card8', component: <ProfileCard8 /> },
    { title: 'Profile Card7', component: <ProfileCard7 /> },
    { title: 'Profile Card6', component: <ProfileCard6 /> },
    { title: 'Profile Card5', component: <ProfileCard5 /> },
    { title: 'Profile Card1', component: <ProfileCard1 /> },
    { title: 'Profile Card2', component: <ProfileCard2 /> },
    { title: 'Profile Card3', component: <ProfileCard3 /> },
    { title: 'Profile Card4', component: <ProfileCard4 /> },
  ];

  return <DemoLayout data={data} />;
};
