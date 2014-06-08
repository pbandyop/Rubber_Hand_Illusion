#pragma strict
var MyKnife : GameObject;
private var myParticles : ParticleSystem;
//var bloodClip : AudioClip;
//var AudioFileb : AudioClip;


function Start()
{
    myParticles = GetComponent(ParticleSystem);
    // use Stop and Clear to stop and erase existing particles.
    // You don't need this if you turn off PlayOnAwake manually. You should also turn off PreWarm if you want particles to start emitting "from scratch"
    myParticles.Stop();
    myParticles.Clear();
} 

function Update ()
{   
    if (Input.GetKey("k"))
    {
    	MyTest();
    	//audio.clip = AudioFileb;
    	//audio.Play();
    	// yield WaitForSeconds (1.75);
    	//print (Time.time);
    	//MyKnife = GameObject.Find("Knife");
		//Destroy(MyKnife);
       // myParticles.Play();	
        //audio.PlayOneShot(bloodClip);
    }
}

function MyTest(){
       yield WaitForSeconds (0.75);
    	//print (Time.time);
    	MyKnife = GameObject.Find("Knife");
		//Destroy(MyKnife);
        myParticles.Play();	
	}