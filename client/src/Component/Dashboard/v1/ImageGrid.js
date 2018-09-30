import React from 'react';
import ImageComponent from './ImageComponent';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from 'react-virtualized';

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
  columnCount: 3,
  columnWidth: 200,
  spacer: 10
})

//const renderImagesGrid = (images) => images.map(image => <ImageComponent key={image.id} image={image} />)

const ImageGrid = (props) => {
  const list = props.images;

  function cellRenderer ({ index, key, parent, style }) {
    const datum = list[index]
    const imageLink = datum.urls.small

    return (
      <CellMeasurer
        cache={cache}
        index={index}
        key={key}
        parent={parent}
      >
        <div style={style}>
          <img
            src={imageLink ? imageLink : null}
            style={{
              height: 150,
              width: 150
            }}
          />
          <h4>{datum.caption}</h4>
        </div>
      </CellMeasurer>
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
