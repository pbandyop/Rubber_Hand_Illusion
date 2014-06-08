#pragma strict

var font : Font;
var fontSize  : int = 20;
var AudioFile1 : AudioClip;
var AudioFile2 : AudioClip;

function OnGUI () {
 GUI.skin.label.font = GUI.skin.button.font = GUI.skin.box.font = font;
 GUI.skin.label.fontSize = GUI.skin.box.fontSize = GUI.skin.button.fontSize = fontSize;
 GUI.skin.label.normal.textColor = GUI.skin.button.normal.textColor = Color.green;
 GUI.skin.label.hover.textColor = GUI.skin.button.hover.textColor = Color.magenta;
    
	// Make a background box
	GUI.Box (Rect (300,180,800,290), "Loader Menu");

	// Make the first button. If it is pressed, Application.Loadlevel ("MainFemale") will be executed
	if (GUI.Button (Rect (400,250,600,90), "Female Hand")) {
		//audio.clip = AudioFile1;
    	//audio.Play();
		//Application.LoadLevel ("Environment");
		 StartLevelFemale();
	}

	// Make the second button. If it is pressed, Application.Loadlevel ("MainMale") will be executed
	if (GUI.Button (Rect (400,350,600,90), "Male Hand")) {
		StartLevelMale();
		//audio.clip = AudioFile2;
    	//audio.Play();
		//Application.LoadLevel ("test");
	}
}


function StartLevelFemale()
{
  	audio.clip = AudioFile1;
    audio.Play();                    // play audio
   while (audio.isPlaying)          // while audio is playing,
   {
      yield;                        // chill out in here.
   }
   Application.LoadLevel ("Environment");  // then, continue on.
}

function StartLevelMale()
{
  	audio.clip = AudioFile2;
    audio.Play();                    // play audio
   while (audio.isPlaying)          // while audio is playing,
   {
      yield;                        // chill out in here.
   }
   Application.LoadLevel ("NewEnvironment");  // then, continue on.
}

