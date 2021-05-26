import './HeapInfo.css';
import VisualizeHeap from './VisualizeHeap.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function HeapInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Heap Sort</h1>
        <p className="det">
        Heap sort can be understood as the improved version of the binary search tree. It does not create a node as in case of binary search tree instead it builds the heap by adjusting the position of elements within the array itself.

In which method a tree structure called heap is used where a heap is a type of binary tree. An ordered balanced binary tree is called a Min-heap, where the value at the root of any subtree is less than or equal to the value of either of its children.

An ordered balanced binary tree is called a max heap where the value at the root of any subtree is more than or equal to the value of either of its children.

It is not necessary that the two children must be in some order. sometimes the value in the left child may be more than the value at the right child and some other time it may be the other way round.
        </p>
      </div>
      <div className="App" id="abc">
        <VisualizeHeap></VisualizeHeap>
      </div>
    </div>
  );
}

export default HeapInfo;
