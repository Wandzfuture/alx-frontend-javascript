function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  
  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);
  
  // Create a DataView to interact with the buffer
  const view = new DataView(buffer);
  
  // Set the Int8 value at the specified position
  view.setInt8(position, value);
  
  return view;
}

export default createInt8TypedArray;
