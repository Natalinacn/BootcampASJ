import java.security.PublicKey;
import java.util.Iterator;
import java.util.Scanner;

import javax.lang.model.element.Element;

public class Ejercicio2 {
	
    private static Scanner read = new Scanner(System.in);
    private static int[] numeros = new int[15];
    private static int[] auxiliar = new int[15];
    
    public static void main(String[] args) {
    	
    	ingresarNumeros();
    	moverPosicionesArray();
    	imprimirArrays();
    	
    	


	}
    
    
    public static void ingresarNumeros() {
	for (int i = 0; i < numeros.length; i++) {
    	
		System.out.println("Ingrese los números");
		numeros[i] = read.nextInt();
		
			
		
	}
    }
    
    public static void moverPosicionesArray() {
		

    	auxiliar[0] = numeros[numeros.length-1];
    	
    	
    		for (int i = 1; i < numeros.length; i++) {
    			auxiliar[i] = numeros[i-1];
    			
    						
    			
    		}
    		
    			}
	


	
	public static void imprimirArrays() {
		
		System.out.println("El array ingresado por el usuario es ");
	    for (int i = 0; i < numeros.length; i++) {
	        System.out.print("[" + numeros[i] + "]");
	        System.out.print(", ");

	    }
	    
    	System.out.println();
	    
		System.out.println("El array modificado es ");
	    for (int i = 0; i < auxiliar.length; i++) {
	    	System.out.print("[" + auxiliar[i] + "]");
	    	System.out.print(", ");

	    }
	}
	



}
