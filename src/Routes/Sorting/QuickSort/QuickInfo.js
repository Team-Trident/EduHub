import './QuickInfo.css';
import VisualizeQuick from './VisualizeQuick.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function QuickInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Quick Sort</h1>
        <p className="det">
        Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 
        <ul>
<li>Always pick first element as pivot.</li>
<li>Always pick last element as pivot (implemented below)</li>
<li>Pick a random element as pivot.</li>
<li>Pick median as pivot.</li>
</ul>
        </p>
      </div>
      <div className="App" id="abc">
        <VisualizeQuick></VisualizeQuick>
      </div>
    </div>
  );
}

export default QuickInfo;
