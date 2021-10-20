const Item = (props) =>{
    return (
        <a href="/" class="list-group-item list-group-item-primary" >{props.children}</a>
    );
};

export default Item;