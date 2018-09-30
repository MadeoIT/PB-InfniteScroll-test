const fillArray = (emptyArray) => {
  const filledArray = [];

  for (let i = 0; i < emptyArray.length; i++) {
    filledArray.push({
      id: i,
      imageName: 'Name' + i,
      year: 2014 + Math.floor(i/10),
      imageLink: 'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=18c114a288dbf253f4e016b71b8625a5&auto=format&fit=crop&w=500&q=60'
    })
  }

  return filledArray;
}

export const getAllImage = (offset, limit) => {
  const emptyArray = new Array(10000);
  const filledArray = fillArray(emptyArray);
  return {
    count: filledArray.length,
    images: filledArray.slice(offset, limit + 1)
  }
}
