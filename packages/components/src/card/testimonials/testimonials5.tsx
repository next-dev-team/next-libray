/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMG } from '../../constants';

export type ITestimonialsCard5 = {
  type?: 'primary';
  clxBg?: string;
  className?: string;
};

const TestimonialsCard5 = (props: ITestimonialsCard5) => {
  const { type, clxBg } = props;

  return (
    <div className="sm:flex items-start">
      <img
        className="w-48 h-full rounded-sm mr-10"
        src="https://tailwindcss.com/img/card-left.jpg"
        alt="Avatar of Jonathan Reinink"
      />
      <div className="text-left mt-6">
        <div className="mb-4 text-gray-500">
          <svg
            height="35px"
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
          <p className="mt-2 text-base leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="text-sm mt-5">
            <a
              href="#"
              className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              Jonathan Reinink
            </a>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard5;
