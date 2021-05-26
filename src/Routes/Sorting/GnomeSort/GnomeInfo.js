import './GnomeInfo.css';
import VisualizeGnome from './VisualizeGnome.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function GnomeInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Gnome Sort</h1>
        <p className="det">
        The gnome sort is a sorting algorithm which is similar to insertion sort in that it works with one item at a time but gets the item to the proper place by a series of swaps, similar to a bubble sort. It is conceptually simple, requiring no nested loops. The average running time is O(n2) but tends towards O(n) if the list is initially almost sorted.
        The algorithm finds the first place where two adjacent elements are in the wrong order and swaps them. It takes advantage of the fact that performing a swap can introduce a new out-of-order adjacent pair next to the previously swapped elements. It does not assume that elements forward of the current position are sorted, so it only needs to check the position directly previous to the swapped elements.
        </p>
      </div>
      <div className="App" id="abc">
        <VisualizeGnome></VisualizeGnome>
      </div>
    </div>
  );
}

export default GnomeInfo;
