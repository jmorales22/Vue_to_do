import { v4 as uuidv4} from 'uuid';

const CreateToDoObject = (text) => {
    const newToDoObject = {};
    newToDoObject.text = text;
    newToDoObject.id = uuidv4();
    newToDoObject.creationDate = new Date();
    newToDoObject.completed = false;
    newToDoObject.deleted = false;

    return newToDoObject;
}

export default CreateToDoObject;