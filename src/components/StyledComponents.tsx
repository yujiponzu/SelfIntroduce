import { FC } from "react";

interface TitleComponentsProps {
  title: string;
}

export const TitleComponents: FC<TitleComponentsProps> = ({ title }) => {
  return (
    <div className="mx-2 my-4 flex items-center justify-center rounded-xl border border-gray-700 bg-white px-4 py-3 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
    </div>
  );
};

interface HeadingProps {
  heading: string;
}

export const Heading: FC<HeadingProps> = ({ heading }) => {
  return (
    <h2 className="mt-10 mb-4 border-b-2 border-gray-300 pb-2 text-2xl font-semibold text-gray-700">
      {heading}
    </h2>
  );
};
