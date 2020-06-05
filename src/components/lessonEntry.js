import React from 'react';
import { Link } from 'gatsby';

const LessonEntry = ({ title, link }) => {
  return (
    <div className="flex justify-between items-center p-6 border border-teal-700">
      <span>{title}</span>
      <span className="px-2 py-4 bg-teal-600 hover:bg-teal-800">
        <Link to={link}>Preview</Link>
      </span>
    </div>
  );
};

export default LessonEntry;
