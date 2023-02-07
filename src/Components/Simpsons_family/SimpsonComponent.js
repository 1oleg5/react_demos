function SimpsonComponent(props) {
    console.log(props);
    let {itemName, pic, alt} = props;
    let classNameItem = 'card';
    return (
            <div className={classNameItem}>
                <h2>{itemName}</h2>
                <img src={pic} alt={alt}/>
            </div>
    );
}
export default SimpsonComponent;