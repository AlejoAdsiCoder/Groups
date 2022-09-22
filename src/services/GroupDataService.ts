import http from "../http-common"
import createGroup from "../interfaces/createGroup.type";
import Group from "../interfaces/Group.type";

class GroupDataService {
    getAll() {
        return http.get<Array<Group>>("group/")
    }

    create(data: createGroup) {
        return http.post<createGroup>("/group/create", data);
    }
}

export default new GroupDataService();