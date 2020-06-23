import React, { useContext } from 'react';
import { Link } from 'gatsby';
import UserContext from '../context/User';

const CourseCard = ({ author, description, price, title, link, role }) => {
  const { user } = useContext(UserContext);
  const enrolled = user && user.roles && user.roles.includes(role);

  return (
    <article
      className={`border border-gray-700 p-4 ${
        enrolled ? 'text-green-500' : 'text-red-500'
      }`}
    >
      <Link title={enrolled ? 'Access' : 'Enroll'} to={link}>
        <h1>{title}</h1>
      </Link>
      <p>{description}</p>
    </article>
  );
};

export default CourseCard;
