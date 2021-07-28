import ParkingLotRepositorySQL from "../infra/repository/ParkingLotRepositorySQL";
import GetParkingLot from "../core/usecase/GetParkingLot";

export default class ParkingLotController {
    static async getParkingLot(params) {
        const parkingLotRepository = new ParkingLotRepositorySQL();
        const getParkingLot = new GetParkingLot(parkingLotRepository);
        return await getParkingLot.execute(params.code);
    }
}