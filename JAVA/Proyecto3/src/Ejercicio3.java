/*Ejercicio 3 
El programa debe ser capaz de pasar todos los números pares a las primeras posiciones del array (del 0 en adelante) y todos los números impares a las celdas restantes. 
Utiliza arrays auxiliares si es necesario.
*/

public class Ejercicio3 {

	private static int[] numerosAleatorios = new int[20];
	
	private static int[] nuevoArray = new int[20];
	
	public static void main(String[] args) {

		llenarArray();
		modificarArray();
		
	}
	
	
	public static void llenarArray() {
		for (int i = 0; i < numerosAleatorios.length; i++) {
			numerosAleatorios[i] = (int) (Math.random()*100) + 1;	
		}	
	}
	
	public static void modificarArray() {
		
		int contadorPares = 0;
		int contadorImpares = 0;
		

		//Cuento los pares e impares
		for (int i = 0; i < numerosAleatorios.length; i++) {
			
			if(numerosAleatorios[i] %2== 0) {
				contadorPares++;

			}else {
				
				contadorImpares++;
			}
			
		}
		
		
		
		//Lleno los arrays de pares e impares
		
		int[] impares = new int[contadorImpares];
		int[] pares = new int[contadorPares];	

		int indicePares = 0;
		int indiceImpares = 0;
		

		for (int i = 0; i < numerosAleatorios.length; i++) {
			if(numerosAleatorios[i] %2== 0) {
				pares[indicePares] = numerosAleatorios[i];	
				indicePares++;
			}else {
				impares[indiceImpares] = numerosAleatorios[i];
				indiceImpares++;
			}
			
		}
		
		
		//Lleno el nuevo array
		int c = 0;
		
		for (int i = 0; i < pares.length; i++) {
			
			nuevoArray[c++] = pares[i];

		}
		
		for (int i = 0; i < impares.length; i++) {
			
			nuevoArray[c++] = impares[i];
			
			
		}
		
		
		//Imprimo el array nuevo

			imprimirArray();
		
		
	}
	
	public static void imprimirArray() {
		
		for (int i = 0; i < nuevoArray.length; i++) {
			
			System.out.print(nuevoArray[i] + " ");
	        System.out.print(", ");
			
		}
		System.out.println();
		
	}

	


}