import './App.css';
import Folder from './components/Folder';
import File from './components/File';

function App() {

  let folders = ["Desktop", "Downloads", "Pictures", "Music"];

  return (
    <div className="App">
      <h2 style={{ textDecoration: "underline", color: "#222" }}>Cloud Store Room</h2>
      <Folder name={folders[0]}>
        <File name="recyclebin" />
        <File name="Zoom.exe" />
        <File name="Discord.exe" />
        <File name="The Order of MOTU.txt" />
      </Folder>
      <Folder name={folders[1]}>
        <Folder name="Telegram Desktop">
          <File name="Death Note 6.mkv" />
          <File name="Death Note 7.mkv" />
          <File name="Death Note 8.mkv" />
          <File name="Death Note 9.mkv" />
        </Folder>
      </Folder>
      <Folder name={folders[2]}>
        <Folder name="Camera Roll">
          <File name="Interview 1.mp4" />
          <File name="Project Report.mp4" />
        </Folder>
        <Folder name="Saved Pictures" />
        <File name="wolf.jpg" />
        <File name="doggo.jpg" />
        <File name="kaal-bhairava.jpg" />
        <File name="mandala.png" />
        <File name="ms.jpg" />
      </Folder>
      <Folder name={folders[3]} />
    </div>
  );
}

export default App;
