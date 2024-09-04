import {useState} from "react";

const EditButton = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () =>{
        setIsEditing(true);
        console.log("in handle click")
    };

    const handleCancelEdit = () =>{
        setIsEditing(false);
    };

    const handleSave = () =>{
        console.log("save");
        setIsEditing(false);
    };

    const handleDelete = () =>{
        console.log("delete");
    };

    return (
        <>
            {isEditing
                ? <button onClick={handleSave}> Save </button>
                : <button onClick={handleEdit}> Edit </button>
            }

            {isEditing
                ? <button onClick={handleCancelEdit}> Cancel Edit </button>
                : <button onClick={handleDelete}> Delete </button>
            }
        </>
    );
}

export default EditButton;