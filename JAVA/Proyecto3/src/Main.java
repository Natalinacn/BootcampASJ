import java.security.AlgorithmConstraints;
import java.util.Iterator;
import java.util.Scanner;
import java.util.concurrent.Delayed;

public class Main {

	public static void main(String[] args) {
		
		Scanner read = new Scanner(System.in);
		
//		System.out.println("Tipo: Mínimo - Máximo");
//		
//		System.out.println("int: Min =" + Integer.MIN_VALUE + " - Max= " + Integer.MAX_VALUE);
//		
//
//		System.out.println("byte: Min = " + Byte.MIN_VALUE + " - Max = " + Byte.MAX_VALUE);
//
//
//		System.out.println("short: Min = " + Short.MIN_VALUE + " - Max = " + Short.MAX_VALUE);
//
//
//		System.out.println("long: Min = " + Long.MIN_VALUE + " - Max = " + Long.MAX_VALUE);
//
//
//		System.out.println("float: Min = " + Float.MIN_VALUE + " - Max = " + Float.MAX_VALUE);
//
//
//		System.out.println("double: Min = " + Double.MIN_VALUE + " - Max = " + Double.MAX_VALUE);
//
//
//		System.out.println("char: Min = " + (int) Character.MIN_VALUE + " - Max = " + (int) Character.MAX_VALUE);

		
		//Ejemplo de casteo
//
//        byte byteValue = 42; 
//        int intValue = (int) byteValue;
//
//
//        System.out.println("Valor original (byte): " + byteValue);
//        System.out.println("Valor convertido (int): " + intValue);
        
        
        
//        
//        System.out.println("Ingrese una palabra");
//        String palabra = read.next();
//        
//        		
//        		
//       for(int i = 0; i < palabra.length(); i++) {
//    	   
//    	   char letra = palabra.charAt(i);
//    	   
//    	   int ascii = (int) letra;
//    	   
//    	   System.out.println("El equivalente es ascii es: " + letra + " - " + ascii);
//    	   
//       }
//       
       
       
    //Ternarios
//   	boolean status = false;
//   	String miVar = status ? "Aprobado" : "Desaprobado";
//   	System.out.println(miVar);

   	

	//FOR
//	System.out.println("Ingrese cuantas notas quiere ingresar");
//	int cantNotas = read.nextInt();
//	
//	int sumaNotas = 0;
//	
//	
//	for (int i = 0; i < cantNotas; i++) {
//		
//		System.out.println("Ingrese la primer nota del 1 al 10");
//		int nota = read.nextInt();
//		
//		sumaNotas += nota;
//		
//		
//	}
//	
//	System.out.println("El promedio de las notas es de " +  (double)sumaNotas/ (double)cantNotas);
//	
	
	
	//WHILE
	
//	System.out.println("Ingrese cuantas notas quiere ingresar");
//	int cantNotas = read.nextInt();
//	
//	int contador = 0;
//	int sumaNotas = 0;
//	
//	
//	while(contador < cantNotas) {
//		
//		System.out.println("Ingrese la primer nota del 1 al 10");
//		int nota = read.nextInt();
//		
//		sumaNotas += nota;
//		
//		contador ++;
//	}
//	
//	
//	System.out.println("El promedio de las notas es de " +  (double)sumaNotas/ (double)cantNotas);
	
	
	//DO WHILE
   	
//	int contador = 0;
//	int sumaNotas = 0;
//	
//	System.out.println("Ingrese cuantas notas quiere ingresar");
//	int cantNotas = read.nextInt();
//	
//	
//	
//   	do {
//	
//   		System.out.println("Ingrese la primer nota del 1 al 10");
//		int nota = read.nextInt();
//		
//		sumaNotas += nota;
//		
//		contador ++;
//	
//	
//   	}while(contador < cantNotas);
//   	
//	
//	System.out.println("El promedio de las notas es de " +  (double)sumaNotas/ (double)cantNotas);
	
	
	
		
		//********************************************************************************
		//Ejercicio 1
		//Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.
		
		
		
		
		
//		System.out.println("Introduzca el primer ángulo interno del triangulo");
//		int angulo1 = read.nextInt();
//		
//		System.out.println("Introduzca el segundo ángulo interno del triangulo");
//		int angulo2 = read.nextInt();
//		
//		System.out.println("Introduzca el tercero ángulo interno del triangulo");
//		int angulo3 = read.nextInt();
//		
//		
//		int sumaAngulo = angulo1 + angulo2 + angulo3;
//		
//		if(sumaAngulo == 180) {
//			System.out.println("El triangulo es válido");
//		}else {
//			System.out.println("El triangulo no es valido");
//		}
		
		
		
		//Ejercicio 2
		//Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.
		
		
//		System.out.println("Ingrese una palabra");
//		String palabra = read.next();
//		
//		
//		char primeraLetra = palabra.charAt(0);
//		
//		
//		if(Character.isDigit(primeraLetra)) {
//			
//			System.out.println("La palabra comienza con un número");
//			
//		}else if(Character.isLetter(primeraLetra)) {
//			System.out.println("La palabra comienza con una letra");
//			
//		}else {
//			System.out.println("La palabra comienza con un caracter especial");
//		}
		
		
		//Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
		
		
//		System.out.println("Ingrese un número de inicio");
//		int N = read.nextInt();
//		
//		System.out.println("Ingrese un número de fin");
//		int M = read.nextInt();
//		
//		
//		int suma = 0;
//		for (int i = N; i <= M; i++) {
//			
//			if(i % 2 == 0) {
//			suma += i;
//			}
//			
//			
//			
//		}
//		
//		System.out.println("La suma de los números es " + suma);
//		
		
		
		//Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a la suma de sus 
		//divisores positivos, excluido él mismo., Ejemplos 6 = 1 + 2 + 3)
		
		
//        System.out.print("Ingrese un número: ");
//        int numero = read.nextInt();
//        
//        
//        int sumaDivisores = 0;
//        
//        for (int i = 1; i < numero; i++) {
//        	
//        	if(numero % i == 0) {
//        		sumaDivisores += i;
//        	}
//        	
//        			
//		}
//        
//        if(sumaDivisores == numero) {
//        	System.out.println("Es un número perfecto");
//        	
//        }else {
//        	System.out.println("No es un número perfecto");	
//        }

		
      
        
        // Recrear el siguiente dibujo
        
//        System.out.print("Ingrese un número para el dibujo: ");
//        int numeroDibujo = read.nextInt();
//		
//        for (int i = 0; i < numeroDibujo; i++) {
//        	
//        	for (int j = 0; j < numeroDibujo; j++) {
//        		if(j % 2 == 0) {
//        			System.out.print("*");
//        		}else {
//        			System.out.print(" ");
//        		}
//        		
//        						
//			}
//        	 System.out.println();
//			
//		}
		
		
		
	}
}
