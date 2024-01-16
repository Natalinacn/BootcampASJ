import java.security.PublicKey;
import java.util.ArrayList;
import java.util.DoubleSummaryStatistics;
import java.util.List;
import java.util.Scanner;

public class Funciones {

    private static Scanner read = new Scanner(System.in);
    private static Double saldoEnCuenta = 500.00;
    private static List<String> movimientos= new ArrayList<String>();
    
    
    
	public static void main(String[] args) {
		
			
		menu();

	}
	
	
	
	public static void menu() {
		
	
		boolean salir = false;
		
		while(!salir) {
		System.out.println("Ingrese una opcion: \n 1: Extraer, \n 2: Depositar, \n 3: Consultar Saldo, \n 4: Ver últimos movimientos, \n 5: Salir");
		int opcion = read.nextInt();
		
		switch (opcion) {
		case 1: 
			extraerDinero();
			break;
		case 2: 
			depositar();
			break;
		case 3: 
			consultarSaldo();
			break;
		case 4: 
			verUltimosMovimientos();
			break;
		case 5: 
			System.out.println("Vuelva prontos");
			salir = true;
			break;
		default:
			System.out.println("La opción ingresada no existe");
		}
	}
	}
	
	
	public static void extraerDinero() {
		System.out.println("Ingrese la cantidad de dinero a extraer: ");
		Double dineroAExtraer = read.nextDouble();
		
		if(dineroAExtraer <= saldoEnCuenta) {
			saldoEnCuenta -= dineroAExtraer;
			System.out.println("Ha extraído " + dineroAExtraer + ". Su saldo actual es de " + saldoEnCuenta);
			guardarMovimientos("Extracción", dineroAExtraer);
			
		}else {
			System.out.println("No posee saldo suficiente");
		}
	
		
	}
	
	public static void depositar() {
		
		System.out.println("Ingrese la cantidad de dinero a depositar");
		Double dineroADepositar = read.nextDouble();
		
		saldoEnCuenta += dineroADepositar;
		
		System.out.println("Ha depositado " + dineroADepositar + ". Su saldo actual es de " + saldoEnCuenta);
		guardarMovimientos("Depósito", dineroADepositar);
		
			
	}
	
	
	public static void consultarSaldo() {
		
		System.out.println("Su saldo actual es de " + saldoEnCuenta);
		
		
	}
	
	public static void verUltimosMovimientos() {
		
		System.out.println("Sus últimos movimientos son: " );
		

		for (String movimiento : movimientos) {
			System.out.println(movimiento);
			
		}

					
		
	}
	
	public static void guardarMovimientos(String tipoMovimiento, Double cantidad) {
		
		String movimiento = "Tipo: " + tipoMovimiento + ", Cantidad: $" + cantidad + ", Saldo restante: $" + saldoEnCuenta;
		movimientos.add(movimiento);

		
	}

}
