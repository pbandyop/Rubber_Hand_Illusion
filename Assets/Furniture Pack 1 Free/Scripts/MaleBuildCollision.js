#pragma strict

function OnTriggerEnter(hit : Collider) 
{
    //works for the cube and not the model
    if(hit.gameObject.tag == "Cube2")
    {
        print("i have been hit by trigger hit ");
    }
}