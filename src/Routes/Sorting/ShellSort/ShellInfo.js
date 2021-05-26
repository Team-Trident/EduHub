import './ShellInfo.css';
import VisualizeShell from './VisualizeShell.jsx';
import { Toolbar } from "@material-ui/core";

function ShellInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Shell Sort</h1>
        <p className="det">
        Shell sort is a sorting algorithm that first sorts the elements far apart from each other and successively reduces the interval between the elements to be sorted. It is a generalized version of insertion sort.

In shell sort, elements at a specific interval are sorted. The interval between the elements is gradually decreased based on the sequence used. The performance of the shell sort depends on the type of sequence used for a given input array.
ShellSort is mainly a variation of Insertion Sort. In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved. The idea of shellSort is to allow exchange of far items. In shellSort, we make the array h-sorted for a large value of h. We keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every h’th element is sorted.
        </p>
      </div>
      <div className="App" id="abc">
        <VisualizeShell></VisualizeShell>
      </div>
    </div>
  );
}

export default ShellInfo;
