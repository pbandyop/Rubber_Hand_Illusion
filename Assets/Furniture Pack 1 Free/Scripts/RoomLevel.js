#pragma strict

var font : Font;
var fontSize  : int = 5;
function OnGUI () {

	GUI.skin.label.font = GUI.skin.button.font = GUI.skin.box.font = font;
 	GUI.skin.label.fontSize = GUI.skin.box.fontSize = GUI.skin.button.fontSize = fontSize;
 	GUI.skin.label.normal.textColor = GUI.skin.button.normal.textColor = Color.green;
 	GUI.skin.label.hover.textColor = GUI.skin.button.hover.textColor = Color.magenta;

 // Make a background box
	GUI.Box (Rect (600,10,200,90), "Enter the building?");

	if (GUI.Button (Rect (620,40,180,20), "Click to enter!")) {
		Application.LoadLevel("Showcase");
	}
}