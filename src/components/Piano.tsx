
import a from "@/assets/keysound/a.mp3";
import b from "@/assets/keysound/b.mp3";
import c from "@/assets/keysound/c.mp3";
import d from "@/assets/keysound/d.mp3";
import e from "@/assets/keysound/e.mp3";
import f from "@/assets/keysound/f.mp3";
import g from "@/assets/keysound/g.mp3";

export default function PianoCompo() {
  return (
	<Piano />
  )
}



interface KeyProps {
	isBlack: boolean;
	sound: string;
	note: string;
	keyLabel: string;
  }
  
  const Key = ({ isBlack, sound }: KeyProps) => {
	const keyClass = isBlack ? "black-key" : "white-key";
  
	const playSound = () => {
	  const audio = new Audio(sound);
	  audio.play();
	};
  
	return (
	  <div className={`${keyClass} key`} onClick={playSound}>
		<span className="note-label"></span>
		<span className="key-label "></span>
	  </div>
	);
  };
  
  const Piano = () => {
	const whiteKeys = [
	  { note: "C", keyLabel: "A", sound: c },
	  { note: "D", keyLabel: "S", sound: d },
	  { note: "E", keyLabel: "D", sound: e },
	  { note: "F", keyLabel: "F", sound: f },
	  { note: "G", keyLabel: "G", sound: g },
	  { note: "A", keyLabel: "H", sound: a },
	  // { note: "B", keyLabel: "J", sound: b },
	];
  
	const blackKeys = [
	  null, // Spacer for missing E#
	  { note: "C#", keyLabel: "Q", sound: d },
	  { note: "D#", keyLabel: "W", sound: f },
	  { note: "F#", keyLabel: "E", sound: b },
	  null, // Spacer for missing E#
	  { note: "G#", keyLabel: "R", sound: c },
	  { note: "A#", keyLabel: "T", sound: a },
	];
  
	return (
	  <div className="piano-container mt-10">
		<div className="white-keys">
		  {whiteKeys.map((key, index) => (
			<Key
			  key={index}
			  note={key.note}
			  keyLabel={key.keyLabel}
			  isBlack={false}
			  sound={key.sound}
			/>
		  ))}
		</div>
		<div className="black-keys">
		  {blackKeys.map((key, index) =>
			key ? (
			  <Key
				key={index}
				note={key.note}
				keyLabel={key.keyLabel}
				isBlack={true}
				sound={key.sound}
			  />
			) : (
			  <div key={index} className="spacer" />
			)
		  )}
		</div>
	  </div>
	);
  };
  