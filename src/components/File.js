function File({ name }) {

    let extension = name.split('.')[1];
    let className = "file icon";

    switch (extension) {
        case "pdf": className = "file pdf icon";
            break;
        case "txt": className = "file alternate icon";
            break;
        case "cpp":
        case "js":
        case "java":
        case "html":
        case "css":
        case "c": className = "file code icon";
            break;
        case "mp3":
        case "wav": className = "file audio icon";
            break;
        case "mp4":
        case "mkv": className = "file video icon";
            break;
        case "jpeg":
        case "png":
        case "jpg":
        case "svg":
        case "gif": className = "file image icon";
            break;
        case "exe": className = "sun icon";
            break;
        default: className = "file icon";
    }

    return (
        <div style={{ paddingLeft: "5px", paddingBottom: "5px", paddingRight: "5px" }}>
            <i className={className}></i>
            {name}
        </div>
    );
}

export default File;