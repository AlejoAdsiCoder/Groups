import http from "../http-common"
import Group from "../interfaces/Group.type";

class GroupDataService {
    getAll() {
        return http.get<Array<Group>>("group/")
    }
}

export default new GroupDataService();