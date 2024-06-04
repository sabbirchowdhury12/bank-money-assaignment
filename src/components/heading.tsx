import React from "react";
interface HeadingProps {
  title: string;
  sub_title: string;
}
const Heading = ({ title, sub_title }: HeadingProps) => {
  return (
    <div>
      <p className="text-primary uppercase text-sm">{title}</p>
      <p className="text-2xl font-bold capitalize">{sub_title}</p>
    </div>
  );
};

export default Heading;
