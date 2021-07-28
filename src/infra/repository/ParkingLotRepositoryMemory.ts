import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {

    parkedLots = [
        {
            code: "shopping",
            capacity: 5,
            open_hour: 8,
            close_hour: 22
        },
    ];
    parkedCars = [];

    getParkingLot(code: string): Promise<ParkingLot> {
        const parkingLotData = this.parkedLots.find(parkingLot => parkingLot.code == code);
        const occupiedSpaces = this.parkedCars.length;
        const parkingLot = ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, occupiedSpaces);
        return Promise.resolve(parkingLot);
    }

    saveParkedCar(code: string, plate: string, date: Date): void {
        this.parkedCars.push(new ParkedCar(code, plate, date));
    }

}