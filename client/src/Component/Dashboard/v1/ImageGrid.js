import React from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from 'react-virtualized';
import ImageComponent from "./ImageComponent";

/**
 * What we could do here is get the count of the all images and send it to compose a list
 *
 */

// Default sizes help Masonry decide how many images to batch-measure
const cache = new CellMeasurerCache({
  defaultHeight: 250,
  defaultWidth: 200,
  fixedWidth: true
})

// Our masonry layout will use 3 columns with a 10px gutter between
const cellPositioner = createMasonryCellPositioner({
  cellMeasurerCache: cache,
  columnCount: 4,
  columnWidth: 90,
  spacer: 0
})

const ImageGrid = (props) => {
  const list = props.images;

  function cellRenderer ({ index, key, parent, style }) {
    const datum = list[index]
    const imageLink = datum.urls.regular

    return (
      <ImageComponent
        cache={cache}
        index={index}
        key={key}
        parent={parent}
        style={style}
        imageLink={imageLink}
      />
    )
  }

  return(
    <div className='dashboard__container'>
      <Masonry
        cellCount={list.length}
        cellMeasurerCache={cache}
        cellPositioner={cellPositioner}
        cellRenderer={cellRenderer}
        height={500}
        width={360}
      />
    </div>
  )
}

export default ImageGrid;
