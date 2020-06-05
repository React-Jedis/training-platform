import React, { useContext } from 'react';
import SideDrawer from '@bit/dastag.ui-components.side-drawer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DrawerContext from '../../context/DrawerContext';

const Drawer = ({ options }) => {
  const { openDraw, setOpenDraw } = useContext(DrawerContext);
  return (
    <SideDrawer
      open={openDraw}
      onClick={() => setOpenDraw(false)}
      bgColor="#393e46"
    >
      {options.map((option) => (
        <Link
          key={option.title}
          to={option.link}
          onClick={() => setOpenDraw(false)}
        >
          <div className="bg-corporative-3 mt-3 p-2 rounded-lg text-sm cursor-pointer hover:bg-corporative-2 hover:text-corporative-8">
            {option.title}
          </div>
        </Link>
      ))}
    </SideDrawer>
  );
};

export default Drawer;
