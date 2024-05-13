const DeleteButton = () => {
    const handleClick = () =>{
        console.log("in handle click")
        //onEdit(id);
    };

    return(
        <button className={"button-delete"} onClick={handleClick}>
            Delete
        </button>
    );
}

export default DeleteButton;