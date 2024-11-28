import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export default function selectCourse(index) {
    return {
        type: SELECT_COURSE,
        index: index
    };
}

export default function unselectCourse(index) {
    return {
        type: UNSELECT_COURSE,
        index: index,
    };
}
