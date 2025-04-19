
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 8,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAction = () => ({type: ADD_POST})
export const updateNewPostTextAction = (text) => ({type:UPDATE_NEW_POST_TEXT, newText: text})
