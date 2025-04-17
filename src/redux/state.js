

const ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
            ]
        }
    },
    getState() {
         return this._state
    },
    _callSubscriber () {
         console.log('State')
    },
    addPost  ()  {
        let newPost = {
            id: 8,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },
    updateNewPostText  (newText)  {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe  (observer) {
        this._callSubscriber = observer
    },
    dispatch(action){
         if (action.type === ADD_POST) {
             let newPost = {
                 id: 8,
                 message: this._state.profilePage.newPostText,
                 likesCount: 0
             }
             this._state.profilePage.posts.push(newPost)
             this._state.profilePage.newPostText = ""
             this._callSubscriber(this._state)
         } else if (action.type === UPDATE_NEW_POST_TEXT){
             this._state.profilePage.newPostText = action.newText
             this._callSubscriber(this._state)
         }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText: text})


export default store
window.store = store



