import { User } from "./user"

export interface Program {
    id?: number
    name: string
    domainNames: string[ ]
    description: string
    startDate: string
    endDate: string
    coach?: User
    coachId?: number
    attendees?: User[ ]
}
