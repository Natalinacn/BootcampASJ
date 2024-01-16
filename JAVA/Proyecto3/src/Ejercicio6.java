/*Ejercicio 6
Nos piden crear una matriz de 4×4 de números enteros que inicialmente esta vacía, nos piden hacer un menú con estas opciones:

Rellenar TODA la matriz de números, debes pedírselo al usuario.
Suma de una fila que se pedirá al usuario (controlar que elija una correcta)
Suma de una columna que se pedirá al usuario (controlar que elija una correcta)
Sumar la diagonal principal (ver ejemplo)
Sumar la diagonal inversa (ver ejemplo)
La media de todos los valores de la matriz

IMPORTANTE: hasta que no se haga la primera opción, el resto de opciones no se deberán de ejecutar, simplemente mostrar un mensaje donde diga que debes 
rellenar la matriz*/

import java.util.Scanner;

public class Ejercicio6 {

    private static Scanner read = new Scanner(System.in);
	private static int[][] matriz = new int[4][4];
	
	public static void main(String[] args) {

		menu();		
		

	}
	
	
	
	
	public static void menu() {
		
		
		boolean salir = false;
		
		while(!salir) {
		System.out.println("Ingrese una opcion: \n 1: Rellenar la matriz, \n 2: Sumar una fila, \n 3: Sumar una columna, \n 4: Sumar la diagonal principal, \n 5: Sumar la diagonal inversa, \n 6: Sacar la media de todos los valores, \n 7: Salir");
		int opcion = read.nextInt();
		
		switch (opcion) {
		case 1: 
			rellenarMatriz();
			break;
		case 2: 
			sumarFila();
			break;
		case 3: 
			sumarColumna();
			break;
		case 4: 
			sumarDiagonalPrincipal();
			break;
		case 5: 
			sumarDiagonalInversa();
			break;
		case 6: 
			sacarMedia();
			break;
		case 7: 
			System.out.println("Vuelva prontos");
			salir = true;
			break;
		default:
			System.out.println("La opción ingresada no existe");
		}
	}
	}
	
	
	
	public static void rellenarMatriz() {
		
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz.length; j++) {
				
				matriz[i][j] = (int) (Math.random()*100) + 1;

	}
		}
		imprimirMatriz();
	}
	
	public static void sumarFila() {
		
		int sumaFila = 0;
		
		System.out.println("Ingrese la fila que desea sumar del 1 al 4");
		int fila = read.nextInt();
		
	    for (int i = 0; i < matriz[fila - 1].length; i++) {
	        sumaFila += matriz[fila - 1][i];
	    }
	    
		System.out.println("La suma de la fila " + fila + " es de " + sumaFila);
		
	}
	
	public static void sumarColumna() {
	    int sumaColumna = 0;
	    
	    System.out.println("Ingrese la columna que desea sumar del 1 al 4");
	    int columna = read.nextInt();
	    
	    for (int i = 0; i < matriz.length; i++) {
	        sumaColumna += matriz[i][columna - 1];
	    }
	    
	    System.out.println("La suma de la columna " + columna + " es de " + sumaColumna);
	}

	
	
	public static void sumarDiagonalPrincipal() {
		int sumarDiagomalPrincipal = 0;
		
		for (int i = 0; i < matriz.length; i++) {
			
			for (int j = 0; j < matriz.length; j++) {
				
				if(i == j){
					
					sumarDiagomalPrincipal += matriz[i][j];
					
				}
				
			}
			
		}
		
		System.out.println("La suma de la diagonal principal es de " + sumarDiagomalPrincipal);
		
	}
	
	public static void sumarDiagonalInversa() {
		

		    int sumaDiagonalInversa = 0;

		    for (int i = 0; i < matriz.length; i++) {
		        for (int j = 0; j < matriz[i].length; j++) {

		            if (i + j == matriz.length - 1) {
		                sumaDiagonalInversa += matriz[i][j];
		            }
		        }
		    }

		    System.out.println("La suma de la diagonal inversa es de " + sumaDiagonalInversa);
		}

		
	
	
	public static void sacarMedia() {
		
		int sumaMatriz = 0;
		
		for (int i = 0; i < matriz.length; i++) {
			
			for (int j = 0; j < matriz.length; j++) {
				
				
				
					sumaMatriz+= matriz[i][j];
					
					
			}
			
		}
		
		double media = (double) sumaMatriz /16;
		System.out.println("La suma de la matriz es de " + (sumaMatriz));
		System.out.println("La media de la matriz es de " + media);
		
	}
	
	public static void imprimirMatriz() {
	        for (int i = 0; i < matriz.length; i++) {
	            for (int j = 0; j < matriz[i].length; j++) {
	                System.out.print(matriz[i][j] + " ");
	            }
	            System.out.println();
	        }
	



}
}
