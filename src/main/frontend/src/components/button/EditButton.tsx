import {useState} from "react";

const EditButton = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = () =>{
        setIsEditing(true);
        console.log("in handle click")
        //onEdit(id);
    };

    return(
        <button className={"button-edit"} onClick={handleClick}>
            {isEditing ? "Save": "Edit"}
        </button>
    );
}

export default EditButton;