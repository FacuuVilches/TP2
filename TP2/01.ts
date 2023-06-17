/* Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
    • Crear 5 autos en un array
    • Iterar el array y mostrar los autos por pantalla
    • Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms */

class Auto {
    _marca: string;
    _modelo: string;
    _potencia: number;
    _maxVelocidad: number;
    constructor(marca: string, modelo: string, potencia: number, maxVelocidad: number) {
        this._marca = marca;
        this._modelo = modelo;
        this._potencia = potencia;
        this._maxVelocidad = maxVelocidad;
    }
    
    _calcularTiempo(distancia: number): number {
    const velocidadOptima = this._maxVelocidad * 0.8;
    const tiempo = distancia / velocidadOptima;
    return tiempo;
  }
}
    
    // Creacion de 5 autos
    
const autos: Auto[] = [
    new Auto("Peugeot","Partner", 170, 200),
    new Auto("Renault","Fiesta", 140, 180),
    new Auto("Ford","Mustang", 300, 250),
    new Auto("Chevrolet","Camaro", 350, 280),
    new Auto("Honda","Civic", 130, 190),
];
    