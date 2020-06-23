import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';
import UserContext from '../context/User';

const LessonEntry = ({ title, link, free, role }) => {
  const { user } = useContext(UserContext);
  const enrolled = user && user.roles && user.roles.includes(role);

  return (
    <div className="flex justify-between items-center p-6 border border-teal-700">
      <span>{title}</span>

      {(free || (!free && enrolled)) && (
        <span className="px-2 py-4 bg-teal-600 hover:bg-teal-800">
          <Link to={link}>Access</Link>
        </span>
      )}
      {!free && !enrolled && (
        <span className="px-2 py-4 bg-red-600 hover:bg-red-600">
          <Link to={link}>Enrroll</Link>
        </span>
      )}
    </div>
  );
};

export default LessonEntry;
