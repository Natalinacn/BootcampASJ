import java.util.Scanner;

public class Ejercicio4 {
    
    private static Scanner read = new Scanner(System.in);
    private static int[][] matriz = new int[3][3];
    private static int cantidad = 9;  
    
    private static int index = 0;
    private static int[] aleatorios = new int[cantidad];

    public static void main(String[] args) {
        llenarArray();
        llenarMatriz();
        imprimirMatriz();
        menu();
    }

    public static void llenarArray() {
        while (index < cantidad) {
            int numeroRandom = (int) (Math.random() * cantidad);

            boolean repetido = false;

            while (!repetido) {
                for (int i = 0; i < index; i++) {
                    if (numeroRandom == aleatorios[i]) {
                        repetido = true;
                        break;
                    }
                }

                if (!repetido) {
                    aleatorios[index] = numeroRandom;
                    index++;
                }
            }
        }
    }

    public static void llenarMatriz() {
        index = 0; 

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                matriz[i][j] = aleatorios[index];
                index++;
            }
        }
    }

    public static void imprimirMatriz() {
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }
    
    /*Ejercicio 5
    Dada la matriz anterior, realizar la suma de una columna o fila aleatoria (preguntar al usuario que desea sumar, si una fila o una columna, y cual de ellas).
    Extra: mostrar el resultado al final de la fila/columna correspondiente
    */
    
public static void menu() {
		
		
		boolean salir = false;
		
		while(!salir) {
		System.out.println("Ingrese una opcion: \n 1: Sumar una fila, \n 2: Sumar una columna, \n 3: : Salir");
		int opcion = read.nextInt();
		
		switch (opcion) {
		case 1: 
			sumarFila();
			break;
		case 2: 
			sumarColumna();
			break;
		
		case 3: 
			System.out.println("Vuelva prontos");
			salir = true;
			break;
		default:
			System.out.println("La opción ingresada no existe");
		}
	}
	}


public static void sumarFila() {
	
	int sumaFila = 0;
	
	System.out.println("Ingrese la fila que desea sumar del 1 al 3");
	int fila = read.nextInt();
	
    for (int i = 0; i < matriz[fila - 1].length; i++) {
        sumaFila += matriz[fila - 1][i];
    }
    
	System.out.println("La suma de la fila " + fila + " es de " + sumaFila);
	
}

public static void sumarColumna() {
    int sumaColumna = 0;
    
    System.out.println("Ingrese la columna que desea sumar del 1 al 3");
    int columna = read.nextInt();
    
    for (int i = 0; i < matriz.length; i++) {
        sumaColumna += matriz[i][columna - 1];
    }
    
    System.out.println("La suma de la columna " + columna + " es de " + sumaColumna);
}


    
}







