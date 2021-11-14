/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMG } from '../../constants';

export type ITestimonialsCard3 = {
  type?: 'primary';
  clxBg?: string;
  className?: string;
};

export const TestimonialsCard3 = (props: ITestimonialsCard3) => {
  const { type, clxBg } = props;

  const isPrimary = type === 'primary';

  return (
    <div>
      <li className="text-left">
        <div className="flex flex-col items-start">
          <div className="mb-4 bg-gray-100 p-10 text-gray-500">
            <svg
              height="25px"
              className="mb-5"
              fill="#5a67d8"
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
          <div className="flex items-center">
            <a href="#">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={IMG.profile}
                alt="Avatar of Jonathan Reinink"
              />
            </a>
            <div className="text-sm">
              <a
                href="#"
                className="text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out font-medium leading-none"
              >
                Jonathan Reinink
              </a>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </li>

    </div>
  );
};
