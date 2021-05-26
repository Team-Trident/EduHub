import './RadixInfo.css';
import VisualizeRadix from './VisualizeRadix.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function RadixInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Radix Sort</h1>
        <p className="det">Radix sort is a sorting algorithm that sorts the elements by first grouping the individual digits of the same place value. Then, sort the elements according to their increasing/decreasing order.

Suppose, we have an array of 8 elements. First, we will sort elements based on the value of the unit place. Then, we will sort elements based on the value of the tenth place. This process goes on until the last significant place.

Since radix sort is a non-comparative algorithm, it has advantages over comparative sorting algorithms.

<br/><br/>For the radix sort that uses counting sort as an intermediate stable sort, the time complexity is O(d(n+k)).

Here, d is the number cycle and O(n+k) is the time complexity of counting sort.

Thus, radix sort has linear time complexity which is better than O(nlog n) of comparative sorting algorithms.

If we take very large digit numbers or the number of other bases like 32-bit and 64-bit numbers then it can perform in linear time however the intermediate sort takes large space.

This makes radix sort space inefficient. This is the reason why this sort is not used in software libraries.
</p>
      </div>
      <div className="App" id="abc">
        <VisualizeRadix></VisualizeRadix>
      </div>
    </div>
  );
}

export default RadixInfo;
