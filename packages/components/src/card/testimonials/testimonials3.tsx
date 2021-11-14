import { IMG } from '../../constants';
import { clx } from '../../utils/arrObj';

export type ITestimonialsCard3 = {
  type?: 'primary';
  clxBg?: string;
  className?: string;
};

export const TestimonialsCard3 = (props: ITestimonialsCard3) => {
  const { type, clxBg } = props;

  const isPrimary = type === 'primary';

  return (
    <div className="text-center flex flex-col items-center">
      <div
        className={clx(
          'mb-4 bg-indigo-600 p-10 text-white',
          isPrimary ? 'bg-gray-100 p-10 text-gray-500' : clxBg,
        )}
      >
        <svg
          height="25px"
          className="mx-auto mb-5"
          fill="white"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
        >
          <g>
            <g id="right_x5F_quote">
              <g>
                <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
              </g>
            </g>
          </g>
        </svg>
        <p className="mt-2 text-sm leading-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum.
        </p>
      </div>
      <a href="#">
        <img
          className="mb-3 rounded-full mx-auto h-16 w-16 border-4 border-white"
          src={IMG.profile}
        />
      </a>
      <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">
        Zakir Hussain
      </a>
      <p className="text-gray-500 uppercase text-sm">VueJS Developer</p>
    </div>
  );
};
