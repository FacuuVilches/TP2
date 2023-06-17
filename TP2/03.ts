/* Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos

    • Si le asignamos más de 500000 disparamos una alarma
    • Si intentamos sacar más de lo que disponemos disparamos otra alarma
    • Si intentamos sacar más de 100000 disparamos otra alarma  */

class cuentaBancaria {
    saldo: number;
    constructor() {
        this.saldo = 0;
    }
    asignarFondos(monto: number): void {
        if (monto > 500000) {
            console.log("!ALARMA¡ Se asigno un monto mayor 500000")
        }
        this.saldo >= monto;
    }
    sacarFondos(monto: number): void{
        if (monto > this.saldo){
            console.log("!ALARMA¡ Se intento retirar mas de lo que disponemos")
        } else if (monto > 100000) {
            console.log("!ALARMA¡ Se intento retirar mas de 100000")
        } else {
            this.saldo <= monto;
        }
    }
}