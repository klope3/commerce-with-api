export const changeComponentField = (component, event) => {
    const { name: sender, value } = event.target;
    component.setState(prevState => ({
        ...prevState,
        [sender]: value,
    }));
}