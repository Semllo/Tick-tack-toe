var tablero = new Array(3);
var AccionMINMAX = new Object();
var Profundidad=0;
var Contador=0;



function Inicio(){
	
	for(i=0; i<3; i++) {
		tablero[i] = new Array(3); 
		for(j=0; j<3; j++){ 
			tablero[i][j]=0;
			//console.log("Posicion: " +i + " "+ j+" Valor: " + inicial[i][j]);
			
		}
	}
	
}

Inicio();


function Empezar(x,y){
	
   
   
   if(!finPartida()&&tablero[x][y]==0){
	    var MejorPosicion = new Object();
		MoverCruz(x,y);
		MejorPosicion=MINIMAX();
		if(!finPartida()&&tablero[MejorPosicion.x][MejorPosicion.y]==0){
		   MoverCirculo(MejorPosicion.x,MejorPosicion.y);   
	   }
   }
   
   if(finPartida()&& ganarPartida()==0){
	   mensajeganador0();  
   }else if(finPartida()&&ganarPartida()!=2){
	   mensajeganador2();
   }else if(finPartida()&&ganarPartida()!=1){
	   mensajeganador1();
   }
}



function MINIMAX(){
	
	if(!finPartida()){
		
		var MejorPosicion = new Object();
		MejorPosicion.x=0;
		MejorPosicion.y=0;
		
		var MejorUtilidad=-100;
		var utilidad;
		for(var i=0; i<3; i++) {
			for(var j=0; j<3; j++){
				if(tablero[i][j]==0){
					tablero[i][j]=2;
					utilidad=MIN();
					if(utilidad>MejorUtilidad){
						MejorUtilidad=utilidad;
						MejorPosicion.x=i;
						MejorPosicion.y=j;
					}
					tablero[i][j]=0;
				}
			}
		}	
	
		return MejorPosicion;
	}
}

function MAX(){
	var utilidad=0;
	if(finPartida()){
		if(ganarPartida()!=0){utilidad=-1;
		}else{utilidad=0;}
	max=utilidad;
	}else{
		var max=-100;
		for(var i=0; i<3; i++) {
			for(var j=0; j<3; j++){
				if(tablero[i][j]==0){
					tablero[i][j]=2;
					utilidad=MIN();
					if(utilidad>max){
						max=utilidad;
					}
					tablero[i][j]=0;
				}
			}
		}
	}
	return max;
}

function MIN(){
	var utilidad=0;
	var min=100;
	if(finPartida()){
		if(ganarPartida()!=0){utilidad=1
		}else{utilidad=0}
	min=utilidad;
	}else{
		for(var i=0; i<3; i++) {
			for(var j=0; j<3; j++){
				if(tablero[i][j]==0){
					tablero[i][j]=1;
					utilidad=MAX();
					if(min>utilidad){
						min=utilidad;
					}
						
					tablero[i][j]=0;
				}
			}
		}
	}
	return min;
}


function ganarPartida(){
	
	utilidad=0;
	for (var i=0; i<3; i+=1) {
			if(tablero[i][0]!=0&&tablero[i][0]==tablero[i][1] && tablero[i][1]==tablero[i][2]){utilidad=tablero[i][0]}
			if(tablero[0][i]!=0&&tablero[0][i]==tablero[1][i] && tablero[1][i]==tablero[2][i]){utilidad=tablero[0][i]}
	}
	if(tablero[0][0]!=0&&tablero[0][0]==tablero[1][1] && tablero[1][1]==tablero[2][2]){utilidad=tablero[0][0]}
    if(tablero[0][2]!=0&&tablero[0][2]==tablero[1][1] && tablero[1][1]==tablero[2][0]){utilidad=tablero[2][0]}
	
	//console.log(utilidad);
	//if(utilidad>3){utilidad=-utilidad;}
	return utilidad;
	
}


 function tableroCompleto(){
	 var Completo=true;
	 for(var i=0;i<3;i++){
		 for(var j=0;j<3;j++){
			 if(tablero[i][j]==0){Completo=false}
		 }
	}
	return Completo;
 }

 
 function finPartida(){
	var fin=false;
	if(tableroCompleto()||ganarPartida()!=0){fin=true}
	return fin;
 }
 
 function MoverCruz(x,y){
	
	tablero[x][y] = 1;
	celda = document.getElementById("c"+x+y);
	celda.innerHTML="<img class='fadeIn fast' src='cruz.png'></img>"
	
}

function MoverCirculo(x,y){
	
	tablero[x][y] = 2;
	celda = document.getElementById("c"+x+y);
	celda.innerHTML="<img class='fadeIn animated' src='circulo.png'></img>"
	
}

function mensajeganador0(){


	celda = document.getElementById("sms");
	celda.innerHTML=" <div class='modal-wrapper' id='popup'> <div class='popup-contenedor fadeIn animated'><h2>EMPATE!</h2><a class='popup-cerrar' href='#'>X</a></div></div> "
	
	location.href ="#popup";
	ReInicio();
	
}


function mensajeganador1(){
	
	celda = document.getElementById("sms");
	celda.innerHTML=" <div class='modal-wrapper' id='popup'> <div class='popup-contenedor fadeIn animated'><h2>HAS PERDIDO!</h2><a class='popup-cerrar' href='#'>X</a></div></div> "
	
	location.href ="#popup";
	ReInicio();
	
}


function mensajeganador2(){
	
	celda = document.getElementById("sms");
	celda.innerHTML=" <div class='modal-wrapper ' id='popup'> <div class='popup-contenedor fadeIn animated'><h2>HAS GANADO!</h2><a class='popup-cerrar' href='#'>X</a></div></div> "
	
	location.href ="#popup";
	 ReInicio();

}

function ReInicio(){
	
	for(i=0; i<3; i++) {
		tablero[i] = new Array(3); 
		for(j=0; j<3; j++){ 
			tablero[i][j]=0;
			celda = document.getElementById("c"+i+j);
			celda.innerHTML="";
			//console.log("Posicion: " +i + " "+ j+" Valor: " + inicial[i][j]);
			
		}
	}
	
}