export default function Userlist(tasks, action) {
    switch (action.type) {
      case 'added': {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  