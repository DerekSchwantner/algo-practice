// Flood Fill Algo
//1. create empty queue
//2. Enqueue starting pixel and mark as processed
//do til queue is not empty
//  pop front node from queue and process it
//  replace color of current pixel (popped node) with that of replacement
//  process all 8 adjacent pixels of current pixel and enqueue each valid pixel which has same color as current pixel