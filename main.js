function listo(){
    console.log("Estoy listo")
    sonidos.classify(Respuesta)
}
function Comenzar(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
     sonidos=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Jt7RY6WJfS/model.json",listo)
}
function Respuesta(error,resultados){
    if(!error){
        console.log(resultados)
        Spider=document.getElementById("Spider")
        Iron=document.getElementById("Iron")
        Bat=document.getElementById("Bat")
        Flash=document.getElementById("Flash")
        sonido=resultados[0].label
        if(sonido=="Aplausos"){
            Bat.src="Screenshot+2023-06-24+172444.png"
            Spider.src="marvel-spider-man-hanging-upside-down-doodle.gif"
            Iron.src="imageedit_2_5398560449.png"
            Flash.src="Screenshot 2023-06-24 173641.png"
        }
        else if(sonido=="Chasquidos"){
            Bat.src="fe41b5f66c5675f600a7c581276ab4f0.gif"
            Spider.src="Screenshot+2023-06-24+172444 (1).png"
            Iron.src="imageedit_2_5398560449.png"
            Flash.src="Screenshot 2023-06-24 173641.png"
        }
        else if(sonido=="Pegar"){
            Bat.src="Screenshot+2023-06-24+172444.png"
            Spider.src="Screenshot+2023-06-24+172444 (1).png"
            Iron.src="ReflectingPinkAmericanbobtail-max-1mb.gif"
            Flash.src="Screenshot 2023-06-24 173641.png"
        }
        else if(sonido=="Ruido de fondo"){
            Bat.src="Screenshot+2023-06-24+172444.png"
            Spider.src="Screenshot+2023-06-24+172444 (1).png"
            Iron.src="imageedit_2_5398560449.png"
            Flash.src="YAY9.gif"
        }
    }
}