function solution(todo_list, finished) {
    return todo_list.filter((t, i) => !finished[i]);
}