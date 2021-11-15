/* eslint-disable @typescript-eslint/no-unused-vars */

import { IMG } from "components-next/src";

export type ITestimonialsCard6 = {
  type?: 'primary';
  clxBg?: string;
  className?: string;
};

export const TestimonialsCard6 = (props: ITestimonialsCard6) => {
  const { type, clxBg } = props;

  return (
    <div className="sm:flex items-center">
      <img
        className="w-40 h-40 sm:mr-10"
        src={IMG.profile}
        alt="Avatar of Jonathan Reinink"
      />
      <div className="text-left">
        <div className="mb-4 text-gray-500">
          <p className="mt-2 text-base leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="sm:flex justify-between items-end">
            <div className="text-sm mt-5">
              <a
                href="#"
                className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Jonathan Reinink
              </a>
              <p>Blogger &amp; Youtuber</p>
            </div>
            <div className="flex items-center text-indigo-600 text-xs uppercase">
              <a href="#" className="mr-2">
                Youtube
              </a>
              <a href="#" className="mr-2">
                Medium
              </a>
              <a href="#" className="mr-2">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
