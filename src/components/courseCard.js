import React, { useContext } from 'react';
import { Link } from 'gatsby';
import RolesContext from '../context/Roles';

const CourseCard = ({ author, description, price, title, link, role }) => {
  const { roles } = useContext(RolesContext);
  const enrolled = roles.includes(role);

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
