import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
     _state : {
        profilePage: {
            posts: [
                {id: 1, message: "Привет, как дела?", likesCount: 12},
                {id: 2, message: "Пацаны какие сосиски вы предпочитаете?", likesCount: 115},
                {id: 3, message: "Виндовс переустановил?", likesCount: 5},
                {id: 4, message: "Привет, сходил сегодня в кино, съел просто офигенскую рульку", likesCount: 10},
                {id: 5, message: "Олег ты дурак?", likesCount: 30},
                {id: 6, message: "Сегодня будем играть в пабг?", likesCount: 30},
                {id: 7, message: "Завтра едим на рыбалку", likesCount: 30}
            ],
            newPostText: "Приветствие"

        },
        dialogsPage: {
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
        },
         sidebar:{ }
    },
    getState() {
         return this._state
    },
    _callSubscriber () {
         console.log('State')
    },
    subscribe  (observer) {
        this._callSubscriber = observer
    },
    dispatch(action){

        this._state.profilePage = profileReducer (this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer (this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}


export default store
window.store = store



