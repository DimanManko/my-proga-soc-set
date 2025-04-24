

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState =  {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Anton Reva"},
        {id: 4, name: "Nikita"},
        {id: 5, name: "Kot"},
        {id: 6, name: "Anton"},
        {id: 7, name: "Artyr"}

    ],
        messages: [
        {id: 1, message: "Как дела?"},
        {id: 2, message: "Чем занят сегодня?"},
        {id: 3, message: "Что делаешь завтра?"},
        {id: 4, message: "Привет"},
        {id: 5, message: "Пока"},
        {id: 6, message: "Пока"},
        {id: 7, message: "Пока"}
    ],
        newMessageBody:''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state

        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 8, message: body})
            return state
        default:
            return state
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})
export const updateNewMessageBody = (body) =>
    ({type:UPDATE_NEW_MESSAGE_BODY, body: body})

