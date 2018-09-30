import React from 'react';
import CellMeasurer from "react-virtualized/dist/es/CellMeasurer/CellMeasurer";

const ImageComponent = ({ cache, index, key, parent, imageLink, style }) => {
  return (
    <CellMeasurer
      cache={cache}
      index={index}
      key={key}
      parent={parent}
    >
      <div style={style}>
        <img
          alt=''
          src={imageLink ? imageLink : null}
          style={{
            //height: 80,
            width: 100
          }}
        />
      </div>
    </CellMeasurer>
  )
}

export default ImageComponent;