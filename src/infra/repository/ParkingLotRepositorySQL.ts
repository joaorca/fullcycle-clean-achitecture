import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import ParkingLot from "../../core/entity/ParkingLot";
import database from "../database/database";
import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";

export default class ParkingLotRepositorySQL implements ParkingLotRepository {

    async getParkingLot(code: string): Promise<ParkingLot> {
        const parkingLotData = await database.oneOrNone("SELECT *, (SELECT COUNT(*) FROM parked_car pc WHERE pc.code = pl.code)::INTEGER AS occupied_spaces FROM parking_lot pl WHERE code = $1", [code]);
        return ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, parkingLotData.occupied_spaces);
    }

    async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
        await database.none("INSERT INTO parked_car (code, plate, enter_date) VALUES ($1, $2, $3)", [code, plate, date]);
    }

}