import './MergeInfo.css';
import VisualizeMerge from './VisualizeMerge.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function MergeInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Merge Sort</h1>
        <p className="det">
        Merge sort is a divide-and-conquer algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.

<br/>Idea:
<ul>
<li>Divide the unsorted list into  sublists, each containing  element.
</li><li>Take adjacent pairs of two singleton lists and merge them to form a list of 2 elements.  will now convert into  lists of size 2.
</li><li>Repeat the process till a single sorted list of obtained.
</li></ul>
        </p>
      </div>
      <div className="App" id="abc">
        <VisualizeMerge></VisualizeMerge>
      </div>
    </div>
  );
}

export default MergeInfo;
