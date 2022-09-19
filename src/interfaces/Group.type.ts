interface Roles {
    id: string,
    name: string,
    active: boolean
}

interface People {
    id: string,
    name: string,
    active: boolean
}

export default interface Group {
    index: number,
    id?: any | null,
    name: string,
    description: string,
    type: boolean,
    roles?: Roles[],
    people?: People[]
}
