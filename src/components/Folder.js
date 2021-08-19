import { useState } from "react";

function Folder({ currentFolder, children }) {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState(currentFolder.name);
    let permanent = currentFolder.permanent;

    const toggleFolderIcon = () => setOpen(!open);

    return (
        <div>
            <tr>
                <td>
                    <h4>
                        {
                            open
                                ? <i className="folder open blue icon" onClick={toggleFolderIcon}></i>
                                : <i className="folder blue icon" onClick={toggleFolderIcon}></i>
                        }
                        {name}
                    </h4>
                    {
                        open
                            ? <div style={{ margin: "10px", padding: "10px" }}>{children}</div>
                            : <div />
                    }
                </td>
                <td>
                    <i className="add green icon"/>
                </td>
                <td>
                    {!permanent ? <i className="delete red icon" /> : null}
                </td>
            </tr>
        </div>
    );
}

export default Folder;


/*

    Desktop :
        Music:
            Punjabi:
                song1
                song2

*/