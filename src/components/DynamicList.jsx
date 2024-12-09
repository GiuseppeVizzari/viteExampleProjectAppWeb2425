import {useState} from 'react'
import ListItem from "./ListItem.jsx";

function DynamicList() {
    let [element, setElement] = useState("");
    const [elements, setElements] = useState(0);
    const [elementsList, setElementsList] = useState([]);

    function addElementAndCleanInput() {
        setElements(elements + 1);
        const newItem = {myKey: elements, text: element};
        setElementsList(elementsList.concat([newItem]));
        // element = ""; WRONG!
        setElement(""); // RIGHT!
    }

    /* useEffect(() => {
        if(element !== null) {
            console.log("Added element: ", element);
        }
    }, [element]); */

    function deleteItem(key) {
        //console.log("Deleting:" + key);
        const updatedList = elementsList.filter(item => key !== item.myKey);
        setElementsList(updatedList);
    }

    function remElement() {
        setElementsList(elementsList.slice(0,-1))
        //setElements(elements - 1);
    }

    return (
        <div className="card">
            <ul>
                {
                    elementsList.map((item, index) => {
                        return (
                            <ListItem key={index}
                                item={item}
                                deleteItem={deleteItem}
                        />)
                    })
                }
            </ul>
            <input type="text" value={element}
                   onChange={(e) => setElement(e.target.value)}/>
            <button onClick={addElementAndCleanInput}>
                Add element to list
            </button>
            <button onClick={remElement}>
                Remove last element from list
            </button>
        </div>
    );
}

export default DynamicList
