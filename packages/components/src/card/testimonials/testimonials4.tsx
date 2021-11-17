/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMG } from '../../constants';

export type ITestimonialsCard4 = {
  type?: 'primary';
  clxBg?: string;
  className?: string;
};

const TestimonialsCard4 = (props: ITestimonialsCard4) => {
  const { type, clxBg } = props;

  return (
    <li className="text-left border p-6">
      <div className="flex items-start">
        <a href="#">
          <img
            className="w-12 h-12 rounded-full mr-10"
            src={IMG.profile}
            alt="Avatar of Jonathan Reinink"
          />
        </a>
        <div className="mb-4 text-gray-900">
          <svg
            height="25px"
            className="mb-2"
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
          <div className="text-sm mt-5">
            <a
              href="#"
              className="font-medium leading-none hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              Jonathan Reinink
            </a>
            <p>Aug 18</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TestimonialsCard4;
