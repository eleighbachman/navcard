import data from '../data/data.json';
const buttons = Object.keys(data);
const icons = buttons.map((button, index) => {
  return ({name: buttons[index], icon: data[button]["icon"]});
})



export default function(state=icons, action) {
  switch (action.type) {
    default:
      return state;
  }
}
