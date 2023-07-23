import { useState } from "react";

export function NewTodoForm({onSubmit}) {
    const [newitem, setNewItem] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        
        if(newitem === "") return
        onSubmit(newitem)
        
        setNewItem("");
      };

    return (<form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input type="text" value={newitem} onChange={e => setNewItem(e.target.value)} name="newitem" id="item" />
            <button className="btn">Add</button>
        </div>
    </form>
    )
}