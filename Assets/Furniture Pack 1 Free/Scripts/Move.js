#pragma strict

var posSpeed : float = 5.0;
var negSpeed : float = -5.0;
//var pencilClip : AudioClip;
//var AudioFile : AudioClip;
//var AudioFile2 : AudioClip;

function Update () {
		if (Input.GetKey("j")) {
			//audio.clip = AudioFile;
    		//audio.Play();	
			transform.Translate(Vector3(0,0,posSpeed)*Time.deltaTime);
			//AudioSource.PlayClipAtPoint(pencilClip, transform.position);
			}
		
		if (Input.GetKey("l")) {	
			transform.Translate(Vector3(0,0,negSpeed)*Time.deltaTime);
			//audio.clip = AudioFile2;
    		//audio.Play();
			//AudioSource.PlayClipAtPoint(pencilClip, transform.position);
			}
}