
const CustomTag = ({ text, type }) => {
    return (
        <div>
         {type === "primary" ?
            <div className="custom-primary" > { text } </div>
            :
            <div className="custom-secondary" > { text } </div>}
        </div>
    )
}

export default CustomTag;