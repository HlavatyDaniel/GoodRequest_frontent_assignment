import { InputOption } from "../../Types/types"

// interface SomeInterface {
//     type: "smth"
//     payload: "smthn"
// }

// type Action = SomeInterface | AnotherInterface

export type SelectAction = {
    type: "set"
    payload: number
}

export type InputAction = {
    type: "set"
    payload: InputOption
}
