package superheroes;

public class Main {

	public static void main(String[] args) {

	    
        Coleccion miColeccion = new Coleccion("Superheroes Favoritos");

        Figura figura1 = new Figura("001", 50000.0);
        figura1.getSuperheroe().setNombre("Súperman");
        figura1.getSuperheroe().setDescripcion("Colección premium");
        figura1.getDimension().setAlto(5.0);
        figura1.getDimension().setAncho(3.0);
        figura1.getDimension().setProfundidad(2.0);
        

        Figura figura2 = new Figura("002", 75000.0);
        figura2.getSuperheroe().setNombre("El Zorro");
        figura2.getSuperheroe().setDescripcion("Colección premium");
        figura2.getDimension().setAlto(4.0);
        figura2.getDimension().setAncho(6.0);
        figura2.getDimension().setProfundidad(3.0);

        miColeccion.aniadirFigura(figura1);
        miColeccion.aniadirFigura(figura2);

       
        System.out.println("Información de la colección:");
        System.out.println(miColeccion.toString());
        
        
        miColeccion.subirPrecio(15000.00, "001");

        
        System.out.println("Información de la colección después de subir el precio:");
        System.out.println(miColeccion.toString());

       
        miColeccion.getVolumenColeccion();
    }
		

	}


