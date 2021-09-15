// interface SomeInterface {
//     type: "smth"
//     payload: "smthn"
// }

// type Action = SomeInterface | AnotherInterface

export type Action = {
    type: "set"
    payload: number
}
