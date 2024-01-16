import java.util.Scanner;

public class celular {

	private static Scanner read = new Scanner(System.in);
	
	private static String[][] matriz = new String[4][3];
	private static String[] digitos = {"1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz", "*", " ", "#"};
	
	
	public static void main(String[] args) {
		
		
	
		int indice = 0;
		
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				matriz[i][j] = digitos[indice];
				indice++;
			
			}
		}
			
//			for (int i = 0; i < matriz.length; i++) {
//				for (int j = 0; j < matriz[i].length; j++) {
//					
//					System.out.print(matriz[i][j] + " ");
//				}
//				System.out.println();
//				}
//			
			
			
			
			
			System.out.println("Ingrese el código ");
			String codigoString = read.nextLine();
			
			String [] letrasArray = codigoString.split("0");
			
			
			for (int i = 0; i < letrasArray.length; i++) {
				
				System.out.println(letrasArray[i]);
							
			}
			
			
			
			
			
		}
	

		
		
		
		
		
		
	    
	    
	    

	}

