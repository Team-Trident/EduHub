import './PigeonHoleInfo.css';
import VisualizePigeonHole from './VisualizePigeonHole.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function PigeonHoleInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">PigeonHole Sort</h1>
        <p className="det">
        Pigeonhole sorting is a sorting algorithm that is suitable for sorting lists of elements where the number of elements and the number of possible key values are approximately the same. 
It requires O(n + Range) time where n is number of elements in input array and ‘Range’ is number of possible values in array. 
<br/><b>Working of Algorithm :</b> 
<br/>1. Find minimum and maximum values in array. Let the minimum and maximum values be ‘min’ and ‘max’ respectively. Also find range as ‘max-min+1’. 
<br/>2. Set up an array of initially empty “pigeonholes” the same size as of the range.
<br/>3. Visit each element of the array and then put each element in its pigeonhole. An element arr[i] is put in hole at index arr[i] – min.
<br/>4. Start the loop all over the pigeonhole array in order and put the elements from non- empty holes back into the original array.
        </p>
      </div>
      <div className="App" id="abc">
        <VisualizePigeonHole></VisualizePigeonHole>
      </div>
    </div>
  );
}

export default PigeonHoleInfo;
