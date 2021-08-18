import { useState } from "react";

function Folder(props) {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <h4
                onClick={() => setOpen(!open)}>
                {
                    open
                        ? <i className="folder open blue icon"></i>
                        : <i className="folder blue icon"></i>
                }
                {props.name}
            </h4>
            {
                open
                    ? <div style={{ marginLeft: "15px" }}>
                        {props.children}
                    </div>
                    : null
            }
        </div>
    );
}

export default Folder;