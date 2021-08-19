import './App.css';
import Folder from './components/Folder';
import File from './components/File';
import { useState } from 'react';

function App() {

  function renderFileTree(_folders) {
    return (
      <> {
        _folders.map((folder, i) => {

          return (
            <Folder key={i} currentFolder={folder}>
              {
                folder.folders.length > 0
                  ? renderFileTree(folder.folders)
                  : null
              }
              {
                folder.files.map((filename, i) => <File key={i} name={filename}></File>)
              }
            </Folder>
          )
        }
        )
      }
      </>
    );
  }


  const [folders, setFolders] = useState(
    [
      {
        name: "Desktop",
        folders: [],
        files: ["Recycle Bin", "Zoom.exe", "Discord.exe", "The Order of MOTU.txt"],
        permanent: true
      },
      {
        name: "Downloads",
        folders: [
          {
            name: "Telegram Desktop",
            folders: [],
            files: ["Death Note 6.mkv", "Death Note 7.mkv", "Death Note 8.mkv", "Death Note 9.mkv"],
            permanent: false
          }
        ],
        files: [],
        permanent: false
      },
      {
        name: "Pictures",
        folders: [
          {
            name: "Camera Roll",
            folders: [],
            files: ["Interview1.mp4", "Project Report.mp4"],
            permanent: false
          },
          {
            name: "Saved Pictures",
            folders: [],
            files: [],
            permanent: false
          }
        ],
        files: ["wolf.jpg", "doggo.jpeg", "kaal-bhairava.jpg", "mandala.png", "ms.jpg"],
        permanent: false
      },
      {
        name: "Music",
        folders: [],
        files: [],
        permanent: false
      }
    ]
  )

  return (
    <>
      <header style={{ margin: "10px" }}>
        <h2 style={{ textDecoration: "underline", color: "#222" }}>Cloud Store Room</h2>
      </header>
      <div className="App">
        {
          renderFileTree(folders)
        }
      </div>
      <footer style={{ marginTop: "10px" }}>
        <hr />
        <p>&copy; Abhishek Singh</p>
      </footer>
    </>
  );
}

export default App;
