import React from 'react';
import { createPortal } from 'react-dom';

type LoaderProps = {
  visible: boolean;
};

const Loader = ({ visible }: LoaderProps) => {
  return visible
    ? createPortal(
        <div className="loader-overlay">
          <div className="loader">
            <span>Refreshing...</span>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Loader;
