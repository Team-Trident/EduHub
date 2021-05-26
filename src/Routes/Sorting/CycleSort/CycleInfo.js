import './CycleInfo.css';
import VisualizeCycle from './VisualizeCycle';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function CycleInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Cycle Sort</h1>
        <p className="det" id="cyl">
        Cycle sort is an in-place sorting Algorithm, unstable sorting algorithm, a comparison sort that is theoretically optimal in terms of the total number of writes to the original array. 
 It is optimal in terms of number of memory writes. It minimizes the number of memory writes to sort (Each value is either written zero times, if it’s already in its correct position, or written one time to its correct position.)
 It is based on the idea that array to be sorted can be divided into cycles. Cycles can be visualized as a graph. We have n nodes and an edge directed from node i to node j if the element at i-th index must be present at j-th index in the sorted array.
        </p>
      </div>
      <div className="App" id="abc">
        <VisualizeCycle></VisualizeCycle>
      </div>
    </div>
  );
}

export default CycleInfo;
