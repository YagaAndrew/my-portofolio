import React from "react";

type Props = {
  title1: string;
  title2: string;
  description: string;
};

const SectionHeading = ({ title1, title2, description }: Props) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title1} {""}
        <span className="text-green-700 dark:text-green-500">{title2}</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeading;
